import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import {
  aLast,
} from "../../utils/utilsArray";
import {
  concatTwoStringsWithSpace,
  filterActionsHiddenAndDivider,
} from "../../utils/actions";
import {
  cloneDeep,
  forEach,
} from "lodash-es";

export default function ActionsAPI(props) {
  const actions = toRef(props, "actions");
  const indexFirstDropdownAction = toRef(props, "indexFirstDropdownAction");
  const indexFirstDropdownActionMobile = toRef(props, "indexFirstDropdownActionMobile");
  const minDropdownActions = toRef(props, "minDropdownActions");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const actionsAllFiltered = computed(() => {
    return filterActionsHiddenAndDivider({
      actions: actions.value,
    });
  });

  const actionsAllWithClassesFiltered = computed(() => {
    const ACTIONS = cloneDeep(actionsAllFiltered.value);
    forEach(ACTIONS, action => {
      // only for inline buttons
      action.classButton = concatTwoStringsWithSpace({
        class1: action.classButton,
        class2: action.class,
      });

      // only for dropdown
      action.class = concatTwoStringsWithSpace({
        class1: action.classDropdown,
        class2: action.class,
      });
      delete action.classDropdown;
      if (action.classExtra) {
        action.class = concatTwoStringsWithSpace({
          class1: action.classExtra,
          class2: action.class,
        });
      }
    });

    return ACTIONS;
  });

  const currentIndexFirstDropdownAction = computed(() => {
    return isMobileWidth.value ? indexFirstDropdownActionMobile.value : indexFirstDropdownAction.value;
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
    const ACTIONS_ALL = cloneDeep(actionsAllWithClassesFiltered.value);

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
          aLast(ACTIONS_GROUPED.buttons).children.push(action);
        }
        isPreviousActionDivider = false;
      } else {
        isPreviousActionDivider = true;
      }
    });

    return ACTIONS_GROUPED;
  });

  const hasDropdownActions = computed(() => {
    return actionsGrouped.value.dropdown.length > 0;
  });

  const hasActionsAllFiltered = computed(() => {
    return actionsAllWithClassesFiltered.value.length > 0;
  });

  return {
    actionsAllWithClassesFiltered,
    actionsGrouped,
    hasActionsAllFiltered,
    hasDropdownActions,
  };
}

