import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_PROPERTY_BY_VALUE_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterPropertyByValue(value, { [mapping={}], [defaultValue=""] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
