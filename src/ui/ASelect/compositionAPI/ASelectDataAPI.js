import {
  computed,
  toRef,
} from "vue";

import AKeyLabel from "../../const/AKeyLabel";
import {
  forEach, get, isFunction, isNil,
  orderBy,
} from "lodash-es";

export default function ASelectDataAPI(props, {
  dataLocal = computed(() => []),
}) {
  const sortOrder = toRef(props, "sortOrder");
  const dataSort = computed(() => {
    if (sortOrder.value) {
      return orderBy(dataLocal.value, [AKeyLabel], [sortOrder.value]);
    }
    return dataLocal.value;
  });

  const keyGroup = toRef(props, "keyGroup");
  const keyGroupCallback = toRef(props, "keyGroupCallback");
  const sortOrderGroup = toRef(props, "sortOrderGroup");

  const dataGrouped = computed(() => {
    const DATA_GROUPED = {
      _not_grouped: [],
    };
    let groups = [];
    if (keyGroup.value) {
      forEach(dataSort.value, item => {
        const GROUP = get(item, keyGroup.value);
        if (isNil(GROUP)) {
          DATA_GROUPED._not_grouped.push(item);
          return;
        } else if (!DATA_GROUPED[GROUP]) {
          DATA_GROUPED[GROUP] = [];
          groups.push({
            groupKey: GROUP,
            groupLabel: isFunction(keyGroupCallback.value) ? keyGroupCallback.value({ group: GROUP }) : GROUP,
          });
        }
        DATA_GROUPED[GROUP].push(item);
      });
      if (sortOrderGroup.value) {
        groups = orderBy(groups, ["groupLabel"], [sortOrderGroup.value]);
      }
    }
    return {
      dataKeyByGroup: DATA_GROUPED,
      groups,
    };
  });

  const dataFiltered = computed(() => {
    // TODO:
    return dataSort.value;
  });

  return {
    dataGrouped,
    dataFiltered,
  };
}
