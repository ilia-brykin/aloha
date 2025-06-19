import {
  computed,
  toRef,
} from "vue";

import {
  ACarouselPluginOptions,
} from "../../../plugins/ACarouselPlugin";

export default function IconAPI(props) {
  const indicatorsType = toRef(props, "indicatorsType");

  const indicatorIcon = computed(() => {
    return ACarouselPluginOptions.icons[indicatorsType.value];
  });

  return {
    indicatorIcon,
  };
}
