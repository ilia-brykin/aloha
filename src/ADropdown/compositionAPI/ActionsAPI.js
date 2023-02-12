import {
  computed,
  toRef,
} from "vue";

import {
  filterActionsHiddenAndDivider,
} from "../../utils/actions";

export default function ActionsAPI(props) {
  const actions = toRef(props, "actions");

  const actionsFiltered = computed(() => {
    return filterActionsHiddenAndDivider({
      actions: actions.value,
    });
  });

  const hasActions = computed(() => {
    return actionsFiltered.value.length > 0;
  });

  return {
    actionsFiltered,
    hasActions,
  };
}
