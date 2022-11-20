import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "./UtilsAPI";

export default function TitleAPI(props, {
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const title = toRef(props, "title");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const isTranslateTitle = computed(() => {
    return !(!title.value || !isPlaceholderTranslate(title.value));
  });

  const titleLocal = computed(() => {
    if (isTranslateTitle.value) {
      return getTranslatedText({
        placeholder: title.value,
        translationObj: translation.value,
        extra: extra.value,
      });
    }
    return title.value;
  });

  return {
    isTranslateTitle,
    titleLocal,
  };
}
