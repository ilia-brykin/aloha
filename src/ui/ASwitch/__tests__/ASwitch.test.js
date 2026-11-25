import {
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import ASwitch from "../ASwitch";

const mountSwitch = props => mount(ASwitch, {
  props: {
    id: "notifications",
    label: "Notifications",
    modelValue: false,
    ...props,
  },
});

describe("ASwitch", () => {
  it("is a switch named by the label, not by the state text", () => {
    const INPUT = mountSwitch().find("input");

    expect(INPUT.attributes("type")).toBe("checkbox");
    expect(INPUT.attributes("role")).toBe("switch");
    expect(INPUT.attributes("aria-labelledby")).toBe("notifications_label");
    expect(mountSwitch().find("#notifications_label").text()).toContain("Notifications");
    expect(INPUT.element.checked).toBe(false);
    expect(mountSwitch({ modelValue: true }).find("input").element.checked).toBe(true);
  });

  it("without a label the state text is the name", () => {
    const INPUT = mountSwitch({ label: undefined }).find("input");

    expect(INPUT.attributes("aria-labelledby")).toBeUndefined();
    expect(INPUT.attributes("role")).toBe("switch");
  });

  it("the click and Enter toggle, Space is left to the native click", async() => {
    const wrapper = mountSwitch();
    const INPUT = wrapper.find("input");

    await INPUT.trigger("click");
    expect(wrapper.emitted("update:modelValue")[0]).toEqual([true]);

    const ENTER = new KeyboardEvent("keydown", { key: "Enter", cancelable: true });
    INPUT.element.dispatchEvent(ENTER);
    expect(ENTER.defaultPrevented).toBe(true);
    expect(wrapper.emitted("update:modelValue")).toHaveLength(2);

    const SPACE = new KeyboardEvent("keydown", { key: " ", cancelable: true });
    INPUT.element.dispatchEvent(SPACE);
    expect(SPACE.defaultPrevented).toBe(false);
    expect(wrapper.emitted("update:modelValue")).toHaveLength(2);
  });

  it("three states: a checkbox with mixed for the empty value", async() => {
    const wrapper = mountSwitch({ isThreeState: true, modelValue: undefined });
    const INPUT = wrapper.find("input");

    expect(INPUT.attributes("role")).toBeUndefined();
    expect(INPUT.element.indeterminate).toBe(true);

    await wrapper.setProps({ modelValue: true });
    expect(INPUT.element.indeterminate).toBe(false);
    expect(INPUT.element.checked).toBe(true);

    // true -> false -> empty
    await INPUT.trigger("click");
    await wrapper.setProps({ modelValue: false });
    await INPUT.trigger("click");
    expect(wrapper.emitted("update:modelValue")).toEqual([[false], [undefined]]);
  });

  it("disabled: no change", async() => {
    const wrapper = mountSwitch({ disabled: true });
    const INPUT = wrapper.find("input");

    expect(INPUT.attributes("disabled")).toBeDefined();
    await INPUT.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });

  it("inputAttributes can override the role", () => {
    const INPUT = mountSwitch({ inputAttributes: { role: "checkbox" } }).find("input");

    expect(INPUT.attributes("role")).toBe("checkbox");
  });
});
