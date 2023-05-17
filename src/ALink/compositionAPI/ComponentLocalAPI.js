import {
  computed,
  resolveComponent,
  toRef,
} from "vue";

import ATooltip from "../../ATooltip/ATooltip";

export default function ComponentLocalAPI(props) {
  const disabled = toRef(props, "disabled");
  const isTitleHtml = toRef(props, "isTitleHtml");
  const to = toRef(props, "to");

  const isRouterLink = computed(() => {
    return !!to.value && !disabled.value;
  });

  const componentLocal = computed(() => {
    if (isTitleHtml.value) {
      return ATooltip;
    }
    if (isRouterLink.value) {
      return resolveComponent("RouterLink");
    }
    return "a";
  });

  const tagLocal = computed(() => {
    return isRouterLink.value ? "RouterLink" : "a";
  });

  return {
    componentLocal,
    isRouterLink,
    tagLocal,
  };
}
