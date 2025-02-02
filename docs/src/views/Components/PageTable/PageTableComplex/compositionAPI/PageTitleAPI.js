import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";

export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_TABLE_COMPONENT_NAME_",
    });
  });

  const pageTitle = computed(() => {
    return `ATable${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  return {
    pageTitle,
  };
}
