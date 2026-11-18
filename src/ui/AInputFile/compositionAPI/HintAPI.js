import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../ATranslation/compositionAPI/UtilsAPI";

import filterFileSize from "../../../filters/filterFileSize";

export default function HintAPI(props, {
  htmlIdLocal,
}) {
  const accept = toRef(props, "accept");
  const acceptText = toRef(props, "acceptText");
  const isHint = toRef(props, "isHint");
  const isMultiple = toRef(props, "isMultiple");
  const maxFiles = toRef(props, "maxFiles");
  const maxSize = toRef(props, "maxSize");

  const maxSizeText = computed(() => {
    return maxSize.value > 0 ? filterFileSize(maxSize.value, { units: "", digits: 0 }) : "";
  });

  // "PDF, PNG · max. 5 MB per file · up to 3 files"
  const hintParts = computed(() => {
    if (!isHint.value) {
      return [];
    }
    const PARTS = [];
    const ACCEPT = acceptText.value ?
      getTranslatedText({ placeholder: acceptText.value }) :
      (accept.value || "").split(",").map(token => token.trim()).filter(Boolean).join(", ");
    if (ACCEPT) {
      PARTS.push(getTranslatedText({ placeholder: "_A_INPUT_FILE_HINT_ACCEPT_{{accept}}_", extra: { accept: ACCEPT } }));
    }
    if (maxSizeText.value) {
      PARTS.push(getTranslatedText({ placeholder: "_A_INPUT_FILE_HINT_MAX_SIZE_{{size}}_", extra: { size: maxSizeText.value } }));
    }
    if (isMultiple.value && maxFiles.value > 0) {
      PARTS.push(getTranslatedText({ placeholder: "_A_INPUT_FILE_HINT_MAX_FILES_{{count}}_", extra: { count: maxFiles.value } }));
    }
    return PARTS;
  });

  const hintId = computed(() => `${ htmlIdLocal.value }_hint`);

  return {
    hintId,
    hintParts,
    maxSizeText,
  };
}
