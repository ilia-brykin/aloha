import {
  computed,
} from "vue";

export default function AttributesAPI({
  htmlForCurrentDevice = computed(() => ""),
  isTranslateHtml = computed(() => false),
  isTranslateSafeHtml = computed(() => false),
  isTranslateText = computed(() => false),
  safeHtmlForCurrentDevice = computed(() => ""),
  textForCurrentDevice = computed(() => ({})),
  titleLocalOptions = computed(() => ({})),
}) {
  const attributesLocal = computed(() => {
    const ATTRIBUTES = {};
    if (isTranslateText.value) {
      ATTRIBUTES["data-translate-text"] = textForCurrentDevice.value;
    } else if (isTranslateSafeHtml.value) {
      ATTRIBUTES["data-translate-safe-html"] = safeHtmlForCurrentDevice.value;
    } else if (isTranslateHtml.value) {
      ATTRIBUTES["data-translate-html"] = htmlForCurrentDevice.value;
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
