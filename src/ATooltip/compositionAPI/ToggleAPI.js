import {
  ref,
  toRef,
} from "vue";

/**
 * The tooltip stays open while the mouse or the focus is on the element (WCAG 1.4.13).
 * focusin / focusout bubble, so a focused button inside the wrapper opens it too.
 */
export default function ToggleAPI(props, {
  showTitle = () => {},
  closeTitle = () => {},
  closeTitleWithTimer = () => {},
}) {
  const isHide = toRef(props, "isHide");
  const timeOpen = toRef(props, "timeOpen");

  const focusedElement = ref(undefined);
  const hasFocus = ref(false);
  const isHovered = ref(false);

  let timerOpen;

  const clearTimerOpen = () => {
    clearTimeout(timerOpen);
    timerOpen = undefined;
  };

  const onMouseenter = () => {
    isHovered.value = true;
    if (isHide.value) {
      return;
    }
    clearTimerOpen();
    if (timeOpen.value > 0) {
      timerOpen = setTimeout(showTitle, timeOpen.value);
    } else {
      showTitle();
    }
  };

  const onMouseleave = () => {
    isHovered.value = false;
    clearTimerOpen();
    if (!hasFocus.value) {
      closeTitleWithTimer();
    }
  };

  // the keyboard opens the tooltip at once, without time-open
  const onFocusin = $event => {
    hasFocus.value = true;
    focusedElement.value = $event.target;
    if (isHide.value) {
      return;
    }
    clearTimerOpen();
    showTitle();
  };

  const onFocusout = $event => {
    if ($event.currentTarget?.contains($event.relatedTarget)) {
      return;
    }
    hasFocus.value = false;
    focusedElement.value = undefined;
    if (!isHovered.value) {
      closeTitle();
    }
  };

  return {
    clearTimerOpen,
    focusedElement,
    onFocusin,
    onFocusout,
    onMouseenter,
    onMouseleave,
  };
}
