import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isFunction,
} from "lodash-es";

export default function DisabledAPI(props) {
  const actionsDisabledCallback = toRef(props, "actionsDisabledCallback");
  const hasActiveEditRow = toRef(props, "hasActiveEditRow");
  const isActiveEditMode = toRef(props, "isActiveEditMode");
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");

  const isActionsDisabled = computed(() => {
    return hasActiveEditRow.value && !isActiveEditMode.value;
  });

  const isDeleteDisabled = computed(() => {
    if (isActionsDisabled.value) {
      return true;
    }

    const deleteDisabledCallback = get(actionsDisabledCallback.value, "delete");

    if (isFunction(deleteDisabledCallback)) {
      return deleteDisabledCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }

    return false;
  });

  const isEditDisabled = computed(() => {
    if (isActionsDisabled.value) {
      return true;
    }

    const editDisabledCallback = get(actionsDisabledCallback.value, "edit");

    if (isFunction(editDisabledCallback)) {
      return editDisabledCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }

    return false;
  });

  return {
    isDeleteDisabled,
    isEditDisabled,
  };
}
