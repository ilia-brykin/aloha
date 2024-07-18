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
  const extra = toRef(props, "extra");
  const placeholder = toRef(props, "placeholder");

  const {
    translationChanges,
  } = ATranslationAPI();

  const {
    isPlaceholderTranslate,
    getTranslatedText,
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
      });
    }
    return placeholderForCurrentDevice.value;
  });

  const placeholderAttributes = computed(() => {
    const ATTRIBUTES = {};
    if (hasPlaceholder.value) {
      ATTRIBUTES.placeholder = placeholderLocal.value;
      if (isTranslatePlaceholder.value) {
        ATTRIBUTES["data-translate-placeholder"] = placeholderForCurrentDevice.value;
      }
    }
    return ATTRIBUTES;
  });

  return {
    hasPlaceholder,
    placeholderAttributes,
  };
}
