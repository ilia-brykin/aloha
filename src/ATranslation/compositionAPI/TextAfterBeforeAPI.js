import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import {
  isNil,
  isPlainObject,
} from "lodash-es";

export default function TextAfterBeforeAPI(props) {
  const textAfter = toRef(props, "textAfter");
  const textBefore = toRef(props, "textBefore");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const textAfterForCurrentDevice = computed(() => {
    if (isPlainObject(textAfter.value)) {
      if (isMobileWidth.value) {
        return textAfter.value.mobile;
      }
      return textAfter.value.desktop;
    }
    return textAfter.value;
  });

  const textBeforeForCurrentDevice = computed(() => {
    if (isPlainObject(textBefore.value)) {
      if (isMobileWidth.value) {
        return textBefore.value.mobile;
      }
      return textBefore.value.desktop;
    }
    return textBefore.value;
  });

  const hasTextAfter = computed(() => {
    return !isNil(textAfterForCurrentDevice.value) && textAfterForCurrentDevice.value !== "";
  });

  const hasTextBefore = computed(() => {
    return !isNil(textBeforeForCurrentDevice.value) && textBeforeForCurrentDevice.value !== "";
  });

  return {
    hasTextAfter,
    hasTextBefore,
    textAfterForCurrentDevice,
    textBeforeForCurrentDevice,
  };
}
