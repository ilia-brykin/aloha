import {
  h,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  flushPromises,
  mount,
} from "@vue/test-utils";
import {
  ACombobox,
} from "../../../index";

import {
  componentsPluginOptions,
} from "../../../plugins/AComponentsPlugin";
import {
  getHighlightParts,
} from "../ACombobox";

const WRAPPERS = [];
const mountCombobox = (props = {}, slots = {}) => {
  const wrapper = mount(ACombobox, {
    props: {
      id: "city",
      label: "City",
      inBody: false,
      modelValue: "",
      "onUpdate:modelValue": value => wrapper.setProps({ modelValue: value }),
      ...props,
    },
    slots,
    attachTo: document.body,
  });
  WRAPPERS.push(wrapper);
  return wrapper;
};
const getInput = wrapper => wrapper.find("input");
const getOptions = wrapper => wrapper.findAll("[role='option']");
const getActiveText = wrapper => {
  const ID = getInput(wrapper).attributes("aria-activedescendant");
  return ID ? document.getElementById(ID).textContent : undefined;
};
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
  WRAPPERS.splice(0).forEach(wrapper => wrapper.unmount());
  delete componentsPluginOptions.ACombobox;
  document.body.innerHTML = "";
});

describe("ACombobox: texts", () => {
  it("own texts, a missing key falls back, defaults of AComponentsPlugin", async() => {
    const wrapper = mountCombobox({
      data: [{ id: 1, label: "Berlin" }],
      texts: { results: "Found: {{ count }}" },
    });
    await type(wrapper, "ber");
    expect(wrapper.find(".a_combobox__status").text()).toBe("Found: 1");
    await type(wrapper, "xyz");
    expect(wrapper.find(".a_combobox__status").text()).toBe("_A_COMBOBOX_NO_RESULTS_");

    componentsPluginOptions.ACombobox = { props: { texts: { noResults: "Nothing" } } };
    const WRAPPER_PLUGIN = mountCombobox({ id: "c2", data: [] });
    await type(WRAPPER_PLUGIN, "x");
    expect(WRAPPER_PLUGIN.find(".a_combobox__empty").text()).toBe("Nothing");
  });
});

describe("ACombobox: groups", () => {
  const DATA = [
    { id: 1, label: "Berlin", country: "Germany" },
    { id: 2, label: "Bern", country: "Switzerland" },
    { id: 3, label: "Bremen", country: "Germany" },
    { id: 4, label: "Brest" },
  ];

  it("grouped listbox: group with a header, options of a group together, without a group first", async() => {
    const wrapper = mountCombobox({ data: DATA, keyGroup: "country" });
    await type(wrapper, "b");

    const GROUPS = wrapper.findAll("[role='group']");
    expect(GROUPS).toHaveLength(2);
    const HEADER = document.getElementById(GROUPS[0].attributes("aria-labelledby"));
    expect(HEADER.textContent).toBe("Germany");
    expect(HEADER.getAttribute("role")).toBe("presentation");
    expect(GROUPS[0].element.parentElement.getAttribute("role")).toBe("none");
    expect(GROUPS[0].findAll("[role='option']").map(option => option.text())).toEqual(["Berlin", "Bremen"]);
    // the order of the arrows is the order of the view
    expect(getOptions(wrapper).map(option => option.text())).toEqual(["Brest", "Berlin", "Bremen", "Bern"]);
    await keydown(wrapper, "ArrowDown");
    await keydown(wrapper, "ArrowDown");
    expect(getActiveText(wrapper)).toBe("Berlin");
  });
});

describe("ACombobox: slot option", () => {
  it("own content with item, label, parts and isActive, the li stays an option", async() => {
    const wrapper = mountCombobox({ data: [{ id: 1, label: "Berlin", zip: "10115" }] }, {
      option: ({ item, highlight, isActive }) => [
        h("span", { class: "my_label" }, highlight),
        h("small", { class: "my_zip" }, `${ item.zip }${ isActive ? " *" : "" }`),
      ],
    });
    await type(wrapper, "ber");
    await keydown(wrapper, "ArrowDown");
    const OPTION = getOptions(wrapper)[0];

    expect(OPTION.attributes("role")).toBe("option");
    expect(OPTION.find(".my_label mark").text()).toBe("Ber");
    expect(OPTION.find(".my_zip").text()).toBe("10115 *");
  });
});

describe("ACombobox: filter", () => {
  const DATA = [
    { id: 1, label: "München" },
    { id: 2, label: "Garmisch" },
    { id: 3, label: "Mannheim" },
  ];

  it("without diacritics: munchen finds München and marks Mün", async() => {
    const wrapper = mountCombobox({ data: DATA });
    await type(wrapper, "munch");

    expect(getOptions(wrapper).map(option => option.text())).toEqual(["München"]);
    expect(getOptions(wrapper)[0].find("mark").text()).toBe("Münch");
  });

  it("ignore-diacritics false: only the exact chars", async() => {
    const wrapper = mountCombobox({ data: DATA, ignoreDiacritics: false });
    await type(wrapper, "munch");

    expect(getOptions(wrapper)).toHaveLength(0);
  });

  it("filter-mode startsWith and filter-callback", async() => {
    const WRAPPER_START = mountCombobox({ data: DATA, filterMode: "startsWith" });
    await type(WRAPPER_START, "m");
    expect(getOptions(WRAPPER_START).map(option => option.text())).toEqual(["München", "Mannheim"]);

    const WRAPPER_CALLBACK = mountCombobox({
      id: "c2",
      data: DATA,
      filterCallback: ({ item, search }) => item.id > 1 && item.label.toLowerCase().includes(search),
    });
    await type(WRAPPER_CALLBACK, "m");
    expect(getOptions(WRAPPER_CALLBACK).map(option => option.text())).toEqual(["Garmisch", "Mannheim"]);
  });

  it("getHighlightParts: startsWith marks only the start, diacritics map to the original chars", () => {
    expect(getHighlightParts("Bern Bern", "bern", { filterMode: "startsWith" })).toEqual([
      { text: "Bern", isMatch: true },
      { text: " Bern", isMatch: false },
    ]);
    // startsWith: a match later in the text is not marked
    expect(getHighlightParts("Abern", "bern", { filterMode: "startsWith" })).toEqual([{ text: "Abern", isMatch: false }]);
    // a decomposed text (u + combining diaeresis) is longer than the folded one: the mark covers the original chars
    expect(getHighlightParts("Zürich", "uri")).toEqual([
      { text: "Z", isMatch: false },
      { text: "üri", isMatch: true },
      { text: "ch", isMatch: false },
    ]);
    expect(getHighlightParts("Zürich", "uri")).toEqual([
      { text: "Z", isMatch: false },
      { text: "üri", isMatch: true },
      { text: "ch", isMatch: false },
    ]);
  });
});

describe("ACombobox: disabled options (key-disabled)", () => {
  const DATA = [
    { id: 1, label: "Berlin" },
    { id: 2, label: "Bern", closed: true },
    { id: 3, label: "Bremen" },
  ];

  it("aria-disabled, the arrows skip it, a click does nothing", async() => {
    const wrapper = mountCombobox({ data: DATA, keyDisabled: "closed" });
    await type(wrapper, "b");

    expect(getOptions(wrapper)[1].attributes("aria-disabled")).toBe("true");
    expect(getOptions(wrapper)[1].classes()).toContain("a_combobox__option_disabled");
    await keydown(wrapper, "ArrowDown");
    await keydown(wrapper, "ArrowDown");
    expect(getActiveText(wrapper)).toBe("Bremen");
    await keydown(wrapper, "ArrowUp");
    expect(getActiveText(wrapper)).toBe("Berlin");

    await getOptions(wrapper)[1].trigger("click");
    expect(wrapper.emitted("select")).toBeUndefined();
  });
});

describe("ACombobox: Home, End, PageUp, PageDown", () => {
  const DATA = Array.from({ length: 25 }, (_, index) => ({ id: index, label: `Item ${ index }` }));

  it("Home / End only with an active option, PageDown / PageUp move 10 without going round", async() => {
    const wrapper = mountCombobox({ data: DATA, maxItems: 25 });
    await type(wrapper, "item");

    // without an active option: the caret in the input
    expect((await keydown(wrapper, "End")).defaultPrevented).toBe(false);

    expect((await keydown(wrapper, "PageDown")).defaultPrevented).toBe(true);
    expect(getActiveText(wrapper)).toBe("Item 9");
    await keydown(wrapper, "PageDown");
    await keydown(wrapper, "PageDown");
    expect(getActiveText(wrapper)).toBe("Item 24");
    await keydown(wrapper, "PageUp");
    expect(getActiveText(wrapper)).toBe("Item 14");

    expect((await keydown(wrapper, "Home")).defaultPrevented).toBe(true);
    expect(getActiveText(wrapper)).toBe("Item 0");
    await keydown(wrapper, "End");
    expect(getActiveText(wrapper)).toBe("Item 24");
  });
});

describe("ACombobox: inline autocomplete", () => {
  const DATA = [
    { id: 1, label: "Hamburg" },
    { id: 2, label: "Hannover" },
  ];
  const deleteText = async(wrapper, text) => {
    const INPUT = getInput(wrapper).element;
    INPUT.value = text;
    INPUT.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "deleteContentBackward" }));
    await flushPromises();
  };

  it("the first suggestion completes the text, the added part is selected, Enter takes it", async() => {
    const wrapper = mountCombobox({ data: DATA, inlineAutocomplete: true });
    const INPUT = getInput(wrapper);
    expect(INPUT.attributes("aria-autocomplete")).toBe("both");

    await type(wrapper, "ha");
    expect(INPUT.element.value).toBe("hamburg");
    expect([INPUT.element.selectionStart, INPUT.element.selectionEnd]).toEqual([2, 7]);
    expect(wrapper.props("modelValue")).toBe("ha");
    expect(getActiveText(wrapper)).toBe("Hamburg");

    await keydown(wrapper, "Enter");
    expect(wrapper.props("modelValue")).toBe("Hamburg");
    expect(wrapper.emitted("select")[0][0].label).toBe("Hamburg");
  });

  it("Backspace does not complete, Escape removes the completion, Tab takes it", async() => {
    const wrapper = mountCombobox({ data: DATA, inlineAutocomplete: true });
    const INPUT = getInput(wrapper);

    await deleteText(wrapper, "han");
    expect(INPUT.element.value).toBe("han");

    await type(wrapper, "hann");
    expect(INPUT.element.value).toBe("hannover");
    await keydown(wrapper, "Escape");
    expect(INPUT.element.value).toBe("hann");

    await type(wrapper, "hanno");
    expect(INPUT.element.value).toBe("hannover");
    await keydown(wrapper, "Tab");
    expect(wrapper.props("modelValue")).toBe("Hannover");
  });

  it("without inline-autocomplete no completion", async() => {
    const wrapper = mountCombobox({ data: DATA });
    await type(wrapper, "ha");

    expect(getInput(wrapper).element.value).toBe("ha");
    expect(getInput(wrapper).attributes("aria-autocomplete")).toBe("list");
  });
});
