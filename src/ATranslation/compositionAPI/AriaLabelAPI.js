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

export default function AriaLabelAPI(props) {
  const ariaLabel = toRef(props, "ariaLabel");
  const extra = toRef(props, "extra");

  const {
    translation,
  } = ATranslationAPI();

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const {
    isMobileWidth,
  } = AMobileAPI();

  const ariaLabelForCurrentDevice = computed(() => {
    if (isPlainObject(ariaLabel.value)) {
      if (isMobileWidth.value) {
        return ariaLabel.value.mobile;
      }
      return ariaLabel.value.desktop;
    }
    return ariaLabel.value;
  });

  const hasAriaLabel = computed(() => {
    return !isUndefined(ariaLabelForCurrentDevice.value);
  });

  const isTranslateAriaLabel = computed(() => {
    return !(!hasAriaLabel.value || !isPlaceholderTranslate(ariaLabelForCurrentDevice.value));
  });

  const ariaLabelLocal = computed(() => {
    if (isTranslateAriaLabel.value) {
      return getTranslatedText({
        placeholder: ariaLabelForCurrentDevice.value,
        translationObj: translation.value,
        extra: extra.value,
      });
    }
    return ariaLabelForCurrentDevice.value;
  });

  const ariaLabelAttributes = computed(() => {
    const ATTRIBUTES = {};
    if (hasAriaLabel.value) {
      ATTRIBUTES["aria-label"] = ariaLabelLocal.value;
      if (isTranslateAriaLabel.value) {
        ATTRIBUTES["data-translate-aria-label"] = ariaLabelForCurrentDevice.value;
      }
    }
    return ATTRIBUTES;
  });

  return {
    ariaLabelAttributes,
  };
}
