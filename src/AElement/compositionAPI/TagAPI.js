import {
  computed,
  resolveComponent,
  toRef,
} from "vue";

const TYPES_TAGS_MAP = {
  button: "button",
  submit: "button",
  reset: "button",
  link: "a",
  text: "span",
};

export default function TagAPI(props, {
  isRouterLink = computed(() => false),
}) {
  const tag = toRef(props, "tag");
  const type = toRef(props, "type");

  const tagLocal = computed(() => {
    if (tag.value) {
      return tag.value;
    }
    if (isRouterLink.value) {
      return resolveComponent("RouterLink");
    }
    return TYPES_TAGS_MAP[type.value] || "span";
  });

  return {
    tagLocal,
  };
}
