import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_DEFAULT_FOR_EMPTY_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterDefaultForEmpty(value, { [emptyValue="-"] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
