import {
  computed,
} from "vue";

export default function FocusAPI({
  idFrom = computed(() => ""),
}) {
  const setFocusToFromInput = () => {
    const FROM_ELEMENT = document.getElementById(idFrom.value);
    if (FROM_ELEMENT) {
      FROM_ELEMENT.focus();
    }
  };

  return {
    setFocusToFromInput
  };
}
