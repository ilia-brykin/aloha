import {
  computed,
  ref,
} from "vue";

export default function FocusAPI(props, {
  arrowsSelector = computed(() => ""),
  dropdownRef = ref(undefined),
}) {
  const getElementsForArrows = () => {
    if (!dropdownRef.value || !arrowsSelector.value) {
      return [];
    }
    return Array.from(dropdownRef.value.querySelectorAll(arrowsSelector.value));
  };

  const setFocusToFirstElement = () => {
    getElementsForArrows()[0]?.focus();
  };

  const setFocusToLastElement = () => {
    const ELEMENTS = getElementsForArrows();
    ELEMENTS[ELEMENTS.length - 1]?.focus();
  };

  return {
    getElementsForArrows,
    setFocusToFirstElement,
    setFocusToLastElement,
  };
}
