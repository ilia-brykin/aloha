import {
  nextTick,
} from "vue";
import {
  afterEach,
  beforeAll,
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
  ADatepicker,
} from "../../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

const wrappers = [];

const mountDatepicker = (props = {}) => {
  const wrapper = mount(ADatepicker, {
    props: {
      id: "birthday",
      label: "Birthday",
      modelValue: undefined,
      format: "DD.MM.YYYY",
      formatSave: "YYYY-MM-DD",
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const input = wrapper => wrapper.get("input").element;
const popup = () => document.querySelector(".a_datepicker__popup");
const flush = async() => {
  await nextTick();
  vi.runOnlyPendingTimers();
  await nextTick();
};
const type = async(element, value) => {
  element.value = value;
  element.dispatchEvent(new Event("input", { bubbles: true }));
  await nextTick();
};
const key = async(element, keyName) => {
  const EVENT = new KeyboardEvent("keydown", { key: keyName, bubbles: true, cancelable: true });
  element.dispatchEvent(EVENT);
  await flush();
  return EVENT;
};

describe("ADatepicker", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = globalThis.ResizeObserver || class {
      observe() {
      }
      unobserve() {
      }
      disconnect() {
      }
    };
  });

  beforeEach(async() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2025, 2, 15));
    setI18n({ en: { _A_DATEPICKER_DIALOG_LABEL_: "Choose a date" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("connects the input with the help text and the errors, required and invalid", async() => {
    const wrapper = mountDatepicker({ helpText: "Day of birth", errors: ["Required"], required: true });
    await flush();

    const DESCRIBEDBY = input(wrapper).getAttribute("aria-describedby").split(" ");
    expect(DESCRIBEDBY).toContain(wrapper.vm.helpTextId);
    expect(DESCRIBEDBY).toContain(wrapper.vm.errorsId);
    expect(input(wrapper).getAttribute("aria-invalid")).toBe("true");
    expect(input(wrapper).getAttribute("aria-required")).toBe("true");
    expect(input(wrapper).getAttribute("aria-haspopup")).toBe("dialog");
  });

  it("opens a named dialog and has aria-expanded on the input", async() => {
    const wrapper = mountDatepicker();
    await flush();
    expect(input(wrapper).getAttribute("aria-expanded")).toBe("false");

    input(wrapper).focus();
    await flush();
    expect(input(wrapper).getAttribute("aria-expanded")).toBe("true");
    expect(popup().getAttribute("role")).toBe("dialog");
    expect(popup().getAttribute("aria-label")).toBe("Choose a date");
    expect(popup().hasAttribute("aria-expanded")).toBe(false);
    expect(document.querySelector("[role=\"application\"], [role=\"header\"]")).toBeNull();
  });

  it("has the days visible for screen readers, today and the selected day marked", async() => {
    const wrapper = mountDatepicker({ modelValue: "2025-03-10" });
    await flush();
    input(wrapper).focus();
    await flush();

    const DAYS = Array.from(popup().querySelectorAll(".a_datepicker__panel__button"));
    expect(DAYS.length).toBeGreaterThan(27);
    expect(DAYS.some(day => day.getAttribute("aria-hidden") === "true")).toBe(false);
    expect(popup().querySelectorAll("[aria-current=\"date\"]")).toHaveLength(1);
    const SELECTED = popup().querySelector("td[aria-selected=\"true\"]");
    expect(SELECTED.textContent).toContain("10");
  });

  it("does not fail when a date is typed again after Enter (the calendar is closed)", async() => {
    const wrapper = mountDatepicker();
    await flush();
    input(wrapper).focus();
    await flush();

    await type(input(wrapper), "05.03.2025");
    await key(input(wrapper), "Enter");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["2025-03-05"]);
    expect(popup()).toBeNull();

    await type(input(wrapper), "06.03.2025");
    await key(input(wrapper), "Enter");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["2025-03-06"]);
  });

  it("checks min-date also when the calendar is closed", async() => {
    const wrapper = mountDatepicker({ minDate: "2025-03-10" });
    await flush();
    input(wrapper).focus();
    await flush();
    await key(input(wrapper), "Escape");
    await type(input(wrapper), "06.03.2025");
    await key(input(wrapper), "Enter");
    await flush();

    await type(input(wrapper), "05.03.2025");
    await key(input(wrapper), "Enter");
    expect(wrapper.emitted("inputError")).toBeTruthy();
    expect((wrapper.emitted("update:modelValue") || []).flat()).not.toContain("2025-03-05");
  });

  it("opens the calendar with ArrowDown when it is closed", async() => {
    const wrapper = mountDatepicker();
    await flush();
    input(wrapper).focus();
    await flush();
    await type(input(wrapper), "05.03.2025");
    await key(input(wrapper), "Enter");
    expect(popup()).toBeNull();

    await key(input(wrapper), "ArrowDown");
    expect(popup()).not.toBeNull();
  });
});
