import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  filter,
  isFunction,
} from "lodash-es";

export default function RowActionsAPI(props) {
  const row = toRef(props, "row");
  const rowIndex = toRef(props, "rowIndex");
  const rowActions = inject("rowActions", []);

  const isRowActionVisible = ({ rowAction }) => {
    if (rowAction.isHidden) {
      return false;
    }
    if (isFunction(rowAction.isHiddenCallback)) {
      return !rowAction.isHiddenCallback({
        row: row.value,
        rowIndex: rowIndex.value,
      });
    }
    return true;
  };

  const rowActionsFiltered = computed(() => {
    console.log("rowActions.length", rowActions.length);
    return filter(rowActions, rowAction => isRowActionVisible({ rowAction }));
  });

  const isRowActionsDropdownVisible = computed(() => {
    return rowActionsFiltered.value.length > 0;
  });

  return {
    isRowActionsDropdownVisible,
    rowActionsFiltered,
  };
}
