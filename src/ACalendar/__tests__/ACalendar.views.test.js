import {
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

import ACalendar from "../ACalendar";

const EVENTS = [
  { id: 1, label: "Trip", start: "2026-03-09", end: "2026-03-17", color: "success", isAllDay: true },
  { id: 2, label: "Meeting", start: "2026-03-10T09:00:00", end: "2026-03-10T10:30:00" },
  { id: 3, label: "Custom", start: "2026-03-10T12:00:00", color: "#8e44ad" },
];

const mountCalendar = (props = {}) => {
  return mount(ACalendar, {
    props: {
      modelValue: "2026-03-10",
      events: EVENTS,
      ...props,
    },
    attachTo: document.body,
  });
};
const findDay = (wrapper, number) => wrapper.findAll(".a_calendar__day:not(.a_calendar__day_other_month)").find(day => day.text() === String(number));

describe("ACalendar work week", () => {
  it("shows the days of workWeekDays with the hours", () => {
    const wrapper = mountCalendar({ view: "workweek" });
    expect(wrapper.findAll(".a_calendar__week_day")).toHaveLength(5);
    expect(wrapper.get(".a_calendar__title").text()).toBe("9.–13. März 2026");
    expect(wrapper.get(".a_calendar__week_view").attributes("style")).toContain("--a_calendar_days: 5");
    expect(wrapper.emitted("range-change")[0][0]).toEqual({ start: "2026-03-09", end: "2026-03-13", month: "2026-03", view: "workweek" });
    wrapper.unmount();
  });

  it("other work days", () => {
    const wrapper = mountCalendar({ view: "workweek", workWeekDays: [1, 2, 3, 4] });
    expect(wrapper.findAll(".a_calendar__week_day").map(day => day.get(".a_calendar__day_number").text())).toEqual(["9", "10", "11", "12"]);
    wrapper.unmount();
  });

  it("the arrow keys jump over the weekend", async() => {
    const wrapper = mountCalendar({ view: "workweek", modelValue: "2026-03-13" });
    await wrapper.findAll(".a_calendar__week_day").at(-1).trigger("keydown", { key: "ArrowRight" });
    await nextTick();
    await nextTick();
    expect(wrapper.get(".a_calendar__title").text()).toBe("16.–20. März 2026");
    expect(document.activeElement.textContent).toContain("16");
    wrapper.unmount();
  });
});

describe("ACalendar week numbers", () => {
  it("month: a first column with the calendar weeks (ISO 8601)", () => {
    const wrapper = mountCalendar({ isWeekNumbers: true });
    const NUMBERS = wrapper.findAll(".a_calendar__week .a_calendar__week_number");
    expect(NUMBERS.map(number => number.text())).toEqual([9, 10, 11, 12, 13, 14].map(week => `_A_CALENDAR_WEEK_NUMBER_SHORT_ ${ week }`));
    expect(NUMBERS[0].attributes("title")).toBe("_A_CALENDAR_WEEK_NUMBER_{{week}}_");
    expect(wrapper.find(".a_calendar__week_number_head").exists()).toBe(true);
    expect(findDay(wrapper, 9).attributes("style")).toContain("grid-column: 2");
    expect(wrapper.get(".a_calendar").classes()).toContain("a_calendar_week_numbers");
    wrapper.unmount();
  });

  it("week view: the week in the gutter of the head", () => {
    const wrapper = mountCalendar({ isWeekNumbers: true, view: "week" });
    expect(wrapper.get(".a_calendar__week_head .a_calendar__week_number").text()).toBe("_A_CALENDAR_WEEK_NUMBER_SHORT_ 11");
    wrapper.unmount();
  });
});

describe("ACalendar statuses", () => {
  it("tentative and cancelled events", () => {
    const wrapper = mountCalendar({
      events: [
        { id: 1, label: "Maybe", start: "2026-03-10T09:00:00", status: "tentative" },
        { id: 2, label: "Off", start: "2026-03-11T09:00:00", status: "CANCELLED" },
        { id: 3, label: "Normal", start: "2026-03-12T09:00:00", status: "confirmed" },
      ],
    });
    const [MAYBE, OFF, NORMAL] = wrapper.findAll(".a_calendar__event");
    expect(MAYBE.classes()).toContain("a_calendar__event_tentative");
    expect(MAYBE.attributes("aria-label")).toContain(", _A_CALENDAR_STATUS_TENTATIVE_");
    expect(OFF.classes()).toContain("a_calendar__event_cancelled");
    expect(NORMAL.attributes("class")).not.toContain("a_calendar__event_confirmed");
    wrapper.unmount();
  });
});

describe("ACalendar loading", () => {
  it("covers the days while the events are loaded", async() => {
    const wrapper = mountCalendar({ isLoading: true });
    expect(wrapper.get(".a_calendar").attributes("aria-busy")).toBe("true");
    expect(wrapper.find(".a_calendar__body .a_loading").exists()).toBe(true);
    await wrapper.setProps({ isLoading: false });
    expect(wrapper.find(".a_loading").exists()).toBe(false);
    expect(wrapper.get(".a_calendar").attributes("aria-busy")).toBeUndefined();
    wrapper.unmount();
  });
});

describe("ACalendar all-day row with \"+N\"", () => {
  it("maxEventsPerDay limits the all-day row of the week view", async() => {
    const wrapper = mountCalendar({
      view: "week",
      maxEventsPerDay: 2,
      events: [1, 2, 3, 4].map(id => ({ id, label: `All day ${ id }`, start: "2026-03-11", isAllDay: true })),
    });
    expect(wrapper.findAll(".a_calendar__all_day .a_calendar__event")).toHaveLength(2);
    const MORE = wrapper.get(".a_calendar__all_day .a_calendar__more");
    expect(MORE.attributes("style")).toContain("grid-column: 4");
    await MORE.trigger("click");
    expect(wrapper.emitted("more-click")[0][0].date).toBe("2026-03-11");
    expect(wrapper.emitted("more-click")[0][0].events).toHaveLength(4);
    wrapper.unmount();
  });
});

describe("ACalendar disabled days and working hours", () => {
  it("days before minDate and in disabledDates cannot be chosen", async() => {
    const wrapper = mountCalendar({ minDate: "2026-03-05", disabledDates: ["2026-03-12"] });
    const DAY_4 = findDay(wrapper, 4);
    expect(DAY_4.classes()).toContain("a_calendar__day_disabled");
    expect(DAY_4.attributes("aria-disabled")).toBe("true");
    expect(DAY_4.attributes("aria-label")).toContain("_A_CALENDAR_DAY_DISABLED_");
    await DAY_4.trigger("click");
    await findDay(wrapper, 12).trigger("click");
    expect(wrapper.emitted("day-click")).toBeUndefined();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    await findDay(wrapper, 11).trigger("click");
    expect(wrapper.emitted("day-click")).toHaveLength(1);
    wrapper.unmount();
  });

  it("disabledDates as a function and maxDate, no time-click on a disabled day", async() => {
    const wrapper = mountCalendar({ view: "week", maxDate: "2026-03-13", disabledDates: key => key === "2026-03-11" });
    const COLUMNS = wrapper.findAll(".a_calendar__time_column");
    expect(COLUMNS.map(column => column.classes().includes("a_calendar__day_disabled"))).toEqual([false, false, true, false, false, true, true]);
    COLUMNS[2].element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
    await COLUMNS[2].trigger("click", { clientY: 600 });
    expect(wrapper.emitted("time-click")).toBeUndefined();
    wrapper.unmount();
  });

  it("working hours: the other hours and days are shaded", () => {
    const wrapper = mountCalendar({ view: "week", workingHours: { start: 8, end: 18 } });
    const COLUMNS = wrapper.findAll(".a_calendar__time_column");
    expect(COLUMNS[0].classes()).toContain("a_calendar__time_column_working_hours");
    expect(COLUMNS[0].attributes("style")).toContain("--a_calendar_working_start: 33.33");
    expect(COLUMNS[0].attributes("style")).toContain("--a_calendar_working_end: 75%");
    // Saturday is not in workWeekDays: shaded all day
    expect(COLUMNS[5].attributes("style")).toContain("--a_calendar_working_start: 100%");
    wrapper.unmount();
  });
});

describe("ACalendar agenda", () => {
  it("the days of the month with events as a list", async() => {
    const wrapper = mountCalendar({ view: "agenda", views: ["month", "agenda"] });
    expect(wrapper.get(".a_calendar__title").text()).toBe("März 2026");
    expect(wrapper.emitted("range-change")[0][0]).toEqual({ start: "2026-03-01", end: "2026-03-31", month: "2026-03", view: "agenda" });
    const DAYS = wrapper.findAll(".a_calendar__agenda_day");
    // The trip lasts from the 9th to the 17th
    expect(DAYS).toHaveLength(9);
    expect(DAYS[1].get(".a_calendar__agenda_date").text()).toBe("Di., 10. März");
    expect(DAYS[1].findAll(".a_calendar__agenda_time").map(time => time.text())).toEqual(["9. März – 17. März", "09:00 – 10:30", "12:00"]);
    await DAYS[1].findAll(".a_calendar__agenda_event")[1].trigger("click");
    expect(wrapper.emitted("event-click")[0][0].event).toEqual(EVENTS[1]);

    await wrapper.findAll(".a_calendar__header_actions > button")[2].trigger("click");
    expect(wrapper.get(".a_calendar__title").text()).toBe("April 2026");
    expect(wrapper.get(".a_calendar__agenda_empty").text()).toBe("_A_CALENDAR_AGENDA_EMPTY_");
    wrapper.unmount();
  });
});
