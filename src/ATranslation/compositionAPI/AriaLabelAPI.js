import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "./UtilsAPI";

export default function AriaLabelAPI(props, {
  translation = computed(() => ({})),
}) {
  const ariaLabel = toRef(props, "ariaLabel");
  const extra = toRef(props, "extra");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const isTranslateAriaLabel = computed(() => {
    return !(!ariaLabel.value || !isPlaceholderTranslate(ariaLabel.value));
  });

  const ariaLabelLocal = computed(() => {
    if (isTranslateAriaLabel.value) {
      return getTranslatedText({
        placeholder: ariaLabel.value,
        translationObj: translation.value,
        extra: extra.value,
      });
    }
    return ariaLabel.value;
  });

  return {
    ariaLabelLocal,
    isTranslateAriaLabel,
  };
}
