import {
  computed,
  nextTick,
  ref,
  toRef,
} from "vue";

import {
  setFocusToElement,
} from "../../utils/utilsDOM";

export default function ToggleAPI(props, { emit }, {
  containerRef = ref(undefined),
  hasTextAndLength = computed(() => false),
  isOpen = ref(false),
  stopObservingMutation = () => {
  },
}) {
  const showLess = toRef(props, "showLess");

  const toggleButton = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value && !showLess.value) {
      stopObservingMutation();
    }
    emit("toggle", { isOpen: isOpen.value });

    if (hasTextAndLength.value &&
      isOpen.value &&
      !window.isScrollDisabled) { // for autotests
      nextTick().then(
        () => setFocusToElement({
          element: containerRef.value,
        }),
      );
    }
  };

  return {
    isOpen,
    toggleButton,
  };
}
