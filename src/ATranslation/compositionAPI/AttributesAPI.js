import {
  computed,
} from "vue";

export default function AttributesAPI({
  htmlLocalOptions = computed(() => undefined),
  textLocalOptions = computed(() => ({})),
  titleLocalOptions = computed(() => ({})),
}) {
  const attributesLocal = computed(() => {
    const ATTRIBUTES = {};
    if (textLocalOptions.value?.dataTranslateText) {
      ATTRIBUTES["data-translate-text"] = textLocalOptions.value.dataTranslateText;
    } else if (htmlLocalOptions.value?.dataTranslateSafeHtml) {
      ATTRIBUTES["data-translate-safe-html"] = htmlLocalOptions.value.dataTranslateSafeHtml;
    } else if (htmlLocalOptions.value?.dataTranslateHtml) {
      ATTRIBUTES["data-translate-html"] = htmlLocalOptions.value.dataTranslateHtml;
    }
    if (titleLocalOptions.value.title) {
      ATTRIBUTES.title = titleLocalOptions.value.title;
      if (titleLocalOptions.value.dataTranslateTitle) {
        ATTRIBUTES["data-translate-title"] = titleLocalOptions.value.dataTranslateTitle;
      }
    }

    return ATTRIBUTES;
  });

  return {
    attributesLocal,
  };
}
