import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  get,
  isArray,
  isFunction,
  isNil,
  isString,
  orderBy, values,
} from "lodash-es";
import AKeyId from "../../const/AKeyId";

export default function UIDataGroupAPI(props, {
  data = computed(() => []),
}) {
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
      let allGroupKeys = "";
      forEach(keyGroupArray.value, (keyGroup, leverIndex) => {
        let group = get(item, keyGroup);
        if (isNil(group) || group === "") {
          group = "_not_grouped";
        }
        allGroupKeys += `${ allGroupKeys ? "_" : "" }${ group }`;
        if (!GROUPS_FOR_LEVER[leverIndex][allGroupKeys]) {
          GROUPS_FOR_LEVER[leverIndex][allGroupKeys] = {
            groupKey: group,
            groupLabel: isFunction(keyGroupLabelCallback.value) ? keyGroupLabelCallback.value({ group: group, item }) : group,
            groupParentKey: groupParentKey,
            allGroupKeys: allGroupKeys,
            data: [],
            dataKeyByKeyId: {},
          };
        }
        GROUPS_FOR_LEVER[leverIndex][allGroupKeys].data.push(item);
        GROUPS_FOR_LEVER[leverIndex][allGroupKeys].dataKeyByKeyId[item[AKeyId]] = item;
        groupParentKey = group;
      });
    });

    forEach(GROUPS_FOR_LEVER, (level, levelIndex) => {
      GROUPS_FOR_LEVER[levelIndex] = values(level);
    });

    if (sortOrderGroup.value) {
      forEach(GROUPS_FOR_LEVER, (level, levelIndex) => {
        GROUPS_FOR_LEVER[levelIndex] = orderBy(level, ["groupLabel"], [sortOrderGroup.value]);
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
