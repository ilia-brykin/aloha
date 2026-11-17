import {
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import {
  clamp,
} from "../utils/colorUtils";

/**
 * Drag with mouse, pen and touch (pointer events).
 * onMove gets the position inside the element as { x, y } from 0 to 1.
 */
export default function PointerDragAPI(props, {
  elementRef = ref(undefined),
  onMove = () => {},
  onStart = () => {},
}) {
  const disabled = toRef(props, "disabled");

  const isDragging = ref(false);

  const getPosition = $event => {
    const RECT = elementRef.value.getBoundingClientRect();
    return {
      x: RECT.width ? clamp(($event.clientX - RECT.left) / RECT.width, 0, 1) : 0,
      y: RECT.height ? clamp(($event.clientY - RECT.top) / RECT.height, 0, 1) : 0,
    };
  };

  const onPointerMove = $event => {
    if (!isDragging.value) {
      return;
    }
    $event.preventDefault();
    onMove(getPosition($event));
  };

  const removeEvents = () => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerUp);
  };

  function onPointerUp() {
    isDragging.value = false;
    removeEvents();
  }

  const onPointerDown = $event => {
    if (disabled.value || $event.button > 0 || !elementRef.value) {
      return;
    }
    $event.preventDefault();
    isDragging.value = true;
    onStart();
    onMove(getPosition($event));
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  };

  onBeforeUnmount(removeEvents);

  return {
    isDragging,
    onPointerDown,
  };
}
