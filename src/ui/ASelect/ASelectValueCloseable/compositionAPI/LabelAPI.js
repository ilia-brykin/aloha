import {
  computed,
  toRef,
} from "vue";

import {
  getTranslatedText,
} from "../../../../ATranslation/compositionAPI/UtilsAPI";

import {
  AKeyLabel,
} from "../../../../const/AKeys";

export default function LabelAPI(props) {
  const data = toRef(props, "data");
  const labelNotFound = toRef(props, "labelNotFound");
  const showNotFound = toRef(props, "showNotFound");

  const currentLabel = computed(() => {
    if (AKeyLabel in data.value) {
      return data.value[AKeyLabel];
    }

    if (showNotFound.value) {
      return getTranslatedText({ placeholder: labelNotFound.value });
    }

    return "";
  });

  return {
    currentLabel,
  };
}
