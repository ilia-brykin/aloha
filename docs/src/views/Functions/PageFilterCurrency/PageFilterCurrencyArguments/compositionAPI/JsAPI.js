import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_CURRENCY_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterCurrency(value, { [suffix="€"], [digits=2], [digitGrouping=true] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
