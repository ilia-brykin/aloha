import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../src/ATranslation/compositionAPI/UtilsAPI";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_PAGE_MENU_BASIC_HEADER_",
    });
  });

  const pageTitle = computed(() => {
    return `${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  return {
    pageTitle,
  };
}
