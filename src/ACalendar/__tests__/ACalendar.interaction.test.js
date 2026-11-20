import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ACalendar from "../ACalendar";

const EVENTS = [
  { id: 1, label: "Trip", start: "2026-03-09", end: "2026-03-17", isAllDay: true },
  { id: 2, label: "Meeting", start: "2026-03-10T09:00:00", end: "2026-03-10T10:30:00", location: "Raum 3", description: "Agenda\nPunkt 1" },
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
const findEvent = (wrapper, label, selector = ".a_calendar__event") => wrapper.findAll(selector).find(event => event.text().includes(label));
const findDay = (wrapper, number) => wrapper.findAll(".a_calendar__day:not(.a_calendar__day_other_month)").find(day => day.text() === String(number));
const pointer = (type, init = {}) => window.dispatchEvent(new MouseEvent(type, { bubbles: true, ...init }));
// jsdom has no PointerEvent: a MouseEvent with pointerType
const pointerdown = async(wrapperElement, { pointerType = "mouse", ...init } = {}) => {
  const EVENT = new MouseEvent("pointerdown", { bubbles: true, cancelable: true, ...init });
  Object.defineProperty(EVENT, "pointerType", { value: pointerType });
  wrapperElement.element.dispatchEvent(EVENT);
  await nextTick();
};

// After pointerup the next click is blocked until the next task
afterEach(() => new Promise(resolve => setTimeout(resolve)));

describe("ACalendar popover", () => {
  it("is off by default", async() => {
    const wrapper = mountCalendar();
    await findEvent(wrapper, "Meeting").trigger("click");
    expect(wrapper.find(".a_calendar_popover").exists()).toBe(false);
    wrapper.unmount();
  });

  it("shows the details of the clicked event and gets the focus, Escape gives the focus back", async() => {
    const wrapper = mountCalendar({ isEventPopover: true });
    const MEETING = findEvent(wrapper, "Meeting");
    await MEETING.trigger("click");
    await nextTick();
    const POPOVER = wrapper.get(".a_calendar_popover");
    expect(POPOVER.attributes("role")).toBe("dialog");
    expect(wrapper.get(`#${ POPOVER.attributes("aria-labelledby") }`).text()).toBe("Meeting");
    expect(POPOVER.findAll(".a_calendar_popover__value").map(value => value.text())).toEqual([
      "Dienstag, 10. März 2026, 09:00 – 10:30",
      "Raum 3",
      "Agenda\nPunkt 1",
    ]);
    expect(document.activeElement).toBe(POPOVER.element);
    expect(wrapper.emitted("event-click")).toHaveLength(1);

    await POPOVER.trigger("keydown", { key: "Escape" });
    await nextTick();
    await nextTick();
    expect(wrapper.find(".a_calendar_popover").exists()).toBe(false);
    expect(document.activeElement).toBe(MEETING.element);
    wrapper.unmount();
  });

  it("the slots body and actions, close and a click outside", async() => {
    const wrapper = mountCalendar({ isEventPopover: true }, {
      slots: {
        popover: ({ event }) => h("p", { class: "own_body" }, event.label),
        popoverActions: ({ event, close }) => h("button", { class: "own_delete", onClick: close }, `Delete ${ event.label }`),
      },
    });
    await findEvent(wrapper, "Trip").trigger("click");
    expect(wrapper.get(".own_body").text()).toBe("Trip");
    await wrapper.get(".own_delete").trigger("click");
    await nextTick();
    expect(wrapper.find(".a_calendar_popover").exists()).toBe(false);

    await findEvent(wrapper, "Meeting").trigger("click");
    document.body.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
    await nextTick();
    expect(wrapper.find(".a_calendar_popover").exists()).toBe(false);
    wrapper.unmount();
  });

  it("closes when the event is deleted", async() => {
    const wrapper = mountCalendar({ isEventPopover: true });
    await findEvent(wrapper, "Meeting").trigger("click");
    await wrapper.setProps({ events: [EVENTS[0]] });
    expect(wrapper.find(".a_calendar_popover").exists()).toBe(false);
    wrapper.unmount();
  });
});

describe("ACalendar range selection", () => {
  it("time grid: pulling the mouse selects a time", async() => {
    const wrapper = mountCalendar({ view: "week", isRangeSelectable: true });
    const COLUMN = wrapper.findAll(".a_calendar__time_column")[2];
    COLUMN.element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
    await pointerdown(COLUMN, { clientY: 600 });
    pointer("pointermove", { clientY: 690 });
    await nextTick();
    expect(wrapper.get(".a_calendar__time_selection").text()).toBe("10:00 – 12:00");
    pointer("pointerup", { clientY: 690 });
    await nextTick();
    const SELECT = wrapper.emitted("time-select")[0][0];
    expect(SELECT.date).toBe("2026-03-11");
    expect(SELECT.start).toEqual(new Date(2026, 2, 11, 10, 0));
    expect(SELECT.end).toEqual(new Date(2026, 2, 11, 12, 0));
    // The click after it creates no event
    await COLUMN.trigger("click", { clientY: 690 });
    expect(wrapper.emitted("time-click")).toBeUndefined();
    expect(wrapper.find(".a_calendar__time_selection").exists()).toBe(false);
    wrapper.unmount();
  });

  it("time grid: upwards and a click without moving stays time-click", async() => {
    const wrapper = mountCalendar({ view: "week", isRangeSelectable: true });
    const COLUMN = wrapper.findAll(".a_calendar__time_column")[2];
    COLUMN.element.getBoundingClientRect = () => ({ top: 0, height: 1440 });
    await pointerdown(COLUMN, { clientY: 600 });
    pointer("pointermove", { clientY: 500 });
    pointer("pointerup", { clientY: 500 });
    expect(wrapper.emitted("time-select")[0][0].start).toEqual(new Date(2026, 2, 11, 8, 0));
    expect(wrapper.emitted("time-select")[0][0].end).toEqual(new Date(2026, 2, 11, 10, 30));
    await new Promise(resolve => setTimeout(resolve));

    await pointerdown(COLUMN, { clientY: 600 });
    pointer("pointerup", { clientY: 600 });
    await COLUMN.trigger("click", { clientY: 600 });
    expect(wrapper.emitted("time-select")).toHaveLength(1);
    expect(wrapper.emitted("time-click")).toHaveLength(1);
    wrapper.unmount();
  });

  it("month: pulling over days selects them, not over a disabled day, not with a finger", async() => {
    const wrapper = mountCalendar({ isRangeSelectable: true, disabledDates: ["2026-03-20"] });
    const ELEMENT_FROM_POINT = document.elementFromPoint;
    const select = async(from, to, pointerType) => {
      document.elementFromPoint = () => findDay(wrapper, to).element;
      await pointerdown(findDay(wrapper, from), { clientX: 10, clientY: 10, pointerType });
      pointer("pointermove", { clientX: 200, clientY: 10 });
      await nextTick();
    };

    await select(10, 12);
    expect([10, 11, 12, 13].map(day => findDay(wrapper, day).classes().includes("a_calendar__drop_target"))).toEqual([true, true, true, false]);
    pointer("pointerup", { clientX: 200, clientY: 10 });
    expect(wrapper.emitted("day-select")[0][0]).toMatchObject({ start: "2026-03-10", end: "2026-03-12" });
    await new Promise(resolve => setTimeout(resolve));

    await select(19, 21);
    pointer("pointerup", { clientX: 200, clientY: 10 });
    await new Promise(resolve => setTimeout(resolve));
    await select(10, 12, "touch");
    pointer("pointerup", { clientX: 200, clientY: 10 });
    expect(wrapper.emitted("day-select")).toHaveLength(1);
    document.elementFromPoint = ELEMENT_FROM_POINT;
    wrapper.unmount();
  });
});

describe("ACalendar keyboard", () => {
  it("Alt + arrows move an event that can be dragged", async() => {
    const wrapper = mountCalendar({ view: "week", isDraggable: true });
    const MEETING = findEvent(wrapper, "Meeting", ".a_calendar__event_timed");
    expect(MEETING.attributes("aria-keyshortcuts")).toBe("Alt+ArrowLeft Alt+ArrowRight Alt+ArrowUp Alt+ArrowDown");
    expect(wrapper.get(`#${ MEETING.attributes("aria-describedby") }`).text()).toBe("_A_CALENDAR_KEYBOARD_HINT_");

    await MEETING.trigger("keydown", { key: "ArrowDown", altKey: true });
    await MEETING.trigger("keydown", { key: "ArrowRight", altKey: true });
    // Without Alt: nothing
    await MEETING.trigger("keydown", { key: "ArrowRight" });
    const DROPS = wrapper.emitted("event-drop").map(([drop]) => [drop.start, drop.end]);
    expect(DROPS).toEqual([
      [new Date(2026, 2, 10, 9, 30), new Date(2026, 2, 10, 11, 0)],
      [new Date(2026, 2, 11, 9, 0), new Date(2026, 2, 11, 10, 30)],
    ]);
    // The new time is announced (without translations the placeholder)
    expect(wrapper.get("[aria-live=polite].a_sr_only").text()).toContain("_A_CALENDAR_KEYBOARD_MOVED_");
    wrapper.unmount();
  });

  it("month: Alt + Up moves a bar one week, not to a disabled day", async() => {
    const wrapper = mountCalendar({ isDraggable: true, disabledDates: ["2026-03-03"] });
    const TRIP = findEvent(wrapper, "Trip");
    await TRIP.trigger("keydown", { key: "ArrowDown", altKey: true });
    expect(wrapper.emitted("event-drop")[0][0].start).toEqual(new Date(2026, 2, 16));
    await TRIP.trigger("keydown", { key: "ArrowUp", altKey: true });
    // The 9th - 7 days = the 2nd, the end the 10th: free. Disabled: the 3rd is inside, but only start and end count
    expect(wrapper.emitted("event-drop")[1][0].start).toEqual(new Date(2026, 2, 2));
    await TRIP.trigger("keydown", { key: "ArrowLeft", altKey: true });
    await TRIP.trigger("keydown", { key: "ArrowLeft", altKey: true });
    // The 8th: free
    expect(wrapper.emitted("event-drop")).toHaveLength(4);
    wrapper.unmount();
  });

  it("Alt + Shift + arrows change the end of an event that can be resized", async() => {
    const wrapper = mountCalendar({ view: "week", isResizable: true });
    const MEETING = findEvent(wrapper, "Meeting", ".a_calendar__event_timed");
    expect(MEETING.attributes("aria-keyshortcuts")).toBe("Alt+Shift+ArrowUp Alt+Shift+ArrowDown");
    await MEETING.trigger("keydown", { key: "ArrowDown", altKey: true, shiftKey: true });
    expect(wrapper.emitted("event-resize")[0][0].end).toEqual(new Date(2026, 2, 10, 11, 0));
    // Moving is not allowed
    await MEETING.trigger("keydown", { key: "ArrowDown", altKey: true });
    expect(wrapper.emitted("event-drop")).toBeUndefined();

    const TRIP = wrapper.get(".a_calendar__all_day .a_calendar__event");
    await TRIP.trigger("keydown", { key: "ArrowLeft", altKey: true, shiftKey: true });
    expect(wrapper.emitted("event-resize")[1][0].end).toEqual(new Date(2026, 2, 16));
    // Up and down do not resize a bar
    await TRIP.trigger("keydown", { key: "ArrowUp", altKey: true, shiftKey: true });
    expect(wrapper.emitted("event-resize")).toHaveLength(2);
    wrapper.unmount();
  });

  it("the end is at least one timeStep after the start", async() => {
    const wrapper = mountCalendar({ view: "week", isResizable: true, events: [{ id: 1, label: "Short", start: "2026-03-10T09:00:00", end: "2026-03-10T09:30:00" }] });
    await findEvent(wrapper, "Short", ".a_calendar__event_timed").trigger("keydown", { key: "ArrowUp", altKey: true, shiftKey: true });
    expect(wrapper.emitted("event-resize")).toBeUndefined();
    wrapper.unmount();
  });

  it("the focus goes back to the moved event after the parent has saved it", async() => {
    const wrapper = mountCalendar({ isDraggable: true });
    const MEETING = findEvent(wrapper, "Meeting");
    MEETING.element.focus();
    await MEETING.trigger("keydown", { key: "ArrowRight", altKey: true });
    const DROP = wrapper.emitted("event-drop")[0][0];
    await wrapper.setProps({ events: [EVENTS[0], { ...EVENTS[1], start: DROP.start, end: DROP.end }] });
    await nextTick();
    await nextTick();
    expect(document.activeElement.textContent).toContain("Meeting");
    expect(document.activeElement.closest(".a_calendar__week")).toBeTruthy();
    wrapper.unmount();
  });

  it("an event that cannot be dragged has no shortcuts", () => {
    const wrapper = mountCalendar();
    expect(findEvent(wrapper, "Meeting").attributes("aria-keyshortcuts")).toBeUndefined();
    expect(wrapper.find(".a_sr_only[id$=_keyboard]").exists()).toBe(false);
    wrapper.unmount();
  });
});
