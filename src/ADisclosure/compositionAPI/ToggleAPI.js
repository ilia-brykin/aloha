import {
  computed,
  nextTick,
  ref,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";

export default function ToggleAPI(props, { emit }, {
  isButtonVisible = computed(() => true),
  isOpen = ref(false),
}) {
  const containerRef = ref(undefined);

  /*
   * WAI-ARIA disclosure: the focus stays on the button (aria-expanded tells the new state).
   * Only when the button disappears after the click (show-less / show-more false), the focus goes to the content, so it is not lost.
   */
  const toggleButton = () => {
    isOpen.value = !isOpen.value;
    emit("toggle", { isOpen: isOpen.value });
    emit("update:modelValue", isOpen.value);

    if (window.isScrollDisabled) { // for autotests
      return;
    }
    nextTick().then(() => {
      if (!isButtonVisible.value) {
        setFocusToElement({
          element: containerRef.value,
        });
      }
    });
  };

  return {
    containerRef,
    toggleButton,
  };
}
