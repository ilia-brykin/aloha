import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import moment from "moment";
import {
  isFunction,
} from "lodash-es";

/**
 * Changes the start or the end of an event by pulling its edge (pointer events, also on touch screens):
 * in the time grid the top and the bottom edge (the time), in the month and in the all-day row the start and the end edge (the day).
 * The calendar does not change the events: it emits "event-resize" with the new start and end, the parent saves them.
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
  // The event while it is resized: its new start and end and (month, all-day row) the day under the pointer
  const resizePreview = ref(undefined);

  const isEventResizable = event => {
    return isFunction(isResizable.value) ? !!isResizable.value(event.item) : !!isResizable.value;
  };

  const isResizing = () => !!resizeState;

  // Minutes from the start of the day of the event: 24:00 is 1440, not 0 of the next day
  const getMinutesFromDay = date => moment(date).diff(moment(resizeState.event.startDay), "minutes");

  // The time grid: the time at the pointer, rounded to timeStep. Start and end stay at least one step apart.
  const getPreviewForTime = $event => {
    const RECT = resizeState.column.getBoundingClientRect();
    const RATIO = RECT.height ? ($event.clientY - RECT.top) / RECT.height : 0;
    const STEP = timeStepLocal.value;
    const EVENT = resizeState.event;
    const MINUTES = Math.round((minuteStart.value + RATIO * minutesCount.value) / STEP) * STEP;
    const toDate = minutes => moment(EVENT.startDay).add(minutes, "minutes").toDate();
    if (resizeState.edge === "start") {
      return {
        start: toDate(Math.max(Math.min(MINUTES, getMinutesFromDay(EVENT.end) - STEP), minuteStart.value)),
        end: EVENT.end,
      };
    }
    return {
      start: EVENT.start,
      end: toDate(Math.min(Math.max(MINUTES, getMinutesFromDay(EVENT.start) + STEP), minuteEnd.value)),
    };
  };

  /*
   * The month and the all-day row: the day under the pointer (the events let it through while resizing).
   * The start is not after the last day, the end is not before the first day. The time stays.
   */
  const getPreviewForDay = $event => {
    const ELEMENT = document.elementFromPoint($event.clientX, $event.clientY)?.closest("[data-calendar-day]");
    if (!ELEMENT) {
      return undefined;
    }
    const EVENT = resizeState.event;
    const KEY = ELEMENT.dataset.calendarDay;
    if (resizeState.edge === "start") {
      const DAY_KEY = KEY > EVENT.endDay ? EVENT.endDay : KEY;
      return {
        start: moment(EVENT.start).add(moment(DAY_KEY).diff(moment(EVENT.startDay), "days"), "days").toDate(),
        end: EVENT.end,
        dayKey: DAY_KEY,
      };
    }
    const DAY_KEY = KEY < EVENT.startDay ? EVENT.startDay : KEY;
    return {
      start: EVENT.start,
      end: moment(EVENT.end).add(moment(DAY_KEY).diff(moment(EVENT.endDay), "days"), "days").toDate(),
      dayKey: DAY_KEY,
    };
  };

  const onPointermove = $event => {
    const PREVIEW = resizeState.mode === "time" ? getPreviewForTime($event) : getPreviewForDay($event);
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
    const PREVIEW = resizePreview.value;
    if (PREVIEW && (PREVIEW.start.getTime() !== EVENT.start.getTime() || PREVIEW.end.getTime() !== EVENT.end.getTime())) {
      emit("event-resize", {
        event: EVENT.item,
        start: PREVIEW.start,
        end: PREVIEW.end,
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
   * @param {string} mode - "time" (time grid) or "day" (a bar in the month or in the all-day row)
   * @param {string} edge - "start" or "end"
   */
  const startResize = ({ event, mode, edge, $event }) => {
    if ($event.button > 0) {
      return;
    }
    // No text selection and no click on the event
    $event.preventDefault();
    $event.stopPropagation();
    resizeState = {
      event,
      mode,
      edge,
      column: mode === "time" ? $event.currentTarget.closest(".a_calendar__time_column") : null,
    };
    resizePreview.value = {
      key: event.key,
      start: event.start,
      end: event.end,
    };
    window.addEventListener("pointermove", onPointermove);
    window.addEventListener("pointerup", onPointerup);
    window.addEventListener("pointercancel", onPointercancel);
  };

  // Time grid: the event with the new start and end while it is resized
  const getTimedItemWithPreview = item => {
    if (resizePreview.value?.key !== item.event.key) {
      return item;
    }
    const { start, end } = resizePreview.value;
    const START_OF_DAY = moment(item.event.startDay);
    const START = Math.max(moment(start).diff(START_OF_DAY, "minutes"), minuteStart.value);
    return {
      ...item,
      start: START,
      end: Math.max(START, Math.min(moment(end).diff(START_OF_DAY, "minutes"), minuteEnd.value)),
      event: {
        ...item.event,
        start,
        end,
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
