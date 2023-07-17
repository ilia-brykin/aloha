import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import ATranslationAPI, {
  translation,
} from "./ATranslationAPI";
import UtilsAPI from "./UtilsAPI";

import {
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function TextAPI(props) {
  const extra = toRef(props, "extra");
  const text = toRef(props, "text");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const {
    isMobileWidth,
  } = AMobileAPI();

  const {
    translationChanges,
  } = ATranslationAPI();

  const textForCurrentDevice = computed(() => {
    if (isPlainObject(text.value)) {
      if (isMobileWidth.value) {
        return text.value.mobile;
      }
      return text.value.desktop;
    }
    return text.value;
  });

  const hasText = computed(() => {
    return !isUndefined(textForCurrentDevice.value);
  });

  const isTranslateText = computed(() => {
    return !(!hasText.value || !isPlaceholderTranslate(textForCurrentDevice.value));
  });

  const textLocal = computed(() => {
    if (!translationChanges.value) {
      return undefined;
    }
    if (isTranslateText.value) {
      return getTranslatedText({
        placeholder: textForCurrentDevice.value,
        translationObj: translation,
        extra: extra.value
      });
    }
    if (hasText.value) {
      return textForCurrentDevice.value;
    }
    return "";
  });

  return {
    hasText,
    isTranslateText,
    textForCurrentDevice,
    textLocal,
  };
}
