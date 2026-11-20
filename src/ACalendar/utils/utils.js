import moment from "moment";
import {
  CALENDAR_DAY_FORMAT,
  CALENDAR_WEEKS_COUNT,
} from "../const";
import {
  get,
  isArray,
  isFunction,
  isNil,
  isPlainObject,
} from "lodash-es";

moment.suppressDeprecationWarnings = true;

/**
 * Parses a date (Date, ISO string, "YYYY-MM-DD", timestamp). Returns null for an empty or invalid value.
 */
export function toMoment(value) {
  if (isNil(value) || value === "") {
    return null;
  }
  const DATE = moment(value instanceof Date || typeof value === "number" ? value : String(value));
  return DATE.isValid() ? DATE : null;
}

export function toDayKey(value) {
  const DATE = toMoment(value);
  return DATE ? DATE.format(CALENDAR_DAY_FORMAT) : undefined;
}

function getWeekStart({ date, firstDayOfWeek }) {
  const DATE = moment(date).startOf("day");
  return DATE.subtract((DATE.day() - firstDayOfWeek + 7) % 7, "days");
}

function getDay({ date, month, today }) {
  const KEY = date.format(CALENDAR_DAY_FORMAT);
  return {
    key: KEY,
    date: date.toDate(),
    day: date.date(),
    isCurrentMonth: month === undefined || date.month() === month,
    isToday: KEY === today,
    isWeekend: date.day() === 0 || date.day() === 6,
  };
}

/**
 * The days shown for a month: always 6 full weeks, so the height does not jump between months.
 */
export function getWeeks({ month, firstDayOfWeek = 1 }) {
  const MONTH = moment(month).month();
  const DAY = getWeekStart({ date: moment(month).startOf("month"), firstDayOfWeek });
  const TODAY = moment().format(CALENDAR_DAY_FORMAT);
  const WEEKS = [];
  for (let week = 0; week < CALENDAR_WEEKS_COUNT; week++) {
    const DAYS = [];
    for (let weekday = 0; weekday < 7; weekday++) {
      DAYS.push(getDay({ date: DAY, month: MONTH, today: TODAY }));
      DAY.add(1, "day");
    }
    WEEKS.push(DAYS);
  }
  return WEEKS;
}

/**
 * The 7 days of the week that contains the date.
 */
export function getWeekDays({ date, firstDayOfWeek = 1 }) {
  const DAY = getWeekStart({ date, firstDayOfWeek });
  const TODAY = moment().format(CALENDAR_DAY_FORMAT);
  const DAYS = [];
  for (let weekday = 0; weekday < 7; weekday++) {
    DAYS.push(getDay({ date: DAY, today: TODAY }));
    DAY.add(1, "day");
  }
  return DAYS;
}

export function getMinutesOfDay(date) {
  return date.getHours() * 60 + date.getMinutes();
}

/**
 * Places the events of one day in the time grid. Overlapping events share the width of the day like in Outlook:
 * a group of events that overlap each other gets as many columns as needed, every event takes the first free column.
 *
 * @param {Array} events - Events of one day with start and end (Date)
 * @param {number} minuteStart - The first visible minute of the day
 * @param {number} minuteEnd - The last visible minute of the day
 * @param {number} minDuration - The minimal duration in minutes, so short events stay readable and clickable
 *
 * @returns {Array<{ event, start, end, column, columns }>} - start and end in minutes of the day
 */
export function getTimedLayout({ events, minuteStart = 0, minuteEnd = 1440, minDuration = 15 }) {
  const ITEMS = events.map(event => {
    const START = Math.min(Math.max(getMinutesOfDay(event.start), minuteStart), minuteEnd - minDuration);
    const END = Math.min(Math.max(getMinutesOfDay(event.end), START + minDuration), minuteEnd);
    return { event, start: START, end: END, column: 0, columns: 1 };
  }).sort((a, b) => a.start - b.start || b.end - a.end);

  let group = [];
  let groupEnd = -1;
  let columnsEnd = [];
  const closeGroup = () => {
    group.forEach(item => {
      item.columns = columnsEnd.length;
    });
    group = [];
    columnsEnd = [];
  };

  ITEMS.forEach(item => {
    if (group.length && item.start >= groupEnd) {
      closeGroup();
      groupEnd = -1;
    }
    let column = columnsEnd.findIndex(end => end <= item.start);
    if (column === -1) {
      column = columnsEnd.length;
    }
    columnsEnd[column] = item.end;
    item.column = column;
    group.push(item);
    groupEnd = Math.max(groupEnd, item.end);
  });
  closeGroup();

  return ITEMS;
}

/**
 * Splits the events into bars of one week and puts them in rows (lanes), so they do not overlap.
 * The days are compared as "YYYY-MM-DD" strings.
 *
 * @returns {{ segments: Array, countsByDay: Array<number> }} - countsByDay: number of events per day of the week
 */
export function getWeekSegments({ week, events }) {
  const WEEK_START = week[0].key;
  const WEEK_END = week[week.length - 1].key;
  const INDEX_BY_KEY = {};
  week.forEach((day, index) => {
    INDEX_BY_KEY[day.key] = index;
  });

  const SEGMENTS = events
    .filter(event => event.startDay <= WEEK_END && event.endDay >= WEEK_START)
    .map(event => {
      const IS_START = event.startDay >= WEEK_START;
      const IS_END = event.endDay <= WEEK_END;
      const START = IS_START ? INDEX_BY_KEY[event.startDay] : 0;
      const END = IS_END ? INDEX_BY_KEY[event.endDay] : week.length - 1;
      return {
        event,
        start: START,
        span: END - START + 1,
        isStart: IS_START,
        isEnd: IS_END,
        lane: 0,
      };
    })
    // Long bars first, so they get the upper rows like in Outlook
    .sort((a, b) => a.start - b.start || b.span - a.span || a.event.startTime - b.event.startTime);

  const LANES = [];
  const COUNTS_BY_DAY = week.map(() => 0);
  SEGMENTS.forEach(segment => {
    let lane = 0;
    while (LANES[lane] && LANES[lane].slice(segment.start, segment.start + segment.span).some(Boolean)) {
      lane++;
    }
    LANES[lane] = LANES[lane] || week.map(() => false);
    for (let index = segment.start; index < segment.start + segment.span; index++) {
      LANES[lane][index] = true;
      COUNTS_BY_DAY[index]++;
    }
    segment.lane = lane;
  });

  return {
    segments: SEGMENTS,
    countsByDay: COUNTS_BY_DAY,
  };
}

export function getItemValue(item, key) {
  return isFunction(key) ? key(item) : get(item, key);
}

const RECURRENCE_UNITS = {
  daily: "days",
  weekly: "weeks",
  monthly: "months",
  yearly: "years",
};

// A series that runs for years must not block the page
const RECURRENCE_MAX_STEPS = 10000;

/**
 * Checks the rule of a recurring event. Returns undefined for a wrong rule, the event is then shown once.
 *
 * @param {Object} recurrence - { frequency: "daily" | "weekly" | "monthly" | "yearly", interval, weekdays, until, count, exceptions }
 */
export function normalizeRecurrence(recurrence) {
  if (!isPlainObject(recurrence) || !RECURRENCE_UNITS[recurrence.frequency]) {
    return undefined;
  }
  const WEEKDAYS = recurrence.frequency === "weekly" && isArray(recurrence.weekdays) ?
    [...new Set(recurrence.weekdays.filter(day => Number.isInteger(day) && day >= 0 && day <= 6))].sort() :
    [];
  return {
    frequency: recurrence.frequency,
    interval: Math.max(1, Math.floor(recurrence.interval) || 1),
    weekdays: WEEKDAYS,
    until: toDayKey(recurrence.until),
    count: recurrence.count > 0 ? Math.floor(recurrence.count) : undefined,
    exceptions: new Set((isArray(recurrence.exceptions) ? recurrence.exceptions : []).map(toDayKey).filter(Boolean)),
  };
}

/**
 * The starts of a series in order: every interval days, weeks, months or years after the first start.
 * Weekly with weekdays: these weekdays of every interval-th week (the week of the first start counts from its first day).
 * Monthly on the 31st: moment uses the last day of shorter months.
 */
function *getRecurrenceStarts({ start, recurrence }) {
  const UNIT = RECURRENCE_UNITS[recurrence.frequency];
  if (!recurrence.weekdays.length) {
    for (let step = 0; step < RECURRENCE_MAX_STEPS; step++) {
      yield start.clone().add(step * recurrence.interval, UNIT);
    }
    return;
  }
  const WEEK_START = start.clone().startOf("day").subtract(start.day(), "days");
  for (let week = 0; week < RECURRENCE_MAX_STEPS; week++) {
    for (const WEEKDAY of recurrence.weekdays) {
      const DATE = WEEK_START.clone().add(week * recurrence.interval, "weeks").add(WEEKDAY, "days")
        .hours(start.hours()).minutes(start.minutes()).seconds(start.seconds());
      if (!DATE.isBefore(start)) {
        yield DATE;
      }
    }
  }
}

/**
 * The occurrences of a series that touch the days from rangeStart to rangeEnd ("YYYY-MM-DD").
 * count and until count from the first start, exceptions ("YYYY-MM-DD") are skipped but counted.
 *
 * @returns {Array<{ start: Date, end: Date, date: string }>} - date: the day of the start of the occurrence
 */
export function getOccurrences({ start, end, recurrence, rangeStart, rangeEnd }) {
  const START = moment(start);
  const DURATION = moment(end).diff(START);
  const OCCURRENCES = [];
  let number = 0;
  for (const DATE of getRecurrenceStarts({ start: START, recurrence })) {
    const DAY_KEY = DATE.format(CALENDAR_DAY_FORMAT);
    number++;
    if (DAY_KEY > rangeEnd || (recurrence.until && DAY_KEY > recurrence.until) || (recurrence.count && number > recurrence.count)) {
      break;
    }
    const END = DATE.clone().add(DURATION, "ms");
    if (END.format(CALENDAR_DAY_FORMAT) >= rangeStart && !recurrence.exceptions.has(DAY_KEY)) {
      OCCURRENCES.push({
        start: DATE.toDate(),
        end: END.toDate(),
        date: DAY_KEY,
      });
    }
  }
  return OCCURRENCES;
}

/**
 * The occurrence for the events of the calendar (event-click, event-drop, event-resize), undefined for a single event.
 */
export function getOccurrenceInfo(event) {
  if (!event.isRecurring) {
    return undefined;
  }
  return {
    date: event.occurrenceDate,
    start: event.start,
    end: event.end,
  };
}
