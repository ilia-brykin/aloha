import {
  ref,
  toRef,
} from "vue";

export default function ToggleAPI(props, { emit }, {
  stopObservingMutation = () => {}
}) {
  const isOpenDefault = toRef(props, "isOpenDefault");
  const showLess = toRef(props, "showLess");

  const isOpen = ref(isOpenDefault.value);

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
