import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

import {
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function TextAPI(props) {
  const text = toRef(props, "text");
  const textScreenReader = toRef(props, "textScreenReader");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const textForCurrentDevice = computed(() => {
    if (isPlainObject(text.value)) {
      if (isMobileWidth.value) {
        return text.value.mobile;
      }
      return text.value.desktop;
    }
    return text.value;
  });

  const textScreenReaderForCurrentDevice = computed(() => {
    if (isPlainObject(textScreenReader.value)) {
      if (isMobileWidth.value) {
        return textScreenReader.value.mobile;
      }
      return textScreenReader.value.desktop;
    }
    return textScreenReader.value;
  });

  const isTextVisible = computed(() => {
    return !isUndefined(textForCurrentDevice.value);
  });

  const isTextScreenReaderVisible = computed(() => {
    return !isUndefined(textScreenReaderForCurrentDevice.value);
  });

  return {
    isTextScreenReaderVisible,
    isTextVisible,
    textForCurrentDevice,
    textScreenReaderForCurrentDevice,
  };
}
