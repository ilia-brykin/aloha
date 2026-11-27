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
  flushPromises,
  mount,
} from "@vue/test-utils";
import {
  ACombobox,
} from "../../../index";

import AUiComponents from "../../AUiComponents";
import {
  getHighlightParts,
} from "../ACombobox";

const { getListHttp } = vi.hoisted(() => ({
  getListHttp: vi.fn(() => Promise.resolve([])),
}));

vi.mock("../../../compositionAPI/AHttpAPI", () => ({
  default: () => ({ getListHttp }),
}));

const CITIES = [
  { id: 1, label: "Berlin" },
  { id: 2, label: "Bern" },
  { id: 3, label: "Hamburg" },
  { id: 4, label: "Bremen" },
];

// v-model: the parent gives the typed text back
const mountCombobox = (props = {}) => {
  const wrapper = mount(ACombobox, {
    props: {
      id: "city",
      label: "City",
      data: CITIES,
      modelValue: "",
      "onUpdate:modelValue": value => wrapper.setProps({ modelValue: value }),
      ...props,
    },
    attachTo: document.body,
  });
  return wrapper;
};
const getInput = wrapper => wrapper.find("input");
const getOptions = wrapper => wrapper.findAll("[role='option']");
const type = async(wrapper, text) => {
  await getInput(wrapper).setValue(text);
  await flushPromises();
};
const keydown = async(wrapper, key, options = {}) => {
  const EVENT = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...options });
  getInput(wrapper).element.dispatchEvent(EVENT);
  await flushPromises();
  return EVENT;
};

afterEach(() => {
  getListHttp.mockReset();
  getListHttp.mockImplementation(() => Promise.resolve([]));
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("ACombobox: WAI-ARIA combobox", () => {
  it("an input with role combobox, the list is in the page and named by the label", () => {
    const wrapper = mountCombobox();
    const INPUT = getInput(wrapper);
    const LISTBOX = wrapper.find("[role='listbox']");

    expect(INPUT.attributes("role")).toBe("combobox");
    expect(INPUT.attributes("aria-autocomplete")).toBe("list");
    expect(INPUT.attributes("aria-expanded")).toBe("false");
    expect(INPUT.attributes("aria-controls")).toBe(LISTBOX.attributes("id"));
    expect(INPUT.attributes("autocomplete")).toBe("off");
    expect(LISTBOX.attributes("hidden")).toBeDefined();
    expect(LISTBOX.attributes("aria-labelledby")).toBe("city_label");
    expect(wrapper.find("label").attributes("for")).toBe("city");
  });

  it("the text filters the data (case-insensitive) and highlights the match", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "BE");

    expect(wrapper.emitted("update:modelValue")[0]).toEqual(["BE"]);
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("true");
    expect(getOptions(wrapper).map(option => option.text())).toEqual(["Berlin", "Bern"]);
    expect(getOptions(wrapper)[0].find("mark.a_search_highlight").text()).toBe("Be");
    expect(wrapper.find(".a_combobox__status").text()).toContain("_A_COMBOBOX_RESULTS_");
  });

  it("min-length and max-items", async() => {
    const wrapper = mountCombobox({ minLength: 2, maxItems: 1 });
    await type(wrapper, "B");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");

    await type(wrapper, "Be");
    expect(getOptions(wrapper)).toHaveLength(1);
  });

  it("the arrows move the active option (aria-activedescendant), they go round", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "be");

    const DOWN = await keydown(wrapper, "ArrowDown");
    expect(DOWN.defaultPrevented).toBe(true);
    const FIRST_ID = getOptions(wrapper)[0].attributes("id");
    expect(getInput(wrapper).attributes("aria-activedescendant")).toBe(FIRST_ID);
    expect(getOptions(wrapper)[0].attributes("aria-selected")).toBe("true");
    expect(getOptions(wrapper)[0].classes()).toContain("a_combobox__option_active");

    // from the first option up to the last one
    await keydown(wrapper, "ArrowUp");
    expect(getInput(wrapper).attributes("aria-activedescendant")).toBe(getOptions(wrapper)[1].attributes("id"));
    await keydown(wrapper, "ArrowDown");
    expect(getInput(wrapper).attributes("aria-activedescendant")).toBe(FIRST_ID);
    // the focus stays in the input
    expect(document.activeElement).not.toBe(getOptions(wrapper)[0].element);
  });

  it("Enter takes the active option: the text and the event select", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "ham");
    await keydown(wrapper, "ArrowDown");
    const ENTER = await keydown(wrapper, "Enter");

    expect(ENTER.defaultPrevented).toBe(true);
    expect(wrapper.props("modelValue")).toBe("Hamburg");
    expect(wrapper.emitted("select")).toEqual([[{ id: 3, label: "Hamburg", item: { id: 3, label: "Hamburg" } }]]);
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
    expect(getInput(wrapper).attributes("aria-activedescendant")).toBeUndefined();
  });

  it("Enter without an active option sends the form (no preventDefault)", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "be");

    expect((await keydown(wrapper, "Enter")).defaultPrevented).toBe(false);
    expect(wrapper.emitted("select")).toBeUndefined();
  });

  it("ArrowDown on a closed field opens the list at the first option, Alt+ArrowDown only opens", async() => {
    const wrapper = mountCombobox({ modelValue: "be" });
    await keydown(wrapper, "ArrowDown", { altKey: true });
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("true");
    expect(getInput(wrapper).attributes("aria-activedescendant")).toBeUndefined();

    await keydown(wrapper, "Escape");
    await keydown(wrapper, "ArrowDown");
    expect(getInput(wrapper).attributes("aria-activedescendant")).toBe(getOptions(wrapper)[0].attributes("id"));
  });

  it("Escape closes the list (not the modal around), then clears the text", async() => {
    const OUTSIDE = vi.fn();
    document.addEventListener("keydown", OUTSIDE);
    const wrapper = mountCombobox();
    await type(wrapper, "be");

    await keydown(wrapper, "Escape");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
    expect(wrapper.props("modelValue")).toBe("be");
    expect(OUTSIDE).not.toHaveBeenCalled();

    await keydown(wrapper, "Escape");
    expect(wrapper.props("modelValue")).toBe("");
    document.removeEventListener("keydown", OUTSIDE);
  });

  it("a click on an option takes it, mousedown keeps the focus in the input", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "bre");
    const OPTION = getOptions(wrapper)[0];

    const DOWN = new MouseEvent("mousedown", { bubbles: true, cancelable: true });
    OPTION.element.dispatchEvent(DOWN);
    expect(DOWN.defaultPrevented).toBe(true);
    await OPTION.trigger("click");
    expect(wrapper.props("modelValue")).toBe("Bremen");
  });

  it("blur and Tab close the list without taking an option", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "be");
    await keydown(wrapper, "ArrowDown");
    await keydown(wrapper, "Tab");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
    expect(wrapper.props("modelValue")).toBe("be");

    await type(wrapper, "ber");
    await getInput(wrapper).trigger("blur");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
  });

  it("no results: a visible text and the status", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "xyz");

    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
    expect(wrapper.find(".a_combobox__empty").text()).toContain("_A_COMBOBOX_NO_RESULTS_");
    expect(wrapper.find(".a_combobox__status").text()).toContain("_A_COMBOBOX_NO_RESULTS_");
  });

  it("the label of the data is text, no HTML (no XSS)", async() => {
    const wrapper = mountCombobox({ data: [{ id: 1, label: "<img src=x onerror=alert(1)>Berlin" }] });
    await type(wrapper, "ber");

    expect(wrapper.find("[role='option'] img").exists()).toBe(false);
    expect(getOptions(wrapper)[0].text()).toContain("<img");
  });

  it("is-data-simple-array: the item of select is the string", async() => {
    const wrapper = mountCombobox({ data: ["Paris", "Prague"], isDataSimpleArray: true });
    await type(wrapper, "pra");
    await keydown(wrapper, "ArrowDown");
    await keydown(wrapper, "Enter");

    expect(wrapper.emitted("select")).toEqual([[{ id: "Prague", label: "Prague", item: "Prague" }]]);
  });

  it("open-on-focus with min-length 0 shows the list at the focus", async() => {
    const wrapper = mountCombobox({ openOnFocus: true, minLength: 0 });
    await getInput(wrapper).trigger("focus");

    expect(getOptions(wrapper)).toHaveLength(4);
  });

  it("the clear button clears the text and closes the list", async() => {
    const wrapper = mountCombobox();
    await type(wrapper, "be");
    await wrapper.find(".a_form_control__actions button").trigger("click");

    expect(wrapper.props("modelValue")).toBe("");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
  });

  it("readonly and disabled", async() => {
    const READONLY = mountCombobox({ readonly: true, modelValue: "Berlin" });
    expect(READONLY.find("input").exists()).toBe(false);
    expect(READONLY.text()).toContain("Berlin");

    const DISABLED = mountCombobox({ disabled: true, modelValue: "be" });
    expect(getInput(DISABLED).attributes("disabled")).toBeDefined();
    await keydown(DISABLED, "ArrowDown");
    expect(getInput(DISABLED).attributes("aria-expanded")).toBe("false");
  });

  it("AForm: the type combobox", () => {
    expect(AUiComponents.combobox).toBe(ACombobox);
  });
});

describe("ACombobox: suggestions of the server", () => {
  it("url: one request after the pause with search-api-key, a spinner while loading", async() => {
    vi.useFakeTimers();
    let resolve;
    getListHttp.mockImplementation(() => new Promise(res => {
      resolve = res;
    }));
    const wrapper = mountCombobox({ data: [], url: "api/cities/", urlParams: { country: "de" }, searchTimeout: 300 });

    await getInput(wrapper).setValue("b");
    await getInput(wrapper).setValue("be");
    vi.advanceTimersByTime(299);
    expect(getListHttp).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(getListHttp).toHaveBeenCalledTimes(1);
    expect(getListHttp).toHaveBeenCalledWith({ url: "api/cities/", urlParams: { country: "de", search: "be" } });
    await nextTick();
    expect(wrapper.find(".a_combobox__actions .a_spinner_small").exists()).toBe(true);
    expect(wrapper.find(".a_combobox__status").text()).toContain("_A_COMBOBOX_LOADING_");

    resolve([{ id: 1, label: "Berlin" }]);
    await flushPromises();
    expect(getOptions(wrapper).map(option => option.text())).toEqual(["Berlin"]);
    expect(wrapper.find(".a_spinner_small").exists()).toBe(false);
  });

  it("an older answer does not replace a newer one", async() => {
    vi.useFakeTimers();
    const RESOLVES = [];
    getListHttp.mockImplementation(() => new Promise(res => RESOLVES.push(res)));
    const wrapper = mountCombobox({ data: [], url: "api/", searchTimeout: 0 });

    await getInput(wrapper).setValue("b");
    vi.advanceTimersByTime(0);
    await getInput(wrapper).setValue("be");
    vi.advanceTimersByTime(0);
    RESOLVES[1]([{ id: 2, label: "Bern" }]);
    await flushPromises();
    RESOLVES[0]([{ id: 1, label: "Berlin" }, { id: 9, label: "Bonn" }]);
    await flushPromises();

    expect(getOptions(wrapper).map(option => option.text())).toEqual(["Bern"]);
  });

  it("the server filters: all answers are shown", async() => {
    getListHttp.mockImplementation(() => Promise.resolve([{ id: 1, label: "München" }]));
    const wrapper = mountCombobox({ data: [], url: "api/", searchTimeout: 0 });
    await type(wrapper, "mu");
    await new Promise(res => setTimeout(res));
    await flushPromises();

    expect(getOptions(wrapper).map(option => option.text())).toEqual(["München"]);
  });
});

describe("getHighlightParts", () => {
  it("all matches, case-insensitive", () => {
    expect(getHighlightParts("Banana", "an")).toEqual([
      { text: "B", isMatch: false },
      { text: "an", isMatch: true },
      { text: "an", isMatch: true },
      { text: "a", isMatch: false },
    ]);
    expect(getHighlightParts("Bern", "")).toEqual([{ text: "Bern", isMatch: false }]);
    expect(getHighlightParts(5, "5")).toEqual([{ text: "5", isMatch: true }]);
  });
});

// the component in a template: v-model with own state
describe("ACombobox in a form", () => {
  it("v-model with the type of AForm keeps the text", async() => {
    const wrapper = mount({
      data: () => ({ city: "" }),
      render() {
        return h(ACombobox, {
          id: "c",
          data: CITIES,
          modelValue: this.city,
          "onUpdate:modelValue": value => {
            this.city = value;
          },
        });
      },
    }, { attachTo: document.body });
    await wrapper.find("input").setValue("ber");
    await flushPromises();

    expect(wrapper.vm.city).toBe("ber");
    expect(wrapper.findAll("[role='option']")).toHaveLength(2);
  });
});
