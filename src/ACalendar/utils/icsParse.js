import moment from "moment";
import {
  WINDOWS_TIME_ZONES,
} from "./windowsTimeZones";
import {
  isFunction,
} from "lodash-es";

const WEEKDAY_CODES = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const FREQUENCIES = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
  YEARLY: "yearly",
};
// Parts of RRULE that the calendar does not need (WKST changes nothing for the supported rules)
const RRULE_IGNORED = ["WKST"];

/**
 * Lines that start with a space or a tab continue the previous line (RFC 5545, 3.1).
 */
function unfoldLines(text) {
  return String(text ?? "")
    .replace(/\r\n|\r/g, "\n")
    .replace(/\n[ \t]/g, "")
    .split("\n")
    .filter(line => line.trim() !== "");
}

function unescapeText(value) {
  return value.replace(/\\([\\;,nN])/g, (match, char) => char === "n" || char === "N" ? "\n" : char);
}

/**
 * "DTSTART;TZID=Europe/Berlin:20260310T090000" → { name: "DTSTART", params: { TZID: "Europe/Berlin" }, value: "20260310T090000" }
 * A colon in a quoted parameter value does not end the name.
 */
function parseContentLine(line) {
  let inQuotes = false;
  let index = 0;
  for (; index < line.length; index++) {
    if (line[index] === "\"") {
      inQuotes = !inQuotes;
    } else if (line[index] === ":" && !inQuotes) {
      break;
    }
  }
  const [NAME, ...PARAMS] = line.slice(0, index).split(/;(?=(?:[^"]*"[^"]*")*[^"]*$)/);
  return {
    name: NAME.toUpperCase(),
    params: Object.fromEntries(PARAMS.map(param => {
      const [KEY, ...VALUE] = param.split("=");
      return [KEY.toUpperCase(), VALUE.join("=").replace(/^"|"$/g, "")];
    })),
    value: line.slice(index + 1),
  };
}

/**
 * The VEVENT components with their properties. Properties of components inside a VEVENT (e.g. VALARM) are ignored.
 */
function getVevents(lines) {
  const EVENTS = [];
  const STACK = [];
  let current = null;
  lines.forEach(line => {
    const PROPERTY = parseContentLine(line);
    if (PROPERTY.name === "BEGIN") {
      STACK.push(PROPERTY.value.toUpperCase());
      if (PROPERTY.value.toUpperCase() === "VEVENT") {
        current = [];
      }
      return;
    }
    if (PROPERTY.name === "END") {
      if (STACK.pop() === "VEVENT" && current) {
        EVENTS.push(current);
        current = null;
      }
      return;
    }
    if (current && STACK[STACK.length - 1] === "VEVENT") {
      current.push(PROPERTY);
    }
  });
  return EVENTS;
}

/**
 * The offset of a time zone at a moment, with Intl (the IANA names like "Europe/Berlin").
 * Throws a RangeError for an unknown time zone (e.g. the Windows names of Outlook).
 */
function getTimeZoneOffset(timeZone, timestamp) {
  const PARTS = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(timestamp)).forEach(part => {
    PARTS[part.type] = part.value;
  });
  return Date.UTC(+PARTS.year, +PARTS.month - 1, +PARTS.day, +PARTS.hour, +PARTS.minute, +PARTS.second) - timestamp;
}

// The wall time in a time zone → the moment. The second step corrects the offset at a change to summer time.
function zonedTimeToDate(fields, timeZone) {
  const WALL = Date.UTC(fields.year, fields.month, fields.day, fields.hours, fields.minutes, fields.seconds);
  let timestamp = WALL - getTimeZoneOffset(timeZone, WALL);
  timestamp = WALL - getTimeZoneOffset(timeZone, timestamp);
  return new Date(timestamp);
}

/**
 * A DATE or DATE-TIME value: { isDate, date } with date as a local Date.
 * UTC ("Z") and TZID are converted, a time without a time zone is the local time.
 */
function parseDateValue({ value, params }, warn) {
  const MATCH = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/i.exec(value.trim());
  if (!MATCH) {
    return undefined;
  }
  const FIELDS = {
    year: +MATCH[1],
    month: +MATCH[2] - 1,
    day: +MATCH[3],
    hours: +(MATCH[4] || 0),
    minutes: +(MATCH[5] || 0),
    seconds: +(MATCH[6] || 0),
  };
  if (params.VALUE === "DATE" || !MATCH[4]) {
    return { isDate: true, date: new Date(FIELDS.year, FIELDS.month, FIELDS.day) };
  }
  if (MATCH[7]) {
    return { isDate: false, date: new Date(Date.UTC(FIELDS.year, FIELDS.month, FIELDS.day, FIELDS.hours, FIELDS.minutes, FIELDS.seconds)) };
  }
  if (params.TZID) {
    // Outlook writes the Windows names ("W. Europe Standard Time"), Intl needs the IANA names ("Europe/Berlin")
    const TIME_ZONE = WINDOWS_TIME_ZONES[params.TZID.trim()] || params.TZID.trim();
    try {
      return { isDate: false, date: zonedTimeToDate(FIELDS, TIME_ZONE) };
    } catch(error) {
      warn("timeZoneUnknown", params.TZID);
    }
  }
  return { isDate: false, date: new Date(FIELDS.year, FIELDS.month, FIELDS.day, FIELDS.hours, FIELDS.minutes, FIELDS.seconds) };
}

// "P1DT2H30M", "PT45M", "P2W" → milliseconds
function parseDuration(value) {
  const MATCH = /^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/i.exec(value.trim());
  if (!MATCH) {
    return undefined;
  }
  const [, SIGN, WEEKS, DAYS, HOURS, MINUTES, SECONDS] = MATCH;
  const MS = ((((+WEEKS || 0) * 7 + (+DAYS || 0)) * 24 + (+HOURS || 0)) * 60 + (+MINUTES || 0)) * 60000 + (+SECONDS || 0) * 1000;
  return SIGN === "-" ? -MS : MS;
}

/**
 * RRULE → the rule of the calendar. Returns { recurrence } or { unsupported } for a rule the calendar cannot show
 * (e.g. "the second Tuesday of the month", several times a day).
 */
function parseRrule(value, start, warn) {
  const PARTS = Object.fromEntries(value.split(";").filter(Boolean).map(part => {
    const [KEY, ...VALUE] = part.split("=");
    return [KEY.toUpperCase(), VALUE.join("=").toUpperCase()];
  }));
  const FREQUENCY = FREQUENCIES[PARTS.FREQ];
  if (!FREQUENCY) {
    return { unsupported: true };
  }
  const START = moment(start);
  const RECURRENCE = { frequency: FREQUENCY };
  const UNSUPPORTED = Object.keys(PARTS).some(key => {
    switch (key) {
      case "FREQ":
        return false;
      case "INTERVAL":
        RECURRENCE.interval = Math.max(1, parseInt(PARTS.INTERVAL, 10) || 1);
        return false;
      case "COUNT":
        RECURRENCE.count = parseInt(PARTS.COUNT, 10) || undefined;
        return false;
      case "UNTIL": {
        const UNTIL = parseDateValue({ value: PARTS.UNTIL, params: {} }, warn);
        RECURRENCE.until = UNTIL ? moment(UNTIL.date).format("YYYY-MM-DD") : undefined;
        return false;
      }
      case "BYDAY": {
        // Only plain weekdays of a weekly series ("MO,WE"), not "2TU" or "-1FR"
        const DAYS = PARTS.BYDAY.split(",").map(day => WEEKDAY_CODES.indexOf(day));
        if (FREQUENCY !== "weekly" || DAYS.some(day => day === -1)) {
          return true;
        }
        RECURRENCE.weekdays = DAYS;
        return false;
      }
      // The day of the start repeated: nothing to do
      case "BYMONTHDAY":
        return !["monthly", "yearly"].includes(FREQUENCY) || PARTS.BYMONTHDAY !== String(START.date());
      case "BYMONTH":
        return FREQUENCY !== "yearly" || PARTS.BYMONTH !== String(START.month() + 1);
      default:
        return RRULE_IGNORED.indexOf(key) === -1;
    }
  });
  return UNSUPPORTED ? { unsupported: true } : { recurrence: RECURRENCE };
}

const formatDay = date => moment(date).format("YYYY-MM-DD");
const formatDateTime = date => moment(date).format("YYYY-MM-DD[T]HH:mm:ss");

function parseVevent(properties, warn) {
  const get = name => properties.find(property => property.name === name);
  const getText = name => get(name) ? unescapeText(get(name).value) : undefined;
  const UID = getText("UID");
  const LABEL = getText("SUMMARY") ?? "";
  const SOURCE = { uid: UID, label: LABEL };
  const warnEvent = (code, value) => warn({ ...SOURCE, code, value });

  if ((getText("STATUS") || "").toUpperCase() === "CANCELLED") {
    return { skipped: { ...SOURCE, code: "cancelled" } };
  }
  const START = get("DTSTART") && parseDateValue(get("DTSTART"), (code, value) => warnEvent(code, value));
  if (!START) {
    return { skipped: { ...SOURCE, code: "noStart" } };
  }

  let end;
  if (get("DTEND")) {
    end = parseDateValue(get("DTEND"), (code, value) => warnEvent(code, value))?.date;
  } else if (get("DURATION")) {
    const DURATION = parseDuration(get("DURATION").value);
    end = DURATION !== undefined ? new Date(START.date.getTime() + DURATION) : undefined;
  }

  const EVENT = {
    uid: UID,
    label: LABEL,
    isAllDay: START.isDate,
  };
  if (START.isDate) {
    // The end of an all-day event is the day after its last day: the calendar needs the last day
    EVENT.start = formatDay(START.date);
    const LAST_DAY = end && end > START.date ? moment(end).subtract(1, "day") : moment(START.date);
    EVENT.end = formatDay(LAST_DAY);
  } else {
    EVENT.start = formatDateTime(START.date);
    if (end && end > START.date) {
      EVENT.end = formatDateTime(end);
    }
  }

  const DESCRIPTION = getText("DESCRIPTION");
  const LOCATION = getText("LOCATION");
  if (DESCRIPTION) {
    EVENT.description = DESCRIPTION;
  }
  if (LOCATION) {
    EVENT.location = LOCATION;
  }

  if (get("RRULE")) {
    const RULE = parseRrule(get("RRULE").value, START.date, (code, value) => warnEvent(code, value));
    if (RULE.unsupported) {
      warnEvent("rruleNotSupported", get("RRULE").value);
    } else {
      // EXDATE can be repeated and can have several values
      const EXCEPTIONS = properties
        .filter(property => property.name === "EXDATE")
        .flatMap(property => property.value.split(",").map(value => parseDateValue({ value, params: property.params }, (code, valueWarn) => warnEvent(code, valueWarn))))
        .filter(Boolean)
        .map(exdate => formatDay(exdate.date));
      EVENT.recurrence = {
        ...RULE.recurrence,
        ...(EXCEPTIONS.length ? { exceptions: [...new Set(EXCEPTIONS)].sort() } : {}),
      };
    }
  }

  const RECURRENCE_ID = get("RECURRENCE-ID") && parseDateValue(get("RECURRENCE-ID"), () => {});
  if (RECURRENCE_ID) {
    EVENT.recurrenceIdDay = formatDay(RECURRENCE_ID.date);
  }
  return { event: EVENT };
}

// Writes the values with the keys of the calendar. A key given as a function cannot be written: the default name is used.
function toItem(event, keys) {
  const keyName = (key, defaultName) => isFunction(key) || !key ? defaultName : key;
  const ITEM = {
    [keyName(keys.keyId, "id")]: event.id,
    [keyName(keys.keyLabel, "label")]: event.label,
    [keyName(keys.keyStart, "start")]: event.start,
  };
  if (event.end !== undefined) {
    ITEM[keyName(keys.keyEnd, "end")] = event.end;
  }
  if (event.isAllDay) {
    ITEM[keyName(keys.keyIsAllDay, "isAllDay")] = true;
  }
  if (event.recurrence) {
    ITEM[keyName(keys.keyRecurrence, "recurrence")] = event.recurrence;
  }
  if (event.description) {
    ITEM.description = event.description;
  }
  if (event.location) {
    ITEM.location = event.location;
  }
  return ITEM;
}

/**
 * Reads an iCalendar file (.ics, RFC 5545) into events of ACalendar, e.g. to save them.
 * The calendar knows less than iCalendar: what does not fit is reported.
 *
 * - Times in UTC and with TZID (IANA names or the Windows names of Outlook) are converted into the local time,
 *   a time without a time zone is the local time.
 * - All-day events: the end is the last day (iCalendar has the day after it).
 * - RRULE: daily, weekly (also on weekdays), monthly, yearly with INTERVAL, COUNT, UNTIL. EXDATE becomes exceptions.
 *   Other rules (e.g. "the second Tuesday of the month"): the event is imported once and a warning is added.
 * - A changed occurrence (RECURRENCE-ID) becomes a single event and an exception of its series.
 * - DESCRIPTION and LOCATION are kept as description and location (the calendar does not show them).
 *
 * @param {string} text - The text of the .ics file
 * @param {Object} [options] - keyId, keyLabel, keyStart, keyEnd, keyIsAllDay, keyRecurrence: the keys of the events (like the props of ACalendar)
 *
 * @returns {{ events: Array, skipped: Array, warnings: Array }} - skipped: { uid, label, code: "cancelled" | "noStart" },
 *   warnings: { uid, label, code: "rruleNotSupported" | "timeZoneUnknown", value }
 */
export function parseCalendarIcs(text, {
  keyEnd = "end",
  keyId = "id",
  keyIsAllDay = "isAllDay",
  keyLabel = "label",
  keyRecurrence = "recurrence",
  keyStart = "start",
} = {}) {
  const KEYS = { keyEnd, keyId, keyIsAllDay, keyLabel, keyRecurrence, keyStart };
  const SKIPPED = [];
  const WARNINGS = [];
  const PARSED = [];
  getVevents(unfoldLines(text)).forEach(properties => {
    const RESULT = parseVevent(properties, warning => WARNINGS.push(warning));
    if (RESULT.skipped) {
      SKIPPED.push(RESULT.skipped);
    } else {
      PARSED.push(RESULT.event);
    }
  });

  // A changed occurrence: an exception of its series, the occurrence itself is a single event
  const SERIES_BY_UID = {};
  PARSED.forEach(event => {
    if (event.recurrence && !event.recurrenceIdDay && event.uid) {
      SERIES_BY_UID[event.uid] = event;
    }
  });
  const IDS = new Set();
  const getUniqueId = (id, index) => {
    let unique = id ?? `ics_${ index }`;
    for (let number = 2; IDS.has(unique); number++) {
      unique = `${ id ?? `ics_${ index }` }_${ number }`;
    }
    IDS.add(unique);
    return unique;
  };
  const EVENTS = PARSED.map((event, index) => {
    if (event.recurrenceIdDay) {
      const SERIES = SERIES_BY_UID[event.uid];
      if (SERIES) {
        SERIES.recurrence.exceptions = [...new Set([...(SERIES.recurrence.exceptions || []), event.recurrenceIdDay])].sort();
      }
      return { ...event, id: getUniqueId(event.uid ? `${ event.uid }_${ event.recurrenceIdDay }` : undefined, index) };
    }
    return { ...event, id: getUniqueId(event.uid, index) };
  });

  return {
    events: EVENTS.map(event => toItem(event, KEYS)),
    skipped: SKIPPED,
    warnings: WARNINGS,
  };
}
