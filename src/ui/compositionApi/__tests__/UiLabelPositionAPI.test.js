import {
  reactive,
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

import AInput from "../../AInput/AInput";

import UiLabelPositionAPI from "../UiLabelPositionAPI";

import {
  AFormPluginOptions,
} from "../../../plugins/AFormPlugin";

const getPosition = (props, options) => {
  return UiLabelPositionAPI(reactive(props), options).labelPositionLocal.value;
};

afterEach(() => {
  AFormPluginOptions.labelPosition = "float";
});

describe("UiLabelPositionAPI", () => {
  it("uses labelPosition first, then the deprecated isLabelFloat", () => {
    expect(getPosition({ labelPosition: "inset", isLabelFloat: false })).toBe("inset");
    expect(getPosition({ labelPosition: undefined, isLabelFloat: false })).toBe("top");
    expect(getPosition({ labelPosition: undefined, isLabelFloat: true })).toBe("float");
  });

  it("falls back to the component plugin, then to AFormPlugin", () => {
    expect(getPosition({}, { pluginOptions: { propsDefault: { labelPosition: "top" } } })).toBe("top");
    expect(getPosition({}, { pluginOptions: { propsDefault: { isLabelFloat: false } } })).toBe("top");
    expect(getPosition({})).toBe("float");
    AFormPluginOptions.labelPosition = "inset";
    expect(getPosition({})).toBe("inset");
  });

  it("treats float and inset as a label inside the field", () => {
    const api = UiLabelPositionAPI(reactive({ labelPosition: "inset" }));
    expect(api.isLabelFloatLocal.value).toBe(true);
    expect(api.isLabelInset.value).toBe(true);
    const top = UiLabelPositionAPI(reactive({ labelPosition: "top" }));
    expect(top.isLabelFloatLocal.value).toBe(false);
  });
});

describe("AInput labelPosition", () => {
  const getParent = props => mount(AInput, { props: { label: "Label", ...props } }).get(".a_form_element__parent");

  it("sets the classes for float, inset and top", () => {
    expect(getParent({ labelPosition: "float" }).classes()).toContain("a_form_element__parent_float");
    expect(getParent({ labelPosition: "float" }).classes()).not.toContain("a_form_element__parent_inset");
    expect(getParent({ labelPosition: "inset" }).classes()).toEqual(expect.arrayContaining(["a_form_element__parent_float", "a_form_element__parent_inset"]));
    expect(getParent({ labelPosition: "top" }).classes()).not.toContain("a_form_element__parent_float");
  });

  it("keeps the deprecated isLabelFloat working", () => {
    expect(getParent({ isLabelFloat: false }).classes()).not.toContain("a_form_element__parent_float");
    expect(getParent({}).classes()).toContain("a_form_element__parent_float");
  });
});
