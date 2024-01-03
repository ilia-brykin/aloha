import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_JSON_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterJson(value, { [replacer], [space=2] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
