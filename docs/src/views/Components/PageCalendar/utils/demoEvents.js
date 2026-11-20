import moment from "moment";

const DATETIME_FORMAT = "YYYY-MM-DD[T]HH:mm:ss.SSSZ";

/**
 * A day of the current month as "YYYY-MM-DD", e.g. to show the week of the demo events.
 */
export function getDemoDay(dayOfMonth) {
  return moment().startOf("month").add(dayOfMonth - 1, "days").format("YYYY-MM-DD");
}

/**
 * Events in the current month, so the examples are never empty.
 */
export function getDemoEvents() {
  const MONTH = moment().startOf("month");
  const day = (dayOfMonth, time) => {
    const DATE = MONTH.clone().add(dayOfMonth - 1, "days");
    if (!time) {
      return DATE.format("YYYY-MM-DD");
    }
    const [HOURS, MINUTES] = time.split(":");
    return DATE.hours(+HOURS).minutes(+MINUTES).format(DATETIME_FORMAT);
  };

  return [
    { id: 1, label: "Team meeting", start: day(3, "10:00"), end: day(3, "11:00"), color: "primary", location: "Room 3" },
    { id: 2, label: "Vacation", start: day(8), end: day(14), color: "success", isAllDay: true },
    { id: 3, label: "Dentist", start: day(12, "08:30"), end: day(12, "09:15"), color: "warning" },
    { id: 4, label: "Workshop", start: day(12, "09:00"), end: day(13, "17:00"), color: "info", location: "Hamburg", description: "Bring the laptop.\nLunch is included." },
    { id: 5, label: "Sprint review", start: day(12, "14:00"), end: day(12, "15:00"), color: "secondary" },
    { id: 6, label: "Release", start: day(12, "16:00"), end: day(12, "16:30"), color: "danger" },
    { id: 9, label: "Lunch", start: day(11, "12:00"), end: day(11, "13:00"), color: "success" },
    { id: 10, label: "Customer call", start: day(11, "12:30"), end: day(11, "13:30"), color: "info", location: "Zoom" },
    { id: 11, label: "Planning", start: day(11, "12:45"), end: day(11, "14:00"), color: "#8e44ad" },
    { id: 7, label: "Birthday", start: day(20), color: "#8e44ad", isAllDay: true },
    { id: 8, label: "Conference", start: day(26), end: day(33), color: "tertiary", isAllDay: true },
  ];
}
