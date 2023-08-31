import {
  computed,
} from "vue";

export default function AttributesAPI({
  htmlLocalOptions = computed(() => undefined),
  isTranslateText = computed(() => false),
  textForCurrentDevice = computed(() => ({})),
  titleLocalOptions = computed(() => ({})),
}) {
  const attributesLocal = computed(() => {
    const ATTRIBUTES = {};
    if (isTranslateText.value) {
      ATTRIBUTES["data-translate-text"] = textForCurrentDevice.value;
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
