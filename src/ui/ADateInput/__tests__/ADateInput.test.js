import {
  h,
  nextTick,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";
import {
  ADateInput,
} from "../../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

import AUiComponents from "../../AUiComponents";
import {
  en as i18nEN,
} from "../../../i18n/allLanguages";

const wrappers = [];

const mountInput = (props = {}) => {
  const wrapper = mount(ADateInput, {
    props: {
      id: "day",
      label: "Day",
      locale: "de",
      modelValue: null,
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const inputs = wrapper => wrapper.findAll("input");
const type = async(input, text) => {
  input.element.value = text;
  await input.trigger("input");
  await input.trigger("change");
  await nextTick();
};
const key = async(element, keyName, options = {}) => {
  // Vue ignores an event in a handler attached at the same (frozen) time, see "_vts" in runtime-dom
  vi.setSystemTime(Date.now() + 10);
  const EVENT = new KeyboardEvent("keydown", { key: keyName, bubbles: true, cancelable: true, ...options });
  element.dispatchEvent(EVENT);
  await nextTick();
  await nextTick();
  return EVENT;
};
const dialog = () => document.querySelector("[role=\"dialog\"]");
const lastModel = wrapper => wrapper.emitted("update:modelValue")?.at(-1)[0];

describe("ADateInput", () => {
  beforeEach(async() => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(2025, 2, 15));
    setI18n({ en: { ...i18nEN } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.useRealTimers();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("is a text field with a label and a visible format, the model is ISO", async() => {
    const wrapper = mountInput();
    const INPUT = inputs(wrapper)[0];

    expect(wrapper.get("label").attributes("for")).toBe("day");
    expect(INPUT.attributes("type")).toBe("text");
    const FORMAT = wrapper.get(".a_date_input__format");
    expect(FORMAT.text()).toBe("Format: DD.MM.YYYY");
    expect(INPUT.attributes("aria-describedby").split(" ")).toContain(FORMAT.attributes("id"));

    await type(INPUT, "5.3.25");
    expect(lastModel(wrapper)).toBe("2025-03-05");
    expect(INPUT.element.value).toBe("05.03.2025");
  });

  it("shows the model in the format of the language", () => {
    const wrapper = mountInput({ modelValue: "2025-03-05", locale: "en-US" });
    expect(inputs(wrapper)[0].element.value).toBe("03/05/2025");
    expect(wrapper.get(".a_date_input__format").text()).toBe("Format: MM/DD/YYYY");
  });

  it("keeps a wrong text, shows an error and connects it with the field", async() => {
    const wrapper = mountInput({ modelValue: "2025-03-05" });
    const INPUT = inputs(wrapper)[0];

    await type(INPUT, "31.02.2025");
    expect(lastModel(wrapper)).toBeNull();
    expect(INPUT.element.value).toBe("31.02.2025");
    expect(INPUT.attributes("aria-invalid")).toBe("true");
    const ERRORS = wrapper.get("#day_errors_text");
    expect(ERRORS.text()).toContain("Enter a valid date, e.g. 15.03.2025");
    expect(INPUT.attributes("aria-describedby").split(" ")).toContain("day_errors_text");

    await type(INPUT, "1.3.2025");
    expect(lastModel(wrapper)).toBe("2025-03-01");
    expect(wrapper.find("#day_errors_text").exists()).toBe(false);
  });

  it("checks min, max and disabled days", async() => {
    const wrapper = mountInput({
      min: "2025-03-10",
      max: "2025-03-20",
      isDateDisabled: iso => iso === "2025-03-12",
    });
    const INPUT = inputs(wrapper)[0];

    await type(INPUT, "9.3.2025");
    expect(wrapper.text()).toContain("The date must not be before 10.03.2025");
    await type(INPUT, "21.3.2025");
    expect(wrapper.text()).toContain("The date must not be after 20.03.2025");
    await type(INPUT, "12.3.2025");
    expect(wrapper.text()).toContain("This date cannot be chosen");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("opens a modal date picker dialog with a grid and moves with the keyboard", async() => {
    const wrapper = mountInput({ modelValue: "2025-03-05" });
    const BUTTON = wrapper.get(".a_date_input__toggle");
    expect(BUTTON.attributes("aria-haspopup")).toBe("dialog");
    expect(BUTTON.attributes("aria-expanded")).toBe("false");
    expect(BUTTON.attributes("aria-label")).toBe("Change date, selected: Mittwoch, 5. März 2025");

    await BUTTON.trigger("click");
    await nextTick();
    expect(BUTTON.attributes("aria-expanded")).toBe("true");
    expect(dialog().getAttribute("aria-modal")).toBe("true");
    expect(dialog().getAttribute("aria-label")).toBe(BUTTON.attributes("aria-label"));
    const GRID = dialog().querySelector("[role=\"grid\"]");
    expect(document.getElementById(GRID.getAttribute("aria-labelledby")).textContent).toBe("März 2025");
    expect(document.activeElement.dataset.date).toBe("2025-03-05");
    expect(document.activeElement.getAttribute("aria-selected")).toBe("true");
    expect(dialog().querySelector("[aria-current=\"date\"]").dataset.date).toBe("2025-03-15");
    expect(dialog().querySelectorAll("[tabindex=\"0\"]")).toHaveLength(1);

    await key(document.activeElement, "ArrowRight");
    expect(document.activeElement.dataset.date).toBe("2025-03-06");
    await key(document.activeElement, "ArrowDown");
    expect(document.activeElement.dataset.date).toBe("2025-03-13");
    await key(document.activeElement, "PageDown");
    expect(document.activeElement.dataset.date).toBe("2025-04-13");
    expect(GRID.getAttribute("aria-labelledby") && dialog().querySelector("h2").textContent).toBe("April 2025");
    await key(document.activeElement, "Home");
    expect(document.activeElement.dataset.date).toBe("2025-04-07");
    await key(document.activeElement, "PageUp", { shiftKey: true });
    expect(document.activeElement.dataset.date).toBe("2024-04-07");

    await key(document.activeElement, "Enter");
    expect(lastModel(wrapper)).toBe("2024-04-07");
    expect(dialog()).toBeNull();
    expect(document.activeElement).toBe(BUTTON.element);
    expect(inputs(wrapper)[0].element.value).toBe("07.04.2024");
  });

  it("closes with Escape without closing a modal around, the focus goes back to the button", async() => {
    const onKeydown = vi.fn();
    document.addEventListener("keydown", onKeydown);
    const wrapper = mountInput();
    const BUTTON = wrapper.get(".a_date_input__toggle");
    await BUTTON.trigger("click");
    await nextTick();
    expect(document.activeElement.dataset.date).toBe("2025-03-15");

    await key(document.activeElement, "Escape");
    expect(dialog()).toBeNull();
    expect(document.activeElement).toBe(BUTTON.element);
    expect(onKeydown).not.toHaveBeenCalled();
    document.removeEventListener("keydown", onKeydown);
  });

  it("does not select a disabled day and closes on a click outside", async() => {
    const wrapper = mountInput({ min: "2025-03-16" });
    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    // today is before min, so the focus is on min
    expect(document.activeElement.dataset.date).toBe("2025-03-16");
    const DISABLED = dialog().querySelector("[data-date=\"2025-03-15\"]");
    expect(DISABLED.getAttribute("aria-disabled")).toBe("true");
    DISABLED.click();
    await nextTick();
    expect(dialog()).not.toBeNull();
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();

    document.body.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    await nextTick();
    expect(dialog()).toBeNull();
  });

  it("keeps the focus in the dialog with Tab", async() => {
    const wrapper = mountInput();
    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    const FOCUSABLE = dialog().querySelectorAll("button, [tabindex=\"0\"]");
    FOCUSABLE[FOCUSABLE.length - 1].focus();
    const EVENT = await key(document.activeElement, "Tab");
    expect(EVENT.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(FOCUSABLE[0]);
  });

  it("range: two fields in a group, the end must not be before the start", async() => {
    const wrapper = mountInput({ range: true, modelValue: null });
    const GROUP = wrapper.get("[role=\"group\"]");
    expect(GROUP.attributes("aria-labelledby")).toBe("day_label");
    expect(wrapper.get("label.a_form_element_label, .a_form_element_label").attributes("for")).toBeUndefined();
    const [FROM, TO] = inputs(wrapper);
    expect(wrapper.get(`label[for="${ FROM.attributes("id") }"]`).text()).toBe("From");
    expect(wrapper.get(`label[for="${ TO.attributes("id") }"]`).text()).toBe("To");
    expect(FROM.attributes("id")).toBe("day");

    await type(FROM, "10.3.2025");
    expect(lastModel(wrapper)).toEqual(["2025-03-10", null]);
    await type(TO, "5.3.2025");
    expect(TO.attributes("aria-invalid")).toBe("true");
    expect(wrapper.text()).toContain("To: The end must not be before the start");
    await type(TO, "20.3.2025");
    expect(lastModel(wrapper)).toEqual(["2025-03-10", "2025-03-20"]);

    // the calendar of the end shows the range
    const TOGGLES = wrapper.findAll(".a_date_input__toggle");
    expect(TOGGLES[1].attributes("aria-label")).toBe("To: Change date, selected: Donnerstag, 20. März 2025");
    await TOGGLES[1].trigger("click");
    await nextTick();
    expect(dialog().querySelectorAll(".a_date_input__day_in_range")).toHaveLength(11);
  });

  it("datetime and time", async() => {
    const wrapper = mountInput({ mode: "datetime", modelValue: "2025-03-05T09:05" });
    const [DATE, TIME] = inputs(wrapper);
    expect(DATE.element.value).toBe("05.03.2025");
    expect(TIME.element.value).toBe("09:05");
    expect(wrapper.get(".a_date_input__format").text()).toBe("Format: DD.MM.YYYY, hh:mm");
    await type(TIME, "2:30 pm");
    expect(lastModel(wrapper)).toBe("2025-03-05T14:30");
    await type(TIME, "25");
    expect(lastModel(wrapper)).toBeNull();
    expect(wrapper.text()).toContain("Time: Enter a valid time, e.g. 14:30");

    const TIME_ONLY = mountInput({ id: "time", mode: "time" });
    expect(TIME_ONLY.find(".a_date_input__toggle").exists()).toBe(false);
    await type(inputs(TIME_ONLY)[0], "930");
    expect(lastModel(TIME_ONLY)).toBe("09:30");
  });

  it("is available in AForm as type dateInput and readonly", () => {
    expect(AUiComponents.dateInput).toBe(ADateInput);
    const wrapper = mountInput({ range: true, readonly: true, modelValue: ["2025-03-10", "2025-03-20"] });
    expect(wrapper.text()).toContain("10.03.2025 – 20.03.2025");
    expect(wrapper.find("input").exists()).toBe(false);
  });
  it("shortcuts in the calendar set the value, also a range", async() => {
    const wrapper = mountInput({
      range: true,
      shortcuts: [
        { label: "Last 7 days", value: () => ["2025-03-09", "2025-03-15"] },
        { label: "Wrong", value: ["2025-03-20", "2025-03-01"] },
      ],
    });
    const BUTTON = wrapper.findAll(".a_date_input__toggle")[0];
    await BUTTON.trigger("click");
    await nextTick();
    const GROUP = dialog().querySelector(".a_date_input__shortcuts");
    expect(GROUP.getAttribute("role")).toBe("group");
    expect(GROUP.getAttribute("aria-label")).toBe("Quick choice");
    GROUP.querySelector("button").click();
    await nextTick();
    expect(lastModel(wrapper)).toEqual(["2025-03-09", "2025-03-15"]);
    expect(dialog()).toBeNull();
    expect(document.activeElement).toBe(BUTTON.element);
    expect(inputs(wrapper).map(input => input.element.value)).toEqual(["09.03.2025", "15.03.2025"]);

    // the value of a shortcut is checked like a typed one
    await BUTTON.trigger("click");
    await nextTick();
    dialog().querySelectorAll(".a_date_input__shortcuts button")[1].click();
    await nextTick();
    expect(wrapper.text()).toContain("To: The end must not be before the start");
  });

  it("clearable: a named button empties the field and puts the focus into it", async() => {
    const wrapper = mountInput({ clearable: true, modelValue: "2025-03-05" });
    const CLEAR = wrapper.get(".a_date_input__clear");
    expect(CLEAR.attributes("aria-label")).toBe("Clear Day");
    await CLEAR.trigger("click");
    expect(lastModel(wrapper)).toBeNull();
    expect(document.activeElement).toBe(inputs(wrapper)[0].element);
    expect(wrapper.find(".a_date_input__clear").exists()).toBe(false);

    const RANGE = mountInput({ id: "range", clearable: true, range: true, modelValue: ["2025-03-01", "2025-03-05"] });
    expect(RANGE.findAll(".a_date_input__clear").map(button => button.attributes("aria-label"))).toEqual(["Clear From", "Clear To"]);
  });

  it("mode month and year: own format, model and calendar of months or years", async() => {
    const wrapper = mountInput({ mode: "month", max: "2025-06" });
    expect(wrapper.get(".a_date_input__format").text()).toBe("Format: MM.YYYY");
    await type(inputs(wrapper)[0], "3.25");
    expect(lastModel(wrapper)).toBe("2025-03");
    expect(inputs(wrapper)[0].element.value).toBe("03.2025");
    await type(inputs(wrapper)[0], "7.25");
    expect(wrapper.text()).toContain("The date must not be after 06.2025");
    await type(inputs(wrapper)[0], "13.25");
    expect(wrapper.text()).toContain("Enter a valid month, e.g. 03.2025");
    await type(inputs(wrapper)[0], "3.2025");

    const BUTTON = wrapper.get(".a_date_input__toggle");
    expect(BUTTON.attributes("aria-label")).toBe("Change date, selected: März 2025");
    await BUTTON.trigger("click");
    await nextTick();
    expect(dialog().querySelector("h2").textContent).toBe("2025");
    expect(document.activeElement.dataset.date).toBe("2025-03");
    expect(document.activeElement.textContent).toContain("März 2025");
    expect(dialog().querySelector("[data-date=\"2025-07\"]").getAttribute("aria-disabled")).toBe("true");
    await key(document.activeElement, "ArrowDown");
    expect(document.activeElement.dataset.date).toBe("2025-06");
    await key(document.activeElement, "Enter");
    expect(lastModel(wrapper)).toBe("2025-06");

    const YEAR = mountInput({ id: "year", mode: "year" });
    expect(YEAR.get(".a_date_input__format").text()).toBe("Format: YYYY");
    await type(inputs(YEAR)[0], "99");
    expect(lastModel(YEAR)).toBe("1999");
    await YEAR.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    expect(dialog().querySelector("h2").textContent).toBe("1992 – 2003");
    expect(dialog().querySelector(".a_date_input__view")).toBeNull();
    await key(document.activeElement, "ArrowRight");
    await key(document.activeElement, "Enter");
    expect(lastModel(YEAR)).toBe("2000");
  });

  it("the heading button goes to the months and the years, a choice goes back to the days", async() => {
    const wrapper = mountInput({ modelValue: "2025-03-31" });
    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    const VIEW = dialog().querySelector(".a_date_input__view");
    expect(VIEW.getAttribute("aria-label")).toBe("Choose month and year");
    VIEW.click();
    await nextTick();
    await nextTick();
    expect(document.activeElement.dataset.date).toBe("2025-03");
    dialog().querySelector(".a_date_input__view").click();
    await nextTick();
    await nextTick();
    expect(document.activeElement.dataset.date).toBe("2025");
    await key(document.activeElement, "ArrowLeft");
    await key(document.activeElement, "Enter");
    expect(document.activeElement.dataset.date).toBe("2024-03");
    await key(document.activeElement, "ArrowLeft");
    await key(document.activeElement, "Enter");
    // 31 does not exist in February
    expect(document.activeElement.dataset.date).toBe("2024-02-29");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    await key(document.activeElement, "Enter");
    expect(lastModel(wrapper)).toBe("2024-02-29");
  });

  it("slot day: own content in the cell, the full date stays the name", async() => {
    const wrapper = mount(ADateInput, {
      props: { id: "slot", label: "Day", locale: "de", modelValue: "2025-03-05" },
      slots: {
        day: ({ date }) => (date === "2025-03-17" ? h("span", { class: "holiday" }, "Holiday") : null),
      },
      attachTo: document.body,
    });
    wrappers.push(wrapper);
    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    const CELL = dialog().querySelector("[data-date=\"2025-03-17\"]");
    expect(CELL.querySelector(".holiday").textContent).toBe("Holiday");
    expect(CELL.querySelector(".a_sr_only").textContent).toBe("Montag, 17. März 2025");
    expect(CELL.hasAttribute("aria-label")).toBe(false);
  });

  it("default-time fills an empty time when a date is given", async() => {
    const wrapper = mountInput({ range: true, mode: "datetime", defaultTime: ["00:00", "23:59"] });
    const [FROM_DATE, FROM_TIME, TO_DATE, TO_TIME] = inputs(wrapper);
    await type(FROM_DATE, "10.3.2025");
    expect(FROM_TIME.element.value).toBe("00:00");
    expect(TO_TIME.element.value).toBe("");
    await type(TO_DATE, "20.3.2025");
    expect(TO_TIME.element.value).toBe("23:59");
    expect(lastModel(wrapper)).toEqual(["2025-03-10T00:00", "2025-03-20T23:59"]);
  });
  it("time rules: minute-step, min-time, max-time and seconds", async() => {
    const wrapper = mountInput({ mode: "time", minuteStep: 15, minTime: "08:00", maxTime: "18:00" });
    const INPUT = inputs(wrapper)[0];
    await type(INPUT, "9:10");
    expect(wrapper.text()).toContain("Only every 15 minutes, e.g. 09:15");
    expect(lastModel(wrapper)).toBeUndefined();
    await type(INPUT, "7:45");
    expect(wrapper.text()).toContain("The time must not be before 08:00");
    await type(INPUT, "18:15");
    expect(wrapper.text()).toContain("The time must not be after 18:00");
    await type(INPUT, "930");
    expect(lastModel(wrapper)).toBe("09:30");

    const SECONDS = mountInput({ id: "seconds", mode: "datetime", withSeconds: true, modelValue: "2025-03-05T14:30:15" });
    expect(SECONDS.get(".a_date_input__format").text()).toBe("Format: DD.MM.YYYY, hh:mm:ss");
    expect(inputs(SECONDS)[1].element.value).toBe("14:30:15");
    await type(inputs(SECONDS)[1], "143045");
    expect(lastModel(SECONDS)).toBe("2025-03-05T14:30:45");
  });

  it("range: min-days and max-days", async() => {
    const wrapper = mountInput({ range: true, minDays: 2, maxDays: 7 });
    const [FROM, TO] = inputs(wrapper);
    await type(FROM, "1.3.2025");
    await type(TO, "2.3.2025");
    expect(wrapper.text()).toContain("To: The period must be at least 2 days");
    expect(TO.attributes("aria-invalid")).toBe("true");
    await type(TO, "10.3.2025");
    expect(wrapper.text()).toContain("To: The period must be at most 7 days");
    expect(lastModel(wrapper)).toEqual(["2025-03-01", null]);
    await type(TO, "8.3.2025");
    expect(lastModel(wrapper)).toEqual(["2025-03-01", "2025-03-08"]);
  });

  it("range: the calendar shows the period under the mouse", async() => {
    const wrapper = mountInput({ range: true, modelValue: ["2025-03-10", null] });
    await wrapper.findAll(".a_date_input__toggle")[1].trigger("click");
    await nextTick();
    dialog().querySelector("[data-date=\"2025-03-14\"]").dispatchEvent(new Event("mouseenter"));
    await nextTick();
    const PREVIEW = Array.from(dialog().querySelectorAll(".a_date_input__day_in_preview")).map(cell => cell.dataset.date);
    expect(PREVIEW).toEqual(["2025-03-10", "2025-03-11", "2025-03-12", "2025-03-13", "2025-03-14"]);
    // before the start: no period
    dialog().querySelector("[data-date=\"2025-03-05\"]").dispatchEvent(new Event("mouseenter"));
    await nextTick();
    expect(dialog().querySelectorAll(".a_date_input__day_in_preview")).toHaveLength(0);
  });

  it("months=2: two named grids, one tab stop, the days only once", async() => {
    const wrapper = mountInput({ months: 2, modelValue: "2025-03-31" });
    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    const GRIDS = dialog().querySelectorAll("[role=\"grid\"]");
    expect(Array.from(GRIDS).map(grid => grid.getAttribute("aria-label"))).toEqual(["März 2025", "April 2025"]);
    expect(dialog().querySelector("h2").textContent).toBe("März 2025 – April 2025");
    expect(dialog().querySelectorAll("[data-date=\"2025-04-01\"]")).toHaveLength(1);
    expect(dialog().querySelectorAll("[tabindex=\"0\"]")).toHaveLength(1);
    await key(document.activeElement, "ArrowRight");
    expect(document.activeElement.dataset.date).toBe("2025-04-01");
    // the months move only when the focus leaves them
    expect(dialog().querySelector("h2").textContent).toBe("März 2025 – April 2025");
    await key(document.activeElement, "PageDown");
    expect(document.activeElement.dataset.date).toBe("2025-05-01");
    expect(dialog().querySelector("h2").textContent).toBe("April 2025 – Mai 2025");
  });

  it("show-week-numbers and show-today", async() => {
    const wrapper = mountInput({ showWeekNumbers: true, showToday: true, modelValue: "2025-03-05" });
    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    const HEADER = dialog().querySelector("thead th");
    expect(HEADER.getAttribute("abbr")).toBe("Week");
    expect(HEADER.textContent).toBe("Wk");
    expect(Array.from(dialog().querySelectorAll("tbody th[scope=\"row\"]")).map(cell => cell.textContent)).toEqual(["9", "10", "11", "12", "13", "14"]);
    dialog().querySelector(".a_date_input__today").click();
    await nextTick();
    expect(lastModel(wrapper)).toBe("2025-03-15");
    expect(dialog()).toBeNull();

    const LIMITED = mountInput({ id: "limited", showToday: true, max: "2025-03-01" });
    await LIMITED.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    expect(dialog().querySelector(".a_date_input__today").disabled).toBe(true);
  });

  it("mode week: ISO week as model, the whole week is selected", async() => {
    const wrapper = mountInput({ mode: "week" });
    expect(wrapper.get(".a_date_input__format").text()).toBe("Format: Wk WW/YYYY");
    await type(inputs(wrapper)[0], "10/2025");
    expect(lastModel(wrapper)).toBe("2025-W10");
    expect(inputs(wrapper)[0].element.value).toBe("Wk 10/2025");
    await type(inputs(wrapper)[0], "53/2025");
    expect(wrapper.text()).toContain("Enter a valid week, e.g. Wk 11/2025");
    await type(inputs(wrapper)[0], "2025-W10");

    await wrapper.get(".a_date_input__toggle").trigger("click");
    await nextTick();
    const SELECTED = Array.from(dialog().querySelectorAll("td[aria-selected=\"true\"]")).map(cell => cell.dataset.date);
    expect(SELECTED).toEqual(["2025-03-03", "2025-03-04", "2025-03-05", "2025-03-06", "2025-03-07", "2025-03-08", "2025-03-09"]);
    expect(dialog().querySelector("tbody th[scope=\"row\"]")).not.toBeNull();
    await key(document.activeElement, "ArrowDown");
    await key(document.activeElement, "ArrowRight");
    await key(document.activeElement, "Enter");
    expect(lastModel(wrapper)).toBe("2025-W11");
  });

  it("utc: the model is a moment in UTC, the fields show the local time", async() => {
    const VALUE = "2025-03-05T13:30:00Z";
    const LOCAL = new Date(VALUE);
    const pad = number => `${ number }`.padStart(2, "0");
    const wrapper = mountInput({ mode: "datetime", utc: true, modelValue: VALUE });
    const [DATE, TIME] = inputs(wrapper);
    expect(DATE.element.value).toBe(`${ pad(LOCAL.getDate()) }.${ pad(LOCAL.getMonth() + 1) }.${ LOCAL.getFullYear() }`);
    expect(TIME.element.value).toBe(`${ pad(LOCAL.getHours()) }:${ pad(LOCAL.getMinutes()) }`);
    await type(TIME, "15:00");
    expect(lastModel(wrapper)).toBe(new Date(LOCAL.getFullYear(), LOCAL.getMonth(), LOCAL.getDate(), 15, 0).toISOString().replace(".000Z", "Z"));
  });

  it("model-format: tokens, timestamp and Date", async() => {
    const TOKENS = mountInput({ modelFormat: "DD.MM.YYYY", modelValue: "05.03.2025" });
    expect(inputs(TOKENS)[0].element.value).toBe("05.03.2025");
    await type(inputs(TOKENS)[0], "2025-03-06");
    expect(lastModel(TOKENS)).toBe("06.03.2025");

    const TIMESTAMP = mountInput({ id: "timestamp", mode: "datetime", modelFormat: "timestamp", modelValue: new Date(2025, 2, 5, 14, 30).getTime() });
    expect(inputs(TIMESTAMP).map(input => input.element.value)).toEqual(["05.03.2025", "14:30"]);
    await type(inputs(TIMESTAMP)[1], "15:00");
    expect(lastModel(TIMESTAMP)).toBe(new Date(2025, 2, 5, 15, 0).getTime());

    const DATE = mountInput({ id: "date", modelFormat: "date", range: true, modelValue: [new Date(2025, 2, 5), null] });
    expect(inputs(DATE)[0].element.value).toBe("05.03.2025");
    await type(inputs(DATE)[1], "6.3.2025");
    expect(lastModel(DATE)).toEqual([new Date(2025, 2, 5), new Date(2025, 2, 6)]);
  });

  it("emits open and close and has the methods open and close", async() => {
    const wrapper = mountInput({ range: true });
    wrapper.vm.open(1);
    await nextTick();
    expect(dialog()).not.toBeNull();
    expect(wrapper.emitted("open")).toEqual([[{ index: 1 }]]);
    wrapper.vm.close();
    await nextTick();
    expect(dialog()).toBeNull();
    expect(wrapper.emitted("close")).toEqual([[{ index: 1 }]]);

    const TIME = mountInput({ id: "time", mode: "time" });
    TIME.vm.open();
    expect(TIME.emitted("open")).toBeUndefined();
  });

  it("label-position like the other form elements, several fields always on top", () => {
    const FLOAT = mountInput({ labelPosition: "float", labelDescription: "Description" });
    const PARENT = FLOAT.get(".a_form_element__parent");
    expect(PARENT.classes()).toContain("a_form_element__parent_float");
    // the format is below the field, so the label can be in the field
    const CHILDREN = Array.from(PARENT.element.children);
    expect(CHILDREN.indexOf(FLOAT.get(".a_date_input__format").element)).toBeGreaterThan(CHILDREN.indexOf(FLOAT.get(".a_date_input").element));

    const TOP = mountInput({ id: "top", labelPosition: "top", labelDescription: "Description" });
    expect(TOP.get(".a_form_element__parent").classes()).not.toContain("a_form_element__parent_float");
    expect(inputs(TOP)[0].attributes("aria-describedby").split(" ")).toContain("top_label_description");

    const RANGE = mountInput({ id: "range", range: true, labelPosition: "float", labelDescription: "Description" });
    expect(RANGE.get(".a_form_element__parent").classes()).not.toContain("a_form_element__parent_float");
    expect(inputs(RANGE)[0].attributes("aria-describedby").split(" ")).toContain("range_label_description");
  });
});
