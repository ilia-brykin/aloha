import {
  computed,
  toRef,
} from "vue";

import {
  CAROUSEL_ICONS,
} from "../../../utils/icons";
import {
  getComponentOption,
} from "../../../../plugins/AComponentsPlugin";

export default function IconAPI(props) {
  const indicatorsType = toRef(props, "indicatorsType");

  const indicatorIcon = computed(() => {
    return getComponentOption("ACarousel", "icons", {})[indicatorsType.value] ?? CAROUSEL_ICONS[indicatorsType.value];
  });

  return {
    indicatorIcon,
  };
}
