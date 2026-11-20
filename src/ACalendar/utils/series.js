import moment from "moment";
import {
  countOccurrencesBefore,
  normalizeRecurrence,
  toDayKey,
} from "./utils";
import {
  isNil,
  omitBy,
} from "lodash-es";

/**
 * Helpers for "only this occurrence" and "the whole series" (e.g. after event-drop, event-resize or event-click
 * of an occurrence). They do not change the item: they return new items, the parent saves them.
 * The keys are the same as the props of ACalendar (only names, no functions). New dates are written
 * as "YYYY-MM-DD" (all day) or "YYYY-MM-DDTHH:mm:ss".
 */
const KEYS_DEFAULT = {
  keyEnd: "end",
  keyId: "id",
  keyIsAllDay: "isAllDay",
  keyRecurrence: "recurrence",
  keyStart: "start",
};

const formatDate = (date, isAllDay) => moment(date).format(isAllDay ? "YYYY-MM-DD" : "YYYY-MM-DD[T]HH:mm:ss");

// The rule without empty parts (no "until: undefined")
const cleanRecurrence = recurrence => omitBy(recurrence, value => isNil(value) || (Array.isArray(value) && !value.length));

/**
 * Adds a day ("YYYY-MM-DD", Date) to the exceptions of a series: this occurrence is not shown any more.
 */
export function addCalendarException(item, date, { keyRecurrence = KEYS_DEFAULT.keyRecurrence } = {}) {
  const RECURRENCE = item[keyRecurrence] || {};
  return {
    ...item,
    [keyRecurrence]: {
      ...RECURRENCE,
      exceptions: [...new Set([...(RECURRENCE.exceptions || []), toDayKey(date)])].sort(),
    },
  };
}

/**
 * "Only this occurrence": the occurrence becomes a single event (with a new start and end, e.g. from event-drop),
 * the series gets an exception for its day.
 *
 * @param {Object} item - The series
 * @param {Object} occurrence - The occurrence of the event of the calendar: { date, start, end }
 * @param {Date} [start=occurrence.start] - The new start of the single event
 * @param {Date} [end=occurrence.end] - The new end of the single event
 * @param {*} [id] - The id of the single event (default: id of the series + "_" + the day)
 *
 * @returns {{ series: Object, event: Object }}
 */
export function detachCalendarOccurrence({ item, occurrence, start = occurrence.start, end = occurrence.end, id, ...keys }) {
  const KEYS = { ...KEYS_DEFAULT, ...keys };
  const IS_ALL_DAY = !!item[KEYS.keyIsAllDay];
  const EVENT = {
    ...item,
    [KEYS.keyId]: id ?? `${ item[KEYS.keyId] }_${ occurrence.date }`,
    [KEYS.keyStart]: formatDate(start, IS_ALL_DAY),
    [KEYS.keyEnd]: formatDate(end, IS_ALL_DAY),
  };
  delete EVENT[KEYS.keyRecurrence];
  return {
    series: addCalendarException(item, occurrence.date, { keyRecurrence: KEYS.keyRecurrence }),
    event: EVENT,
  };
}

/**
 * "This and the following occurrences": the series ends the day before the occurrence,
 * a new series starts at the occurrence (with a new start and end). count and the exceptions are shared.
 *
 * @returns {{ before: Object | null, after: Object }} - before is null if the occurrence is the first one
 */
export function splitCalendarSeries({ item, occurrence, start = occurrence.start, end = occurrence.end, id, ...keys }) {
  const KEYS = { ...KEYS_DEFAULT, ...keys };
  const IS_ALL_DAY = !!item[KEYS.keyIsAllDay];
  const RECURRENCE = item[KEYS.keyRecurrence] || {};
  const COUNT_BEFORE = countOccurrencesBefore({
    start: item[KEYS.keyStart],
    recurrence: normalizeRecurrence(RECURRENCE),
    dayKey: occurrence.date,
  });
  const EXCEPTIONS = RECURRENCE.exceptions || [];
  const AFTER = {
    ...item,
    [KEYS.keyId]: id ?? `${ item[KEYS.keyId] }_${ occurrence.date }`,
    [KEYS.keyStart]: formatDate(start, IS_ALL_DAY),
    [KEYS.keyEnd]: formatDate(end, IS_ALL_DAY),
    [KEYS.keyRecurrence]: cleanRecurrence({
      ...RECURRENCE,
      count: RECURRENCE.count ? RECURRENCE.count - COUNT_BEFORE : undefined,
      exceptions: EXCEPTIONS.filter(day => toDayKey(day) >= occurrence.date),
    }),
  };
  if (!COUNT_BEFORE) {
    return { before: null, after: AFTER };
  }
  return {
    // With count the first part keeps its number of occurrences, otherwise it ends the day before
    before: {
      ...item,
      [KEYS.keyRecurrence]: cleanRecurrence({
        ...RECURRENCE,
        count: RECURRENCE.count ? COUNT_BEFORE : undefined,
        until: RECURRENCE.count ? undefined : moment(occurrence.date).subtract(1, "day").format("YYYY-MM-DD"),
        exceptions: EXCEPTIONS.filter(day => toDayKey(day) < occurrence.date),
      }),
    },
    after: AFTER,
  };
}

/**
 * "The whole series": the series moves like the occurrence (from occurrence.start to start) and gets its duration
 * (end - start). The weekdays and the exceptions move by the same days.
 */
export function moveCalendarSeries({ item, occurrence, start = occurrence.start, end = occurrence.end, ...keys }) {
  const KEYS = { ...KEYS_DEFAULT, ...keys };
  const IS_ALL_DAY = !!item[KEYS.keyIsAllDay];
  const RECURRENCE = item[KEYS.keyRecurrence] || {};
  const SHIFT_MS = moment(start).diff(moment(occurrence.start));
  const SHIFT_DAYS = moment(start).startOf("day").diff(moment(occurrence.start).startOf("day"), "days");
  const NEW_START = moment(item[KEYS.keyStart]).add(SHIFT_MS, "ms");
  const NEW_END = NEW_START.clone().add(moment(end).diff(moment(start)), "ms");
  return {
    ...item,
    [KEYS.keyStart]: formatDate(NEW_START, IS_ALL_DAY),
    [KEYS.keyEnd]: formatDate(NEW_END, IS_ALL_DAY),
    [KEYS.keyRecurrence]: cleanRecurrence({
      ...RECURRENCE,
      weekdays: RECURRENCE.weekdays?.map(day => ((day + SHIFT_DAYS) % 7 + 7) % 7).sort(),
      exceptions: RECURRENCE.exceptions?.map(day => moment(day).add(SHIFT_DAYS, "days").format("YYYY-MM-DD")),
    }),
  };
}
