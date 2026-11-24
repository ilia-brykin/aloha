/**
 * Pure functions for ADateInput. A date is a plain object { year, month, day } (month 1-12),
 * a time { hours, minutes }. No Date with time zones in the logic, so no day shifts.
 */

const pad = (value, length = 2) => `${ value }`.padStart(length, "0");

export function daysInMonth(year, month) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function isValidDateParts({ year, month, day } = {}) {
  return Number.isInteger(year) &&
    Number.isInteger(month) &&
    Number.isInteger(day) &&
    year >= 1 && year <= 9999 &&
    month >= 1 && month <= 12 &&
    day >= 1 && day <= daysInMonth(year, month);
}

export function isValidTimeParts({ hours, minutes, seconds = 0 } = {}) {
  return Number.isInteger(hours) &&
    Number.isInteger(minutes) &&
    Number.isInteger(seconds) &&
    hours >= 0 && hours <= 23 &&
    minutes >= 0 && minutes <= 59 &&
    seconds >= 0 && seconds <= 59;
}

// ---------- ISO (the model) ----------

export function toIsoDate(date) {
  return date ? `${ pad(date.year, 4) }-${ pad(date.month) }-${ pad(date.day) }` : null;
}

export function toIsoTime(time, withSeconds = false) {
  if (!time) {
    return null;
  }
  return `${ pad(time.hours) }:${ pad(time.minutes) }${ withSeconds ? `:${ pad(time.seconds || 0) }` : "" }`;
}

export function toIsoDateTime(date, time) {
  return date && time ? `${ toIsoDate(date) }T${ toIsoTime(time) }` : null;
}

export function fromIsoDate(value) {
  const MATCH = /^(\d{4})-(\d{2})-(\d{2})/.exec(value || "");
  if (!MATCH) {
    return null;
  }
  const DATE = { year: +MATCH[1], month: +MATCH[2], day: +MATCH[3] };
  return isValidDateParts(DATE) ? DATE : null;
}

export function fromIsoTime(value) {
  const MATCH = /(?:^|T)(\d{2}):(\d{2})(?::(\d{2}))?/.exec(value || "");
  if (!MATCH) {
    return null;
  }
  const TIME = { hours: +MATCH[1], minutes: +MATCH[2], seconds: MATCH[3] ? +MATCH[3] : 0 };
  return isValidTimeParts(TIME) ? TIME : null;
}

// ---------- arithmetic ----------

const toUtc = date => Date.UTC(date.year, date.month - 1, date.day);

const fromUtc = time => {
  const DATE = new Date(time);
  return { year: DATE.getUTCFullYear(), month: DATE.getUTCMonth() + 1, day: DATE.getUTCDate() };
};

export function compareDates(a, b) {
  return toUtc(a) - toUtc(b);
}

export function isSameDate(a, b) {
  return !!a && !!b && compareDates(a, b) === 0;
}

export function addDays(date, days) {
  return fromUtc(toUtc(date) + days * 86400000);
}

// the day is kept if possible, else the last day of the month (31.01. + 1 month = 28./29.02.)
export function addMonths(date, months) {
  const INDEX = date.year * 12 + (date.month - 1) + months;
  const YEAR = Math.floor(INDEX / 12);
  const MONTH = INDEX - YEAR * 12 + 1;
  return { year: YEAR, month: MONTH, day: Math.min(date.day, daysInMonth(YEAR, MONTH)) };
}

// 0 = Sunday … 6 = Saturday
export function weekday(date) {
  return new Date(toUtc(date)).getUTCDay();
}

export function startOfWeek(date, firstDayOfWeek = 1) {
  return addDays(date, -((weekday(date) - firstDayOfWeek + 7) % 7));
}

export function endOfWeek(date, firstDayOfWeek = 1) {
  return addDays(startOfWeek(date, firstDayOfWeek), 6);
}

// 6 weeks of the month, with days of the months before and after
export function getMonthGrid({ year, month }, firstDayOfWeek = 1) {
  let current = startOfWeek({ year, month, day: 1 }, firstDayOfWeek);
  const WEEKS = [];
  for (let week = 0; week < 6; week++) {
    const DAYS = [];
    for (let i = 0; i < 7; i++) {
      DAYS.push(current);
      current = addDays(current, 1);
    }
    WEEKS.push(DAYS);
  }
  return WEEKS;
}

export function clampDate(date, min, max) {
  if (min && compareDates(date, min) < 0) {
    return min;
  }
  if (max && compareDates(date, max) > 0) {
    return max;
  }
  return date;
}

export function todayParts(now = new Date()) {
  return { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
}

// ---------- parsing of the text of the user ----------

// two-digit years: up to 20 years in the future, else the last century
export function expandYear(year, now = new Date()) {
  if (year >= 100) {
    return year;
  }
  const CURRENT = now.getFullYear();
  const CANDIDATE = 2000 + year;
  return CANDIDATE <= CURRENT + 20 ? CANDIDATE : 1900 + year;
}

/**
 * Parses a date typed by the user. order: the order of the parts in the language, e.g. ["day", "month", "year"].
 * Accepts 5.3.25, 05.03.2025, 05/03/2025, 05-03-2025, 2025-03-05 (ISO), 05032025, 050325, 5.3 (current year).
 */
export function parseDateText(text, order = ["day", "month", "year"], now = new Date()) {
  const VALUE = `${ text ?? "" }`.trim();
  if (!VALUE) {
    return null;
  }
  const ISO = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(VALUE);
  if (ISO) {
    const DATE = { year: +ISO[1], month: +ISO[2], day: +ISO[3] };
    return isValidDateParts(DATE) ? DATE : null;
  }

  let parts;
  if (/^\d{6}$|^\d{8}$/.test(VALUE)) {
    const YEAR_LENGTH = VALUE.length - 4;
    let index = 0;
    parts = order.map(part => {
      const LENGTH = part === "year" ? YEAR_LENGTH : 2;
      const PART = VALUE.slice(index, index + LENGTH);
      index += LENGTH;
      return PART;
    });
  } else {
    parts = VALUE.split(/[./\s-]+/).filter(Boolean);
  }
  if (!parts.every(part => /^\d+$/.test(part))) {
    return null;
  }

  const DATE = {};
  if (parts.length === 3) {
    order.forEach((part, index) => {
      DATE[part] = +parts[index];
    });
  } else if (parts.length === 2) {
    // day and month: the current year
    const ORDER_WITHOUT_YEAR = order.filter(part => part !== "year");
    ORDER_WITHOUT_YEAR.forEach((part, index) => {
      DATE[part] = +parts[index];
    });
    DATE.year = now.getFullYear();
  } else {
    return null;
  }
  if (parts.length === 3 && `${ parts[order.indexOf("year")] }`.length <= 2) {
    DATE.year = expandYear(DATE.year, now);
  }
  return isValidDateParts(DATE) ? DATE : null;
}

/**
 * Parses a time: 14:30, 14.30, 14h30, 1430, 9, 2:30 pm, 14:30:15, 143015.
 */
export function parseTimeText(text) {
  const VALUE = `${ text ?? "" }`.trim().toLowerCase();
  const MATCH = /^(\d{1,2})(?:[:.h]?(\d{2})(?:[:.]?(\d{2}))?)?\s*(am|pm)?$/.exec(VALUE);
  if (!MATCH) {
    return null;
  }
  let hours = +MATCH[1];
  const MINUTES = MATCH[2] ? +MATCH[2] : 0;
  const SECONDS = MATCH[3] ? +MATCH[3] : 0;
  if (MATCH[4]) {
    if (hours < 1 || hours > 12) {
      return null;
    }
    hours = hours % 12 + (MATCH[4] === "pm" ? 12 : 0);
  }
  const TIME = { hours, minutes: MINUTES, seconds: SECONDS };
  return isValidTimeParts(TIME) ? TIME : null;
}

// "05.03.2025 14:30", "2025-03-05T14:30", "5.3.25, 2:30 pm"
export function parseDateTimeText(text, order, now = new Date()) {
  const VALUE = `${ text ?? "" }`.trim();
  const MATCH = /^(.*?)[\s,T]+(\d{1,2}(?:[:.h]?\d{2}(?:[:.]?\d{2})?)?\s*(?:am|pm)?)$/i.exec(VALUE);
  if (!MATCH) {
    return null;
  }
  const DATE = parseDateText(MATCH[1], order, now);
  const TIME = parseTimeText(MATCH[2]);
  return DATE && TIME ? { date: DATE, time: TIME } : null;
}

// ---------- month and year (mode="month" / mode="year") ----------

// "YYYY", "YYYY-MM", "YYYY-MM-DD" (also with time); the missing parts are 1
export function fromIsoAny(value) {
  const WEEK = /^(\d{4})-W(\d{2})$/.exec(value || "");
  if (WEEK) {
    return +WEEK[2] >= 1 && +WEEK[2] <= weeksInYear(+WEEK[1]) ? weekToDate(+WEEK[1], +WEEK[2]) : null;
  }
  const MATCH = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?/.exec(value || "");
  if (!MATCH) {
    return null;
  }
  const DATE = { year: +MATCH[1], month: MATCH[2] ? +MATCH[2] : 1, day: MATCH[3] ? +MATCH[3] : 1 };
  return isValidDateParts(DATE) ? DATE : null;
}

export function toIsoUnit(date, unit = "day") {
  if (!date) {
    return null;
  }
  if (unit === "year") {
    return pad(date.year, 4);
  }
  if (unit === "month") {
    return `${ pad(date.year, 4) }-${ pad(date.month) }`;
  }
  if (unit === "week") {
    const WEEK = isoWeek(date);
    return `${ pad(WEEK.year, 4) }-W${ pad(WEEK.week) }`;
  }
  return toIsoDate(date);
}

// compares only up to the unit: in "month" 05.03.2025 and 20.03.2025 are equal
export function compareByUnit(a, b, unit = "day") {
  if (unit === "week") {
    return compareDates(startOfWeek(a, 1), startOfWeek(b, 1));
  }
  if (a.year !== b.year || unit === "year") {
    return a.year - b.year;
  }
  if (a.month !== b.month || unit === "month") {
    return a.month - b.month;
  }
  return a.day - b.day;
}

export function isSameUnit(a, b, unit = "day") {
  return !!a && !!b && compareByUnit(a, b, unit) === 0;
}

// "3.2025", "03/25", "2025-03", "032025"; order without "day"
export function parseMonthText(text, order = ["month", "year"], now = new Date()) {
  const VALUE = `${ text ?? "" }`.trim();
  const ISO = /^(\d{4})-(\d{1,2})$/.exec(VALUE);
  let parts;
  if (ISO) {
    parts = { year: ISO[1], month: ISO[2] };
  } else if (/^\d{6}$/.test(VALUE)) {
    parts = order[0] === "year" ?
      { year: VALUE.slice(0, 4), month: VALUE.slice(4) } :
      { month: VALUE.slice(0, 2), year: VALUE.slice(2) };
  } else {
    const SPLIT = VALUE.split(/[./\s-]+/).filter(Boolean);
    if (SPLIT.length !== 2 || !SPLIT.every(part => /^\d+$/.test(part))) {
      return null;
    }
    parts = { [order[0]]: SPLIT[0], [order[1]]: SPLIT[1] };
  }
  const DATE = {
    year: parts.year.length <= 2 ? expandYear(+parts.year, now) : +parts.year,
    month: +parts.month,
    day: 1,
  };
  return isValidDateParts(DATE) ? DATE : null;
}

// "2025", "25"
export function parseYearText(text, now = new Date()) {
  const VALUE = `${ text ?? "" }`.trim();
  if (!/^\d{1,4}$/.test(VALUE)) {
    return null;
  }
  const DATE = { year: VALUE.length <= 2 ? expandYear(+VALUE, now) : +VALUE, month: 1, day: 1 };
  return isValidDateParts(DATE) ? DATE : null;
}

// ---------- weeks (ISO 8601: Monday, the week of the first Thursday is week 1) ----------

export function isoWeek(date) {
  const THURSDAY = addDays(date, 3 - (weekday(date) + 6) % 7);
  const JANUARY_FIRST = { year: THURSDAY.year, month: 1, day: 1 };
  return {
    year: THURSDAY.year,
    week: Math.floor((toUtc(THURSDAY) - toUtc(JANUARY_FIRST)) / 604800000) + 1,
  };
}

export function weeksInYear(year) {
  return isoWeek({ year, month: 12, day: 28 }).week;
}

// Monday of the week
export function weekToDate(year, week) {
  return addDays(startOfWeek({ year, month: 1, day: 4 }, 1), (week - 1) * 7);
}

// "2025-W10", "W10/2025", "KW 10 2025", "10.25", "10" (this year)
export function parseWeekText(text, now = new Date()) {
  const VALUE = `${ text ?? "" }`.trim();
  let year;
  let week;
  const ISO = /^(\d{4})-?W(\d{1,2})$/i.exec(VALUE);
  const LOCAL = /^\D*?(\d{1,2})(?:[\s./-]+(\d{2}|\d{4}))?$/.exec(VALUE);
  if (ISO) {
    year = +ISO[1];
    week = +ISO[2];
  } else if (LOCAL) {
    week = +LOCAL[1];
    if (LOCAL[2]) {
      year = LOCAL[2].length === 2 ? expandYear(+LOCAL[2], now) : +LOCAL[2];
    } else {
      year = isoWeek(todayParts(now)).year;
    }
  } else {
    return null;
  }
  if (year < 1 || year > 9999 || week < 1 || week > weeksInYear(year)) {
    return null;
  }
  return weekToDate(year, week);
}

// days from a to b: 01.03. - 03.03. = 2
export function daysBetween(a, b) {
  return Math.round((toUtc(b) - toUtc(a)) / 86400000);
}
