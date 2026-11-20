import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import {
  getOccurrences,
  getTimedLayout,
  getWeekDays,
  getWeeks,
  getWeekSegments,
  normalizeRecurrence,
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

describe("ACalendar recurrence", () => {
  const occurrences = ({ start = "2026-03-02T09:00:00", end = "2026-03-02T10:00:00", rangeStart = "2026-03-01", rangeEnd = "2026-03-31", ...recurrence }) => {
    return getOccurrences({
      start: new Date(start),
      end: new Date(end),
      recurrence: normalizeRecurrence(recurrence),
      rangeStart,
      rangeEnd,
    }).map(item => item.date);
  };

  it("normalizeRecurrence: a wrong rule is no series", () => {
    expect(normalizeRecurrence(undefined)).toBeUndefined();
    expect(normalizeRecurrence({ frequency: "hourly" })).toBeUndefined();
    expect(normalizeRecurrence({ frequency: "weekly", interval: 0, weekdays: [5, 1, 9, 1] })).toMatchObject({ interval: 1, weekdays: [1, 5] });
  });

  it("daily, weekly, monthly and yearly with interval", () => {
    expect(occurrences({ frequency: "daily", rangeEnd: "2026-03-05" })).toEqual(["2026-03-02", "2026-03-03", "2026-03-04", "2026-03-05"]);
    expect(occurrences({ frequency: "weekly", interval: 2 })).toEqual(["2026-03-02", "2026-03-16", "2026-03-30"]);
    expect(occurrences({ frequency: "monthly", rangeEnd: "2026-06-30" })).toEqual(["2026-03-02", "2026-04-02", "2026-05-02", "2026-06-02"]);
    expect(occurrences({ frequency: "yearly", rangeStart: "2028-01-01", rangeEnd: "2028-12-31" })).toEqual(["2028-03-02"]);
  });

  it("weekly on weekdays: Monday to Friday", () => {
    expect(occurrences({ frequency: "weekly", weekdays: [1, 2, 3, 4, 5], rangeEnd: "2026-03-10" })).toEqual([
      "2026-03-02", "2026-03-03", "2026-03-04", "2026-03-05", "2026-03-06", "2026-03-09", "2026-03-10",
    ]);
  });

  it("count, until and exceptions", () => {
    expect(occurrences({ frequency: "daily", count: 3 })).toEqual(["2026-03-02", "2026-03-03", "2026-03-04"]);
    expect(occurrences({ frequency: "daily", until: "2026-03-04" })).toEqual(["2026-03-02", "2026-03-03", "2026-03-04"]);
    // An exception counts: count 3 ends on the 4th, without the 3rd
    expect(occurrences({ frequency: "daily", count: 3, exceptions: ["2026-03-03"] })).toEqual(["2026-03-02", "2026-03-04"]);
  });

  it("only the occurrences of the range, also one that starts before it", () => {
    expect(occurrences({ frequency: "weekly", end: "2026-03-04T10:00:00", rangeStart: "2026-03-10", rangeEnd: "2026-03-20" })).toEqual(["2026-03-09", "2026-03-16"]);
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

  describe("drag and drop", () => {
    // After pointerup the next click is blocked until the next task: it must not reach the next test
    afterEach(() => new Promise(resolve => setTimeout(resolve)));

    const findEvent = (wrapper, label, selector = ".a_calendar__event") => wrapper.findAll(selector).find(event => event.text().includes(label));
    const findDay = (wrapper, number) => wrapper.findAll(".a_calendar__day:not(.a_calendar__day_other_month)").find(day => day.text() === String(number));
    const mockRect = (element, rect) => {
      element.getBoundingClientRect = () => ({ left: 0, top: 0, width: 100, height: 20, ...rect });
    };
    const pointer = (type, init = {}) => window.dispatchEvent(new MouseEvent(type, { bubbles: true, ...init }));
    // jsdom has no PointerEvent: a MouseEvent with pointerType
    const pointerdown = async(wrapperElement, { pointerType = "mouse", ...init } = {}) => {
      const EVENT = new MouseEvent("pointerdown", { bubbles: true, cancelable: true, ...init });
      Object.defineProperty(EVENT, "pointerType", { value: pointerType });
      wrapperElement.element.dispatchEvent(EVENT);
      await nextTick();
    };

    /**
     * Presses the event, moves the pointer to the target (document.elementFromPoint returns it) and releases it.
     * isDrop false: stops before pointerup.
     */
    const drag = async({ event, target, from = { clientX: 10, clientY: 10 }, to = { clientX: 60, clientY: 60 }, isDrop = true }) => {
      const ELEMENT_FROM_POINT = document.elementFromPoint;
      document.elementFromPoint = () => target?.element;
      await pointerdown(event, from);
      pointer("pointermove", to);
      await nextTick();
      if (isDrop) {
        pointer("pointerup", to);
        await nextTick();
      }
      document.elementFromPoint = ELEMENT_FROM_POINT;
    };

    it("is off by default, isDraggable can be a function", () => {
      expect(mountCalendar().find(".a_calendar__event_draggable").exists()).toBe(false);
      const wrapper = mountCalendar({ isDraggable: item => item.id !== 1 });
      expect(findEvent(wrapper, "Trip").classes()).not.toContain("a_calendar__event_draggable");
      expect(findEvent(wrapper, "Meeting").classes()).toContain("a_calendar__event_draggable");
      wrapper.unmount();
    });

    it("month: an event moves to another day and keeps its time", async() => {
      const wrapper = mountCalendar({ isDraggable: true });
      const MEETING = findEvent(wrapper, "Meeting");
      mockRect(MEETING.element, {});
      const DAY_12 = findDay(wrapper, 12);
      await drag({ event: MEETING, target: DAY_12, isDrop: false });
      expect(wrapper.get(".a_calendar").classes()).toContain("a_calendar_dragging");
      expect(findEvent(wrapper, "Meeting").classes()).toContain("a_calendar__event_dragging");
      expect(DAY_12.classes()).toContain("a_calendar__drop_target");

      pointer("pointerup", { clientX: 60, clientY: 60 });
      await nextTick();
      const DROP = wrapper.emitted("event-drop")[0][0];
      expect(DROP.event).toEqual(EVENTS[1]);
      expect(DROP.start).toEqual(new Date(2026, 2, 12, 9, 0));
      expect(DROP.end).toEqual(new Date(2026, 2, 12, 10, 30));
      expect(wrapper.get(".a_calendar").classes()).not.toContain("a_calendar_dragging");
      // The click after the drop does not open the event
      await findEvent(wrapper, "Meeting").trigger("click");
      expect(wrapper.emitted("event-click")).toBeUndefined();
      wrapper.unmount();
    });

    it("a click without moving is a click, not a drag", async() => {
      const wrapper = mountCalendar({ isDraggable: true });
      const MEETING = findEvent(wrapper, "Meeting");
      mockRect(MEETING.element, {});
      await pointerdown(MEETING, { clientX: 10, clientY: 10 });
      pointer("pointermove", { clientX: 12, clientY: 11 });
      pointer("pointerup", { clientX: 12, clientY: 11 });
      await MEETING.trigger("click");
      expect(wrapper.emitted("event-drop")).toBeUndefined();
      expect(wrapper.emitted("event-click")).toHaveLength(1);
      wrapper.unmount();
    });

    it("month: an event over several days moves from the day where it was grabbed", async() => {
      const wrapper = mountCalendar({ isDraggable: true });
      // The bar 09.03. - 15.03. is grabbed on the third day (11.03.)
      const TRIP = findEvent(wrapper, "Trip");
      mockRect(TRIP.element, { width: 700 });
      await drag({ event: TRIP, target: findDay(wrapper, 13), from: { clientX: 250, clientY: 10 }, to: { clientX: 400, clientY: 10 } });
      const DROP = wrapper.emitted("event-drop")[0][0];
      expect(DROP.start).toEqual(new Date(2026, 2, 11));
      expect(DROP.end).toEqual(new Date(2026, 2, 19));
      wrapper.unmount();
    });

    it("no event-drop if the event stays at its place or lands on a disabled day", async() => {
      const wrapper = mountCalendar({ isDraggable: true, disabledDates: ["2026-03-12"] });
      const MEETING = findEvent(wrapper, "Meeting");
      mockRect(MEETING.element, {});
      await drag({ event: MEETING, target: findDay(wrapper, 10) });
      await new Promise(resolve => setTimeout(resolve));
      await drag({ event: findEvent(wrapper, "Meeting"), target: findDay(wrapper, 12) });
      expect(wrapper.emitted("event-drop")).toBeUndefined();
      wrapper.unmount();
    });

    it("week view: an event with a time gets the day and the time of the place, a preview shows it", async() => {
      const wrapper = mountCalendar({ isDraggable: true, view: "week" });
      const MEETING = findEvent(wrapper, "Meeting", ".a_calendar__event_timed");
      // Grabbed 10 px below its top
      mockRect(MEETING.element, { top: 540, height: 90 });
      const COLUMN = wrapper.findAll(".a_calendar__time_column")[3];
      mockRect(COLUMN.element, { top: 0, height: 1440 });
      await drag({ event: MEETING, target: COLUMN, from: { clientX: 10, clientY: 550 }, to: { clientX: 300, clientY: 790 }, isDrop: false });
      expect(wrapper.get(".a_calendar__drop_preview").text()).toBe("13:00 – 14:30");
      expect(wrapper.get(".a_calendar__drop_preview").attributes("style")).toContain("top: 54.1666");

      pointer("pointerup", { clientX: 300, clientY: 790 });
      await nextTick();
      const DROP = wrapper.emitted("event-drop")[0][0];
      expect(DROP.start).toEqual(new Date(2026, 2, 12, 13, 0));
      expect(DROP.end).toEqual(new Date(2026, 2, 12, 14, 30));
      expect(wrapper.find(".a_calendar__drop_preview").exists()).toBe(false);
      wrapper.unmount();
    });

    it("week view: an all-day event moves by days in the all-day row", async() => {
      const wrapper = mountCalendar({ isDraggable: true, view: "week" });
      const TRIP = wrapper.get(".a_calendar__all_day .a_calendar__event");
      mockRect(TRIP.element, { width: 700 });
      await drag({ event: TRIP, target: wrapper.findAll(".a_calendar__all_day_cell")[2], from: { clientX: 50, clientY: 10 } });
      expect(wrapper.emitted("event-drop")[0][0].start).toEqual(new Date(2026, 2, 11));
      wrapper.unmount();
    });

    it("touch: the drag starts after a long press, a quick move scrolls", async() => {
      vi.useFakeTimers();
      const wrapper = mountCalendar({ isDraggable: true });
      const MEETING = findEvent(wrapper, "Meeting");
      mockRect(MEETING.element, {});
      const DAY_12 = findDay(wrapper, 12);
      const ELEMENT_FROM_POINT = document.elementFromPoint;
      document.elementFromPoint = () => DAY_12.element;

      // A quick move: no drag
      await pointerdown(MEETING, { clientX: 10, clientY: 10, pointerType: "touch" });
      pointer("pointermove", { clientX: 10, clientY: 40 });
      vi.advanceTimersByTime(500);
      await nextTick();
      expect(wrapper.get(".a_calendar").classes()).not.toContain("a_calendar_dragging");

      // A long press, then a move: drag
      await pointerdown(MEETING, { clientX: 10, clientY: 10, pointerType: "touch" });
      vi.advanceTimersByTime(450);
      await nextTick();
      expect(wrapper.get(".a_calendar").classes()).toContain("a_calendar_dragging");
      const TOUCHMOVE = new Event("touchmove", { cancelable: true });
      window.dispatchEvent(TOUCHMOVE);
      // The page does not scroll while the event is dragged
      expect(TOUCHMOVE.defaultPrevented).toBe(true);
      pointer("pointermove", { clientX: 200, clientY: 40 });
      pointer("pointerup", { clientX: 200, clientY: 40 });
      expect(wrapper.emitted("event-drop")[0][0].start).toEqual(new Date(2026, 2, 12, 9, 0));

      document.elementFromPoint = ELEMENT_FROM_POINT;
      vi.useRealTimers();
      wrapper.unmount();
    });

    it("Escape stops the drag", async() => {
      const wrapper = mountCalendar({ isDraggable: true });
      const MEETING = findEvent(wrapper, "Meeting");
      mockRect(MEETING.element, {});
      await drag({ event: MEETING, target: findDay(wrapper, 12), isDrop: false });
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
      await nextTick();
      expect(wrapper.get(".a_calendar").classes()).not.toContain("a_calendar_dragging");
      pointer("pointerup", { clientX: 60, clientY: 60 });
      expect(wrapper.emitted("event-drop")).toBeUndefined();
      wrapper.unmount();
    });
  });

  describe("resize", () => {
    // After pointerup the next click is blocked until the next task: it must not reach the next test
    afterEach(() => new Promise(resolve => setTimeout(resolve)));

    const pointer = (type, init) => window.dispatchEvent(new MouseEvent(type, { bubbles: true, ...init }));
    const findTimed = (wrapper, label) => wrapper.findAll(".a_calendar__event_timed").find(event => event.text().includes(label));

    it("is off by default, the start edge is on the first bar, the end edge on the last bar", () => {
      expect(mountCalendar({ view: "week" }).find(".a_calendar__resize_handle").exists()).toBe(false);
      const wrapper = mountCalendar({ isResizable: true });
      const TRIP = wrapper.findAll(".a_calendar__event").filter(event => event.text().includes("Trip"));
      expect(TRIP[0].find(".a_calendar__resize_handle_start").exists()).toBe(true);
      expect(TRIP[0].find(".a_calendar__resize_handle_end").exists()).toBe(false);
      expect(TRIP[1].find(".a_calendar__resize_handle_start").exists()).toBe(false);
      expect(TRIP[1].find(".a_calendar__resize_handle_end").exists()).toBe(true);
      wrapper.unmount();
    });

    it("time grid: the top edge changes the start, the end stays", async() => {
      const wrapper = mountCalendar({ view: "week", isResizable: true });
      wrapper.findAll(".a_calendar__time_column")[1].element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
      await findTimed(wrapper, "Meeting").get(".a_calendar__resize_handle_time.a_calendar__resize_handle_start").trigger("pointerdown");
      // 07:20 is rounded to 07:30
      pointer("pointermove", { clientY: 440 });
      await nextTick();
      const MEETING = findTimed(wrapper, "Meeting");
      expect(MEETING.get(".a_calendar__event_time").text()).toBe("07:30 – 10:30");
      expect(MEETING.attributes("style")).toContain("top: 31.25%");
      pointer("pointerup", { clientY: 440 });
      const RESIZE = wrapper.emitted("event-resize")[0][0];
      expect(RESIZE.start).toEqual(new Date(2026, 2, 10, 7, 30));
      expect(RESIZE.end).toEqual(new Date(2026, 2, 10, 10, 30));
      wrapper.unmount();
    });

    it("time grid: the start is at least one timeStep before the end", async() => {
      const wrapper = mountCalendar({ view: "week", isResizable: true });
      wrapper.findAll(".a_calendar__time_column")[1].element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
      await findTimed(wrapper, "Meeting").get(".a_calendar__resize_handle_time.a_calendar__resize_handle_start").trigger("pointerdown");
      pointer("pointermove", { clientY: 1200 });
      pointer("pointerup", { clientY: 1200 });
      expect(wrapper.emitted("event-resize")[0][0].start).toEqual(new Date(2026, 2, 10, 10, 0));
      wrapper.unmount();
    });

    it("month: the start edge changes the first day, not after the last day", async() => {
      const wrapper = mountCalendar({ isResizable: true });
      const findMonthDay = number => wrapper.findAll(".a_calendar__day:not(.a_calendar__day_other_month)").find(day => day.text() === String(number));
      const ELEMENT_FROM_POINT = document.elementFromPoint;
      const TRIP = wrapper.findAll(".a_calendar__event").find(event => event.text().includes("Trip"));

      document.elementFromPoint = () => findMonthDay(5).element;
      await TRIP.get(".a_calendar__resize_handle_day.a_calendar__resize_handle_start").trigger("pointerdown");
      pointer("pointermove", { clientX: 1, clientY: 1 });
      pointer("pointerup", { clientX: 1, clientY: 1 });
      expect(wrapper.emitted("event-resize")[0][0].start).toEqual(new Date(2026, 2, 5));
      expect(wrapper.emitted("event-resize")[0][0].end).toEqual(new Date(2026, 2, 17));

      // After the last day (17.): the event lasts one day
      document.elementFromPoint = () => findMonthDay(25).element;
      await TRIP.get(".a_calendar__resize_handle_day.a_calendar__resize_handle_start").trigger("pointerdown");
      pointer("pointermove", { clientX: 1, clientY: 1 });
      pointer("pointerup", { clientX: 1, clientY: 1 });
      expect(wrapper.emitted("event-resize")[1][0].start).toEqual(new Date(2026, 2, 17));
      document.elementFromPoint = ELEMENT_FROM_POINT;
      wrapper.unmount();
    });

    it("time grid: the bottom edge changes the end in steps of timeStep, with a preview", async() => {
      const wrapper = mountCalendar({ view: "week", isResizable: true });
      wrapper.findAll(".a_calendar__time_column")[1].element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
      await findTimed(wrapper, "Meeting").get(".a_calendar__resize_handle_time.a_calendar__resize_handle_end").trigger("pointerdown");
      expect(wrapper.get(".a_calendar").classes()).toContain("a_calendar_resizing");

      // 11:50 is rounded to 12:00
      pointer("pointermove", { clientY: 710 });
      await nextTick();
      const MEETING = findTimed(wrapper, "Meeting");
      expect(MEETING.get(".a_calendar__event_time").text()).toBe("09:00 – 12:00");
      expect(MEETING.attributes("style")).toContain("height: 12.5%");

      pointer("pointerup", { clientY: 710 });
      await nextTick();
      const RESIZE = wrapper.emitted("event-resize")[0][0];
      expect(RESIZE.event).toEqual(EVENTS[1]);
      expect(RESIZE.start).toEqual(new Date(2026, 2, 10, 9, 0));
      expect(RESIZE.end).toEqual(new Date(2026, 2, 10, 12, 0));
      expect(wrapper.get(".a_calendar").classes()).not.toContain("a_calendar_resizing");

      // The click after pulling is not a click on the event
      await findTimed(wrapper, "Meeting").trigger("click");
      expect(wrapper.emitted("event-click")).toBeUndefined();
      wrapper.unmount();
    });

    it("time grid: the end is at least one timeStep after the start", async() => {
      const wrapper = mountCalendar({ view: "week", isResizable: true });
      wrapper.findAll(".a_calendar__time_column")[1].element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
      await findTimed(wrapper, "Meeting").get(".a_calendar__resize_handle_time.a_calendar__resize_handle_end").trigger("pointerdown");
      pointer("pointermove", { clientY: 100 });
      pointer("pointerup", { clientY: 100 });
      expect(wrapper.emitted("event-resize")[0][0].end).toEqual(new Date(2026, 2, 10, 9, 30));
      wrapper.unmount();
    });

    it("month: the end edge changes the last day, the time stays", async() => {
      const wrapper = mountCalendar({ isResizable: true });
      const DAY_14 = wrapper.findAll(".a_calendar__day:not(.a_calendar__day_other_month)").find(day => day.text() === "14");
      const ELEMENT_FROM_POINT = document.elementFromPoint;
      document.elementFromPoint = () => DAY_14.element;

      const MEETING = wrapper.findAll(".a_calendar__event").find(event => event.text().includes("Meeting"));
      await MEETING.get(".a_calendar__resize_handle_day.a_calendar__resize_handle_end").trigger("pointerdown");
      pointer("pointermove", { clientX: 1, clientY: 1 });
      await nextTick();
      expect(DAY_14.classes()).toContain("a_calendar__drop_target");
      pointer("pointerup", { clientX: 1, clientY: 1 });

      const RESIZE = wrapper.emitted("event-resize")[0][0];
      expect(RESIZE.start).toEqual(new Date(2026, 2, 10, 9, 0));
      expect(RESIZE.end).toEqual(new Date(2026, 2, 14, 10, 30));
      document.elementFromPoint = ELEMENT_FROM_POINT;
      wrapper.unmount();
    });

    it("no event-resize without a change, pointercancel stops", async() => {
      const wrapper = mountCalendar({ view: "week", isResizable: true });
      await findTimed(wrapper, "Meeting").get(".a_calendar__resize_handle_time.a_calendar__resize_handle_end").trigger("pointerdown");
      pointer("pointerup", {});
      expect(wrapper.emitted("event-resize")).toBeUndefined();

      await findTimed(wrapper, "Meeting").get(".a_calendar__resize_handle_time.a_calendar__resize_handle_end").trigger("pointerdown");
      pointer("pointercancel", {});
      await nextTick();
      expect(wrapper.get(".a_calendar").classes()).not.toContain("a_calendar_resizing");
      wrapper.unmount();
    });
  });

  describe("recurring events", () => {
    const SERIES = { id: "standup", label: "Standup", start: "2026-03-02T09:00:00", end: "2026-03-02T09:15:00", recurrence: { frequency: "weekly", weekdays: [1, 3], exceptions: ["2026-03-11"] } };

    it("shows every occurrence on the shown days with the sign of a series", () => {
      const wrapper = mountCalendar({ events: [SERIES] });
      const STANDUPS = wrapper.findAll(".a_calendar__event");
      // Mondays and Wednesdays from the 2nd of March to the 5th of April, without the 11th
      expect(STANDUPS).toHaveLength(9);
      expect(STANDUPS[0].find(".a_calendar__event_recurring").exists()).toBe(true);
      expect(STANDUPS[0].attributes("aria-label")).toBe("Standup, 2. März 09:00 – 09:15, _A_CALENDAR_RECURRING_");
      wrapper.unmount();
    });

    it("the events of the calendar get the occurrence and the item of the series", async() => {
      const wrapper = mountCalendar({ events: [SERIES], isDraggable: true });
      // 02., 04., 09., 16., 18. (the 11th is an exception)
      const EVENT_18 = wrapper.findAll(".a_calendar__event")[4];
      await EVENT_18.trigger("click");
      const CLICK = wrapper.emitted("event-click")[0][0];
      expect(CLICK.event).toEqual(SERIES);
      expect(CLICK.occurrence).toEqual({ date: "2026-03-18", start: new Date(2026, 2, 18, 9, 0), end: new Date(2026, 2, 18, 9, 15) });

      await new Promise(resolve => setTimeout(resolve));
      EVENT_18.element.getBoundingClientRect = () => ({ left: 0, top: 0, width: 100, height: 20 });
      const DAY_19 = wrapper.findAll(".a_calendar__day:not(.a_calendar__day_other_month)").find(day => day.text() === "19");
      const ELEMENT_FROM_POINT = document.elementFromPoint;
      document.elementFromPoint = () => DAY_19.element;
      const DOWN = new MouseEvent("pointerdown", { bubbles: true, clientX: 10, clientY: 10 });
      Object.defineProperty(DOWN, "pointerType", { value: "mouse" });
      EVENT_18.element.dispatchEvent(DOWN);
      window.dispatchEvent(new MouseEvent("pointermove", { clientX: 80, clientY: 10 }));
      window.dispatchEvent(new MouseEvent("pointerup", { clientX: 80, clientY: 10 }));
      document.elementFromPoint = ELEMENT_FROM_POINT;
      await new Promise(resolve => setTimeout(resolve));
      const DROP = wrapper.emitted("event-drop")[0][0];
      expect(DROP.start).toEqual(new Date(2026, 2, 19, 9, 0));
      expect(DROP.occurrence.date).toBe("2026-03-18");
      wrapper.unmount();
    });

    it("the other months and the week view get their own occurrences", async() => {
      const wrapper = mountCalendar({ events: [SERIES] });
      await wrapper.findAll(".a_calendar__header_actions > button")[2].trigger("click");
      // April 2026: 30.03. - 10.05.
      expect(wrapper.findAll(".a_calendar__event")).toHaveLength(12);
      await wrapper.setProps({ view: "week", modelValue: "2026-03-17" });
      expect(wrapper.findAll(".a_calendar__event_timed")).toHaveLength(2);
      wrapper.unmount();
    });

    it("a single event has no occurrence", async() => {
      const wrapper = mountCalendar();
      await wrapper.findAll(".a_calendar__event").find(event => event.text().includes("Meeting")).trigger("click");
      expect(wrapper.emitted("event-click")[0][0].occurrence).toBeUndefined();
      wrapper.unmount();
    });
  });

  it("ignores events without a valid start", () => {
    const wrapper = mountCalendar({ events: [{ id: 1, label: "No start" }, { id: 2, label: "Invalid", start: "Aloha" }] });
    expect(wrapper.findAll(".a_calendar__event")).toHaveLength(0);
    wrapper.unmount();
  });
});
