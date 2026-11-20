import {
  computed,
  onBeforeUnmount,
  ref,
  toRef,
} from "vue";

import {
  getOccurrenceInfo,
} from "../utils/utils";

import moment from "moment";
import {
  getDayAtPoint,
  preventNextClick,
} from "../utils/dom";
import {
  isFunction,
} from "lodash-es";

// A mouse starts to drag after a small move, a finger after a long press (a quick move of a finger scrolls the page)
const MOUSE_MOVE_START = 4;
const TOUCH_MOVE_CANCEL = 8;
const TOUCH_LONG_PRESS = 400;

/**
 * Drag and drop of events with pointer events (mouse, pen and touch). The calendar does not change the events:
 * it emits "event-drop" with the new start and end, the parent saves them.
 */
export default function DragAPI(props, {
  emit,
  getMinutesAtY = () => 0,
  isDayDisabled = () => false,
  minuteStart = computed(() => 0),
  minutesCount = computed(() => 1440),
}) {
  const isDraggable = toRef(props, "isDraggable");

  // pending: pressed, but not dragged yet. dragState: the dragged event and where it was grabbed.
  let pending = null;
  let dragState = null;
  let target = null;
  const draggingKey = ref(undefined);
  const dropTargetKey = ref(undefined);
  // Time grid: where the dragged event would land
  const dropPreview = ref(undefined);

  const isEventDraggable = event => {
    return isFunction(isDraggable.value) ? !!isDraggable.value(event.item) : !!isDraggable.value;
  };

  const getDuration = event => event.end.getTime() - event.start.getTime();

  const getStartForDay = dayKey => {
    const DAYS = moment(dayKey).diff(moment(dragState.grabDayKey), "days");
    return moment(dragState.event.start).add(DAYS, "days").toDate();
  };

  // A time column: an event with a time gets the day and the time of the place, the other events only the day
  const getStartForTime = ({ dayKey, element, clientY }) => {
    if (!dragState.isTimed) {
      return getStartForDay(dayKey);
    }
    const MINUTES = getMinutesAtY({
      rect: element.getBoundingClientRect(),
      clientY: clientY - dragState.grabOffsetY,
      duration: Math.round(getDuration(dragState.event) / 60000),
    });
    return moment(dayKey).add(MINUTES, "minutes").toDate();
  };

  const updateTarget = ({ clientX, clientY }) => {
    const DAY = getDayAtPoint({ clientX, clientY });
    dropPreview.value = undefined;
    if (!DAY || isDayDisabled(DAY.dayKey)) {
      target = null;
      dropTargetKey.value = undefined;
      return;
    }
    if (DAY.type === "time") {
      const START = getStartForTime({ ...DAY, clientY });
      target = { start: START };
      dropTargetKey.value = `time_${ DAY.dayKey }`;
      if (dragState.isTimed) {
        const START_MINUTES = START.getHours() * 60 + START.getMinutes();
        const DURATION_MINUTES = Math.max(15, Math.round(getDuration(dragState.event) / 60000));
        dropPreview.value = {
          dayKey: DAY.dayKey,
          start: START,
          end: new Date(START.getTime() + getDuration(dragState.event)),
          style: {
            top: `${ (START_MINUTES - minuteStart.value) / minutesCount.value * 100 }%`,
            height: `${ DURATION_MINUTES / minutesCount.value * 100 }%`,
          },
        };
      }
      return;
    }
    target = { start: getStartForDay(DAY.dayKey) };
    dropTargetKey.value = DAY.dayKey;
  };

  const startDrag = ({ clientX, clientY }) => {
    const { event, dayKeys, isTimed, rect } = pending;
    clearTimeout(pending.timer);
    // The day of a bar over several days where it was grabbed: the event moves from this day
    const INDEX = dayKeys.length > 1 && rect.width ?
      Math.min(dayKeys.length - 1, Math.max(0, Math.floor((pending.startX - rect.left) / rect.width * dayKeys.length))) :
      0;
    dragState = {
      event,
      grabDayKey: dayKeys[INDEX],
      grabOffsetY: pending.startY - rect.top,
      isTimed,
    };
    draggingKey.value = event.key;
    updateTarget({ clientX, clientY });
  };

  function onPointermove($event) {
    if (dragState) {
      updateTarget($event);
      return;
    }
    const DISTANCE = Math.hypot($event.clientX - pending.startX, $event.clientY - pending.startY);
    if (pending.pointerType === "mouse") {
      if (DISTANCE > MOUSE_MOVE_START) {
        startDrag($event);
      }
    } else if (DISTANCE > TOUCH_MOVE_CANCEL) {
      // The finger moved before the long press: the page scrolls
      stopDrag();
    } else {
      pending.lastPoint = { clientX: $event.clientX, clientY: $event.clientY };
    }
  }

  // While an event is dragged with a finger, the page does not scroll
  function onTouchmove($event) {
    if (dragState) {
      $event.preventDefault();
    }
  }

  // A long press opens no context menu
  function onContextmenu($event) {
    $event.preventDefault();
  }

  function onKeydown($event) {
    if ($event.key === "Escape") {
      stopDrag();
    }
  }

  function onPointerup($event) {
    if (dragState) {
      const EVENT = dragState.event;
      if (target && target.start.getTime() !== EVENT.start.getTime()) {
        emit("event-drop", {
          event: EVENT.item,
          start: target.start,
          end: new Date(target.start.getTime() + getDuration(EVENT)),
          occurrence: getOccurrenceInfo(EVENT),
          $event,
        });
      }
      preventNextClick();
    }
    stopDrag();
  }

  function removeListeners() {
    window.removeEventListener("pointermove", onPointermove);
    window.removeEventListener("pointerup", onPointerup);
    window.removeEventListener("pointercancel", stopDrag);
    window.removeEventListener("touchmove", onTouchmove);
    window.removeEventListener("contextmenu", onContextmenu);
    window.removeEventListener("keydown", onKeydown);
  }

  function stopDrag() {
    clearTimeout(pending?.timer);
    removeListeners();
    pending = null;
    dragState = null;
    target = null;
    draggingKey.value = undefined;
    dropTargetKey.value = undefined;
    dropPreview.value = undefined;
  }

  /**
   * @param {Object} event - The normalized event
   * @param {Array<string>} dayKeys - The days of the pressed bar (a bar can cover several days of a week)
   * @param {boolean} isTimed - The event lies in the time grid
   */
  const onPointerdownEvent = ({ event, dayKeys, isTimed = false, $event }) => {
    if (!isEventDraggable(event) || $event.button > 0) {
      return;
    }
    stopDrag();
    pending = {
      event,
      dayKeys,
      isTimed,
      pointerType: $event.pointerType || "mouse",
      rect: $event.currentTarget.getBoundingClientRect(),
      startX: $event.clientX,
      startY: $event.clientY,
    };
    window.addEventListener("pointermove", onPointermove);
    window.addEventListener("pointerup", onPointerup);
    window.addEventListener("pointercancel", stopDrag);
    window.addEventListener("touchmove", onTouchmove, { passive: false });
    window.addEventListener("keydown", onKeydown);
    if (pending.pointerType !== "mouse") {
      window.addEventListener("contextmenu", onContextmenu);
      pending.timer = setTimeout(() => startDrag(pending.lastPoint || { clientX: pending.startX, clientY: pending.startY }), TOUCH_LONG_PRESS);
    }
  };

  onBeforeUnmount(stopDrag);

  return {
    draggingKey,
    dropPreview,
    dropTargetKey,
    isEventDraggable,
    onPointerdownEvent,
  };
}
