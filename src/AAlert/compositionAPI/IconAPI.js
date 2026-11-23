import {
  computed,
  toRef,
} from "vue";

import {
  ALERT_ICONS,
} from "../utils/icons";
import {
  getComponentOption,
} from "../../plugins/AComponentsPlugin";

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
    return getComponentOption("AAlert", "icons", {})[type.value] ?? ALERT_ICONS[type.value];
  });

  return {
    iconLocal,
  };
}
