import {
  computed,
  toRef,
} from "vue";

import {
  get,
  isFunction,
} from "lodash-es";

export default function HiddenAPI(props) {
  const actionsHideCallback = toRef(props, "actionsHideCallback");
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");

  const isDeleteHidden = computed(() => {
    const deleteHideCallback = get(actionsHideCallback.value, "delete");

    if (isFunction(deleteHideCallback)) {
      return deleteHideCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }

    return false;
  });

  const isEditHidden = computed(() => {
    const editHideCallback = get(actionsHideCallback.value, "edit");

    if (isFunction(editHideCallback)) {
      return editHideCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }

    return false;
  });

  return {
    isDeleteHidden,
    isEditHidden,
  };
}
