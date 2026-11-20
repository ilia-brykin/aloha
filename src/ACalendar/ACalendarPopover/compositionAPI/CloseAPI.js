import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  toRef,
} from "vue";

/**
 * The popover gets the focus when it opens. Escape closes it and gives the focus back to the event,
 * a click outside closes it.
 */
export default function CloseAPI(props, {
  emit,
  popoverRef,
}) {
  const anchor = toRef(props, "anchor");

  const close = ({ isFocusAnchor = true } = {}) => {
    emit("close", { isFocusAnchor });
  };

  const onKeydown = $event => {
    if ($event.key === "Escape") {
      $event.stopPropagation();
      close();
    }
  };

  const onPointerdownOutside = $event => {
    if (!popoverRef.value?.contains($event.target) && !anchor.value?.contains($event.target)) {
      close({ isFocusAnchor: false });
    }
  };

  onMounted(async() => {
    document.addEventListener("pointerdown", onPointerdownOutside, true);
    await nextTick();
    popoverRef.value?.focus();
  });

  onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onPointerdownOutside, true);
  });

  return {
    close,
    onKeydown,
  };
}
