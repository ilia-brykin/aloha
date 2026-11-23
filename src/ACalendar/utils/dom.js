/**
 * The click after pulling or dragging must not open the event or create a new one (day-click, time-click).
 * The browser sends this click right after pointerup: the blocker is removed in the next task.
 */
export function preventNextClick() {
  const STOP = $event => {
    $event.stopPropagation();
    $event.preventDefault();
  };
  window.addEventListener("click", STOP, { capture: true, once: true });
  setTimeout(() => window.removeEventListener("click", STOP, { capture: true }));
}

/**
 * The day or the time column under the pointer. The events let the pointer through while they are dragged (CSS).
 *
 * @returns {{ type: "time" | "day", dayKey: string, element: Element } | undefined}
 */
export function getDayAtPoint({ clientX, clientY }) {
  const ELEMENT = document.elementFromPoint(clientX, clientY);
  const TIME_COLUMN = ELEMENT?.closest("[data-calendar-time-day]");
  if (TIME_COLUMN) {
    return { type: "time", dayKey: TIME_COLUMN.dataset.calendarTimeDay, element: TIME_COLUMN };
  }
  const DAY = ELEMENT?.closest("[data-calendar-day]");
  if (DAY) {
    return { type: "day", dayKey: DAY.dataset.calendarDay, element: DAY };
  }
  return undefined;
}
