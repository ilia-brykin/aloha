import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  isRowActionVisible,
} from "../utils/utils";

import {
  isUndefined,
} from "lodash-es";

export default function ColumnActionAPI(props, {
  columnActionsWidthDefaultsRemLocal = computed(() => ({})),
  columnActionsWidthMinRemLocal = () => undefined,
  columnActionsWidthRemLocal = () => undefined,
  isMobile = computed(() => false),
  rowsLocal = ref([]),
}) {
  const columnActionsView = toRef(props, "columnActionsView");
  const rowActions = toRef(props, "rowActions");

  const shouldChangeActionWidth = computed(() => {
    return columnActionsView.value === "onePlusDropdown";
  });

  const hasMinOneActionInRows = computed(() => {
    let hasAction = false;
    outerLoop: for (let rowIndex = 0; rowIndex < rowsLocal.value.length; rowIndex++) {
      const row = rowsLocal.value[rowIndex];
      for (let actionIndex = 0; actionIndex < rowActions.value.length; actionIndex++) {
        const rowAction = rowActions.value[actionIndex];
        if (isRowActionVisible({
          rowAction,
          row,
          rowIndex,
        }) && rowAction.type !== "divider") {
          hasAction = true;
          break outerLoop;
        }
      }
    }

    return hasAction;
  });

  const isColumnActionWide = computed(() => {
    if (!rowActions.value.length || !shouldChangeActionWidth.value) {
      return false;
    }
    return hasMinOneActionInRows.value;
  });

  const columnActionsWidthLocal = computed(() => {
    if (!isUndefined(columnActionsWidthRemLocal.value)) {
      return columnActionsWidthRemLocal.value;
    }

    if (!isColumnActionWide.value) {
      return columnActionsWidthDefaultsRemLocal.value.default;
    }

    if (columnActionsView.value === "onePlusDropdown") {
      return columnActionsWidthDefaultsRemLocal.value.onePlusDropdown;
    }

    return columnActionsWidthDefaultsRemLocal.value.default;
  });

  const columnActionsWidthMinLocal = computed(() => {
    if (!isUndefined(columnActionsWidthMinRemLocal.value)) {
      return columnActionsWidthMinRemLocal.value;
    }

    if (!isColumnActionWide.value) {
      return columnActionsWidthDefaultsRemLocal.value.min;
    }

    if (columnActionsView.value === "onePlusDropdown") {
      return columnActionsWidthDefaultsRemLocal.value.onePlusDropdownMin;
    }

    return columnActionsWidthDefaultsRemLocal.value.min;
  });

  const columnActionsBtnGroupMaxWidthStyle = computed(() => {
    const MAX_WIDTH = columnActionsWidthDefaultsRemLocal.value.btnGroupMaxWidth;
    if (!isMobile.value &&
      columnActionsView.value !== "dropdown" &&
      !isUndefined(MAX_WIDTH)) {
      return `max-width: ${ MAX_WIDTH }px`;
    }

    return undefined;
  });

  return {
    columnActionsBtnGroupMaxWidthStyle,
    columnActionsWidthLocal,
    columnActionsWidthMinLocal,
    isColumnActionWide,
  };
}
