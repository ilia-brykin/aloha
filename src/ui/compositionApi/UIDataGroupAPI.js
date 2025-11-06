import {
  computed,
  toRef,
} from "vue";

import {
  aOrderBy,
  extractTextFromHtml,
} from "../../utils/utils";

import {
  AKeyId,
} from "../../const/AKeys";
import {
  cloneDeep,
  forEach,
  get,
  isArray,
  isFunction,
  isNil,
  isString,
  values,
} from "lodash-es";

export default function UIDataGroupAPI(props, {
  data = computed(() => []),
}) {
  const keyGroup = toRef(props, "keyGroup");
  const keyGroupLabelCallback = toRef(props, "keyGroupLabelCallback");
  const searchTextInHtml = toRef(props, "searchTextInHtml");
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

  const groupsForLever = computed(() => {
    if (!hasKeyGroup.value) {
      return undefined;
    }
    const GROUPS_FOR_LEVER = {};

    forEach(keyGroupArray.value, (_, index) => {
      GROUPS_FOR_LEVER[index] = {};
    });

    forEach(data.value, item => {
      let groupParentKey = undefined;
      const allParentKeys = [];
      let allGroupKeys = "";
      forEach(keyGroupArray.value, (keyGroup, leverIndex) => {
        let group = get(item, keyGroup);
        if (isNil(group) || group === "") {
          group = "_not_grouped";
        }
        allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
        if (!GROUPS_FOR_LEVER[leverIndex][allGroupKeys]) {
          const GROUP_LABEL = isFunction(keyGroupLabelCallback.value) ?
            keyGroupLabelCallback.value({ group: group, item }) :
            group;
          GROUPS_FOR_LEVER[leverIndex][allGroupKeys] = {
            groupKey: group,
            groupLabel: GROUP_LABEL,
            groupParentKey: groupParentKey,
            allGroupKeys: allGroupKeys,
            allParentKeys: cloneDeep(allParentKeys),
            data: [],
            dataKeyByKeyId: {},
          };
          if (searchTextInHtml.value) {
            GROUPS_FOR_LEVER[leverIndex][allGroupKeys].groupLabelSearch = extractTextFromHtml(GROUP_LABEL);
          }
        }
        GROUPS_FOR_LEVER[leverIndex][allGroupKeys].data.push(item);
        GROUPS_FOR_LEVER[leverIndex][allGroupKeys].dataKeyByKeyId[item[AKeyId]] = item;
        groupParentKey = group;
        allParentKeys.push(group);
      });
    });

    forEach(GROUPS_FOR_LEVER, (level, levelIndex) => {
      GROUPS_FOR_LEVER[levelIndex] = values(level);
    });

    if (sortOrderGroup.value) {
      forEach(GROUPS_FOR_LEVER, (level, levelIndex) => {
        GROUPS_FOR_LEVER[levelIndex] = aOrderBy(level, ["groupLabel"], [sortOrderGroup.value]);
      });
    }

    return GROUPS_FOR_LEVER;
  });

  const dataGrouped = computed(() => {
    if (!hasKeyGroup.value) {
      return undefined;
    }
    const DATA_GROUPED = {};
    forEach(data.value, item => {
      let allGroupKeys = "";
      forEach(keyGroupArray.value, keyGroup => {
        let group = get(item, keyGroup);
        if (isNil(group) || group === "") {
          group = "_not_grouped";
          allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
          return false;
        }
        allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
      });
      DATA_GROUPED[allGroupKeys] = DATA_GROUPED[allGroupKeys] || [];
      DATA_GROUPED[allGroupKeys].push(item);
    });

    return DATA_GROUPED;
  });

  return {
    dataGrouped,
    groupsForLever,
    hasKeyGroup,
    keyGroupArray,
  };
}
