import {
  nextTick,
} from "vue";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";
import {
  AFormElement,
  AInputTags,
} from "../../../index";

import {
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../../ATranslation/compositionAPI/ATranslationAPI";

import {
  en as i18nEN,
} from "../../../i18n/allLanguages";

const wrappers = [];

const mountTags = (props = {}) => {
  const wrapper = mount(AInputTags, {
    props: {
      label: "Keywords",
      modelValue: [],
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const tags = wrapper => wrapper.findAll(".a_input_tags__text").map(item => item.text());
const status = wrapper => wrapper.get("[role=\"status\"]").text();

const type = async(wrapper, text) => {
  const input = wrapper.get("input");
  input.element.value = text;
  await input.trigger("input");
};

const press = async(wrapper, key) => {
  await wrapper.get("input").trigger("keydown", { key });
  await nextTick();
  await nextTick();
};

describe("AInputTags", () => {
  beforeEach(async() => {
    setI18n({ en: { ...i18nEN, _MY_PLACEHOLDER_: "Add a tag" } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    wrappers.splice(0).forEach(wrapper => wrapper.unmount());
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("translates the placeholder (key of the dictionary), no placeholder when max-tags is reached", async() => {
    const wrapper = mountTags({ placeholder: "_MY_PLACEHOLDER_", maxTags: 1 });
    await nextTick();
    expect(wrapper.get("input").attributes("placeholder")).toBe("Add a tag");
    await wrapper.setProps({ modelValue: ["vue"] });
    expect(wrapper.get("input").attributes("placeholder")).toBeUndefined();
  });

  it("links the label to the input and shows the tags of the model", () => {
    const wrapper = mountTags({ modelValue: ["vue", "aloha"] });
    const input = wrapper.get("input");

    expect(wrapper.get("label").attributes("for")).toBe(input.attributes("id"));
    expect(tags(wrapper)).toEqual(["vue", "aloha"]);
    expect(input.attributes("aria-describedby")).toContain(`${ input.attributes("id") }_hint`);
  });

  it("adds a tag with Enter and with a comma and announces it", async() => {
    const wrapper = mountTags();

    await type(wrapper, " vue ");
    await press(wrapper, "Enter");
    expect(tags(wrapper)).toEqual(["vue"]);
    expect(wrapper.get("input").element.value).toBe("");
    expect(status(wrapper)).toBe("Added: vue");

    await type(wrapper, "aloha");
    await press(wrapper, ",");
    expect(tags(wrapper)).toEqual(["vue", "aloha"]);
  });

  it("does not add empty or duplicate tags", async() => {
    const wrapper = mountTags({ modelValue: ["Vue"] });

    await press(wrapper, ",");
    await type(wrapper, "vue");
    await press(wrapper, "Enter");

    expect(tags(wrapper)).toEqual(["Vue"]);
    expect(status(wrapper)).toBe("vue is already in the list");
  });

  it("respects max-tags", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b"], maxTags: 2 });

    await type(wrapper, "c");
    await press(wrapper, "Enter");

    expect(tags(wrapper)).toEqual(["a", "b"]);
    expect(wrapper.get("input").element.value).toBe("c");
    expect(status(wrapper)).toBe("No more than 2 values");
  });

  it("removes the last tag with Backspace in the empty input", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b"] });

    await press(wrapper, "Backspace");

    expect(tags(wrapper)).toEqual(["a"]);
    expect(status(wrapper)).toBe("Removed: b");
  });

  it("removes a tag with its button and moves the focus to the input", async() => {
    const wrapper = mountTags({ modelValue: ["a", "b"] });
    const button = wrapper.findAll(".a_input_tags__remove")[0];

    expect(button.attributes("aria-label")).toBe("Remove a");
    await button.trigger("click");
    await nextTick();

    expect(tags(wrapper)).toEqual(["b"]);
    expect(document.activeElement).toBe(wrapper.get("input").element);
  });

  it("splits a pasted list", async() => {
    const wrapper = mountTags();
    const event = new Event("paste", { bubbles: true, cancelable: true });
    event.clipboardData = { getData: () => "a, b\nc" };

    wrapper.get("input").element.dispatchEvent(event);
    await nextTick();

    expect(event.defaultPrevented).toBe(true);
    expect(tags(wrapper)).toEqual(["a", "b", "c"]);
  });

  it("adds the typed text when the input loses the focus", async() => {
    const wrapper = mountTags();

    await type(wrapper, "pending");
    await wrapper.get("input").trigger("blur");

    expect(tags(wrapper)).toEqual(["pending"]);
  });

  it("emits model-undefined when the last tag is removed", async() => {
    const wrapper = mountTags({ modelValue: ["a"] });

    await press(wrapper, "Backspace");

    expect(wrapper.emitted("update:modelValue").at(-1)[0]).toEqual([]);
  });

  it("shows the tags as text in readonly mode", () => {
    const wrapper = mountTags({ modelValue: ["a", "b"], readonly: true });

    expect(wrapper.find("input").exists()).toBe(false);
    expect(wrapper.text()).toContain("a, b");
  });

  it("is the form type tags", () => {
    const wrapper = mount(AFormElement, {
      props: { type: "tags", id: "keywords", label: "Keywords", modelValue: ["a"] },
    });
    wrappers.push(wrapper);

    expect(wrapper.findComponent(AInputTags).exists()).toBe(true);
    expect(wrapper.find(".a_input_tags__text").text()).toBe("a");
  });
});
