import {
  nextTick,
} from "vue";
import {
  afterEach,
  describe,
  expect,
  it,
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

afterEach(() => {
  setI18n({});
  setLanguage("de");
  updateTranslation();
});

describe("ADateInput: placeholder and float label", () => {
  it("translates the placeholder (key of the dictionary)", async() => {
    setI18n({ de: { _MY_DATE_PLACEHOLDER_: "Datum wählen" } });
    setLanguage("de");
    updateTranslation();
    const wrapper = mount(ADateInput, { props: { id: "d", label: "Date", placeholder: "_MY_DATE_PLACEHOLDER_" } });
    await nextTick();
    expect(wrapper.find("input").attributes("placeholder")).toBe("Datum wählen");
    wrapper.unmount();
  });

  it("float label: the width of the first field and its buttons are given to the CSS", async() => {
    const wrapper = mount(ADateInput, { props: { id: "d", label: "Date", labelPosition: "float", clearable: true, modelValue: "2024-05-17" } });
    await nextTick();
    const STYLE = wrapper.find(".a_date_input__parent").attributes("style");
    // the calendar button and the clear button (the field has a value)
    expect(STYLE).toContain("--a_date_input_label_buttons: 2");
    expect(STYLE).toContain("--a_date_input_label_width: var(--a_date_input_date_width)");
    wrapper.unmount();
  });
});
