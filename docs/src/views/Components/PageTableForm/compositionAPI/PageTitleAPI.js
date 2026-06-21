import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function PageTitleAPI() {
  const pageTitle = computed(() => {
    return getTranslatedText({
      placeholder: "_A_TABLE_FORM_PAGE_TITLE_",
    });
  });

  return {
    pageTitle,
  };
}
