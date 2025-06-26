import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "aloha-vue";


export default function PageTitleAPI() {
  const componentNameTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_A_VALIDATED_JSON_COMPONENT_NAME_",
    });
  });

  const pageTitle = computed(() => {
    return `AValidatedJson${ componentNameTranslated.value ? ` (${ componentNameTranslated.value })` : "" }`;
  });

  return {
    pageTitle,
  };
}
