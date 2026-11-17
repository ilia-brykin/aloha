import {
  clamp,
} from "../utils/colorUtils";

/**
 * New value of a slider for a key (WAI-ARIA slider pattern).
 * Returns undefined if the key is not handled.
 * Arrows: step (with Shift: largeStep), Page Up / Page Down: largeStep, Home / End: min / max.
 */
export function getValueForKey({ key, shiftKey, value, min, max, step = 1, largeStep = 10, isVertical = false }) {
  const STEP = shiftKey ? largeStep : step;
  let next;
  switch (key) {
    case "ArrowRight":
      next = isVertical ? undefined : value + STEP;
      break;
    case "ArrowLeft":
      next = isVertical ? undefined : value - STEP;
      break;
    case "ArrowUp":
      next = value + STEP;
      break;
    case "ArrowDown":
      next = value - STEP;
      break;
    case "PageUp":
      next = value + largeStep;
      break;
    case "PageDown":
      next = value - largeStep;
      break;
    case "Home":
      next = min;
      break;
    case "End":
      next = max;
      break;
    default:
      next = undefined;
  }
  return next === undefined ? undefined : clamp(next, min, max);
}
