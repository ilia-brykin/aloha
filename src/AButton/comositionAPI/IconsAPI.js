import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import {
  isPlainObject,
} from "lodash-es";

export default function IconsAPI(props) {
  const iconLeft = toRef(props, "iconLeft");
  const iconRight = toRef(props, "iconRight");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const iconLeftCurrentDevice = computed(() => {
    if (isPlainObject(iconLeft.value)) {
      if (isMobileWidth.value) {
        return iconLeft.value.mobile;
      }
      return iconLeft.value.desktop;
    }
    return iconLeft.value;
  });

  const iconRightCurrentDevice = computed(() => {
    if (isPlainObject(iconRight.value)) {
      if (isMobileWidth.value) {
        return iconRight.value.mobile;
      }
      return iconRight.value.desktop;
    }
    return iconRight.value;
  });

  return {
    iconLeftCurrentDevice,
    iconRightCurrentDevice,
  };
}
