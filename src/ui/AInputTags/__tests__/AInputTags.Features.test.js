import {
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
  AInputTags,
} from "../../../index";

const { getListHttp } = vi.hoisted(() => ({
  getListHttp: vi.fn(() => Promise.resolve([])),
}));

vi.mock("../../../compositionAPI/AHttpAPI", () => ({
  default: () => ({ getListHttp }),
}));

const LANGUAGES = [
  { id: "de", label: "Deutsch" },
  { id: "en", label: "English" },
  { id: "fr", label: "Français" },
];

const WRAPPERS = [];
const mountTags = (props = {}) => {
  const wrapper = mount(AInputTags, {
    props: {
      id: "tags",
      label: "Tags",
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
const getTagTexts = wrapper => wrapper.findAll(".a_input_tags__text").map(item => item.text());
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
const enter = async(wrapper, text) => {
  await type(wrapper, text);
  await keydown(getInput(wrapper).element, "Enter");
};

afterEach(() => {
  WRAPPERS.splice(0).forEach(wrapper => wrapper.unmount());
  getListHttp.mockReset();
  getListHttp.mockImplementation(() => Promise.resolve([]));
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("AInputTags: validator, maxlength, transform", () => {
  it("validator: false refuses with the default text, a text is the message, it gets tag and tags", async() => {
    const VALIDATOR = vi.fn(({ tag }) => {
      if (tag === "bad") {
        return false;
      }
      return tag.includes("@") ? true : "No e-mail: {{ tag }}";
    });
    const wrapper = mountTags({ validator: VALIDATOR, modelValue: ["a@b.de"] });

    await enter(wrapper, "bad");
    expect(wrapper.props("modelValue")).toEqual(["a@b.de"]);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_INVALID_");
    // visible for the eyes, the live region reads it
    expect(wrapper.find(".a_input_tags__feedback").text()).toContain("_A_INPUT_TAGS_INVALID_");
    expect(wrapper.find(".a_input_tags__feedback").attributes("aria-hidden")).toBe("true");

    await enter(wrapper, "text");
    expect(getStatus(wrapper)).toBe("No e-mail: text");
    expect(VALIDATOR).toHaveBeenLastCalledWith({ tag: "text", tags: ["a@b.de"] });

    await enter(wrapper, "c@d.de");
    expect(wrapper.props("modelValue")).toEqual(["a@b.de", "c@d.de"]);
    expect(wrapper.find(".a_input_tags__feedback").exists()).toBe(false);
  });

  it("validator: null, undefined, true or an empty text are valid", async() => {
    const RESULTS = [null, undefined, true, ""];
    const wrapper = mountTags({ validator: () => RESULTS.shift() });
    await enter(wrapper, "a");
    await enter(wrapper, "b");
    await enter(wrapper, "c");
    await enter(wrapper, "d");

    expect(wrapper.props("modelValue")).toEqual(["a", "b", "c", "d"]);
  });

  it("the feedback goes away with the next input", async() => {
    const wrapper = mountTags({ validator: () => false });
    await enter(wrapper, "x");
    expect(wrapper.find(".a_input_tags__feedback").exists()).toBe(true);

    await type(wrapper, "y");
    expect(wrapper.find(".a_input_tags__feedback").exists()).toBe(false);
  });

  it("maxlength of one tag", async() => {
    const wrapper = mountTags({ maxlength: 3 });
    await enter(wrapper, "abcd");

    expect(wrapper.props("modelValue")).toEqual([]);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_MAXLENGTH_");
    await enter(wrapper, "abc");
    expect(wrapper.props("modelValue")).toEqual(["abc"]);
  });

  it("transform before the checks", async() => {
    const wrapper = mountTags({ transform: value => value.toLowerCase(), modelValue: ["vue"] });
    await enter(wrapper, " React ");
    expect(wrapper.props("modelValue")).toEqual(["vue", "react"]);

    // VUE is a duplicate after the transform
    await enter(wrapper, "VUE");
    expect(wrapper.props("modelValue")).toEqual(["vue", "react"]);
  });
});

describe("AInputTags: like AInput", () => {
  it("label-position float and inset", () => {
    const FLOAT = mountTags({ labelPosition: "float" });
    expect(FLOAT.find(".a_form_element__parent").classes()).toContain("a_form_element__parent_float");

    const INSET = mountTags({ id: "t2", labelPosition: "inset" });
    expect(INSET.find(".a_form_element__parent").classes()).toContain("a_form_element__parent_inset");
  });

  it("icon-prepend, icon-append and error-icon (only with errors)", async() => {
    const wrapper = mountTags({ iconPrepend: "<svg class='pre'></svg>", iconAppend: "<svg class='app'></svg>", errorIcon: "<svg class='err'></svg>" });

    expect(wrapper.find(".a_input__icon_prepend").exists()).toBe(true);
    expect(wrapper.find(".a_input_tags__actions .a_input__icon_append").exists()).toBe(true);
    expect(wrapper.find(".a_input__icon_error").exists()).toBe(false);
    expect(wrapper.find(".a_input_tags").classes()).toContain("a_form_element_with_one_btn");

    await wrapper.setProps({ errors: ["Wrong"] });
    expect(wrapper.find(".a_input__icon_error").exists()).toBe(true);
    expect(wrapper.find(".a_form_element__parent").classes()).toContain("a_form_element__parent_float_has_two_icons_prepend");
  });

  it("is-clear-button clears the typed text, not the tags", async() => {
    const wrapper = mountTags({ modelValue: ["a"] });
    expect(wrapper.find(".a_input_tags__actions").exists()).toBe(false);

    await type(wrapper, "xyz");
    await wrapper.find(".a_input_tags__actions button").trigger("click");
    await flushPromises();
    expect(getInput(wrapper).element.value).toBe("");
    expect(wrapper.props("modelValue")).toEqual(["a"]);
    expect(document.activeElement).toBe(getInput(wrapper).element);
  });

  it("size and tag-class (text or function)", () => {
    const wrapper = mountTags({ size: "small", tagClass: ({ tag, index }) => (tag === "b" ? `is_b_${ index }` : undefined), modelValue: ["a", "b"] });
    expect(wrapper.find(".a_input_tags").classes()).toContain("a_form_control_small");
    expect(wrapper.findAll(".a_input_tags__tag")[1].classes()).toContain("is_b_1");

    const WRAPPER_TEXT = mountTags({ id: "t2", size: "large", tagClass: "my_tag", modelValue: ["a"] });
    expect(WRAPPER_TEXT.find(".a_input_tags").classes()).toContain("a_form_control_large");
    expect(WRAPPER_TEXT.find(".a_input_tags__tag").classes()).toContain("my_tag");
  });
});

describe("AInputTags: model-key id", () => {
  it("the model has the ids, the tags show the labels; a typed label is its id, an own text stays", async() => {
    const wrapper = mountTags({ data: LANGUAGES, modelKey: "id", modelValue: ["de"] });
    expect(getTagTexts(wrapper)).toEqual(["Deutsch"]);

    await type(wrapper, "eng");
    await keydown(getInput(wrapper).element, "ArrowDown");
    await keydown(getInput(wrapper).element, "Enter");
    expect(wrapper.props("modelValue")).toEqual(["de", "en"]);
    expect(getTagTexts(wrapper)).toEqual(["Deutsch", "English"]);

    await enter(wrapper, "français");
    await enter(wrapper, "Klingon");
    expect(wrapper.props("modelValue")).toEqual(["de", "en", "fr", "Klingon"]);
    // a duplicate by the id
    await enter(wrapper, "deutsch");
    expect(wrapper.props("modelValue")).toHaveLength(4);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_DUPLICATE_");
  });

  it("chosen ids are no suggestions, readonly shows the labels", async() => {
    const wrapper = mountTags({ data: LANGUAGES, modelKey: "id", modelValue: ["en"] });
    // "s" is in all three labels
    await type(wrapper, "s");
    expect(wrapper.findAll("[role='option']").map(option => option.text())).toEqual(["Deutsch", "Français"]);

    const READONLY = mountTags({ id: "t2", data: LANGUAGES, modelKey: "id", modelValue: ["de", "fr"], readonly: true });
    expect(READONLY.text()).toContain("Deutsch, Français");
  });

  it("url: the labels of the ids are loaded (url-retrieve or url)", async() => {
    getListHttp.mockImplementation(() => Promise.resolve([{ id: 7, name: "Seven" }]));
    const wrapper = mountTags({
      url: "api/items/",
      urlRetrieve: "api/items/retrieve/",
      urlParams: { type: "x" },
      keyLabel: "name",
      modelKey: "id",
      modelValue: [7],
    });
    await flushPromises();

    expect(getListHttp).toHaveBeenCalledWith({ url: "api/items/retrieve/", urlParams: { type: "x", id: [7], limit: 1 } });
    expect(getTagTexts(wrapper)).toEqual(["Seven"]);
  });
});

describe("AInputTags: edit", () => {
  it("F2 puts the tag into the input, Enter puts it back at its place", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b", "c"] });
    getRemoveButtons(wrapper)[1].element.focus();
    await keydown(getRemoveButtons(wrapper)[1].element, "F2");

    expect(wrapper.props("modelValue")).toEqual(["a", "c"]);
    expect(getInput(wrapper).element.value).toBe("b");
    expect(document.activeElement).toBe(getInput(wrapper).element);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_EDITING_");

    await enter(wrapper, "bb");
    expect(wrapper.props("modelValue")).toEqual(["a", "bb", "c"]);
  });

  it("Escape gives the old tag back, also with an open list of suggestions", async() => {
    const wrapper = mountTags({ data: [{ id: 1, label: "bob" }], modelValue: ["a", "b"] });
    await wrapper.findAll(".a_input_tags__text")[1].trigger("dblclick");
    await flushPromises();
    await type(wrapper, "bo");
    expect(getInput(wrapper).attributes("aria-expanded")).toBe("true");

    const ESCAPE = await keydown(getInput(wrapper).element, "Escape");
    expect(ESCAPE.defaultPrevented).toBe(true);
    expect(wrapper.props("modelValue")).toEqual(["a", "b"]);
    expect(getInput(wrapper).element.value).toBe("");
  });

  it("a suggestion while editing goes to the place of the tag", async() => {
    const wrapper = mountTags({ data: [{ id: 1, label: "bob" }], modelValue: ["a", "b", "c"] });
    await wrapper.findAll(".a_input_tags__text")[1].trigger("dblclick");
    await flushPromises();
    await type(wrapper, "bo");
    await keydown(getInput(wrapper).element, "ArrowDown");
    await keydown(getInput(wrapper).element, "Enter");

    expect(wrapper.props("modelValue")).toEqual(["a", "bob", "c"]);
  });
});

describe("AInputTags: duplicate, add-on-blur", () => {
  it("the tag that is already there blinks for a moment", async() => {
    vi.useFakeTimers();
    const wrapper = mountTags({ modelValue: ["a", "b"] });
    await getInput(wrapper).setValue("B");
    getInput(wrapper).element.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true }));
    await nextTick();

    expect(wrapper.findAll(".a_input_tags__tag")[1].classes()).toContain("a_input_tags__tag_flash");
    vi.advanceTimersByTime(700);
    await nextTick();
    expect(wrapper.findAll(".a_input_tags__tag")[1].classes()).not.toContain("a_input_tags__tag_flash");
  });

  it("add-on-blur false: the text stays in the input, an edit is canceled", async() => {
    const wrapper = mountTags({ addOnBlur: false, modelValue: ["a"] });
    await type(wrapper, "x");
    await getInput(wrapper).trigger("blur");
    expect(wrapper.props("modelValue")).toEqual(["a"]);
    expect(getInput(wrapper).element.value).toBe("x");

    const WRAPPER_DEFAULT = mountTags({ id: "t2", modelValue: ["a"] });
    await type(WRAPPER_DEFAULT, "x");
    await getInput(WRAPPER_DEFAULT).trigger("blur");
    expect(WRAPPER_DEFAULT.props("modelValue")).toEqual(["a", "x"]);
  });

  it("add-on-blur false cancels an edit at the blur", async() => {
    const wrapper = mountTags({ addOnBlur: false, modelValue: ["a", "b"] });
    await wrapper.findAll(".a_input_tags__text")[0].trigger("dblclick");
    await flushPromises();
    await getInput(wrapper).trigger("blur");
    await flushPromises();

    expect(wrapper.props("modelValue")).toEqual(["a", "b"]);
  });
});

describe("AInputTags: is-sortable", () => {
  it("Alt+arrows move the tag, it is announced, the focus follows", async() => {
    const wrapper = mountTags({ isSortable: true, modelValue: ["a", "b", "c"] });
    expect(wrapper.find("#tags_hint").text()).toContain("_A_INPUT_TAGS_HINT_SORTABLE_");
    getRemoveButtons(wrapper)[0].element.focus();

    const EVENT = await keydown(getRemoveButtons(wrapper)[0].element, "ArrowRight", { altKey: true });
    expect(EVENT.defaultPrevented).toBe(true);
    expect(wrapper.props("modelValue")).toEqual(["b", "a", "c"]);
    expect(getStatus(wrapper)).toContain("_A_INPUT_TAGS_MOVED_");
    expect(document.activeElement).toBe(getRemoveButtons(wrapper)[1].element);

    await keydown(getRemoveButtons(wrapper)[1].element, "ArrowLeft", { altKey: true });
    expect(wrapper.props("modelValue")).toEqual(["a", "b", "c"]);
  });

  it("drag and drop", async() => {
    const wrapper = mountTags({ isSortable: true, modelValue: ["a", "b", "c"] });
    const TAGS = wrapper.findAll(".a_input_tags__tag");
    expect(TAGS[0].attributes("draggable")).toBe("true");

    await TAGS[0].trigger("dragstart");
    const OVER = new Event("dragover", { bubbles: true, cancelable: true });
    TAGS[2].element.dispatchEvent(OVER);
    expect(OVER.defaultPrevented).toBe(true);
    await TAGS[2].trigger("drop");

    expect(wrapper.props("modelValue")).toEqual(["b", "c", "a"]);
  });

  it("without is-sortable: no drag, Alt+arrows only move the focus", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b"] });
    expect(wrapper.find(".a_input_tags__tag").attributes("draggable")).toBeUndefined();

    await keydown(getRemoveButtons(wrapper)[0].element, "ArrowRight", { altKey: true });
    expect(wrapper.props("modelValue")).toEqual(["a", "b"]);
  });
});
