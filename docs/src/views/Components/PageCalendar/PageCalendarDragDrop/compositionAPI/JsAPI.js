export default function JsAPI() {
  const codeJs = `// PageCalendarDragDrop.js
import {
  ACalendar,
  ATranslation,
} from "aloha-vue";

import DragDropAPI from "./compositionAPI/DragDropAPI";

export default {
  components: {
    ACalendar,
    ATranslation,
  },
  setup() {
    const {
      events,
      isDraggable,
      lastDrop,
      model,
      onEventDrop,
      view,
    } = DragDropAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-10T10:00:00", end: "2026-03-10T11:00:00", color: "primary" },
        { id: 2, label: "Workshop", start: "2026-03-12T09:00:00", end: "2026-03-13T17:00:00", color: "info" },
        { id: 3, label: "Birthday", start: "2026-03-14", color: "#8e44ad", isAllDay: true, isLocked: true },
      ],
      date: "2026-03-11",
    });

    return {
      events,
      isDraggable,
      lastDrop,
      model,
      onEventDrop,
      view,
    };
  },
};

// compositionAPI/DragDropAPI.js
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

  // The calendar does not change the events: the new start and end are saved here
  const onEventDrop = ({ event, start, end }) => {
    const FORMAT = event.isAllDay ? "YYYY-MM-DD" : DATETIME_FORMAT;
    events.value = events.value.map(item => item.id === event.id ? {
      ...item,
      start: moment(start).format(FORMAT),
      end: moment(end).format(FORMAT),
    } : item);
    lastDrop.value = \`\${ event.label }: \${ moment(start).format("DD.MM.YYYY HH:mm") } – \${ moment(end).format("DD.MM.YYYY HH:mm") }\`;
  };

  return {
    events,
    isDraggable,
    lastDrop,
    model,
    onEventDrop,
    view,
  };
}`;

  return {
    codeJs,
  };
}
