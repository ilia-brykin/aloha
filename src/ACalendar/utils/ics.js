import moment from "moment";
import {
  normalizeEventItem,
} from "./utils";

const WEEKDAY_CODES = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const ICS_DATE = "YYYYMMDD";
const ICS_DATETIME_UTC = "YYYYMMDD[T]HHmmss[Z]";
const ICS_DATETIME_LOCAL = "YYYYMMDD[T]HHmmss";
const LINE_MAX_BYTES = 75;

function escapeText(text) {
  return String(text ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/**
 * Lines longer than 75 bytes are folded: the next line starts with a space (RFC 5545, 3.1).
 * A character with several bytes (e.g. "ü") is not split.
 */
function foldLine(line) {
  const ENCODER = new TextEncoder();
  const LINES = [];
  let current = "";
  let bytes = 0;
  for (const CHAR of line) {
    const CHAR_BYTES = ENCODER.encode(CHAR).length;
    // The folded lines start with a space, it counts too
    const MAX = LINES.length ? LINE_MAX_BYTES - 1 : LINE_MAX_BYTES;
    if (bytes + CHAR_BYTES > MAX) {
      LINES.push(current);
      current = "";
      bytes = 0;
    }
    current += CHAR;
    bytes += CHAR_BYTES;
  }
  LINES.push(current);
  return LINES.join("\r\n ");
}

const toUtc = date => moment(date).utc().format(ICS_DATETIME_UTC);

/**
 * A single event is written in UTC (an exact moment). A series is written in the local time without a time zone
 * ("floating" time, RFC 5545, 3.3.5): its occurrences stay at the same hour after the change to summer time,
 * like in the calendar. A series in UTC would move by one hour.
 */
const toEventTime = (event, date) => event.recurrence ? moment(date).format(ICS_DATETIME_LOCAL) : toUtc(date);

function getRrule(event) {
  const RECURRENCE = event.recurrence;
  const PARTS = [`FREQ=${ RECURRENCE.frequency.toUpperCase() }`];
  if (RECURRENCE.interval > 1) {
    PARTS.push(`INTERVAL=${ RECURRENCE.interval }`);
  }
  if (RECURRENCE.weekdays.length) {
    PARTS.push(`BYDAY=${ RECURRENCE.weekdays.map(day => WEEKDAY_CODES[day]).join(",") }`);
  }
  if (RECURRENCE.count) {
    PARTS.push(`COUNT=${ RECURRENCE.count }`);
  }
  if (RECURRENCE.until) {
    // until is the last day: with a time the end of this day (in the time of DTSTART), all day the date
    PARTS.push(`UNTIL=${ event.isAllDay ? moment(RECURRENCE.until).format(ICS_DATE) : toEventTime(event, moment(RECURRENCE.until).endOf("day")) }`);
  }
  return `RRULE:${ PARTS.join(";") }`;
}

// An exception is the day of an occurrence: with a time it is the start of the occurrence on this day
function getExdates(event) {
  return [...event.recurrence.exceptions].sort().map(day => {
    if (event.isAllDay) {
      return `EXDATE;VALUE=DATE:${ moment(day).format(ICS_DATE) }`;
    }
    const START = moment(event.start);
    return `EXDATE:${ toEventTime(event, moment(day).hours(START.hours()).minutes(START.minutes()).seconds(START.seconds())) }`;
  });
}

function getEventLines({ event, uidDomain, stamp }) {
  const LINES = [
    "BEGIN:VEVENT",
    `UID:${ escapeText(`${ event.key }@${ uidDomain }`) }`,
    `DTSTAMP:${ stamp }`,
  ];
  if (event.isAllDay) {
    // All day: the end is the day after the last day
    LINES.push(`DTSTART;VALUE=DATE:${ moment(event.startDay).format(ICS_DATE) }`);
    LINES.push(`DTEND;VALUE=DATE:${ moment(event.endDay).add(1, "day").format(ICS_DATE) }`);
  } else {
    LINES.push(`DTSTART:${ toEventTime(event, event.start) }`);
    if (event.end > event.start) {
      LINES.push(`DTEND:${ toEventTime(event, event.end) }`);
    }
  }
  LINES.push(`SUMMARY:${ escapeText(event.label) }`);
  if (event.recurrence) {
    LINES.push(getRrule(event));
    LINES.push(...getExdates(event));
  }
  LINES.push("END:VEVENT");
  return LINES;
}

/**
 * The events as an iCalendar file (RFC 5545), e.g. for Outlook, Google Calendar or Apple Calendar.
 * The keys are the same as the props of ACalendar. Single events with a time are written in UTC,
 * a series with a time in the local time without a time zone, with RRULE and EXDATE.
 *
 * @param {Array} events - The events
 * @param {string} [calendarName] - The name of the calendar (X-WR-CALNAME)
 * @param {string} [uidDomain="aloha-vue"] - The part of the UID after "@": the UID is "id@uidDomain"
 * @param {Date} [now=new Date()] - The time of the export (DTSTAMP)
 *
 * @returns {string} - The text of the .ics file
 */
export function getCalendarIcs({
  events = [],
  calendarName,
  uidDomain = "aloha-vue",
  now = new Date(),
  keyColor = "color",
  keyEnd = "end",
  keyId = "id",
  keyIsAllDay = "isAllDay",
  keyLabel = "label",
  keyRecurrence = "recurrence",
  keyStart = "start",
} = {}) {
  const KEYS = { keyColor, keyEnd, keyId, keyIsAllDay, keyLabel, keyRecurrence, keyStart };
  const STAMP = toUtc(now);
  const LINES = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//aloha-vue//ACalendar//EN",
    "CALSCALE:GREGORIAN",
  ];
  if (calendarName) {
    LINES.push(`X-WR-CALNAME:${ escapeText(calendarName) }`);
  }
  (events || []).forEach((item, index) => {
    const EVENT = normalizeEventItem({ item, index, keys: KEYS });
    if (EVENT) {
      LINES.push(...getEventLines({ event: EVENT, uidDomain, stamp: STAMP }));
    }
  });
  LINES.push("END:VCALENDAR");
  return `${ LINES.map(foldLine).join("\r\n") }\r\n`;
}
