import {
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ACalendar from "../ACalendar";
import {
  getCalendarIcs,
} from "../utils/ics";

// The times are written in UTC: the expected values come from the local time of the test
const utc = (...args) => new Date(...args).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const NOW = new Date(Date.UTC(2026, 10, 20, 8, 30, 0));
const lines = ics => ics.split("\r\n");
const getVevents = ics => ics.split("BEGIN:VEVENT").slice(1).map(part => lines(part.split("END:VEVENT")[0]).filter(Boolean));

describe("getCalendarIcs", () => {
  it("a calendar with CRLF, the header and the name", () => {
    const ICS = getCalendarIcs({ events: [], calendarName: "Team, Berlin", now: NOW });
    expect(ICS).toBe([
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//aloha-vue//ACalendar//EN",
      "CALSCALE:GREGORIAN",
      "X-WR-CALNAME:Team\\, Berlin",
      "END:VCALENDAR",
      "",
    ].join("\r\n"));
  });

  it("an event with a time in UTC", () => {
    const [EVENT] = getVevents(getCalendarIcs({
      events: [{ id: 7, label: "Meeting", start: "2026-03-10T09:00:00", end: "2026-03-10T10:30:00" }],
      now: NOW,
    }));
    expect(EVENT).toEqual([
      "UID:7@aloha-vue",
      "DTSTAMP:20261120T083000Z",
      `DTSTART:${ utc(2026, 2, 10, 9, 0) }`,
      `DTEND:${ utc(2026, 2, 10, 10, 30) }`,
      "SUMMARY:Meeting",
    ]);
  });

  it("all day: dates and the end is the day after the last day", () => {
    const [EVENT] = getVevents(getCalendarIcs({
      events: [{ id: 1, label: "Trip", start: "2026-03-09", end: "2026-03-17", isAllDay: true }],
      now: NOW,
      uidDomain: "example.com",
    }));
    expect(EVENT).toContain("UID:1@example.com");
    expect(EVENT).toContain("DTSTART;VALUE=DATE:20260309");
    expect(EVENT).toContain("DTEND;VALUE=DATE:20260318");
  });

  it("an event without an end has no DTEND, an event without a start is skipped", () => {
    const EVENTS = getVevents(getCalendarIcs({
      events: [{ id: 1, label: "Call", start: "2026-03-10T12:00:00" }, { id: 2, label: "Nothing" }],
      now: NOW,
    }));
    expect(EVENTS).toHaveLength(1);
    expect(EVENTS[0].some(line => line.startsWith("DTEND"))).toBe(false);
  });

  it("a series: RRULE and EXDATE", () => {
    const [WEEKLY, MONTHLY, YEARLY] = getVevents(getCalendarIcs({
      events: [
        { id: 1, label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", recurrence: { frequency: "weekly", interval: 2, weekdays: [1, 3], until: "2026-06-30", exceptions: ["2026-03-18", "2026-03-04"] } },
        { id: 2, label: "Report", start: "2026-03-15", isAllDay: true, recurrence: { frequency: "monthly", count: 6, until: "2026-12-31", exceptions: ["2026-05-15"] } },
        { id: 3, label: "Birthday", start: "2026-03-20", isAllDay: true, recurrence: { frequency: "yearly" } },
      ],
      now: NOW,
    }));
    // A series with a time is written in the local time without a time zone: it keeps its hour in summer time
    expect(WEEKLY).toContain("DTSTART:20260302T090000");
    expect(WEEKLY).toContain("DTEND:20260302T091500");
    expect(WEEKLY).toContain("RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE;UNTIL=20260630T235959");
    expect(WEEKLY.filter(line => line.startsWith("EXDATE"))).toEqual(["EXDATE:20260304T090000", "EXDATE:20260318T090000"]);
    expect(MONTHLY).toContain("RRULE:FREQ=MONTHLY;COUNT=6;UNTIL=20261231");
    expect(MONTHLY).toContain("EXDATE;VALUE=DATE:20260515");
    expect(YEARLY).toContain("RRULE:FREQ=YEARLY");
  });

  it("the text is escaped, long lines are folded at 75 bytes without splitting a character", () => {
    const LABEL = `Plan; Kosten, Termine\\Notizen\n${ "ü".repeat(60) }`;
    const ICS = getCalendarIcs({ events: [{ id: 1, label: LABEL, start: "2026-03-10" }], now: NOW });
    const SUMMARY_LINES = [];
    lines(ICS).forEach((line, index, all) => {
      if (line.startsWith("SUMMARY:") || (SUMMARY_LINES.length && line.startsWith(" ") && all[index - 1] === SUMMARY_LINES.at(-1))) {
        SUMMARY_LINES.push(line);
      }
    });
    expect(SUMMARY_LINES.length).toBeGreaterThan(1);
    SUMMARY_LINES.forEach(line => expect(new TextEncoder().encode(line).length).toBeLessThanOrEqual(75));
    expect(SUMMARY_LINES.map((line, index) => index ? line.slice(1) : line).join("")).toBe(`SUMMARY:Plan\\; Kosten\\, Termine\\\\Notizen\\n${ "ü".repeat(60) }`);
  });

  it("other keys", () => {
    const [EVENT] = getVevents(getCalendarIcs({
      events: [{ uuid: "a1", title: "Custom", from: "2026-03-10T09:00:00", to: "2026-03-10T10:00:00" }],
      keyId: "uuid",
      keyLabel: "title",
      keyStart: "from",
      keyEnd: item => item.to,
      now: NOW,
    }));
    expect(EVENT).toContain("UID:a1@aloha-vue");
    expect(EVENT).toContain("SUMMARY:Custom");
    expect(EVENT).toContain(`DTEND:${ utc(2026, 2, 10, 10, 0) }`);
  });
});

describe("ACalendar export", () => {
  const EVENTS = [
    { uuid: 1, title: "Meeting", start: "2026-03-10T09:00:00", end: "2026-03-10T10:00:00" },
    { uuid: 2, title: "Next year", start: "2027-05-01", isAllDay: true },
  ];

  it("getIcs exports all events with the keys of the calendar", () => {
    const wrapper = mount(ACalendar, { props: { modelValue: "2026-03-10", events: EVENTS, keyId: "uuid", keyLabel: "title" } });
    const ICS = wrapper.vm.getIcs({ calendarName: "Team" });
    expect(ICS).toContain("X-WR-CALNAME:Team");
    expect(ICS).toContain("UID:1@aloha-vue");
    expect(ICS).toContain("SUMMARY:Meeting");
    // Not only the shown month
    expect(ICS).toContain("SUMMARY:Next year");
    wrapper.unmount();
  });

  it("downloadIcs downloads a file", async() => {
    const wrapper = mount(ACalendar, { props: { events: EVENTS, keyId: "uuid", keyLabel: "title" } });
    const BLOBS = [];
    URL.createObjectURL = vi.fn(blob => {
      BLOBS.push(blob);
      return "blob:calendar";
    });
    URL.revokeObjectURL = vi.fn();
    const CLICK = vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function() {
      expect(this.download).toBe("team.ics");
      expect(this.href).toBe("blob:calendar");
    });

    wrapper.vm.downloadIcs({ fileName: "team.ics" });
    expect(CLICK).toHaveBeenCalledTimes(1);
    expect(BLOBS[0].type).toBe("text/calendar;charset=utf-8");
    expect(await BLOBS[0].text()).toContain("SUMMARY:Meeting");
    await new Promise(resolve => setTimeout(resolve));
    expect(URL.revokeObjectURL).toHaveBeenCalledWith("blob:calendar");
    CLICK.mockRestore();
    wrapper.unmount();
  });
});
