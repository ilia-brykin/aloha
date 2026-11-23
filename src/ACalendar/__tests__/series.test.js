import {
  describe,
  expect,
  it,
} from "vitest";

import {
  addCalendarException,
  detachCalendarOccurrence,
  moveCalendarSeries,
  splitCalendarSeries,
} from "../utils/series";

const STANDUP = {
  id: "standup",
  label: "Standup",
  start: "2026-03-02T09:00:00",
  end: "2026-03-02T09:15:00",
  recurrence: { frequency: "weekly", weekdays: [1, 3], exceptions: ["2026-03-04"] },
};
// The occurrence on Wednesday, the 11th of March
const OCCURRENCE = { date: "2026-03-11", start: new Date(2026, 2, 11, 9, 0), end: new Date(2026, 2, 11, 9, 15) };

describe("calendar series helpers", () => {
  it("addCalendarException", () => {
    expect(addCalendarException(STANDUP, "2026-03-09").recurrence.exceptions).toEqual(["2026-03-04", "2026-03-09"]);
    expect(addCalendarException({ id: 1, rule: { frequency: "daily" } }, new Date(2026, 2, 9), { keyRecurrence: "rule" }).rule)
      .toEqual({ frequency: "daily", exceptions: ["2026-03-09"] });
    // The item is not changed
    expect(STANDUP.recurrence.exceptions).toEqual(["2026-03-04"]);
  });

  it("detachCalendarOccurrence: only this occurrence", () => {
    const { series, event } = detachCalendarOccurrence({
      item: STANDUP,
      occurrence: OCCURRENCE,
      start: new Date(2026, 2, 12, 10, 0),
      end: new Date(2026, 2, 12, 10, 30),
    });
    expect(series.recurrence.exceptions).toEqual(["2026-03-04", "2026-03-11"]);
    expect(event).toEqual({ id: "standup_2026-03-11", label: "Standup", start: "2026-03-12T10:00:00", end: "2026-03-12T10:30:00" });
  });

  it("splitCalendarSeries: this and the following occurrences", () => {
    const { before, after } = splitCalendarSeries({
      item: STANDUP,
      occurrence: OCCURRENCE,
      start: new Date(2026, 2, 11, 10, 0),
      end: new Date(2026, 2, 11, 10, 30),
      id: "standup-new",
    });
    expect(before.recurrence).toEqual({ frequency: "weekly", weekdays: [1, 3], exceptions: ["2026-03-04"], until: "2026-03-10" });
    expect(after).toEqual({
      id: "standup-new",
      label: "Standup",
      start: "2026-03-11T10:00:00",
      end: "2026-03-11T10:30:00",
      recurrence: { frequency: "weekly", weekdays: [1, 3] },
    });
  });

  it("splitCalendarSeries with count: the occurrences are shared, the first occurrence changes the whole series", () => {
    const SERIES = { ...STANDUP, recurrence: { frequency: "weekly", weekdays: [1, 3], count: 10 } };
    // Before the 11th: the 2nd, 4th and 9th
    const { before, after } = splitCalendarSeries({ item: SERIES, occurrence: OCCURRENCE });
    expect(before.recurrence).toEqual({ frequency: "weekly", weekdays: [1, 3], count: 3 });
    expect(after.recurrence.count).toBe(7);
    expect(after.start).toBe("2026-03-11T09:00:00");

    const FIRST = splitCalendarSeries({ item: SERIES, occurrence: { date: "2026-03-02", start: new Date(2026, 2, 2, 9, 0), end: new Date(2026, 2, 2, 9, 15) } });
    expect(FIRST.before).toBeNull();
    expect(FIRST.after.recurrence.count).toBe(10);
  });

  it("moveCalendarSeries: the whole series moves like the occurrence", () => {
    // Wednesday 9:00 → Thursday 10:00, 30 minutes long
    const MOVED = moveCalendarSeries({
      item: STANDUP,
      occurrence: OCCURRENCE,
      start: new Date(2026, 2, 12, 10, 0),
      end: new Date(2026, 2, 12, 10, 30),
    });
    expect(MOVED.start).toBe("2026-03-03T10:00:00");
    expect(MOVED.end).toBe("2026-03-03T10:30:00");
    expect(MOVED.recurrence).toEqual({ frequency: "weekly", weekdays: [2, 4], exceptions: ["2026-03-05"] });
  });

  it("all-day series keep dates", () => {
    const REPORT = { id: 1, start: "2026-03-15", end: "2026-03-15", isAllDay: true, recurrence: { frequency: "monthly" } };
    const OCCURRENCE_APRIL = { date: "2026-04-15", start: new Date(2026, 3, 15), end: new Date(2026, 3, 15) };
    const { event } = detachCalendarOccurrence({ item: REPORT, occurrence: OCCURRENCE_APRIL, start: new Date(2026, 3, 16), end: new Date(2026, 3, 16) });
    expect(event).toMatchObject({ start: "2026-04-16", end: "2026-04-16" });
    expect(moveCalendarSeries({ item: REPORT, occurrence: OCCURRENCE_APRIL, start: new Date(2026, 3, 17), end: new Date(2026, 3, 17) }).start).toBe("2026-03-17");
  });
});
