import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  getOccurrenceInfo,
} from "../utils/utils";

import moment from "moment";
import {
  isFunction,
} from "lodash-es";

/**
 * Drag and drop of events (HTML5 drag and drop). The calendar does not change the events:
 * it emits "event-drop" with the new start and end, the parent saves them.
 */
export default function DragAPI(props, {
  emit,
  getMinutesAtY = () => 0,
  isResizing = () => false,
  minuteStart = computed(() => 0),
  minutesCount = computed(() => 1440),
}) {
  const isDraggable = toRef(props, "isDraggable");

  // The dragged event: where it was grabbed (the day and the distance from its top)
  let dragState = null;
  const draggingKey = ref(undefined);
  const dropTargetKey = ref(undefined);
  // Time grid: where the dragged event would land
  const dropPreview = ref(undefined);

  const isEventDraggable = event => {
    return isFunction(isDraggable.value) ? !!isDraggable.value(event.item) : !!isDraggable.value;
  };

  const resetDrag = () => {
    dragState = null;
    draggingKey.value = undefined;
    dropTargetKey.value = undefined;
    dropPreview.value = undefined;
  };

  /**
   * @param {Object} event - The normalized event
   * @param {Array<string>} dayKeys - The days of the dragged bar (a bar can cover several days of a week)
   * @param {boolean} isTimed - The event lies in the time grid
   */
  const onDragstartEvent = ({ event, dayKeys, isTimed = false, $event }) => {
    // The edge of the event is pulled: no drag of the whole event
    if (isResizing()) {
      $event.preventDefault();
      return;
    }
    const RECT = $event.currentTarget.getBoundingClientRect();
    const INDEX = dayKeys.length > 1 && RECT.width ?
      Math.min(dayKeys.length - 1, Math.max(0, Math.floor(($event.clientX - RECT.left) / RECT.width * dayKeys.length))) :
      0;
    dragState = {
      event,
      grabDayKey: dayKeys[INDEX],
      grabOffsetY: $event.clientY - RECT.top,
      isTimed,
    };
    if ($event.dataTransfer) {
      $event.dataTransfer.effectAllowed = "move";
      // Firefox starts the drag only with data
      $event.dataTransfer.setData("text/plain", event.label || "");
    }
    // Later than dragstart: the other events let the drop through (pointer-events: none), changing the DOM in dragstart cancels the drag
    setTimeout(() => {
      if (dragState) {
        draggingKey.value = event.key;
      }
    });
  };

  const getDuration = event => event.end.getTime() - event.start.getTime();

  const emitDrop = ({ start, $event }) => {
    const EVENT = dragState.event;
    if (start.getTime() !== EVENT.start.getTime()) {
      emit("event-drop", {
        event: EVENT.item,
        start,
        end: new Date(start.getTime() + getDuration(EVENT)),
        occurrence: getOccurrenceInfo(EVENT),
        $event,
      });
    }
    resetDrag();
  };

  const allowDrop = ({ key, $event }) => {
    if (!dragState) {
      return false;
    }
    $event.preventDefault();
    if ($event.dataTransfer) {
      $event.dataTransfer.dropEffect = "move";
    }
    dropTargetKey.value = key;
    return true;
  };

  // A day (month, all-day row, head of a day): the event moves by days, the time stays
  const onDragoverDay = ({ day, $event }) => {
    allowDrop({ key: day.key, $event });
  };

  const getStartForDay = day => {
    const DAYS = moment(day.key).diff(moment(dragState.grabDayKey), "days");
    return moment(dragState.event.start).add(DAYS, "days").toDate();
  };

  const onDropDay = ({ day, $event }) => {
    if (!dragState) {
      return;
    }
    $event.preventDefault();
    emitDrop({ start: getStartForDay(day), $event });
  };

  // A time column: an event with a time gets the day and the time of the place, the other events only the day
  const getStartForTime = ({ day, $event }) => {
    if (!dragState.isTimed) {
      return getStartForDay(day);
    }
    const DURATION_MINUTES = Math.round(getDuration(dragState.event) / 60000);
    const MINUTES = getMinutesAtY({
      rect: $event.currentTarget.getBoundingClientRect(),
      clientY: $event.clientY - dragState.grabOffsetY,
      duration: DURATION_MINUTES,
    });
    return moment(day.key).add(MINUTES, "minutes").toDate();
  };

  const onDragoverTime = ({ day, $event }) => {
    if (!allowDrop({ key: `time_${ day.key }`, $event }) || !dragState.isTimed) {
      return;
    }
    const START = getStartForTime({ day, $event });
    const START_MINUTES = START.getHours() * 60 + START.getMinutes();
    const DURATION_MINUTES = Math.max(15, Math.round(getDuration(dragState.event) / 60000));
    dropPreview.value = {
      dayKey: day.key,
      start: START,
      end: new Date(START.getTime() + getDuration(dragState.event)),
      style: {
        top: `${ (START_MINUTES - minuteStart.value) / minutesCount.value * 100 }%`,
        height: `${ DURATION_MINUTES / minutesCount.value * 100 }%`,
      },
    };
  };

  const onDropTime = ({ day, $event }) => {
    if (!dragState) {
      return;
    }
    $event.preventDefault();
    emitDrop({ start: getStartForTime({ day, $event }), $event });
  };

  return {
    draggingKey,
    dropPreview,
    dropTargetKey,
    isEventDraggable,
    onDragoverDay,
    onDragoverTime,
    onDragstartEvent,
    onDropDay,
    onDropTime,
    resetDrag,
  };
}
