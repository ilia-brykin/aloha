import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_BOOLEAN_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterBoolean(value, { [trueValue="_YES_"], [falseValue="_NO_"], [useNil=true] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
