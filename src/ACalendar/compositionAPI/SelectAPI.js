import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import moment from "moment";
import {
  getDayAtPoint,
  preventNextClick,
} from "../utils/dom";

const MOVE_START = 4;

/**
 * isRangeSelectable: pulling the mouse over a time column selects a time ("time-select"),
 * over several days of the month or the all-day row selects the days ("day-select"), e.g. to create an event.
 * A click without moving stays a click (day-click, time-click). A finger scrolls: it selects nothing.
 */
export default function SelectAPI(props, {
  emit,
  isDayDisabled = () => false,
  minuteEnd = computed(() => 1440),
  minuteStart = computed(() => 0),
  minutesCount = computed(() => 1440),
  timeStepLocal = computed(() => 30),
}) {
  const isRangeSelectable = toRef(props, "isRangeSelectable");

  let selectState = null;
  // Time grid: the selected time of a day. Month and all-day row: the selected days.
  const timeSelection = ref(undefined);
  const daySelection = ref(undefined);

  const getMinutes = ({ rect, clientY }) => {
    const RATIO = rect.height ? (clientY - rect.top) / rect.height : 0;
    const MINUTES = Math.floor((minuteStart.value + RATIO * minutesCount.value) / timeStepLocal.value) * timeStepLocal.value;
    return Math.min(Math.max(MINUTES, minuteStart.value), minuteEnd.value - timeStepLocal.value);
  };

  const updateTime = $event => {
    const CURRENT = getMinutes({ rect: selectState.element.getBoundingClientRect(), clientY: $event.clientY });
    const START = Math.min(selectState.anchorMinutes, CURRENT);
    const END = Math.max(selectState.anchorMinutes, CURRENT) + timeStepLocal.value;
    const toDate = minutes => moment(selectState.dayKey).add(minutes, "minutes").toDate();
    timeSelection.value = {
      dayKey: selectState.dayKey,
      start: toDate(START),
      end: toDate(END),
      style: {
        top: `${ (START - minuteStart.value) / minutesCount.value * 100 }%`,
        height: `${ (END - START) / minutesCount.value * 100 }%`,
      },
    };
  };

  const updateDays = $event => {
    const DAY = getDayAtPoint($event);
    if (DAY?.type !== "day") {
      return;
    }
    const [START, END] = [selectState.dayKey, DAY.dayKey].sort();
    daySelection.value = { start: START, end: END };
  };

  // The days of the selection must all be free
  const hasDisabledDay = ({ start, end }) => {
    for (const DAY = moment(start); DAY.format("YYYY-MM-DD") <= end; DAY.add(1, "day")) {
      if (isDayDisabled(DAY.format("YYYY-MM-DD"))) {
        return true;
      }
    }
    return false;
  };

  function onPointermove($event) {
    if (!selectState.isActive) {
      if (Math.hypot($event.clientX - selectState.startX, $event.clientY - selectState.startY) <= MOVE_START) {
        return;
      }
      selectState.isActive = true;
    }
    if (selectState.type === "time") {
      updateTime($event);
    } else {
      updateDays($event);
    }
  }

  function onPointerup($event) {
    if (selectState?.isActive) {
      if (timeSelection.value) {
        emit("time-select", {
          date: timeSelection.value.dayKey,
          start: timeSelection.value.start,
          end: timeSelection.value.end,
          $event,
        });
        preventNextClick();
      } else if (daySelection.value && daySelection.value.start !== daySelection.value.end && !hasDisabledDay(daySelection.value)) {
        emit("day-select", {
          start: daySelection.value.start,
          end: daySelection.value.end,
          $event,
        });
        preventNextClick();
      }
    }
    stopSelect();
  }

  function onKeydown($event) {
    if ($event.key === "Escape") {
      stopSelect();
    }
  }

  function stopSelect() {
    window.removeEventListener("pointermove", onPointermove);
    window.removeEventListener("pointerup", onPointerup);
    window.removeEventListener("pointercancel", stopSelect);
    window.removeEventListener("keydown", onKeydown);
    selectState = null;
    timeSelection.value = undefined;
    daySelection.value = undefined;
  }

  const startSelect = ({ type, day, $event }) => {
    // Only the empty place of the column, not an event in it; a finger scrolls
    if (!isRangeSelectable.value || $event.button > 0 || $event.pointerType === "touch" || isDayDisabled(day.key)) {
      return;
    }
    if (type === "time" && $event.target !== $event.currentTarget) {
      return;
    }
    stopSelect();
    selectState = {
      type,
      dayKey: day.key,
      element: $event.currentTarget,
      startX: $event.clientX,
      startY: $event.clientY,
      isActive: false,
    };
    if (type === "time") {
      selectState.anchorMinutes = getMinutes({ rect: $event.currentTarget.getBoundingClientRect(), clientY: $event.clientY });
    }
    window.addEventListener("pointermove", onPointermove);
    window.addEventListener("pointerup", onPointerup);
    window.addEventListener("pointercancel", stopSelect);
    window.addEventListener("keydown", onKeydown);
  };

  const onPointerdownTime = ({ day, $event }) => startSelect({ type: "time", day, $event });
  const onPointerdownDay = ({ day, $event }) => startSelect({ type: "day", day, $event });

  const isDayInSelection = day => {
    return !!daySelection.value && day.key >= daySelection.value.start && day.key <= daySelection.value.end;
  };

  onBeforeUnmount(stopSelect);

  return {
    daySelection,
    isDayInSelection,
    onPointerdownDay,
    onPointerdownTime,
    timeSelection,
  };
}
