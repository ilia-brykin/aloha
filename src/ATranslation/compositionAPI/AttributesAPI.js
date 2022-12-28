import {
  computed,
  toRef,
} from "vue";

export default function AttributesAPI(props, {
  ariaLabelLocal = computed(() => ""),
  isTranslateAriaLabel = computed(() => false),
  isTranslateHtml = computed(() => false),
  isTranslatePlaceholder = computed(() => false),
  isTranslateText = computed(() => false),
  isTranslateTitle = computed(() => false),
  placeholderLocal = computed(() => ""),
  titleLocal = computed(() => ""),
}) {
  const ariaLabel = toRef(props, "ariaLabel");
  const html = toRef(props, "html");
  const placeholder = toRef(props, "placeholder");
  const text = toRef(props, "text");
  const title = toRef(props, "title");

  const attributesLocal = computed(() => {
    const ATTRIBUTES = {};
    if (isTranslateText.value) {
      ATTRIBUTES["data-translate-text"] = text.value;
    }
    if (isTranslateHtml.value) {
      ATTRIBUTES["data-translate-html"] = html.value;
    }
    if (title.value) {
      ATTRIBUTES.title = titleLocal.value;
    }
    if (isTranslateTitle.value) {
      ATTRIBUTES["data-translate-title"] = title.value;
    }
    if (placeholder.value) {
      ATTRIBUTES.placeholder = placeholderLocal.value;
    }
    if (isTranslatePlaceholder.value) {
      ATTRIBUTES["data-translate-placeholder"] = placeholder.value;
    }
    if (ariaLabel.value) {
      ATTRIBUTES["aria-label"] = ariaLabelLocal.value;
    }
    if (isTranslateAriaLabel.value) {
      ATTRIBUTES["data-translate-aria-label"] = ariaLabel.value;
    }
    return ATTRIBUTES;
  });

  return {
    attributesLocal,
  };
}
