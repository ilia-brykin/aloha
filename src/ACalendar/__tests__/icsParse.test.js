import {
  describe,
  expect,
  it,
} from "vitest";

import moment from "moment";
import {
  getCalendarIcs,
} from "../utils/ics";
import {
  parseCalendarIcs,
} from "../utils/icsParse";

const calendar = (...vevents) => [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Test//EN",
  ...vevents.flatMap(lines => ["BEGIN:VEVENT", ...lines, "END:VEVENT"]),
  "END:VCALENDAR",
].join("\r\n");
// A moment in UTC as the local time of the test, like the parser writes it
const localFromUtc = (...args) => moment(new Date(Date.UTC(...args))).format("YYYY-MM-DD[T]HH:mm:ss");

describe("parseCalendarIcs", () => {
  it("an event in UTC becomes the local time", () => {
    const { events, skipped, warnings } = parseCalendarIcs(calendar([
      "UID:meeting-1",
      "SUMMARY:Meeting",
      "DTSTART:20260310T080000Z",
      "DTEND:20260310T093000Z",
    ]));
    expect(events).toEqual([{
      id: "meeting-1",
      label: "Meeting",
      start: localFromUtc(2026, 2, 10, 8, 0),
      end: localFromUtc(2026, 2, 10, 9, 30),
    }]);
    expect(skipped).toEqual([]);
    expect(warnings).toEqual([]);
  });

  it("all day: the end is the last day, not the day after it", () => {
    const { events } = parseCalendarIcs(calendar(
      ["UID:trip", "SUMMARY:Trip", "DTSTART;VALUE=DATE:20260309", "DTEND;VALUE=DATE:20260318"],
      ["UID:holiday", "SUMMARY:Holiday", "DTSTART;VALUE=DATE:20260320"],
    ));
    expect(events).toEqual([
      { id: "trip", label: "Trip", start: "2026-03-09", end: "2026-03-17", isAllDay: true },
      { id: "holiday", label: "Holiday", start: "2026-03-20", end: "2026-03-20", isAllDay: true },
    ]);
  });

  it("TZID with summer time, a time without a time zone is the local time", () => {
    const { events } = parseCalendarIcs(calendar(
      // 9:00 in New York: UTC-5 in winter, UTC-4 after the 8th of March 2026
      ["UID:a", "DTSTART;TZID=America/New_York:20260305T090000"],
      ["UID:b", "DTSTART;TZID=\"America/New_York\":20260310T090000"],
      ["UID:c", "DTSTART:20260310T090000"],
    ));
    expect(events[0].start).toBe(localFromUtc(2026, 2, 5, 14, 0));
    expect(events[1].start).toBe(localFromUtc(2026, 2, 10, 13, 0));
    expect(events[2].start).toBe("2026-03-10T09:00:00");
  });

  it("an unknown time zone (Windows name of Outlook): the local time and a warning", () => {
    const { events, warnings } = parseCalendarIcs(calendar(["UID:w", "SUMMARY:Outlook", "DTSTART;TZID=W. Europe Standard Time:20260310T090000"]));
    expect(events[0].start).toBe("2026-03-10T09:00:00");
    expect(warnings).toEqual([{ uid: "w", label: "Outlook", code: "timeZoneUnknown", value: "W. Europe Standard Time" }]);
  });

  it("folded lines, escaped text, DURATION, DESCRIPTION and LOCATION, alarms are ignored", () => {
    const { events } = parseCalendarIcs(calendar([
      "UID:long",
      "SUMMARY:Plan\\; Kosten\\, Termine\\\\Notizen\\nzweite Zei",
      " le",
      "DTSTART:20260310T090000",
      "DURATION:PT1H30M",
      "DESCRIPTION:Bitte vorbereiten",
      "LOCATION:Raum 3",
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder",
      "TRIGGER:-PT15M",
      "END:VALARM",
    ]).replace(/\r\n/g, "\n"));
    expect(events).toEqual([{
      id: "long",
      label: "Plan; Kosten, Termine\\Notizen\nzweite Zeile",
      start: "2026-03-10T09:00:00",
      end: "2026-03-10T10:30:00",
      description: "Bitte vorbereiten",
      location: "Raum 3",
    }]);
  });

  it("RRULE and EXDATE in the rule of the calendar", () => {
    const { events, warnings } = parseCalendarIcs(calendar(
      ["UID:standup", "DTSTART:20260302T090000", "DTEND:20260302T091500", "RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,WE;UNTIL=20260630T235959;WKST=MO", "EXDATE:20260318T090000,20260304T090000", "EXDATE:20260401T090000"],
      ["UID:report", "DTSTART;VALUE=DATE:20260315", "RRULE:FREQ=MONTHLY;COUNT=6;BYMONTHDAY=15"],
      ["UID:birthday", "DTSTART;VALUE=DATE:20260320", "RRULE:FREQ=YEARLY;BYMONTH=3"],
    ));
    expect(events[0].recurrence).toEqual({ frequency: "weekly", interval: 2, weekdays: [1, 3], until: "2026-06-30", exceptions: ["2026-03-04", "2026-03-18", "2026-04-01"] });
    expect(events[1].recurrence).toEqual({ frequency: "monthly", count: 6 });
    expect(events[2].recurrence).toEqual({ frequency: "yearly" });
    expect(warnings).toEqual([]);
  });

  it("a rule the calendar cannot show: the event once and a warning", () => {
    const { events, warnings } = parseCalendarIcs(calendar(
      ["UID:second-tuesday", "SUMMARY:Board", "DTSTART:20260310T090000", "RRULE:FREQ=MONTHLY;BYDAY=2TU"],
      ["UID:hourly", "SUMMARY:Ping", "DTSTART:20260310T090000", "RRULE:FREQ=HOURLY"],
    ));
    expect(events.every(event => !event.recurrence)).toBe(true);
    expect(warnings.map(warning => [warning.uid, warning.code, warning.value])).toEqual([
      ["second-tuesday", "rruleNotSupported", "FREQ=MONTHLY;BYDAY=2TU"],
      ["hourly", "rruleNotSupported", "FREQ=HOURLY"],
    ]);
  });

  it("a changed occurrence: a single event and an exception of its series", () => {
    const { events } = parseCalendarIcs(calendar(
      ["UID:standup", "SUMMARY:Standup", "DTSTART:20260302T090000", "DTEND:20260302T091500", "RRULE:FREQ=DAILY;COUNT=10"],
      ["UID:standup", "SUMMARY:Standup (later)", "RECURRENCE-ID:20260304T090000", "DTSTART:20260304T110000", "DTEND:20260304T111500"],
    ));
    expect(events).toHaveLength(2);
    expect(events[0].recurrence).toEqual({ frequency: "daily", count: 10, exceptions: ["2026-03-04"] });
    expect(events[1]).toEqual({ id: "standup_2026-03-04", label: "Standup (later)", start: "2026-03-04T11:00:00", end: "2026-03-04T11:15:00" });
  });

  it("cancelled events and events without a start are skipped, ids are unique", () => {
    const { events, skipped } = parseCalendarIcs(calendar(
      ["UID:x", "SUMMARY:Cancelled", "STATUS:CANCELLED", "DTSTART:20260310T090000"],
      ["UID:y", "SUMMARY:No start"],
      ["UID:same", "DTSTART:20260310T090000"],
      ["UID:same", "DTSTART:20260311T090000"],
      ["DTSTART:20260312T090000"],
    ));
    expect(skipped).toEqual([{ uid: "x", label: "Cancelled", code: "cancelled" }, { uid: "y", label: "No start", code: "noStart" }]);
    expect(events.map(event => event.id)).toEqual(["same", "same_2", "ics_2"]);
  });

  it("other keys of the events", () => {
    const { events } = parseCalendarIcs(calendar(["UID:k", "SUMMARY:Keys", "DTSTART;VALUE=DATE:20260310", "RRULE:FREQ=DAILY;COUNT=2"]), {
      keyId: "uuid",
      keyLabel: "title",
      keyStart: "from",
      keyEnd: item => item.to,
      keyIsAllDay: "allDay",
      keyRecurrence: "rule",
    });
    expect(events).toEqual([{ uuid: "k", title: "Keys", from: "2026-03-10", end: "2026-03-10", allDay: true, rule: { frequency: "daily", count: 2 } }]);
  });

  it("export and import give the same events", () => {
    const EVENTS = [
      { id: 1, label: "Meeting; Raum 3", start: "2026-03-10T09:00:00", end: "2026-03-10T10:30:00" },
      { id: 2, label: "Vacation", start: "2026-03-08", end: "2026-03-14", isAllDay: true },
      { id: "standup", label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", recurrence: { frequency: "weekly", weekdays: [1, 2, 3, 4, 5], exceptions: ["2026-03-12"], until: "2026-06-30" } },
      { id: 4, label: "Report", start: "2026-03-15", end: "2026-03-15", isAllDay: true, recurrence: { frequency: "monthly", interval: 2, count: 6 } },
    ];
    const { events, warnings } = parseCalendarIcs(getCalendarIcs({ events: EVENTS }));
    expect(warnings).toEqual([]);
    expect(events).toEqual([
      { ...EVENTS[0], id: "1@aloha-vue" },
      { ...EVENTS[1], id: "2@aloha-vue" },
      { ...EVENTS[2], id: "standup@aloha-vue" },
      { ...EVENTS[3], id: "4@aloha-vue" },
    ]);
  });

  it("an empty or broken text has no events", () => {
    expect(parseCalendarIcs("")).toEqual({ events: [], skipped: [], warnings: [] });
    expect(parseCalendarIcs("not a calendar").events).toEqual([]);
    expect(parseCalendarIcs(undefined).events).toEqual([]);
  });
});
