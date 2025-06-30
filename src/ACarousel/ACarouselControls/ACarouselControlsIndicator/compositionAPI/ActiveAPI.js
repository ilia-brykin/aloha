import {
  computed,
  toRef,
} from "vue";

import {
  AKeyChildren,
  AKeyId,
} from "../../../../const/AKeys";
import {
  some,
} from "lodash-es";

export default function ActiveAPI(props) {
  const activeId = toRef(props, "activeId");
  const data = toRef(props, "data");

  const isActive = computed(() => {
    return data.value[AKeyId] === activeId.value;
  });

  const isActiveInChildren = computed(() => {
    if (!data.value?.[AKeyChildren].length) {
      return false;
    }
    return some(data.value[AKeyChildren], [AKeyId, activeId.value]);
  });

  return {
    isActive,
    isActiveInChildren,
  };
}
