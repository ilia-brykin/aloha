import {
  computed,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";
import UtilsAPI from "./UtilsAPI";

import {
  isPlainObject,
  isUndefined,
} from "lodash-es";

export default function PlaceholderAPI(props, {
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const placeholder = toRef(props, "placeholder");

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
    if (isTranslatePlaceholder.value) {
      return getTranslatedText({
        placeholder: placeholderForCurrentDevice.value,
        translationObj: translation.value,
        extra: extra.value,
      });
    }
    return placeholderForCurrentDevice.value;
  });

  return {
    hasPlaceholder,
    isTranslatePlaceholder,
    placeholderForCurrentDevice,
    placeholderLocal,
  };
}
