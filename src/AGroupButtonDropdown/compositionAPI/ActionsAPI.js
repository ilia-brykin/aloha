import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import {
  filterActionsHiddenAndDivider,
} from "../../utils/actions";
import {
  cloneDeep,
  forEach, last,
} from "lodash-es";

export default function ActionsAPI(props) {
  const actions = toRef(props, "actions");
  const indexFirstDropdownAction = toRef(props, "indexFirstDropdownAction");
  const indexFirstDropdownActionMobile = toRef(props, "indexFirstDropdownActionMobile");
  const minDropdownActions = toRef(props, "minDropdownActions");

  const {
    isMobile,
  } = AMobileAPI();

  const actionsAllFiltered = computed(() => {
    return filterActionsHiddenAndDivider({
      actions: actions.value,
    });
  });

  const currentIndexFirstDropdownAction = computed(() => {
    return isMobile.value ? indexFirstDropdownActionMobile.value : indexFirstDropdownAction.value;
  });

  const hasMoreEqualActionsThenParameter = ({ actions = [], minCountActions = 0 }) => {
    let countActions = 0;
    forEach(actions, action => {
      if (countActions >= minCountActions) {
        return false;
      }
      if (action.type !== "divider") {
        countActions++;
      }
    });

    return countActions >= minCountActions;
  };

  const actionsGrouped = computed(() => {
    const ACTIONS_ALL = cloneDeep(actionsAllFiltered.value);

    const ACTIONS_GROUPED = {
      buttons: [],
      dropdown: [],
    };
    let actionNotDividerIndex = 0;
    let isPreviousActionDivider = true;
    forEach(ACTIONS_ALL, (action, actionIndex) => {
      if (actionNotDividerIndex === currentIndexFirstDropdownAction.value) {
        const ACTION_DROPDOWN = ACTIONS_ALL.slice(actionIndex, ACTIONS_ALL.length);

        if (hasMoreEqualActionsThenParameter({
          actions: ACTION_DROPDOWN,
          minCountActions: minDropdownActions.value,
        })) {
          ACTIONS_GROUPED.dropdown = ACTIONS_ALL.splice(actionIndex, ACTIONS_ALL.length);
          if (currentIndexFirstDropdownAction.value === 0) {
            ACTIONS_GROUPED.buttons.push({
              type: "group",
              children: [],
            });
          }
          return false;
        }
      }

      if (action.type !== "divider") {
        action.actionNotDividerIndex = actionNotDividerIndex;
        actionNotDividerIndex++;
        if (isPreviousActionDivider) {
          ACTIONS_GROUPED.buttons.push({
            type: "group",
            children: [action],
          });
        } else {
          last(ACTIONS_GROUPED.buttons).children.push(action);
        }
      } else {
        isPreviousActionDivider = true;
      }
    });

    return ACTIONS_GROUPED;
  });

  const hasDropdownActions = computed(() => {
    return actionsGrouped.value.dropdown.length > 0;
  });

  return {
    actionsAllFiltered,
    actionsGrouped,
    hasDropdownActions,
  };
}
