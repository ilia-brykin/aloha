import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import ATranslationAPI from "./ATranslationAPI";
import UtilsAPI from "./UtilsAPI";

import {
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function PlaceholderAPI(props) {
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const extra = toRef(props, "extra");
  const placeholder = toRef(props, "placeholder");

  const {
    translationChanges,
  } = ATranslationAPI();

  const {
    isPlaceholderTranslate,
    getTranslatedText,
    getTranslationAttributes,
  } = UtilsAPI();

  const {
    isMobileWidth,
  } = AMobileAPI();

  const placeholderForCurrentDevice = computed(() => {
    if (isPlainObject(placeholder.value)) {
      if (isMobileWidth.value) {
        return placeholder.value.mobile;
      }
      return placeholder.value.desktop;
    }
    return placeholder.value;
  });

  const hasPlaceholder = computed(() => {
    return !isUndefined(placeholderForCurrentDevice.value);
  });

  const isTranslatePlaceholder = computed(() => {
    return !(!hasPlaceholder.value || !isPlaceholderTranslate(placeholderForCurrentDevice.value));
  });

  const placeholderLocal = computed(() => {
    if (!translationChanges.value) {
      return undefined;
    }
    if (isTranslatePlaceholder.value) {
      return getTranslatedText({
        placeholder: placeholderForCurrentDevice.value,
        extra: extra.value,
        alwaysTranslate: alwaysTranslate.value
      });
    }
    return placeholderForCurrentDevice.value;
  });

  const placeholderAttributes = computed(() => {
    const ATTRIBUTES = {};
    if (hasPlaceholder.value) {
      return getTranslationAttributes({
        attr: "placeholder",
        translation: placeholderLocal.value,
        value: placeholderForCurrentDevice.value,
        isTranslate: isTranslatePlaceholder.value,
      });
    }
    return ATTRIBUTES;
  });

  return {
    hasPlaceholder,
    placeholderAttributes,
  };
}
