import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  get,
  isFunction,
} from "lodash-es";

export default function CheckboxAPI(props, { emit }) {
  const areAllRowsSelected = toRef(props, "areAllRowsSelected");
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");
  const selectedRowsIndexes = toRef(props, "selectedRowsIndexes");

  const currentMultipleActions = inject("currentMultipleActions");
  const isMultipleActionsActive = inject("isMultipleActionsActive");

  const isRowSelected = computed(() => {
    return !!selectedRowsIndexes.value[rowIndex.value] || areAllRowsSelected.value;
  });

  const isCheckboxDisabled = computed(() => {
    if (isMultipleActionsActive.value) {
      if (isFunction(get(currentMultipleActions.value, "isHiddenCallback"))) {
        return currentMultipleActions.value.isHiddenCallback({
          row: row.value,
          rowIndex: rowIndex.value,
        });
      }
      if (areAllRowsSelected.value) {
        return true;
      }
    }
    return false;
  });

  const toggleCheckbox = () => {
    if (isCheckboxDisabled.value) {
      return;
    }
    emit("setSelectedRowsIndexes", { rowIndex: rowIndex.value });
  };

  return {
    isCheckboxDisabled,
    isRowSelected,
    toggleCheckbox,
  };
}
