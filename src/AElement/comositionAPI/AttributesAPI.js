import {
  computed,
  toRef,
} from "vue";

const TYPES_BUTTON_MAP = {
  button: true,
  submit: true,
  reset: true,
};

export default function AttributesAPI(props, {
  isRouterLink = computed(() => false),
  tagLocal = computed(() => ""),
}) {
  const disabled = toRef(props, "disabled");
  const href = toRef(props, "href");
  const to = toRef(props, "to");
  const type = toRef(props, "type");

  const typeAttribut = computed(() => {
    if (tagLocal.value === "button" && TYPES_BUTTON_MAP[type.value]) {
      return type.value;
    }
    return undefined;
  });


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
    typeAttribut,
  };
}
