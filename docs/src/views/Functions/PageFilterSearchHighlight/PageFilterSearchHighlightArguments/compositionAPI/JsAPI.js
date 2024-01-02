import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_SEARCH_HIGHLIGHT_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterSearchHighlight(value, { [searchModel=""], [searchClass="a_search_highlight"] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
