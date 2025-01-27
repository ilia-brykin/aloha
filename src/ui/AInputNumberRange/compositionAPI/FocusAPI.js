import {
  computed,
} from "vue";

export default function FocusAPI({
  idMin = computed(() => ""),
}) {
  const setFocusToMinInput = () => {
    const MIN_ELEMENT = document.getElementById(idMin.value);
    if (MIN_ELEMENT) {
      MIN_ELEMENT.focus();
    }
  };

  return {
    setFocusToMinInput,
  };
}
