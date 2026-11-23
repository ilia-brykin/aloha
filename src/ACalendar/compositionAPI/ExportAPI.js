import {
  computed,
  toRef,
} from "vue";

import {
  getCalendarIcs,
} from "../utils/ics";

/**
 * The export of the events as an iCalendar file (.ics). All events are exported, not only the shown days.
 */
export default function ExportAPI(props, {
  keys = computed(() => ({})),
}) {
  const events = toRef(props, "events");

  const getIcs = ({ calendarName, uidDomain } = {}) => {
    return getCalendarIcs({
      events: events.value,
      calendarName,
      uidDomain,
      ...keys.value,
    });
  };

  const downloadIcs = ({ fileName = "calendar.ics", calendarName, uidDomain } = {}) => {
    const BLOB = new Blob([getIcs({ calendarName, uidDomain })], { type: "text/calendar;charset=utf-8" });
    const URL_BLOB = URL.createObjectURL(BLOB);
    const LINK = document.createElement("a");
    LINK.href = URL_BLOB;
    LINK.download = fileName;
    document.body.appendChild(LINK);
    LINK.click();
    LINK.remove();
    // Some browsers start the download only after the click event
    setTimeout(() => URL.revokeObjectURL(URL_BLOB));
  };

  return {
    downloadIcs,
    getIcs,
  };
}
