import {
  nextTick,
  ref,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";

export default function ToggleAPI(props, { emit }, {
  isOpen = ref(false),
}) {
  const containerRef = ref(undefined);

  const toggleButton = () => {
    isOpen.value = !isOpen.value;
    emit("toggle", { isOpen: isOpen.value });

    if (isOpen.value &&
      !window.isScrollDisabled) { // for autotests
      nextTick().then(
        () => setFocusToElement({
          element: containerRef.value,
        }),
      );
    }
  };

  return {
    containerRef,
    toggleButton,
  };
}
