import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import {
  getMinutesOfDay,
} from "../utils/utils";

import moment from "moment";
import {
  isFunction,
} from "lodash-es";

/**
 * Changes the end of an event by pulling its edge (pointer events, also on touch screens):
 * in the time grid the bottom edge (the time), in the month and in the all-day row the end edge (the last day).
 * The calendar does not change the events: it emits "event-resize" with the new end, the parent saves it.
 */
export default function ResizeAPI(props, {
  emit,
  minuteEnd = computed(() => 1440),
  minuteStart = computed(() => 0),
  minutesCount = computed(() => 1440),
  timeStepLocal = computed(() => 30),
}) {
  const isResizable = toRef(props, "isResizable");

  let resizeState = null;
  // The event while it is resized: its new end and (month, all-day row) the day under the pointer
  const resizePreview = ref(undefined);

  const isEventResizable = event => {
    return isFunction(isResizable.value) ? !!isResizable.value(event.item) : !!isResizable.value;
  };

  const isResizing = () => !!resizeState;

  const getEndForTime = $event => {
    const RECT = resizeState.column.getBoundingClientRect();
    const RATIO = RECT.height ? ($event.clientY - RECT.top) / RECT.height : 0;
    const STEP = timeStepLocal.value;
    const START_MINUTES = getMinutesOfDay(resizeState.event.start);
    const MINUTES = Math.round((minuteStart.value + RATIO * minutesCount.value) / STEP) * STEP;
    const END_MINUTES = Math.min(Math.max(MINUTES, START_MINUTES + STEP), minuteEnd.value);
    return {
      end: moment(resizeState.event.startDay).add(END_MINUTES, "minutes").toDate(),
    };
  };

  // The day under the pointer (the events let it through while resizing), not before the first day of the event
  const getEndForDay = $event => {
    const ELEMENT = document.elementFromPoint($event.clientX, $event.clientY)?.closest("[data-calendar-day]");
    if (!ELEMENT) {
      return undefined;
    }
    const EVENT = resizeState.event;
    const DAY_KEY = ELEMENT.dataset.calendarDay < EVENT.startDay ? EVENT.startDay : ELEMENT.dataset.calendarDay;
    return {
      end: moment(EVENT.end).add(moment(DAY_KEY).diff(moment(EVENT.endDay), "days"), "days").toDate(),
      dayKey: DAY_KEY,
    };
  };

  const onPointermove = $event => {
    const PREVIEW = resizeState.mode === "time" ? getEndForTime($event) : getEndForDay($event);
    if (PREVIEW) {
      resizePreview.value = {
        key: resizeState.event.key,
        ...PREVIEW,
      };
    }
  };

  const removeListeners = () => {
    window.removeEventListener("pointermove", onPointermove);
    window.removeEventListener("pointerup", onPointerup);
    window.removeEventListener("pointercancel", onPointercancel);
  };

  // The click after pulling the edge must not open the event or create a new one (time-click)
  const preventNextClick = () => {
    const STOP = $event => {
      $event.stopPropagation();
      $event.preventDefault();
    };
    window.addEventListener("click", STOP, { capture: true, once: true });
    setTimeout(() => window.removeEventListener("click", STOP, { capture: true }));
  };

  const stopResize = () => {
    removeListeners();
    resizeState = null;
    resizePreview.value = undefined;
  };

  function onPointerup($event) {
    const EVENT = resizeState.event;
    const END = resizePreview.value?.end;
    if (END && END.getTime() !== EVENT.end.getTime()) {
      emit("event-resize", {
        event: EVENT.item,
        start: EVENT.start,
        end: END,
        $event,
      });
    }
    preventNextClick();
    stopResize();
  }

  function onPointercancel() {
    stopResize();
  }

  /**
   * @param {Object} event - The normalized event
   * @param {string} mode - "time" (bottom edge in the time grid) or "day" (end edge of a bar)
   */
  const startResize = ({ event, mode, $event }) => {
    if ($event.button > 0) {
      return;
    }
    // No text selection and no click on the event
    $event.preventDefault();
    $event.stopPropagation();
    resizeState = {
      event,
      mode,
      column: mode === "time" ? $event.currentTarget.closest(".a_calendar__time_column") : null,
    };
    resizePreview.value = {
      key: event.key,
      end: event.end,
    };
    window.addEventListener("pointermove", onPointermove);
    window.addEventListener("pointerup", onPointerup);
    window.addEventListener("pointercancel", onPointercancel);
  };

  // Time grid: the event with the new end while it is resized
  const getTimedItemWithPreview = item => {
    if (resizePreview.value?.key !== item.event.key) {
      return item;
    }
    const END = resizePreview.value.end;
    return {
      ...item,
      // 24:00 is the next day: the minutes are counted from the start of the day of the event
      end: Math.max(item.start, Math.min(moment(END).diff(moment(item.event.startDay), "minutes"), minuteEnd.value)),
      event: {
        ...item.event,
        end: END,
      },
    };
  };

  onBeforeUnmount(removeListeners);

  return {
    getTimedItemWithPreview,
    isEventResizable,
    isResizing,
    resizePreview,
    startResize,
  };
}
