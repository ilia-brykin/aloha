import {
  computed,
  toRef,
} from "vue";

import {
  aOrderBy,
} from "../../utils/utils";

import {
  filterActionsDivider,
  filterActionsHiddenAndDivider,
} from "../../utils/actions";
import {
  filter,
  forEach,
  get,
  isArray,
  isFunction,
  isNil,
  isString,
} from "lodash-es";

export default function ActionsAPI(props) {
  const actions = toRef(props, "actions");
  const keyGroup = toRef(props, "keyGroup");
  const keyGroupLabelCallback = toRef(props, "keyGroupLabelCallback");
  const sortOrderGroup = toRef(props, "sortOrderGroup");

  const keyGroupArray = computed(() => {
    if (isArray(keyGroup.value)) {
      return keyGroup.value;
    }
    if (isString(keyGroup.value)) {
      return [keyGroup.value];
    }
    return [];
  });

  const hasKeyGroup = computed(() => {
    return keyGroupArray.value.length > 0;
  });

  const actionsVisible = computed(() => {
    return filter(actions.value, action => !action.isHidden);
  });

  const getGroupedActions = ({
    actionsLocal = [],
    levelIndex = 0,
    parentGroups = [],
  }) => {
    if (levelIndex >= keyGroupArray.value.length) {
      return filterActionsDivider({
        actions: actionsLocal,
      });
    }

    const ACTIONS_WITHOUT_GROUP = [];
    const GROUPS = {};

    forEach(actionsLocal, action => {
      const GROUP_KEY = get(action, keyGroupArray.value[levelIndex]);
      if (isNil(GROUP_KEY) || GROUP_KEY === "") {
        ACTIONS_WITHOUT_GROUP.push(action);
        return;
      }

      if (!GROUPS[GROUP_KEY]) {
        GROUPS[GROUP_KEY] = {
          groupKey: GROUP_KEY,
          item: action,
          actions: [],
        };
      }
      GROUPS[GROUP_KEY].actions.push(action);
    });

    const ACTIONS_GROUPED = [];

    if (ACTIONS_WITHOUT_GROUP.length) {
      ACTIONS_GROUPED.push(...getGroupedActions({
        actionsLocal: ACTIONS_WITHOUT_GROUP,
        levelIndex: levelIndex + 1,
        parentGroups,
      }));
    }

    let GROUPS_ARRAY = Object.values(GROUPS).map(group => {
      const CHILDREN = getGroupedActions({
        actionsLocal: group.actions,
        levelIndex: levelIndex + 1,
        parentGroups: [...parentGroups, group.groupKey],
      });

      if (!CHILDREN.length) {
        return undefined;
      }

      return {
        __isDropdownGroup: true,
        children: CHILDREN,
        groupKey: group.groupKey,
        groupLabel: isFunction(keyGroupLabelCallback.value) ?
          keyGroupLabelCallback.value({
            group: group.groupKey,
            item: group.item,
            inDropdown: true,
            levelIndex,
            parentGroups,
          }) :
          group.groupKey,
      };
    }).filter(Boolean);

    if (sortOrderGroup.value) {
      GROUPS_ARRAY = aOrderBy(GROUPS_ARRAY, ["groupLabel"], [sortOrderGroup.value]);
    }

    ACTIONS_GROUPED.push(...GROUPS_ARRAY);

    return ACTIONS_GROUPED;
  };

  const actionsFiltered = computed(() => {
    if (hasKeyGroup.value) {
      return getGroupedActions({
        actionsLocal: actionsVisible.value,
      });
    }

    return filterActionsHiddenAndDivider({
      actions: actionsVisible.value,
    });
  });

  const hasActions = computed(() => {
    return actionsFiltered.value.length > 0;
  });

  return {
    actionsFiltered,
    hasActions,
    hasKeyGroup,
    keyGroupArray,
  };
}
