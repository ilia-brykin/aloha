import {
  ref,
} from "vue";

import {
  detachCalendarOccurrence,
  moveCalendarSeries,
} from "aloha-vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function DragDropAPI({ events: eventsStart = [], date }) {
  const events = ref(eventsStart);
  const model = ref(date);
  const view = ref("week");
  const lastDrop = ref("");
  // An occurrence of a series was moved: the question "only this occurrence or the whole series"
  const seriesChange = ref(undefined);

  // Events with isLocked cannot be dragged
  const isDraggable = event => !event.isLocked;

  const replaceEvents = (id, items) => {
    events.value = [...events.value.filter(item => item.id !== id), ...items];
  };

  const saveEvent = ({ event, start, end }) => {
    const FORMAT = event.isAllDay ? "YYYY-MM-DD" : DATETIME_FORMAT;
    replaceEvents(event.id, [{ ...event, start: moment(start).format(FORMAT), end: moment(end).format(FORMAT) }]);
    lastDrop.value = `${ event.label }: ${ moment(start).format("DD.MM.YYYY HH:mm") } – ${ moment(end).format("DD.MM.YYYY HH:mm") }`;
  };

  // event-drop and event-resize (also with the keyboard): the calendar does not change the events
  const onEventChange = change => {
    if (change.occurrence) {
      seriesChange.value = change;
      return;
    }
    saveEvent(change);
  };

  const changeOnlyThisOccurrence = () => {
    const { series, event } = detachCalendarOccurrence({ item: seriesChange.value.event, ...seriesChange.value });
    replaceEvents(series.id, [series, event]);
    lastDrop.value = event.label;
    seriesChange.value = undefined;
  };

  const changeWholeSeries = () => {
    const SERIES = moveCalendarSeries({ item: seriesChange.value.event, ...seriesChange.value });
    replaceEvents(SERIES.id, [SERIES]);
    lastDrop.value = SERIES.label;
    seriesChange.value = undefined;
  };

  const closeSeriesChange = () => {
    seriesChange.value = undefined;
  };

  return {
    changeOnlyThisOccurrence,
    changeWholeSeries,
    closeSeriesChange,
    events,
    isDraggable,
    lastDrop,
    model,
    onEventChange,
    seriesChange,
    view,
  };
}
