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
  AInputCurrency,
  AInputNumber,
} from "../../../index";

const wrappers = [];

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe.each([
  ["AInputNumber", AInputNumber],
  ["AInputCurrency", AInputCurrency],
])("%s: label", (name, component) => {
  it.each(["float", "inset", "top"])("label-position %s: one label (no second label over the form element, no duplicate id)", labelPosition => {
    const wrapper = mount(component, {
      props: { id: "amount", label: "Amount", labelPosition, modelValue: 10 },
      attachTo: document.body,
    });
    wrappers.push(wrapper);
    const LABELS = wrapper.findAll("label");
    expect(LABELS).toHaveLength(1);
    expect(LABELS[0].text()).toContain("Amount");
  });
});
