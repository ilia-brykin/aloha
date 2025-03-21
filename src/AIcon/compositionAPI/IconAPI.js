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
  isString,
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

  const isIconSvg = computed(() => {
    const ICON = iconCurrentDevice.value;

    return !!(isString(ICON) &&
      ICON.trim().startsWith("<svg"));
  });

  const iconSvg = computed(() => {
    if (isIconSvg.value) {
      return iconCurrentDevice.value;
    }

    const ICON_SVG = iconPluginOptions.value.icons[iconCurrentDevice.value];
    if (ICON_SVG) {
      return ICON_SVG;
    }

    return iconPluginOptions.value.icons._NoImage;
  });

  return {
    hasIcon,
    iconSvg,
    isIconSvg,
  };
}
