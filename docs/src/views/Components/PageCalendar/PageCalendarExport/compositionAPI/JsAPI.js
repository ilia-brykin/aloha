export default function JsAPI() {
  const codeJs = `// PageCalendarExport.js
import {
  AButton,
  ACalendar,
} from "aloha-vue";

import ExportAPI from "./compositionAPI/ExportAPI";

export default {
  components: {
    AButton,
    ACalendar,
  },
  setup() {
    const {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    } = ExportAPI({
      events: [
        { id: 1, label: "Team meeting", start: "2026-03-03T10:00:00", end: "2026-03-03T11:00:00" },
        { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", isAllDay: true },
        { id: "standup", label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: ["2026-03-12"] } },
      ],
    });

    return {
      calendarRef,
      download,
      events,
      ics,
      showPreview,
    };
  },
};

// compositionAPI/ExportAPI.js
import {
  ref,
} from "vue";

export default function ExportAPI({ events: eventsStart = [] }) {
  const events = ref(eventsStart);
  const calendarRef = ref(undefined);
  const ics = ref("");

  // All events, not only the shown days. A series is exported as RRULE.
  const download = () => {
    calendarRef.value.downloadIcs({ fileName: "aloha-calendar.ics", calendarName: "Aloha" });
  };

  const showPreview = () => {
    ics.value = calendarRef.value.getIcs({ calendarName: "Aloha" });
  };

  return {
    calendarRef,
    download,
    events,
    ics,
    showPreview,
  };
}

// Without the component, e.g. on a server:
// import { getCalendarIcs } from "aloha-vue";
// const ICS = getCalendarIcs({ events, calendarName: "Aloha", keyLabel: "title" });`;

  return {
    codeJs,
  };
}
