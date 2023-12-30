import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_LIST_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterList(array, { [isHtml=true], [isSimpleArray=false], [keyChildren=""], [keyLabel=""], [keyLabelCallback], [listClass=""], [separator=", "], [tag="ul"] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
