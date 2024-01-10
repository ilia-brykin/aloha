import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_DATE_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterDate(value, { [format="date"] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}