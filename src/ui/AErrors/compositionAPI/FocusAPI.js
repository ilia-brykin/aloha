import {
  computed,
  ref,
  toRef,
} from "vue";

export default function FocusAPI(props, {
  hasErrors = computed(() => false),
}) {
  const autoFocus = toRef(props, "autoFocus");

  const elRef = ref(undefined);

  const setFocusToElement = () => {
    if (autoFocus.value && hasErrors.value) {
      setTimeout(() => {
        elRef.value.$el.focus();
      });
    }
  };

  return {
    elRef,
    setFocusToElement,
  };
}
