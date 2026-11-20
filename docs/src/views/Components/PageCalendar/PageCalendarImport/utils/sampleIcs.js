import {
  getDemoDay,
} from "../../utils/demoEvents";

const day = number => getDemoDay(number).replace(/-/g, "");

/**
 * An iCalendar file with the cases of the import: a time zone, a series with a changed occurrence,
 * an event over several days, a rule the calendar cannot show and a cancelled event.
 */
export function getSampleIcs() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Example//Team//EN",
    "BEGIN:VEVENT",
    "UID:planning@example.com",
    "SUMMARY:Planning call (New York)",
    `DTSTART;TZID=America/New_York:${ day(4) }T100000`,
    `DTEND;TZID=America/New_York:${ day(4) }T110000`,
    "LOCATION:Zoom",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:yoga@example.com",
    "SUMMARY:Yoga",
    `DTSTART:${ day(2) }T180000`,
    `DTEND:${ day(2) }T190000`,
    "RRULE:FREQ=WEEKLY;BYDAY=MO,TH;COUNT=8",
    `EXDATE:${ day(9) }T180000`,
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:yoga@example.com",
    "SUMMARY:Yoga (in the park)",
    `RECURRENCE-ID:${ day(5) }T180000`,
    `DTSTART:${ day(5) }T170000`,
    `DTEND:${ day(5) }T180000`,
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:trip@example.com",
    "SUMMARY:Trip to Hamburg",
    `DTSTART;VALUE=DATE:${ day(23) }`,
    `DTEND;VALUE=DATE:${ day(26) }`,
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:board@example.com",
    "SUMMARY:Board meeting",
    `DTSTART:${ day(10) }T090000`,
    `DTEND:${ day(10) }T100000`,
    "RRULE:FREQ=MONTHLY;BYDAY=2TU",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:lunch@example.com",
    "SUMMARY:Team lunch",
    "STATUS:CANCELLED",
    `DTSTART:${ day(12) }T120000`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
