import {
  computed,
  toRef,
} from "vue";

import {
  cloneDeep,
  filter,
  forEach,
} from "lodash-es";

export default function TableActionsAPI(props) {
  const tableActions = toRef(props, "tableActions");

  const tableActionFiltered = computed(() => {
    const TABLE_ACTIONS = [];
    forEach(cloneDeep(tableActions.value), action => {
      if (action.isHidden) {
        return;
      }
      if (action.type === "dropdown") {
        if (!action.children || !action.children.length) {
          return;
        }
        const CHILDREN = filter(action.children, item => !item.isHidden);
        if (!CHILDREN.length) {
          return;
        }
        action.children = CHILDREN;
      }
      TABLE_ACTIONS.push(action);
    });

    return TABLE_ACTIONS;
  });

  return {
    tableActionFiltered,
  };
}
