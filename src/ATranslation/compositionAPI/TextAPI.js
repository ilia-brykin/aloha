import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "./UtilsAPI";

export default function TextAPI(props, {
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const text = toRef(props, "text");
  const textAfter = toRef(props, "textAfter");
  const textBefore = toRef(props, "textBefore");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const isTranslateText = computed(() => {
    return !(!text.value || !isPlaceholderTranslate(text.value));
  });

  const textLocal = computed(() => {
    if (isTranslateText.value) {
      return getTranslatedText({
        placeholder: text.value,
        translationObj: translation.value,
        extra: extra.value
      });
    }
    return text.value;
  });

  const textLocalWithBeforeAndAfter = computed(() => {
    return `${ textBefore.value }${ textLocal.value }${ textAfter.value }`;
  });

  return {
    isTranslateText,
    textLocal,
    textLocalWithBeforeAndAfter,
  };
}
