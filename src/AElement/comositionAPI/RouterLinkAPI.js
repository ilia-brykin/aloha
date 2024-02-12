import {
  computed,
  toRef,
} from "vue";

export default function RouterLinkAPI(props) {
  const disabled = toRef(props, "disabled");
  const to = toRef(props, "to");
  const type = toRef(props, "type");

  const isRouterLink = computed(() => {
    return type.value === "link" &&
      !!to.value &&
      !disabled.value;
  });

  return {
    isRouterLink,
  };
}
