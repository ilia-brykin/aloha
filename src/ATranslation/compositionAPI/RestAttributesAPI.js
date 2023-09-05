import {
  computed,
} from "vue";

export default function RestAttributesAPI({
  hasAriaLabel,
  hasAttributesLocal,
  hasPlaceholder,
  hasTextAfter,
  hasTextBefore,
}) {
  const hasRestAttributes = computed(() => {
    return hasAriaLabel.value
      || hasAttributesLocal.value
      || hasPlaceholder.value
      || hasTextAfter.value
      || hasTextBefore.value;
  });

  return {
    hasRestAttributes,
  };
}
