import {
  ref,
  toRef,
} from "vue";

export default function ToggleAPI(props, { emit }, {
  isOpen = ref(false),
  stopObservingMutation = () => {}
}) {
  const showLess = toRef(props, "showLess");

  const toggleButton = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value && !showLess.value) {
      stopObservingMutation();
    }
    emit("toggle", { isOpen: isOpen.value });
  };

  return {
    isOpen,
    toggleButton,
  };
}
