import {
  ref,
} from "vue";

export default function FocusAPI() {
  const inputRef = ref(undefined);

  const setFocusToInput = () => {
    inputRef.value?.focus();
  };

  return {
    inputRef,
    setFocusToInput,
  };
}
