import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_JSON_COMPONENT_NAME_",
    });
  });

  const componentNameTranslatedH1 = computed(() => {
    return getTranslatedText({
      placeholder: "_A_JSON_COMPONENT_NAME_H1_",
    });
  });

  const pageTitle = computed(() => {
    return `AJson${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  const pageTitleH1 = computed(() => {
    return `AJson${ componentNameTranslatedH1.value ? ` (${ componentNameTranslatedH1.value })` : "" }`;
  });

  return {
    pageTitle,
    pageTitleH1,
  };
}
