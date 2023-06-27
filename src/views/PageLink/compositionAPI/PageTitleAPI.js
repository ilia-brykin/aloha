import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../src/ATranslation/compositionAPI/UtilsAPI";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_LINK_COMPONENT_NAME_",
    });
  });

  const pageTitle = computed(() => {
    return `ALink${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  return {
    pageTitle,
  };
}
