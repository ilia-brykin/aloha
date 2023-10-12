import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../src/ATranslation/compositionAPI/UtilsAPI";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_TABLE_PREVIEW_DOWN_PAGE_TITLE_",
    });
  });

  const pageTitle = computed(() => {
    return `ATable ${ componentNameTranslated.value }`;
  });

  return {
    pageTitle,
  };
}
