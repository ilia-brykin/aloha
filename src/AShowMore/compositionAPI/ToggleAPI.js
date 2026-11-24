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
  isButtonVisible = computed(() => true),
  isOpen = ref(false),
  stopObservingMutation = () => {},
}) {
  const showLess = toRef(props, "showLess");

  const setOpen = value => {
    isOpen.value = value;
    if (isOpen.value && !showLess.value) {
      stopObservingMutation();
    }
    emit("toggle", { isOpen: isOpen.value });
    emit("update:modelValue", isOpen.value);
  };

  // the focus stays on the button; only when the button disappears (show-less false), it goes to the content
  const toggleButton = () => {
    setOpen(!isOpen.value);

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

  // WCAG 2.4.11: a link or button in the cut part gets the focus with Tab: the content opens, so the focus is visible
  const onFocusinContent = $event => {
    if (isOpen.value ||
      hasTextAndLength.value ||
      !isButtonVisible.value) {
      return;
    }
    const RECT_WRAPPER = $event.currentTarget.getBoundingClientRect();
    const RECT_ELEMENT = $event.target.getBoundingClientRect();
    if (RECT_ELEMENT.bottom > RECT_WRAPPER.bottom + 1) {
      setOpen(true);
    }
  };

  return {
    isOpen,
    onFocusinContent,
    toggleButton,
  };
}
