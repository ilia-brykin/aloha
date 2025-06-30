import {
  computed,
  toRef,
} from "vue";

import {
  AKeyIndex,
} from "../../../../const/AKeys";

export default function AttributesAPI(props, {
  isActive = computed(() => false),
}) {
  const data = toRef(props, "data");
  const parentId = toRef(props, "parentId");

  const number = computed(() => {
    return data.value[AKeyIndex] + 1;
  });

  const id = computed(() => {
    return `${ parentId.value }_tab_${ number.value }`;
  });

  const ariaControls = computed(() => {
    return `${ parentId.value }_item_${ number.value }`;
  });

  const tabindex = computed(() => {
    return isActive.value ?
      "0" :
      "-1";
  });

  return {
    ariaControls,
    id,
    number,
    tabindex,
  };
}
