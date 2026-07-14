import {
  computed,
  toRef,
} from "vue";

import ATooltip from "../../ATooltip/ATooltip";

export default function ComponentLocalAPI(props, {
  tagLocal = computed(() => ""),
}) {
  const isTitleHtml = toRef(props, "isTitleHtml");

  const componentLocal = computed(() => {
    if (isTitleHtml.value) {
      return ATooltip;
    }
    return tagLocal.value;
  });

  return {
    componentLocal,
  };
}
