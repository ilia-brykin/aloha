import {
  computed,
  ref,
} from "vue";

/**
 * aria-expanded of the button, only with text-length: then the rest of the text is not in the DOM.
 * With height the whole content is in the DOM and is read anyway (the button says it can be ignored).
 */
export default function ExpandedAPI({
  hasTextAndLength = computed(() => false),
  isOpen = ref(false),
}) {
  const ariaExpanded = computed(() => {
    if (hasTextAndLength.value) {
      return isOpen.value ? "true" : "false";
    }
    return undefined;
  });

  return {
    ariaExpanded,
  };
}
