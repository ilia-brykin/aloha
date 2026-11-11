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
  isMobileWidth,
} from "../../compositionAPI/AMobileAPI";
import {
  setI18n,
  setLanguage,
  toggleTranslate,
  updateTranslation,
} from "../compositionAPI/ATranslationAPI";

import ATranslation from "../ATranslation";

describe("ATranslation hideWithoutTranslation", () => {
  let wrapper;

  beforeEach(async() => {
    setI18n({ de: { _PRESENT_: "Translated", _ZERO_: 0, _EMPTY_: "", _NULL_: null } });
    setLanguage("de");
    toggleTranslate(true);
    isMobileWidth.value = false;
    updateTranslation();
    await nextTick();
  });

  afterEach(() => {
    wrapper?.unmount();
    setI18n({});
    updateTranslation();
    isMobileWidth.value = undefined;
  });

  it("keeps the existing fallback unless enabled", async() => {
    wrapper = mount(ATranslation, { props: { text: "_MISSING_" } });
    expect(wrapper.text()).toBe("_MISSING_");
    await wrapper.setProps({ hideWithoutTranslation: true });
    expect(wrapper.find("div").exists()).toBe(false);
    await wrapper.setProps({ hideWithoutTranslation: false });
    expect(wrapper.text()).toBe("_MISSING_");
  });

  it.each(["text", "html", "safeHtml", "title", "placeholder", "ariaLabel", "textBefore", "textAfter"])(
    "hides the whole element for a missing %s translation, including its slot",
    prop => {
      wrapper = mount(ATranslation, {
        props: { [prop]: "_MISSING_", hideWithoutTranslation: true },
        slots: { default: "Slot content" },
      });
      expect(wrapper.find("div").exists()).toBe(false);
    },
  );

  it.each(["_EMPTY_", "_NULL_", "_MISSING_"])("hides missing or empty translation %s", text => {
    wrapper = mount(ATranslation, { props: { text, hideWithoutTranslation: true } });
    expect(wrapper.find("div").exists()).toBe(false);
  });

  it.each([
    ["_PRESENT_", "Translated"],
    ["_ZERO_", "0"],
    ["Literal text", "Literal text"],
    [0, "0"],
  ])("renders valid content %s", (text, expected) => {
    wrapper = mount(ATranslation, { props: { text, hideWithoutTranslation: true } });
    expect(wrapper.find("div").exists()).toBe(true);
    expect(wrapper.text()).toBe(expected);
  });

  it("checks all array entries", async() => {
    wrapper = mount(ATranslation, {
      props: { text: ["Literal", "_PRESENT_", "_MISSING_"], hideWithoutTranslation: true },
    });
    expect(wrapper.find("div").exists()).toBe(false);
    await wrapper.setProps({ text: ["Literal", "_PRESENT_"] });
    expect(wrapper.text()).toBe("Literal Translated");
  });

  it("checks only the current device and rendered content prop", async() => {
    wrapper = mount(ATranslation, {
      props: {
        text: { desktop: "_PRESENT_", mobile: "_MISSING_" },
        html: "_MISSING_",
        hideWithoutTranslation: true,
      },
    });
    expect(wrapper.text()).toBe("Translated");
    isMobileWidth.value = true;
    await nextTick();
    expect(wrapper.find("div").exists()).toBe(false);
  });

  it("reacts to loading translations and changing languages", async() => {
    setLanguage("unloaded");
    await nextTick();
    wrapper = mount(ATranslation, { props: { text: "_PRESENT_", hideWithoutTranslation: true } });
    expect(wrapper.find("div").exists()).toBe(false);
    setI18n({ de: { _PRESENT_: "Loaded" }, unloaded: { _PRESENT_: "Arrived" } });
    updateTranslation();
    await nextTick();
    expect(wrapper.text()).toBe("Arrived");
    setLanguage("de");
    await nextTick();
    expect(wrapper.text()).toBe("Loaded");
    setLanguage("missing");
    await nextTick();
    expect(wrapper.find("div").exists()).toBe(false);
  });
});
