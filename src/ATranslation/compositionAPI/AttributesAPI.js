import {
  computed,
} from "vue";

export default function AttributesAPI({
  ariaLabelForCurrentDevice = computed(() => ""),
  ariaLabelLocal = computed(() => ""),
  hasAriaLabel = computed(() => false),
  hasPlaceholder = computed(() => false),
  htmlForCurrentDevice = computed(() => ""),
  isTranslateAriaLabel = computed(() => false),
  isTranslateHtml = computed(() => false),
  isTranslatePlaceholder = computed(() => false),
  isTranslateSafeHtml = computed(() => false),
  isTranslateText = computed(() => false),
  placeholderForCurrentDevice = computed(() => ""),
  placeholderLocal = computed(() => ""),
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
    if (hasPlaceholder.value) {
      ATTRIBUTES.placeholder = placeholderLocal.value;
      if (isTranslatePlaceholder.value) {
        ATTRIBUTES["data-translate-placeholder"] = placeholderForCurrentDevice.value;
      }
    }
    if (hasAriaLabel.value) {
      ATTRIBUTES["aria-label"] = ariaLabelLocal.value;
      if (isTranslateAriaLabel.value) {
        ATTRIBUTES["data-translate-aria-label"] = ariaLabelForCurrentDevice.value;
      }
    }

    return ATTRIBUTES;
  });

  return {
    attributesLocal,
  };
}
