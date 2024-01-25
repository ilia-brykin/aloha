import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

export default function AriaLabelAPI() {
  const previewAriaLabel = computed(() => {
    return getTranslatedText({
      placeholder: "_A_TABLE_PREVIEW_RIGHT_ARIA_LABEL_",
    });
  });

  return {
    previewAriaLabel,
  };
}
