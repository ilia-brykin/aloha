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
  setI18n,
  setLanguage,
  updateTranslation,
} from "../../ATranslation/compositionAPI/ATranslationAPI";

import AEmptyState from "../AEmptyState";

const ICON = "<svg viewBox=\"0 0 16 16\"><path d=\"M0 0h16v16H0z\"/></svg>";

describe("AEmptyState", () => {
  beforeEach(async() => {
    setI18n({ en: { _NO_RESULTS_: "No results for {{ search }}", _TRY_: "Try another search." } });
    setLanguage("en");
    updateTranslation();
    await nextTick();
  });

  afterEach(async() => {
    setI18n({});
    setLanguage("de");
    updateTranslation();
    await nextTick();
  });

  it("renders the icon, the title, the text and the actions", () => {
    const wrapper = mount(AEmptyState, {
      props: {
        icon: ICON,
        headerText: "_NO_RESULTS_",
        text: "_TRY_",
        extra: { search: "aloha" },
      },
      slots: {
        default: "<button type=\"button\">Reset</button>",
      },
    });

    expect(wrapper.get(".a_empty_state__icon").attributes("aria-hidden")).toBe("true");
    expect(wrapper.find(".a_empty_state__icon svg").exists()).toBe(true);
    expect(wrapper.get(".a_empty_state__title").text()).toBe("No results for aloha");
    expect(wrapper.get(".a_empty_state__title").element.tagName).toBe("P");
    expect(wrapper.get(".a_empty_state__text").text()).toBe("Try another search.");
    expect(wrapper.get(".a_empty_state__actions button").text()).toBe("Reset");
  });

  it("uses header-tag for the title", () => {
    const wrapper = mount(AEmptyState, {
      props: { headerText: "Empty", headerTag: "h3" },
    });

    expect(wrapper.get("h3.a_empty_state__title").text()).toBe("Empty");
  });

  it("renders only the parts that are set", () => {
    const wrapper = mount(AEmptyState, {
      props: { headerText: "Empty" },
    });

    expect(wrapper.find(".a_empty_state__icon").exists()).toBe(false);
    expect(wrapper.find(".a_empty_state__text").exists()).toBe(false);
    expect(wrapper.find(".a_empty_state__actions").exists()).toBe(false);
  });

  it("accepts an own icon in the slot icon and attributes like role", () => {
    const wrapper = mount(AEmptyState, {
      props: { headerText: "Empty" },
      attrs: { role: "status" },
      slots: {
        icon: "<img src=\"empty.svg\" alt=\"\">",
      },
    });

    expect(wrapper.get(".a_empty_state").attributes("role")).toBe("status");
    expect(wrapper.find(".a_empty_state__icon img").exists()).toBe(true);
  });
});
