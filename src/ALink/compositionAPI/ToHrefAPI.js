import {
  computed,
  toRef,
} from "vue";

export default function ToHrefAPI(props, {
  isRouterLink = computed(() => false),
}) {
  const disabled = toRef(props, "disabled");
  const href = toRef(props, "href");
  const to = toRef(props, "to");

  const toHrefAttributes = computed(() => {
    if (isRouterLink.value) {
      return {
        to: to.value,
      };
    }
    if (disabled.value) {
      return {};
    }
    return {
      href: href.value,
    };
  });

  return {
    toHrefAttributes,
  };
}
