import {
  computed,
  nextTick,
  onUpdated,
  ref,
  toRef,
  watch,
} from "vue";

import {
  getOccurrenceInfo,
  toDayKey,
} from "../utils/utils";

import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import moment from "moment";

const ARROWS = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

// A key in an attribute selector: quotes and backslashes are escaped
const escapeAttribute = value => String(value).replace(/["\\]/g, "\\$&");

/**
 * Moving and resizing with the keyboard (WCAG 2.5.7: dragging needs an alternative):
 * Alt + arrows move the focused event, Alt + Shift + arrows change its end. The same events as with the mouse are emitted.
 * The new time is announced, the focus goes back to the event after the parent has saved it.
 */
export default function KeyboardEventAPI(props, {
  emit,
  getPopoverTimeText = () => "",
  goToDate = () => {},
  isDayDisabled = () => false,
  isEventDraggable = () => false,
  isEventResizable = () => false,
  range = computed(() => ({})),
  timeStepLocal = computed(() => 30),
}) {
  const events = toRef(props, "events");
  const id = toRef(props, "id");

  const liveText = ref("");
  let pendingFocus = null;

  // Alt + Left/Right: one day, Alt + Up/Down: one step in the time grid, one week in the month
  const getMoved = ({ event, isTimed, key }) => {
    const DIRECTION = key === "ArrowLeft" || key === "ArrowUp" ? -1 : 1;
    const IS_HORIZONTAL = key === "ArrowLeft" || key === "ArrowRight";
    const [AMOUNT, UNIT] = IS_HORIZONTAL ? [1, "days"] : (isTimed ? [timeStepLocal.value, "minutes"] : [7, "days"]);
    return {
      start: moment(event.start).add(DIRECTION * AMOUNT, UNIT).toDate(),
      end: moment(event.end).add(DIRECTION * AMOUNT, UNIT).toDate(),
    };
  };

  // Alt + Shift: the end. Up/Down one step in the time grid, Left/Right one day for a bar.
  const getResized = ({ event, isTimed, key }) => {
    const DIRECTION = key === "ArrowLeft" || key === "ArrowUp" ? -1 : 1;
    const IS_HORIZONTAL = key === "ArrowLeft" || key === "ArrowRight";
    if (isTimed === IS_HORIZONTAL) {
      return undefined;
    }
    const END = isTimed ?
      moment(event.end).add(DIRECTION * timeStepLocal.value, "minutes") :
      moment(event.end).add(DIRECTION, "days");
    // At least one step long, not before the first day
    if (isTimed ? END.diff(moment(event.start), "minutes") < timeStepLocal.value : toDayKey(END) < event.startDay) {
      return undefined;
    }
    return {
      start: event.start,
      end: END.toDate(),
    };
  };

  const onKeydownEvent = ({ event, isTimed = false, $event }) => {
    if (!$event.altKey || ARROWS.indexOf($event.key) === -1) {
      return;
    }
    const IS_RESIZE = $event.shiftKey;
    if (IS_RESIZE ? !isEventResizable(event) : !isEventDraggable(event)) {
      return;
    }
    $event.preventDefault();
    const RESULT = IS_RESIZE ? getResized({ event, isTimed, key: $event.key }) : getMoved({ event, isTimed, key: $event.key });
    if (!RESULT || isDayDisabled(toDayKey(RESULT.start)) || isDayDisabled(toDayKey(RESULT.end))) {
      return;
    }
    emit(IS_RESIZE ? "event-resize" : "event-drop", {
      event: event.item,
      start: RESULT.start,
      end: RESULT.end,
      occurrence: getOccurrenceInfo(event),
      $event,
    });

    const START_DAY = toDayKey(RESULT.start);
    liveText.value = getTranslatedText({
      placeholder: IS_RESIZE ? "_A_CALENDAR_KEYBOARD_RESIZED_{{label}}_{{time}}_" : "_A_CALENDAR_KEYBOARD_MOVED_{{label}}_{{time}}_",
      extra: {
        label: event.label,
        time: getPopoverTimeText({ ...event, ...RESULT, startDay: START_DAY, endDay: toDayKey(RESULT.end) }),
      },
    });
    pendingFocus = {
      key: event.isRecurring ? `${ event.baseKey }__${ START_DAY }` : event.key,
      baseKey: event.baseKey,
    };
    // The event leaves the shown days: the calendar follows it
    if (START_DAY < range.value.start || START_DAY > range.value.end) {
      goToDate(START_DAY);
    }
  };

  /*
   * After the parent has saved the event, it is rendered again: the focus goes back to it
   * Only the new events of the parent move the event: other renders (e.g. the announcement) do not use the focus
   */
  let isEventsChanged = false;
  watch(events, () => {
    isEventsChanged = true;
  });

  onUpdated(async() => {
    if (!pendingFocus || !isEventsChanged) {
      return;
    }
    isEventsChanged = false;
    const FOCUS = pendingFocus;
    await nextTick();
    const ROOT = document.getElementById(id.value);
    const ELEMENT = ROOT?.querySelector(`[data-calendar-event-key="${ escapeAttribute(FOCUS.key) }"]`) ||
      ROOT?.querySelector(`[data-calendar-event-base="${ escapeAttribute(FOCUS.baseKey) }"]`);
    if (ELEMENT) {
      ELEMENT.focus();
      pendingFocus = null;
    }
  });

  return {
    liveText,
    onKeydownEvent,
  };
}
