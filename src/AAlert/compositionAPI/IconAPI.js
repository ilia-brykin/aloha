import {
  computed,
  toRef,
} from "vue";

const ICONS_TYPE_MAPPING = {
  success: "AlertSuccess",
  danger: "AlertDanger",
  info: "AlertInfo",
  warning: "AlertWarning",
};

export default function IconAPI(props) {
  const icon = toRef(props, "icon");
  const hasIcon = toRef(props, "hasIcon");
  const type = toRef(props, "type");

  const iconLocal = computed(() => {
    if (!hasIcon.value) {
      return undefined;
    }
    if (icon.value) {
      return icon.value;
    }
    return ICONS_TYPE_MAPPING[type.value];
  });

  return {
    iconLocal,
  };
}
