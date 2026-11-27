import {
  h,
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
  ASelect,
} from "../../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

const DATA = [
  { value: "berlin", label: "Berlin" },
  { value: "hamburg", label: "Hamburg" },
  { value: "munich", label: "Munich" },
  { value: "bonn", label: "Bonn" },
];

const wrappers = [];

const mountSelect = ({ props = {}, inForm = false, withField = false } = {}) => {
  const onSubmitOuter = vi.fn(event => event.preventDefault());
  const SELECT = h(ASelect, { id: "city", label: "City", data: DATA, modelValue: undefined, ...props });
  const wrapper = mount({
    render: () => h("div", [
      withField && h("input", { id: "other_field" }),
      inForm ? h("form", { onSubmit: onSubmitOuter }, [SELECT]) : SELECT,
    ]),
  }, { attachTo: document.body });
  wrappers.push(wrapper);
  return { onSubmitOuter, wrapper };
};

const combobox = () => document.querySelector("[role=\"combobox\"]");
const listbox = () => document.getElementById(combobox().getAttribute("aria-controls"));
const options = () => Array.from(listbox().querySelectorAll("[role=\"option\"]"));
const flush = async() => {
  await nextTick();
  vi.runOnlyPendingTimers();
  await nextTick();
};
const key = async(target, keyName) => {
  const EVENT = new KeyboardEvent("keydown", { key: keyName, bubbles: true, cancelable: true });
  target.dispatchEvent(EVENT);
  await flush();
  return EVENT;
};
const open = async() => {
  combobox().focus();
  await key(combobox(), "ArrowDown");
};

describe("ASelect", () => {
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
    setI18n({
      en: {
        "_A_SELECT_SEARCH_RESULTS_{{count}}_": "Results: {{count}}",
        _A_SELECT_SEARCH_NO_RESULTS_: "No results",
        "_A_SELECT_REMOVE_{{label}}_": "Remove {{label}}",
      },
    });
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

  describe("roles", () => {
    it("has no role application and connects the combobox with the listbox", async() => {
      mountSelect();
      await flush();

      expect(document.querySelector("[role=\"application\"]")).toBeNull();
      expect(combobox().getAttribute("aria-haspopup")).toBe("listbox");
      expect(listbox().getAttribute("role")).toBe("listbox");
      expect(listbox().getAttribute("aria-labelledby")).toBe(combobox().getAttribute("aria-labelledby"));
      expect(options().map(option => option.textContent.trim())).toEqual(["Berlin", "Hamburg", "Munich", "Bonn"]);
    });

    it("has only options in the listbox: search and select all are outside of it", async() => {
      mountSelect({ props: { type: "multiselect", search: true, isSelectAll: true, isDeselectAll: true, modelValue: [] } });
      await flush();

      expect(listbox().getAttribute("aria-multiselectable")).toBe("true");
      expect(listbox().querySelector("input")).toBeNull();
      expect(listbox().querySelector("[role=\"button\"]")).toBeNull();
      const POPUP = listbox().parentElement.closest(".a_select_menu");
      expect(POPUP.querySelector(".a_select__search input")).not.toBeNull();
      expect(POPUP.querySelectorAll("[role=\"button\"].a_select__menu__link")).toHaveLength(2);
    });
  });

  describe("keyboard", () => {
    it("opens with ArrowDown at the first option and goes round", async() => {
      mountSelect();
      await flush();
      await open();

      expect(combobox().getAttribute("aria-expanded")).toBe("true");
      expect(document.activeElement.textContent.trim()).toBe("Berlin");
      await key(document.activeElement, "ArrowUp");
      expect(document.activeElement.textContent.trim()).toBe("Bonn");
      await key(document.activeElement, "ArrowDown");
      expect(document.activeElement.textContent.trim()).toBe("Berlin");
    });

    it("uses Home, End and the first letter", async() => {
      mountSelect();
      await flush();
      await open();

      await key(document.activeElement, "End");
      expect(document.activeElement.textContent.trim()).toBe("Bonn");
      await key(document.activeElement, "Home");
      expect(document.activeElement.textContent.trim()).toBe("Berlin");
      await key(document.activeElement, "b");
      expect(document.activeElement.textContent.trim()).toBe("Bonn");
      await key(document.activeElement, "m");
      expect(document.activeElement.textContent.trim()).toBe("Munich");
    });

    it("closes with Escape and gives the focus back to the combobox", async() => {
      mountSelect();
      await flush();
      await open();

      await key(document.activeElement, "Escape");
      expect(combobox().getAttribute("aria-expanded")).toBe("false");
      expect(document.activeElement).toBe(combobox());
    });

    it("does not handle the keys when the focus is in another field", async() => {
      mountSelect({ withField: true });
      await flush();
      await open();
      const FIELD = document.getElementById("other_field");
      FIELD.focus();

      expect((await key(FIELD, "ArrowDown")).defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(FIELD);
    });
  });

  describe("search", () => {
    it("tells the number of the options found (live region)", async() => {
      mountSelect({ props: { search: true } });
      await flush();
      await open();
      const LIVE = document.querySelector(".a_select [aria-live=\"polite\"]");
      expect(LIVE.textContent).toBe("");

      const INPUT = document.querySelector(".a_select__search input");
      INPUT.value = "b";
      INPUT.dispatchEvent(new Event("input", { bubbles: true }));
      await flush();
      vi.advanceTimersByTime(500);
      await flush();
      // "b" is in Berlin, Hamburg and Bonn
      expect(LIVE.textContent).toBe("Results: 3");

      INPUT.value = "xyz";
      INPUT.dispatchEvent(new Event("input", { bubbles: true }));
      await flush();
      vi.advanceTimersByTime(500);
      await flush();
      expect(LIVE.textContent).toBe("No results");
    });

    it("does not submit the form around with Enter in the search (in-body false)", async() => {
      mountSelect({ props: { search: true, inBody: false }, inForm: true });
      await flush();
      await open();

      const INPUT = document.querySelector(".a_select__search input");
      expect((await key(INPUT, "Enter")).defaultPrevented).toBe(true);
    });

    it("does not let the submit of the search in the API reach the form around (in-body false)", async() => {
      const { onSubmitOuter } = mountSelect({ props: { searchOutside: true, inBody: false }, inForm: true });
      await flush();
      await open();

      const SEARCH_FORM = document.querySelector(".a_select__search form");
      SEARCH_FORM.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      expect(onSubmitOuter).not.toHaveBeenCalled();
    });
  });

  describe("removable values (multiselect)", () => {
    it("has the values with remove buttons next to the combobox, reachable with Tab", async() => {
      const { wrapper } = mountSelect({ props: { type: "multiselect", modelValue: ["berlin", "bonn"] } });
      await flush();

      expect(combobox().querySelector("button")).toBeNull();
      expect(combobox().textContent).toContain("2");
      const BUTTONS = Array.from(document.querySelectorAll(".a_select__ul_closeable__item__btn"));
      expect(BUTTONS).toHaveLength(2);
      expect(BUTTONS[0].getAttribute("tabindex")).not.toBe("-1");
      expect(BUTTONS[0].textContent).toContain("Remove Berlin");

      BUTTONS[0].click();
      await flush();
      const SELECT = wrapper.findComponent(ASelect);
      expect(SELECT.emitted("update:modelValue").at(-1)[0]).toEqual(["bonn"]);
    });
  });
});
