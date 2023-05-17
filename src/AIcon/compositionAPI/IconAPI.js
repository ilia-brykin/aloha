import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import {
  iconPluginOptions,
} from "../../plugins/AIconPlugin";
import {
  isNil,
  isPlainObject,
} from "lodash-es";

export default function IconAPI(props) {
  const icon = toRef(props, "icon");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const iconCurrentDevice = computed(() => {
    if (isPlainObject(icon.value)) {
      if (isMobileWidth.value) {
        return icon.value.mobile;
      }
      return icon.value.desktop;
    }
    return icon.value;
  });

  const hasIcon = computed(() => {
    return !isNil(iconCurrentDevice.value) && iconCurrentDevice.value !== "";
  });

  const iconSvg = computed(() => {
    const ICON_SVG = iconPluginOptions.value.icons[iconCurrentDevice.value];
    if (ICON_SVG) {
      return ICON_SVG;
    }
    return iconPluginOptions.value.icons._NoImage;
  });

  return {
    hasIcon,
    iconSvg,
  };
}
