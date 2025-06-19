import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_ELEMENT_COMPONENT_NAME_",
    });
  });

  const pageTitle = computed(() => {
    return `AElement${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  return {
    pageTitle,
  };
}
