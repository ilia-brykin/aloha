import moment from "moment";
import {
  CALENDAR_DAY_FORMAT,
  CALENDAR_WEEKS_COUNT,
} from "../const";
import {
  get,
  isFunction,
  isNil,
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

/**
 * The days shown for a month: always 6 full weeks, so the height does not jump between months.
 */
export function getWeeks({ month, firstDayOfWeek = 1 }) {
  const MONTH_START = moment(month).startOf("month");
  const OFFSET = (MONTH_START.day() - firstDayOfWeek + 7) % 7;
  const DAY = MONTH_START.clone().subtract(OFFSET, "days");
  const TODAY = moment().format(CALENDAR_DAY_FORMAT);
  const WEEKS = [];
  for (let week = 0; week < CALENDAR_WEEKS_COUNT; week++) {
    const DAYS = [];
    for (let weekday = 0; weekday < 7; weekday++) {
      const KEY = DAY.format(CALENDAR_DAY_FORMAT);
      DAYS.push({
        key: KEY,
        date: DAY.toDate(),
        day: DAY.date(),
        isCurrentMonth: DAY.month() === MONTH_START.month(),
        isToday: KEY === TODAY,
        isWeekend: DAY.day() === 0 || DAY.day() === 6,
      });
      DAY.add(1, "day");
    }
    WEEKS.push(DAYS);
  }
  return WEEKS;
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
