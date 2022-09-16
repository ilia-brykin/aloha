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
  const isFooter = toRef(props, "isFooter");
  const rowActions = inject("rowActions");


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
    return filter(rowActions.value, rowAction => isRowActionVisible({ rowAction }));
  });

  const isRowActionsDropdownVisible = computed(() => {
    return !isFooter.value && rowActionsFiltered.value.length > 0;
  });

  return {
    isRowActionsDropdownVisible,
    rowActionsFiltered,
  };
}
