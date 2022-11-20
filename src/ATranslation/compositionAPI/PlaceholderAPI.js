import {
  computed,
  toRef,
} from "vue";

import UtilsAPI from "./UtilsAPI";

export default function PlaceholderAPI(props, {
  translation = computed(() => ({})),
}) {
  const extra = toRef(props, "extra");
  const placeholder = toRef(props, "placeholder");

  const {
    isPlaceholderTranslate,
    getTranslatedText,
  } = UtilsAPI();

  const isTranslatePlaceholder = computed(() => {
    return !(!placeholder.value || !isPlaceholderTranslate(placeholder.value));
  });

  const placeholderLocal = computed(() => {
    if (isTranslatePlaceholder.value) {
      return getTranslatedText({
        placeholder: placeholder.value,
        translationObj: translation.value,
        extra: extra.value,
      });
    }
    return placeholder.value;
  });

  return {
    isTranslatePlaceholder,
    placeholderLocal,
  };
}
