import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function TranslateAPI(props) {
  const elementLabel = toRef(props, "elementLabel");

  const elementLabelTranslated = computed(() => {
    return getTranslatedText({
      placeholder: elementLabel.value || "_A_VALIDATED_JSON_ELEMENTS_",
    });
  });

  return {
    elementLabelTranslated,
  };
}
