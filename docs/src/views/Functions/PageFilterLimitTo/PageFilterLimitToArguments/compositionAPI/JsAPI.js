import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_LIMIT_TO_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterLimitTo(text, { [limit=30], [maxThreeDots=true] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
