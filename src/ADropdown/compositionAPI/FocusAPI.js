import {
  ref,
  toRef,
} from "vue";

export default function FocusAPI(props, {
  dropdownRef = ref(undefined),
}) {
  const elementsForArrows = toRef(props, "elementsForArrows");

  const setFocusToFirstElement = () => {
    if (!dropdownRef.value) {
      return;
    }
    const ELEMENTS = dropdownRef.value.querySelectorAll(elementsForArrows.value);
    if (ELEMENTS.length === 0) {
      return;
    }
    ELEMENTS[0].focus();
  };

  return {
    setFocusToFirstElement,
  };
}
