import {
  computed,
  ref,
} from "vue";

export default function ExpandedAPI({
  hasTextAndLength = computed(() => false),
  isOpen = ref(false),
}) {
  const ariaExpanded = computed(() => {
    if (hasTextAndLength.value) {
      return isOpen.value;
    }
    return undefined;
  });

  return {
    ariaExpanded,
  };
}
