import {
  computed,
  toRef,
} from "vue";

import {
  forEach,
  get,
  isNil,
} from "lodash-es";

export default function GroupAPI(props) {
  const panelItems = toRef(props, "panelItems");
  const keyGroup = toRef(props, "keyGroup");

  const itemsGroup = computed(() => {
    const WITHOUT_GROUP = [];
    const WITH_GROUP = {};
    forEach(panelItems.value, item => {
      const GROUP = get(item, keyGroup.value);
      if (isNil(GROUP)) {
        WITHOUT_GROUP.push(item);
      } else {
        WITH_GROUP[GROUP] = WITH_GROUP[GROUP] || [];
        WITH_GROUP[GROUP].push(item);
      }
    });

    return {
      withoutGroup: WITHOUT_GROUP,
      withGroup: WITH_GROUP,
    };
  });

  const isItemsWithoutGroup = computed(() => {
    return itemsGroup.value.withoutGroup.length > 0;
  });

  return {
    isItemsWithoutGroup,
    itemsGroup,
  };
}
