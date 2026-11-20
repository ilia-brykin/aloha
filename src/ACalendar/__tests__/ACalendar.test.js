import {
  h,
  nextTick,
} from "vue";
import {
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  getTimedLayout,
  getWeekDays,
  getWeeks,
  getWeekSegments,
} from "../utils/utils";

import ACalendar from "../ACalendar";

const EVENTS = [
  { id: 1, label: "Trip", start: "2026-03-09", end: "2026-03-17", color: "success", isAllDay: true },
  { id: 2, label: "Meeting", start: "2026-03-10T09:00:00", end: "2026-03-10T10:30:00" },
  { id: 3, label: "Custom", start: "2026-03-10T12:00:00", color: "#8e44ad" },
];

const mountCalendar = (props = {}, options = {}) => {
  return mount(ACalendar, {
    props: {
      modelValue: "2026-03-10",
      events: EVENTS,
      ...props,
    },
    attachTo: document.body,
    ...options,
  });
};

describe("ACalendar utils", () => {
  it("getWeeks: 6 weeks starting with the first day of the week", () => {
    const WEEKS = getWeeks({ month: "2026-03-01", firstDayOfWeek: 1 });
    expect(WEEKS).toHaveLength(6);
    expect(WEEKS[0][0].key).toBe("2026-02-23");
    expect(WEEKS[0][0].isCurrentMonth).toBe(false);
    expect(WEEKS[0][6].key).toBe("2026-03-01");
    expect(WEEKS[5][6].key).toBe("2026-04-05");

    const WEEKS_SUNDAY = getWeeks({ month: "2026-03-01", firstDayOfWeek: 0 });
    expect(WEEKS_SUNDAY[0][0].key).toBe("2026-03-01");
    expect(WEEKS_SUNDAY[0][0].isWeekend).toBe(true);
  });

  it("getWeekSegments: cuts the events by the week and puts them in free lanes", () => {
    const WEEK = getWeeks({ month: "2026-03-01", firstDayOfWeek: 1 })[2]; // 09.03. - 15.03.
    const EVENT = (key, startDay, endDay, startTime = 0) => ({ key, startDay, endDay, startTime });
    const { segments, countsByDay } = getWeekSegments({
      week: WEEK,
      events: [
        EVENT("short", "2026-03-10", "2026-03-10"),
        EVENT("long", "2026-03-05", "2026-03-20"),
        EVENT("next", "2026-03-11", "2026-03-12"),
        EVENT("other week", "2026-03-20", "2026-03-21"),
      ],
    });
    const BY_KEY = Object.fromEntries(segments.map(segment => [segment.event.key, segment]));
    expect(Object.keys(BY_KEY)).toEqual(["long", "short", "next"]);
    expect(BY_KEY.long).toMatchObject({ start: 0, span: 7, isStart: false, isEnd: false, lane: 0 });
    expect(BY_KEY.short).toMatchObject({ start: 1, span: 1, isStart: true, isEnd: true, lane: 1 });
    // The lane of "short" is free again on Wednesday
    expect(BY_KEY.next).toMatchObject({ start: 2, span: 2, lane: 1 });
    expect(countsByDay).toEqual([1, 2, 2, 2, 1, 1, 1]);
  });

  it("getWeekDays: the week of the date", () => {
    expect(getWeekDays({ date: "2026-03-12", firstDayOfWeek: 1 }).map(day => day.key)).toEqual([
      "2026-03-09", "2026-03-10", "2026-03-11", "2026-03-12", "2026-03-13", "2026-03-14", "2026-03-15",
    ]);
    expect(getWeekDays({ date: "2026-03-12", firstDayOfWeek: 0 })[0].key).toBe("2026-03-08");
  });

  it("getTimedLayout: overlapping events share the width, the others get the full width", () => {
    const EVENT = (key, start, end) => ({ key, start: new Date(`2026-03-12T${ start }:00`), end: new Date(`2026-03-12T${ end }:00`) });
    const LAYOUT = getTimedLayout({
      events: [
        EVENT("a", "09:00", "10:00"),
        EVENT("b", "09:30", "11:00"),
        EVENT("c", "10:00", "10:30"),
        EVENT("d", "12:00", "13:00"),
        EVENT("short", "14:00", "14:00"),
        EVENT("early", "05:00", "07:00"),
      ],
      minuteStart: 6 * 60,
      minuteEnd: 20 * 60,
    });
    const BY_KEY = Object.fromEntries(LAYOUT.map(item => [item.event.key, item]));
    expect(BY_KEY.a).toMatchObject({ start: 540, end: 600, column: 0, columns: 2 });
    expect(BY_KEY.b).toMatchObject({ column: 1, columns: 2 });
    // "a" has ended, so "c" takes its column
    expect(BY_KEY.c).toMatchObject({ column: 0, columns: 2 });
    expect(BY_KEY.d).toMatchObject({ column: 0, columns: 1 });
    // At least 15 minutes, cut by the visible hours
    expect(BY_KEY.short).toMatchObject({ start: 840, end: 855 });
    expect(BY_KEY.early).toMatchObject({ start: 360, end: 420 });
  });
});

describe("ACalendar", () => {
  it("shows the month of the v-model with 42 days and the weekdays", () => {
    const wrapper = mountCalendar();
    expect(wrapper.findAll(".a_calendar__day")).toHaveLength(42);
    expect(wrapper.findAll(".a_calendar__weekday")).toHaveLength(7);
    expect(wrapper.get(".a_calendar__title").text()).toBe("März 2026");
    const SELECTED = wrapper.get(".a_calendar__day_selected");
    expect(SELECTED.attributes("aria-pressed")).toBe("true");
    expect(SELECTED.attributes("tabindex")).toBe("0");
    expect(SELECTED.attributes("aria-label")).toBe("Dienstag, 10. März 2026, _A_CALENDAR_EVENTS_{{count}}_");
    wrapper.unmount();
  });

  it("shows a multi-day event as bars that continue in the next week", () => {
    const wrapper = mountCalendar();
    const TRIP = wrapper.findAll(".a_calendar__event").filter(event => event.text() === "Trip");
    expect(TRIP).toHaveLength(2);
    expect(TRIP[0].attributes("style")).toContain("grid-column: 1 / span 7");
    expect(TRIP[0].classes()).toEqual(expect.arrayContaining(["a_calendar__event_success", "a_calendar__event_continues_after"]));
    expect(TRIP[1].attributes("style")).toContain("grid-column: 1 / span 2");
    expect(TRIP[1].classes()).toContain("a_calendar__event_continues_before");
    expect(TRIP[0].attributes("aria-label")).toBe("Trip, 9. März – 17. März");
    wrapper.unmount();
  });

  it("shows the time, the default color and a custom color", () => {
    const wrapper = mountCalendar();
    const MEETING = wrapper.findAll(".a_calendar__event").find(event => event.text().includes("Meeting"));
    expect(MEETING.get(".a_calendar__event_time").text()).toBe("09:00");
    expect(MEETING.classes()).toContain("a_calendar__event_primary");
    expect(MEETING.attributes("aria-label")).toBe("Meeting, 10. März 09:00 – 10:30");
    const CUSTOM = wrapper.findAll(".a_calendar__event").find(event => event.text().includes("Custom"));
    expect(CUSTOM.classes()).toContain("a_calendar__event_custom");
    expect(CUSTOM.attributes("style")).toContain("--a_calendar_event_accent: #8e44ad");
    wrapper.unmount();
  });

  it("emits the clicks on a day, an event and \"+N\"", async() => {
    const wrapper = mountCalendar({ maxEventsPerDay: 2 });
    const DAY_12 = wrapper.findAll(".a_calendar__day").find(day => day.text() === "12");
    await DAY_12.trigger("click");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["2026-03-12"]);
    expect(wrapper.emitted("day-click").at(-1)[0]).toMatchObject({ date: "2026-03-12", events: [EVENTS[0]] });

    await wrapper.findAll(".a_calendar__event").find(event => event.text().includes("Meeting")).trigger("click");
    expect(wrapper.emitted("event-click").at(-1)[0].event).toEqual(EVENTS[1]);

    // 10.03. has 3 events, 2 are shown
    const MORE = wrapper.get(".a_calendar__more");
    expect(MORE.text()).toBe("_A_CALENDAR_MORE_{{count}}_");
    await MORE.trigger("click");
    expect(wrapper.emitted("more-click").at(-1)[0]).toMatchObject({ date: "2026-03-10", events: EVENTS });
    wrapper.unmount();
  });

  it("changes the month with the buttons and emits range-change", async() => {
    const wrapper = mountCalendar();
    expect(wrapper.emitted("range-change")[0][0]).toEqual({ start: "2026-02-23", end: "2026-04-05", month: "2026-03", view: "month" });
    const BUTTONS = wrapper.findAll(".a_calendar__header_actions > button");
    await BUTTONS[2].trigger("click");
    expect(wrapper.get(".a_calendar__title").text()).toBe("April 2026");
    expect(wrapper.emitted("range-change").at(-1)[0].month).toBe("2026-04");
    await BUTTONS[0].trigger("click");
    await BUTTONS[0].trigger("click");
    expect(wrapper.get(".a_calendar__title").text()).toBe("Februar 2026");

    await wrapper.setProps({ modelValue: "2026-07-01" });
    expect(wrapper.get(".a_calendar__title").text()).toBe("Juli 2026");
    wrapper.unmount();
  });

  it("moves the focus with the arrow keys and changes the month", async() => {
    const wrapper = mountCalendar();
    const DAY = () => wrapper.get(".a_calendar__day[tabindex='0']");
    await DAY().trigger("keydown", { key: "ArrowRight" });
    await nextTick();
    expect(document.activeElement.textContent).toBe("11");
    await DAY().trigger("keydown", { key: "ArrowDown" });
    await nextTick();
    expect(document.activeElement.textContent).toBe("18");
    await DAY().trigger("keydown", { key: "PageDown" });
    await nextTick();
    await nextTick();
    expect(wrapper.get(".a_calendar__title").text()).toBe("April 2026");
    expect(DAY().text()).toBe("18");
    expect(document.activeElement).toBe(DAY().element);
    wrapper.unmount();
  });

  it("uses the slots header, day and event", () => {
    const wrapper = mountCalendar({}, {
      slots: {
        header: ({ title }) => h("h3", { class: "own_header" }, title),
        day: ({ day, events }) => h("span", { class: "own_day" }, `${ day.day }:${ events.length }`),
        event: ({ event, isStart }) => h("strong", `${ event.label }${ isStart ? "" : " (…)" }`),
      },
    });
    expect(wrapper.get(".own_header").text()).toBe("März 2026");
    expect(wrapper.findAll(".own_day").find(day => day.text().startsWith("10:")).text()).toBe("10:3");
    expect(wrapper.findAll(".a_calendar__event strong").map(item => item.text())).toContain("Trip (…)");
    wrapper.unmount();
  });

  it("week view: the time grid with all-day bars and timed events", () => {
    const wrapper = mountCalendar({ view: "week" });
    expect(wrapper.get(".a_calendar__title").text()).toBe("9.–15. März 2026");
    expect(wrapper.findAll(".a_calendar__week_day")).toHaveLength(7);
    expect(wrapper.findAll(".a_calendar__hour")).toHaveLength(24);
    expect(wrapper.find(".a_calendar__month").exists()).toBe(false);

    const TRIP = wrapper.get(".a_calendar__all_day .a_calendar__event");
    expect(TRIP.text()).toBe("Trip");
    expect(TRIP.attributes("style")).toContain("grid-column: 2 / span 7");
    expect(TRIP.classes()).toContain("a_calendar__event_continues_after");

    const TIMED = wrapper.findAll(".a_calendar__event_timed");
    expect(TIMED).toHaveLength(2);
    expect(TIMED[0].text()).toBe("09:00 – 10:30Meeting");
    expect(TIMED[0].attributes("style")).toContain("top: 37.5%");
    expect(TIMED[0].attributes("style")).toContain("height: 6.25%");
    // The custom event has no end: 15 minutes
    expect(TIMED[1].attributes("style")).toContain("top: 50%");
    wrapper.unmount();
  });

  it("week view: hourStart and hourEnd", () => {
    const wrapper = mountCalendar({ view: "week", hourStart: 8, hourEnd: 18 });
    expect(wrapper.findAll(".a_calendar__hour").map(hour => hour.text())).toHaveLength(10);
    expect(wrapper.get(".a_calendar__hour").text()).toBe("08:00");
    expect(wrapper.get(".a_calendar__event_timed").attributes("style")).toContain("top: 10%");
    wrapper.unmount();
  });

  it("week view: the buttons change the week, the switch changes the view", async() => {
    const wrapper = mountCalendar();
    const VIEW_BUTTONS = wrapper.findAll(".a_calendar__views button");
    expect(VIEW_BUTTONS.map(button => button.attributes("aria-pressed"))).toEqual(["true", "false", "false"]);
    await VIEW_BUTTONS[1].trigger("click");
    expect(wrapper.emitted("update:view")[0]).toEqual(["week"]);
    // The week of the selected day
    expect(wrapper.get(".a_calendar__title").text()).toBe("9.–15. März 2026");
    expect(wrapper.emitted("range-change").at(-1)[0]).toEqual({ start: "2026-03-09", end: "2026-03-15", month: "2026-03", view: "week" });

    const BUTTONS = wrapper.findAll(".a_calendar__header_actions > button");
    await BUTTONS[2].trigger("click");
    expect(wrapper.get(".a_calendar__title").text()).toBe("16.–22. März 2026");
    expect(BUTTONS[0].get(".a_sr_only").text()).toBe("_A_CALENDAR_PREVIOUS_WEEK_");

    await wrapper.setProps({ view: "week" });
    await wrapper.setProps({ view: "month" });
    expect(wrapper.find(".a_calendar__month").exists()).toBe(true);
    wrapper.unmount();
  });

  it("week view: a click on an empty place emits time-click, a click on an event does not", async() => {
    const wrapper = mountCalendar({ view: "week" });
    const COLUMN = wrapper.findAll(".a_calendar__time_column")[2];
    COLUMN.element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
    await COLUMN.trigger("click", { clientY: 615 });
    const TIME = wrapper.emitted("time-click")[0][0];
    expect(TIME.date).toBe("2026-03-11");
    expect(TIME.start).toEqual(new Date(2026, 2, 11, 10, 0));
    expect(TIME.end).toEqual(new Date(2026, 2, 11, 10, 30));

    await wrapper.get(".a_calendar__event_timed").trigger("click");
    expect(wrapper.emitted("event-click")).toHaveLength(1);
    expect(wrapper.emitted("time-click")).toHaveLength(1);
    wrapper.unmount();
  });

  it("week view: Page Down moves the focus one week", async() => {
    const wrapper = mountCalendar({ view: "week" });
    await wrapper.get(".a_calendar__week_day[tabindex='0']").trigger("keydown", { key: "PageDown" });
    await nextTick();
    await nextTick();
    expect(wrapper.get(".a_calendar__title").text()).toBe("16.–22. März 2026");
    expect(document.activeElement.classList.contains("a_calendar__week_day")).toBe(true);
    expect(document.activeElement.textContent).toContain("17");
    wrapper.unmount();
  });

  it("day view: one column with the hours", () => {
    const wrapper = mountCalendar({ view: "day" });
    expect(wrapper.get(".a_calendar__title").text()).toBe("Dienstag, 10. März 2026");
    expect(wrapper.get(".a_calendar__week_view").attributes("style")).toContain("--a_calendar_days: 1");
    expect(wrapper.findAll(".a_calendar__week_day")).toHaveLength(1);
    expect(wrapper.get(".a_calendar__week_day_name").text()).toBe("Dienstag");
    expect(wrapper.findAll(".a_calendar__time_column")).toHaveLength(1);
    // The trip in the all-day row over the one column, the two timed events of the day in the grid
    expect(wrapper.get(".a_calendar__all_day .a_calendar__event").attributes("style")).toContain("grid-column: 2 / span 1");
    expect(wrapper.findAll(".a_calendar__event_timed").map(event => event.get(".a_calendar__event_label").text())).toEqual(["Meeting", "Custom"]);
    expect(wrapper.emitted("range-change")[0][0]).toEqual({ start: "2026-03-10", end: "2026-03-10", month: "2026-03", view: "day" });
    wrapper.unmount();
  });

  it("day view: the buttons change the day, arrows move to the next day", async() => {
    const wrapper = mountCalendar({ view: "day" });
    const BUTTONS = wrapper.findAll(".a_calendar__header_actions > button");
    expect(BUTTONS[0].get(".a_sr_only").text()).toBe("_A_CALENDAR_PREVIOUS_DAY_");
    await BUTTONS[2].trigger("click");
    expect(wrapper.get(".a_calendar__title").text()).toBe("Mittwoch, 11. März 2026");

    await wrapper.get(".a_calendar__week_day").trigger("keydown", { key: "ArrowRight" });
    await nextTick();
    await nextTick();
    expect(wrapper.get(".a_calendar__title").text()).toBe("Donnerstag, 12. März 2026");
    expect(document.activeElement).toBe(wrapper.get(".a_calendar__week_day").element);
    wrapper.unmount();
  });

  it("day view: from the month to the day of the selected day", async() => {
    const wrapper = mountCalendar();
    await wrapper.findAll(".a_calendar__views button")[2].trigger("click");
    expect(wrapper.emitted("update:view")[0]).toEqual(["day"]);
    expect(wrapper.get(".a_calendar__title").text()).toBe("Dienstag, 10. März 2026");
    wrapper.unmount();
  });

  it("views: one view hides the switch", () => {
    const wrapper = mountCalendar({ views: ["month"] });
    expect(wrapper.find(".a_calendar__views").exists()).toBe(false);
    wrapper.unmount();
  });

  it("ignores events without a valid start", () => {
    const wrapper = mountCalendar({ events: [{ id: 1, label: "No start" }, { id: 2, label: "Invalid", start: "Aloha" }] });
    expect(wrapper.findAll(".a_calendar__event")).toHaveLength(0);
    wrapper.unmount();
  });
});
