import {
  computed,
  toRef,
} from "vue";

import ATooltip from "../../ATooltip/ATooltip";

export default function ComponentLocalAPI(props) {
  const isTitleHtml = toRef(props, "isTitleHtml");
  const tag = toRef(props, "tag");

  const componentLocal = computed(() => {
    if (isTitleHtml.value) {
      return ATooltip;
    }
    return tag.value;
  });

  return {
    componentLocal,
  };
}
