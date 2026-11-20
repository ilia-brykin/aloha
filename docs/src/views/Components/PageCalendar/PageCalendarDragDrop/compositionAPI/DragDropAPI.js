import {
  ref,
} from "vue";

import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

export default function DragDropAPI({ events: eventsStart = [], date }) {
  const events = ref(eventsStart);
  const model = ref(date);
  const view = ref("week");
  const lastDrop = ref("");

  // Events with isLocked cannot be dragged
  const isDraggable = event => !event.isLocked;

  // event-drop and event-resize: the calendar does not change the events, the new start and end are saved here
  const onEventChange = ({ event, start, end }) => {
    const FORMAT = event.isAllDay ? "YYYY-MM-DD" : DATETIME_FORMAT;
    events.value = events.value.map(item => item.id === event.id
? {
  ...item,
  start: moment(start).format(FORMAT),
  end: moment(end).format(FORMAT),
}
: item);
    lastDrop.value = `${ event.label }: ${ moment(start).format("DD.MM.YYYY HH:mm") } – ${ moment(end).format("DD.MM.YYYY HH:mm") }`;
  };

  return {
    events,
    isDraggable,
    lastDrop,
    model,
    onEventChange,
    view,
  };
}
