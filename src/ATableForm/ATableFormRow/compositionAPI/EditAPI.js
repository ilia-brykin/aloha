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
  const changeModel = toRef(props, "changeModel");
  const onCancelEditRow = toRef(props, "onCancelEditRow");
  const row = toRef(props, "row");
  const rows = toRef(props, "rows");
  const rowIndex = toRef(props, "rowIndex");
  const saveRow = toRef(props, "saveRow");

  const isSaving = ref(false);
  const modelLocal = ref(undefined);

  const updateModelLocal = ({
    column,
    columnId,
    item,
    model,
  }) => {
    if (!modelLocal.value) {
      modelLocal.value = cloneDeep(row.value) || {};
    }
    let changedModel;

    if (changeModel.value) {
      changedModel = changeModel.value({
        modelAll: modelLocal.value,
        row: row.value,
        column,
        model: model,
        item,
      });
    }
    if (changedModel?.model) {
      modelLocal.value = cloneDeep(changedModel.model);
    } else {
      set(modelLocal.value, columnId, model);
    }
    unset(errorsLocal.value, columnId);
  };

  const cancelEditRow = ({ trigger, id } = {}) => {
    onCancelEditRow.value({
      row: row.value,
      rowIndex: rowIndex.value,
      trigger,
      id,
    });
  };

  const saveEditRow = async({ id } = {}) => {
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

      cancelEditRow({ trigger: "save", id });
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
