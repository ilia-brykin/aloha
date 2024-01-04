import {
  computed,
} from "vue";

import {
  getTranslatedText,
} from "../../../../../../../src/ATranslation/compositionAPI/UtilsAPI";

export default function JsAPI() {
  const argumentsTranslated = computed(() => {
    return getTranslatedText({
      placeholder: "_PAGE_FILTER_FILE_SIZE_ARGUMENTS_",
    });
  });

  const codeJs = computed(() => {
    return `filterFileSize(value, { [units="kb"], [sourceUnits="b"], [digits=2] });

${ argumentsTranslated.value }`;
  });

  return {
    codeJs,
  };
}
