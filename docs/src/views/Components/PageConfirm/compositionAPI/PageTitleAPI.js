import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_CONFIRM_COMPONENT_NAME_",
    });
  });

  const pageTitle = computed(() => {
    return `AConfirm${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  return {
    pageTitle,
  };
}
