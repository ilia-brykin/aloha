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
  const alwaysTranslate = toRef(props, "alwaysTranslate");
  const ariaLabel = toRef(props, "ariaLabel");
  const extra = toRef(props, "extra");

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
    if (!translationChanges.value) {
      return undefined;
    }
    if (isTranslateAriaLabel.value) {
      return getTranslatedText({
        placeholder: ariaLabelForCurrentDevice.value,
        extra: extra.value,
        alwaysTranslate: alwaysTranslate.value,
      });
    }
    return ariaLabelForCurrentDevice.value;
  });

  const ariaLabelAttributes = computed(() => {
    if (hasAriaLabel.value) {
      return getTranslationAttributes({
        attr: "aria-label",
        translation: ariaLabelLocal.value,
        value: ariaLabelForCurrentDevice.value,
        isTranslate: isTranslateAriaLabel.value,
      });
    }

    return {};
  });

  return {
    ariaLabelAttributes,
    hasAriaLabel,
  };
}
