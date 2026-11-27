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
  AInputTags,
} from "../../../index";

const LANGUAGES = [
  { id: "de", label: "Deutsch" },
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
  { id: "fr", label: "Français" },
];

const WRAPPERS = [];
const mountTags = (props = {}) => {
  const wrapper = mount(AInputTags, {
    props: {
      id: "tags",
      label: "Languages",
      inBody: false,
      modelValue: [],
      "onUpdate:modelValue": value => wrapper.setProps({ modelValue: value }),
      ...props,
    },
    attachTo: document.body,
  });
  WRAPPERS.push(wrapper);
  return wrapper;
};
const getInput = wrapper => wrapper.find("input");
const getOptions = wrapper => wrapper.findAll("[role='option']");
const getRemoveButtons = wrapper => wrapper.findAll(".a_input_tags__remove");
const getStatus = wrapper => wrapper.findAll("[role='status']")[0].text();
const type = async(wrapper, text) => {
  await getInput(wrapper).setValue(text);
  await flushPromises();
};
const keydown = async(element, key, options = {}) => {
  const EVENT = new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true, ...options });
  element.dispatchEvent(EVENT);
  await flushPromises();
  return EVENT;
};

afterEach(() => {
  WRAPPERS.splice(0).forEach(wrapper => wrapper.unmount());
  document.body.innerHTML = "";
});

describe("AInputTags: suggestions", () => {
  it("without data or url: no combobox (as before)", () => {
    const INPUT = getInput(mountTags());

    expect(INPUT.attributes("role")).toBeUndefined();
    expect(INPUT.attributes("aria-expanded")).toBeUndefined();
  });

  it("with data: a combobox, Enter on a suggestion adds the tag, chosen tags are no suggestions", async() => {
    const wrapper = mountTags({ data: LANGUAGES });
    const INPUT = getInput(wrapper);
    expect(INPUT.attributes("role")).toBe("combobox");
    expect(INPUT.attributes("aria-controls")).toBe(wrapper.find("[role='listbox']").attributes("id"));

    await type(wrapper, "e");
    expect(getOptions(wrapper).map(option => option.text())).toEqual(["Deutsch", "English", "Español"]);
    await keydown(INPUT.element, "ArrowDown");
    await keydown(INPUT.element, "ArrowDown");
    await keydown(INPUT.element, "Enter");

    expect(wrapper.props("modelValue")).toEqual(["English"]);
    expect(wrapper.emitted("select")[0][0]).toEqual({ id: "en", label: "English", item: { id: "en", label: "English" } });
    expect(INPUT.element.value).toBe("");
    expect(INPUT.attributes("aria-expanded")).toBe("false");

    await type(wrapper, "e");
    expect(getOptions(wrapper).map(option => option.text())).not.toContain("English");
  });

  it("a typed text without an active suggestion is a tag (free input) and closes the list", async() => {
    const wrapper = mountTags({ data: LANGUAGES });
    // "Eng" has a suggestion: the list is open before Enter
    await type(wrapper, "Eng");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("true");
    await keydown(getInput(wrapper).element, "Enter");

    expect(wrapper.props("modelValue")).toEqual(["Eng"]);
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("false");
  });

  it("groups and disabled suggestions of ACombobox", async() => {
    const wrapper = mountTags({
      data: [
        { id: 1, label: "Vue", type: "Framework" },
        { id: 2, label: "Vite", type: "Tool", old: true },
      ],
      keyGroup: "type",
      keyDisabled: "old",
    });
    await type(wrapper, "v");

    expect(wrapper.findAll("[role='group']")).toHaveLength(2);
    expect(getOptions(wrapper)[1].attributes("aria-disabled")).toBe("true");
  });

  it("in-body by default: the list is in the container in body", async() => {
    const wrapper = mountTags({ data: LANGUAGES, inBody: true });
    await flushPromises();
    await type(wrapper, "de");

    expect(document.querySelectorAll("#a_tooltip_container [role='option']")).toHaveLength(1);
  });
});

describe("AInputTags: is-only-from-list", () => {
  it("own text is not added (announced), a label of the data is added, also without the case", async() => {
    const wrapper = mountTags({ data: LANGUAGES, isOnlyFromList: true });
    await type(wrapper, "Klingon");
    await keydown(getInput(wrapper).element, "Enter");
    expect(wrapper.props("modelValue")).toEqual([]);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_ONLY_FROM_LIST_");

    await type(wrapper, "deutsch");
    await keydown(getInput(wrapper).element, "Enter");
    expect(wrapper.props("modelValue")).toEqual(["deutsch"]);
  });

  it("paste: only the values of the list", async() => {
    const wrapper = mountTags({ data: LANGUAGES, isOnlyFromList: true });
    await getInput(wrapper).trigger("paste", {
      clipboardData: { getData: () => "English, Klingon, Français" },
    });

    expect(wrapper.props("modelValue")).toEqual(["English", "Français"]);
  });
});

describe("AInputTags: counter, more, remove all, add all", () => {
  it("max-tags: a visible counter and a text for the screen reader", () => {
    const wrapper = mountTags({ maxTags: 3, modelValue: ["a"] });

    expect(wrapper.find(".a_input_tags__counter").text()).toBe("1 / 3");
    expect(wrapper.find(".a_input_tags__counter").attributes("aria-hidden")).toBe("true");
    expect(getInput(wrapper).attributes("aria-describedby")).toContain("tags_counter");
    expect(wrapper.find("#tags_counter").text()).toContain("_A_INPUT_TAGS_COUNTER_");
  });

  it("max-visible-tags: +2 shows the hidden tags (aria-expanded), the name contains the visible text", async() => {
    const wrapper = mountTags({ maxVisibleTags: 2, modelValue: ["a", "b", "c", "d"] });
    const MORE = wrapper.find(".a_input_tags__more");

    expect(wrapper.findAll(".a_input_tags__tag")).toHaveLength(2);
    expect(MORE.attributes("aria-expanded")).toBe("false");
    expect(MORE.attributes("aria-controls")).toBe("tags_tags");
    expect(MORE.text()).toContain("+2");
    expect(MORE.text()).toContain("_A_INPUT_TAGS_SHOW_MORE_");

    await MORE.trigger("click");
    expect(wrapper.findAll(".a_input_tags__tag")).toHaveLength(4);
    expect(MORE.attributes("aria-expanded")).toBe("true");
    expect(MORE.text()).toBe("_A_INPUT_TAGS_SHOW_LESS_");
  });

  it("is-remove-all: removes all, announces and gives the focus to the input", async() => {
    const wrapper = mountTags({ isRemoveAll: true, modelValue: ["a", "b"] });
    await wrapper.find(".a_input_tags__remove_all").trigger("click");
    await flushPromises();

    expect(wrapper.props("modelValue")).toEqual([]);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_REMOVED_ALL_");
    expect(document.activeElement).toBe(getInput(wrapper).element);
    expect(wrapper.find(".a_input_tags__remove_all").exists()).toBe(false);
  });

  it("is-add-all: the button under the list and Ctrl+Enter add all found suggestions within max-tags", async() => {
    const wrapper = mountTags({ data: LANGUAGES, isAddAll: true, maxTags: 3 });
    await type(wrapper, "e");
    const BUTTON = wrapper.find(".a_input_tags__add_all button");
    expect(BUTTON.text()).toContain("_A_INPUT_TAGS_ADD_ALL_");
    expect(BUTTON.attributes("tabindex")).toBe("-1");
    expect(getInput(wrapper).attributes("aria-describedby")).toContain("tags_hint");
    expect(wrapper.find("#tags_hint").text()).toContain("_A_INPUT_TAGS_HINT_ADD_ALL_");

    await BUTTON.trigger("click");
    expect(wrapper.props("modelValue")).toEqual(["Deutsch", "English", "Español"]);

    // a disabled suggestion is not added
    const WRAPPER_KEY = mountTags({
      id: "t2",
      data: LANGUAGES.map(item => ({ ...item, old: item.id === "fr" })),
      isAddAll: true,
      keyDisabled: "old",
    });
    await type(WRAPPER_KEY, "a");
    const ENTER = await keydown(getInput(WRAPPER_KEY).element, "Enter", { ctrlKey: true });
    expect(ENTER.defaultPrevented).toBe(true);
    expect(WRAPPER_KEY.props("modelValue")).toEqual(["Español"]);
  });

  it("texts: own texts (also with {{ tag }}), the other keys keep their default", async() => {
    const wrapper = mountTags({ isRemoveAll: true, modelValue: ["a"], texts: { removeAll: "Clear", removed: "Gone: {{ tag }}" } });

    expect(wrapper.find(".a_input_tags__remove_all").text()).toBe("Clear");
    expect(getRemoveButtons(wrapper)[0].attributes("aria-label")).toBe("_A_INPUT_TAGS_REMOVE_");
    await getRemoveButtons(wrapper)[0].trigger("click");
    await flushPromises();
    expect(getStatus(wrapper)).toBe("Gone: a");
  });
});

describe("AInputTags: keyboard on the tags", () => {
  it("ArrowLeft at the start goes to the last tag, arrows between the tags, ArrowRight after the last: the input", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b", "c"] });
    const INPUT = getInput(wrapper).element;
    INPUT.focus();

    expect((await keydown(INPUT, "ArrowLeft")).defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(getRemoveButtons(wrapper)[2].element);
    await keydown(document.activeElement, "ArrowLeft");
    expect(document.activeElement).toBe(getRemoveButtons(wrapper)[1].element);
    await keydown(document.activeElement, "Home");
    expect(document.activeElement).toBe(getRemoveButtons(wrapper)[0].element);
    await keydown(document.activeElement, "End");
    await keydown(document.activeElement, "ArrowRight");
    expect(document.activeElement).toBe(INPUT);
  });

  it("ArrowLeft with text before the caret moves the caret", async() => {
    const wrapper = mountTags({ modelValue: ["a"] });
    await type(wrapper, "xy");
    const INPUT = getInput(wrapper).element;
    INPUT.setSelectionRange(2, 2);

    expect((await keydown(INPUT, "ArrowLeft")).defaultPrevented).toBe(false);
  });

  it("Delete on a tag removes it, the focus goes to the tag before", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b", "c"] });
    getRemoveButtons(wrapper)[2].element.focus();
    await keydown(document.activeElement, "Delete");

    expect(wrapper.props("modelValue")).toEqual(["a", "b"]);
    expect(document.activeElement).toBe(getRemoveButtons(wrapper)[1].element);

    await keydown(getRemoveButtons(wrapper)[0].element, "Backspace");
    expect(wrapper.props("modelValue")).toEqual(["b"]);
    expect(document.activeElement).toBe(getRemoveButtons(wrapper)[0].element);
  });
});
