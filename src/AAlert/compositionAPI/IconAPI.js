import {
  computed,
  toRef,
} from "vue";

import {
  alertPluginOptions,
} from "../../plugins/AAlertPlugin";

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
    return alertPluginOptions.value.icons[type.value];
  });

  return {
    iconLocal,
  };
}
