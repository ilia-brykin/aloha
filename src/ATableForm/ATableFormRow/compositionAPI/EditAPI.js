import {
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
  set,
  unset,
} from "lodash-es";

export default function EditAPI(props, {
  errorsLocal = ref(undefined),
}) {
  const onCancelEditRow = toRef(props, "onCancelEditRow");
  const row = toRef(props, "row");
  const rows = toRef(props, "rows");
  const rowIndex = toRef(props, "rowIndex");
  const saveRow = toRef(props, "saveRow");

  const isSaving = ref(false);
  const modelLocal = ref(undefined);

  const updateModelLocal = ({ columnId, model }) => {
    if (!modelLocal.value) {
      modelLocal.value = cloneDeep(row.value) || {};
    }

    set(modelLocal.value, columnId, model);
    unset(errorsLocal.value, columnId);
  };

  const cancelEditRow = () => {
    onCancelEditRow.value({
      row: row.value,
      rowIndex: rowIndex.value,
    });
  };

  const saveEditRow = async() => {
    if (isSaving.value) {
      return;
    }

    errorsLocal.value = {};
    isSaving.value = true;

    try {
      const result = await saveRow.value({
        model: cloneDeep(modelLocal.value),
        row: row.value,
        rowIndex: rowIndex.value,
        rows: rows.value,
      });

      if (result?.errors) {
        errorsLocal.value = cloneDeep(result.errors);
        return;
      }

      cancelEditRow();
    } catch (error) {
      errorsLocal.value = error;
    } finally {
      isSaving.value = false;
    }
  };

  return {
    cancelEditRow,
    isSaving,
    modelLocal,
    saveEditRow,
    updateModelLocal,
  };
}
