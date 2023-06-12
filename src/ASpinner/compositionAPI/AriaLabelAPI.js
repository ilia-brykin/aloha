import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

export default function AriaLabelAPI(props) {
  const ariaLabel = toRef(props, "ariaLabel");

  const ariaLabelTranslated = computed(() => {
    if (ariaLabel.value) {
      return getTranslatedText({ placeholder: ariaLabel.value });
    }
    return undefined;
  });

  return {
    ariaLabelTranslated,
  };
}
