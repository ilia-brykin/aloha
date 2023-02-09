import {
  computed,
  inject,
  toRef,
} from "vue";

import {
  filter,
  forEach,
  isFunction,
  last,
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
    const ROW_ACTIONS_FILTERED = filter(rowActions.value, rowAction => isRowActionVisible({ rowAction }));

    const ROW_ACTIONS_DIVIDER_FILTERED = [];
    forEach(ROW_ACTIONS_FILTERED, action => {
      if (!action.isDivider ||
        (ROW_ACTIONS_DIVIDER_FILTERED.length > 0 &&
          !last(ROW_ACTIONS_DIVIDER_FILTERED).isDivider)) {
        ROW_ACTIONS_DIVIDER_FILTERED.push(action);
      }
    });

    const LAST_ACTION = last(ROW_ACTIONS_DIVIDER_FILTERED);
    if (LAST_ACTION && LAST_ACTION.isDivider) {
      ROW_ACTIONS_DIVIDER_FILTERED.pop();
    }

    return ROW_ACTIONS_DIVIDER_FILTERED;
  });

  const isRowActionsDropdownVisible = computed(() => {
    return !isFooter.value && rowActionsFiltered.value.length > 0;
  });

  return {
    isRowActionsDropdownVisible,
    rowActionsFiltered,
  };
}
