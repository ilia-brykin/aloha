import {
  describe,
  expect,
  it,
} from "vitest";

import {
  addDays,
  addMonths,
  clampDate,
  compareByUnit,
  daysBetween,
  daysInMonth,
  endOfWeek,
  expandYear,
  fromIsoAny,
  fromIsoDate,
  fromIsoTime,
  getMonthGrid,
  isoWeek,
  parseDateText,
  parseDateTimeText,
  parseMonthText,
  parseTimeText,
  parseWeekText,
  parseYearText,
  startOfWeek,
  toIsoDate,
  toIsoDateTime,
  toIsoTime,
  toIsoUnit,
  weeksInYear,
  weekToDate,
} from "../utils/dateUtils";

const NOW = new Date(2025, 2, 15);
const DMY = ["day", "month", "year"];
const MDY = ["month", "day", "year"];
const d = (year, month, day) => ({ year, month, day });

describe("dateUtils", () => {
  describe("parseDateText", () => {
    it("parses the usual German formats", () => {
      expect(parseDateText("05.03.2025", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("5.3.2025", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("5.3.25", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("05/03/2025", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("05-03-2025", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText(" 05 03 2025 ", DMY, NOW)).toEqual(d(2025, 3, 5));
    });

    it("parses ISO, digits only and day.month of the current year", () => {
      expect(parseDateText("2025-03-05", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("05032025", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("050325", DMY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("5.3", DMY, NOW)).toEqual(d(2025, 3, 5));
    });

    it("uses the order of the language", () => {
      expect(parseDateText("03/05/2025", MDY, NOW)).toEqual(d(2025, 3, 5));
      expect(parseDateText("03052025", MDY, NOW)).toEqual(d(2025, 3, 5));
    });

    it("rejects invalid dates and text", () => {
      expect(parseDateText("31.02.2025", DMY, NOW)).toBeNull();
      expect(parseDateText("13.13.2025", DMY, NOW)).toBeNull();
      expect(parseDateText("abc", DMY, NOW)).toBeNull();
      expect(parseDateText("1.2.3.4", DMY, NOW)).toBeNull();
      expect(parseDateText("", DMY, NOW)).toBeNull();
      expect(parseDateText("29.02.2025", DMY, NOW)).toBeNull();
      expect(parseDateText("29.02.2024", DMY, NOW)).toEqual(d(2024, 2, 29));
    });

    it("expands two-digit years up to 20 years in the future", () => {
      expect(expandYear(45, NOW)).toBe(2045);
      expect(expandYear(46, NOW)).toBe(1946);
      expect(expandYear(99, NOW)).toBe(1999);
    });
  });

  describe("parseTimeText", () => {
    it("parses 24 h, without separator and am / pm", () => {
      expect(parseTimeText("14:30")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
      expect(parseTimeText("14.30")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
      expect(parseTimeText("14h30")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
      expect(parseTimeText("1430")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
      expect(parseTimeText("9")).toEqual({ hours: 9, minutes: 0, seconds: 0 });
      expect(parseTimeText("2:30 pm")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
      expect(parseTimeText("12:00 am")).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    });

    it("rejects invalid times", () => {
      expect(parseTimeText("24:00")).toBeNull();
      expect(parseTimeText("12:60")).toBeNull();
      expect(parseTimeText("13 pm")).toBeNull();
      expect(parseTimeText("x")).toBeNull();
    });
  });

  it("parses date and time together", () => {
    expect(parseDateTimeText("05.03.2025 14:30", DMY, NOW)).toEqual({ date: d(2025, 3, 5), time: { hours: 14, minutes: 30, seconds: 0 } });
    expect(parseDateTimeText("2025-03-05T14:30", DMY, NOW)).toEqual({ date: d(2025, 3, 5), time: { hours: 14, minutes: 30, seconds: 0 } });
    expect(parseDateTimeText("5.3.25, 2:30 pm", DMY, NOW)).toEqual({ date: d(2025, 3, 5), time: { hours: 14, minutes: 30, seconds: 0 } });
    expect(parseDateTimeText("05.03.2025", DMY, NOW)).toBeNull();
  });

  it("converts from and to ISO", () => {
    expect(toIsoDate(d(2025, 3, 5))).toBe("2025-03-05");
    expect(toIsoTime({ hours: 9, minutes: 5, seconds: 0 })).toBe("09:05");
    expect(toIsoDateTime(d(2025, 3, 5), { hours: 14, minutes: 30, seconds: 0 })).toBe("2025-03-05T14:30");
    expect(fromIsoDate("2025-03-05")).toEqual(d(2025, 3, 5));
    expect(fromIsoDate("2025-03-05T14:30")).toEqual(d(2025, 3, 5));
    expect(fromIsoDate("2025-02-30")).toBeNull();
    expect(fromIsoTime("2025-03-05T14:30")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
    expect(fromIsoTime("14:30")).toEqual({ hours: 14, minutes: 30, seconds: 0 });
  });

  it("calculates with days, months and weeks", () => {
    expect(daysInMonth(2024, 2)).toBe(29);
    expect(addDays(d(2025, 2, 28), 1)).toEqual(d(2025, 3, 1));
    expect(addDays(d(2025, 1, 1), -1)).toEqual(d(2024, 12, 31));
    expect(addMonths(d(2025, 1, 31), 1)).toEqual(d(2025, 2, 28));
    expect(addMonths(d(2025, 1, 15), -1)).toEqual(d(2024, 12, 15));
    expect(addMonths(d(2024, 2, 29), 12)).toEqual(d(2025, 2, 28));
    // 15.03.2025 is a Saturday
    expect(startOfWeek(d(2025, 3, 15), 1)).toEqual(d(2025, 3, 10));
    expect(endOfWeek(d(2025, 3, 15), 1)).toEqual(d(2025, 3, 16));
    expect(startOfWeek(d(2025, 3, 15), 0)).toEqual(d(2025, 3, 9));
  });

  it("builds 6 weeks of a month that start with the first day of the week", () => {
    const GRID = getMonthGrid({ year: 2025, month: 3 }, 1);
    expect(GRID).toHaveLength(6);
    expect(GRID[0][0]).toEqual(d(2025, 2, 24));
    expect(GRID.flat().filter(day => day.month === 3)).toHaveLength(31);
  });

  it("clamps a date to min and max", () => {
    expect(clampDate(d(2025, 1, 1), d(2025, 2, 1), null)).toEqual(d(2025, 2, 1));
    expect(clampDate(d(2025, 5, 1), null, d(2025, 4, 1))).toEqual(d(2025, 4, 1));
    expect(clampDate(d(2025, 3, 1), d(2025, 2, 1), d(2025, 4, 1))).toEqual(d(2025, 3, 1));
  });
});

describe("dateUtils month and year", () => {
  it("parses months and years", () => {
    expect(parseMonthText("3.2025", ["month", "year"], NOW)).toEqual(d(2025, 3, 1));
    expect(parseMonthText("03/25", ["month", "year"], NOW)).toEqual(d(2025, 3, 1));
    expect(parseMonthText("2025-03", ["month", "year"], NOW)).toEqual(d(2025, 3, 1));
    expect(parseMonthText("032025", ["month", "year"], NOW)).toEqual(d(2025, 3, 1));
    expect(parseMonthText("2025/03", ["year", "month"], NOW)).toEqual(d(2025, 3, 1));
    expect(parseMonthText("13.2025", ["month", "year"], NOW)).toBeNull();
    expect(parseMonthText("5.3.2025", ["month", "year"], NOW)).toBeNull();
    expect(parseYearText("2025", NOW)).toEqual(d(2025, 1, 1));
    expect(parseYearText("25", NOW)).toEqual(d(2025, 1, 1));
    expect(parseYearText("20255", NOW)).toBeNull();
  });

  it("converts and compares by unit", () => {
    expect(fromIsoAny("2025-03")).toEqual(d(2025, 3, 1));
    expect(fromIsoAny("2025")).toEqual(d(2025, 1, 1));
    expect(fromIsoAny("2025-03-05T14:30")).toEqual(d(2025, 3, 5));
    expect(toIsoUnit(d(2025, 3, 5), "month")).toBe("2025-03");
    expect(toIsoUnit(d(2025, 3, 5), "year")).toBe("2025");
    expect(compareByUnit(d(2025, 3, 5), d(2025, 3, 20), "month")).toBe(0);
    expect(compareByUnit(d(2025, 3, 5), d(2025, 3, 20), "day")).toBeLessThan(0);
    expect(compareByUnit(d(2025, 3, 5), d(2025, 12, 20), "year")).toBe(0);
  });
});

describe("dateUtils seconds, weeks and days", () => {
  it("parses and writes seconds", () => {
    expect(parseTimeText("14:30:15")).toEqual({ hours: 14, minutes: 30, seconds: 15 });
    expect(parseTimeText("143015")).toEqual({ hours: 14, minutes: 30, seconds: 15 });
    expect(parseTimeText("14:30:60")).toBeNull();
    expect(toIsoTime({ hours: 9, minutes: 5, seconds: 7 }, true)).toBe("09:05:07");
    expect(fromIsoTime("2025-03-05T14:30:15")).toEqual({ hours: 14, minutes: 30, seconds: 15 });
  });

  it("calculates ISO weeks", () => {
    expect(isoWeek(d(2025, 3, 5))).toEqual({ year: 2025, week: 10 });
    // 29.12.2025 is in week 1 of 2026, 01.01.2021 in week 53 of 2020
    expect(isoWeek(d(2025, 12, 29))).toEqual({ year: 2026, week: 1 });
    expect(isoWeek(d(2021, 1, 1))).toEqual({ year: 2020, week: 53 });
    expect(weeksInYear(2020)).toBe(53);
    expect(weeksInYear(2025)).toBe(52);
    expect(weekToDate(2025, 10)).toEqual(d(2025, 3, 3));
    expect(toIsoUnit(d(2025, 3, 9), "week")).toBe("2025-W10");
    expect(fromIsoAny("2025-W10")).toEqual(d(2025, 3, 3));
    expect(compareByUnit(d(2025, 3, 3), d(2025, 3, 9), "week")).toBe(0);
  });

  it("parses weeks", () => {
    expect(parseWeekText("2025-W10", NOW)).toEqual(d(2025, 3, 3));
    expect(parseWeekText("KW 10/2025", NOW)).toEqual(d(2025, 3, 3));
    expect(parseWeekText("10.25", NOW)).toEqual(d(2025, 3, 3));
    expect(parseWeekText("10", NOW)).toEqual(d(2025, 3, 3));
    expect(parseWeekText("53/2025", NOW)).toBeNull();
    expect(parseWeekText("53/2020", NOW)).toEqual(d(2020, 12, 28));
  });

  it("counts days", () => {
    expect(daysBetween(d(2025, 3, 1), d(2025, 3, 3))).toBe(2);
    expect(daysBetween(d(2025, 3, 30), d(2025, 3, 31))).toBe(1);
  });
});
