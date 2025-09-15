import {
  computed,
  toRef,
} from "vue";

import {
  get,
} from "lodash-es";

export default function GroupAPI(props) {
  const data = toRef(props, "data");
  const keyGroup = toRef(props, "keyGroup");
  const keyGroupLabelCallback = toRef(props, "keyGroupLabelCallback");
  const mode = toRef(props, "mode");

  const groupLabel = computed(() => {
    if (!mode.value === "one_per_group" || !keyGroup.value) {
      return undefined;
    }
    const groupKey = get(data.value, keyGroup.value);
    if (!groupKey) {
      return undefined;
    }

    if (keyGroupLabelCallback.value) {
      return keyGroupLabelCallback.value({ item: data.value, inDropdown: false, group: groupKey });
    }

    return groupKey;
  });

  return {
    groupLabel,
  };
}
