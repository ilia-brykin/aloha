import {
  computed,
  toRef,
} from "vue";

import {
  filter,
  isNil,
} from "lodash-es";


export default function DataAPI(props) {
  const levelIndex = toRef(props, "levelIndex");
  const groupsForLever = toRef(props, "groupsForLever");
  const groupParentKey = toRef(props, "groupParentKey");

  const isComponentVisible = computed(() => {
    return !!groupsForLever.value[levelIndex.value];
  });

  const currentGroups = computed(() => {
    const CURRENT_LEVEL = groupsForLever.value[levelIndex.value];
    if (isNil(groupParentKey.value)) {
      return CURRENT_LEVEL;
    }
    return filter(groupsForLever.value[levelIndex.value], ["groupParentKey", groupParentKey.value]);
  });

  return {
    currentGroups,
    isComponentVisible,
  };
}
