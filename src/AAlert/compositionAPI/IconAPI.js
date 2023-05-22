import {
  computed,
  toRef,
} from "vue";

import {
  alertPluginOptions,
} from "../../plugins/AAlertPlugin";

export default function IconAPI(props) {
  const icon = toRef(props, "icon");
  const showIcon = toRef(props, "showIcon");
  const type = toRef(props, "type");

  const iconLocal = computed(() => {
    if (!showIcon.value) {
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
