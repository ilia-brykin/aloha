import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "../../ATranslation/compositionAPI/UtilsAPI";

export default function UiUrlAPI(props) {
  const url = toRef(props, "url");
  const urlTemplateData = toRef(props, "urlTemplateData");

  const {
    replaceText,
  } = UtilsAPI();

  const urlLocal = computed(() => {
    if (!url.value?.includes("{{") || !url.value.includes("}}")) {
      return url.value;
    }

    return replaceText({
      text: url.value,
      object: urlTemplateData.value,
    });
  });

  return {
    urlLocal,
  };
}
