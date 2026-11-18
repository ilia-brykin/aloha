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

import AInputOtp from "../AInputOtp";

const wrappers = [];

const mountOtp = (props = {}) => {
  const wrapper = mount(AInputOtp, {
    props: {
      label: "Code",
      length: 4,
      "onUpdate:modelValue": model => wrapper.setProps({ modelValue: model }),
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const cells = wrapper => wrapper.findAll(".a_input_otp__cell");
const values = wrapper => cells(wrapper).map(cell => cell.element.value);

const typeInto = async(cell, value) => {
  cell.element.value = value;
  await cell.trigger("input");
};

const paste = async(cell, text) => {
  const event = new Event("paste", { bubbles: true, cancelable: true });
  event.clipboardData = { getData: () => text };
  cell.element.dispatchEvent(event);
  await nextTick();
};

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("AInputOtp", () => {
  it("renders one cell per character with a group and accessible names", () => {
    const wrapper = mountOtp({ modelValue: "12" });
    const group = wrapper.get(".a_input_otp");
    expect(group.attributes("role")).toBe("group");
    expect(group.attributes("aria-labelledby")).toBe(`${ cells(wrapper)[0].attributes("id") }_label`);
    expect(values(wrapper)).toEqual(["1", "2", "", ""]);
    expect(cells(wrapper)[1].attributes("aria-label")).toBe("_A_INPUT_OTP_CHAR_{{index}}_{{length}}_");
    expect(cells(wrapper)[0].attributes("autocomplete")).toBe("one-time-code");
    expect(cells(wrapper)[1].attributes("autocomplete")).toBe("off");
    expect(cells(wrapper)[0].attributes("inputmode")).toBe("numeric");
  });

  it("moves to the next cell after input and emits finish when complete", async() => {
    const wrapper = mountOtp();
    await typeInto(cells(wrapper)[0], "1");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["1"]);
    expect(document.activeElement).toBe(cells(wrapper)[1].element);
    await typeInto(cells(wrapper)[1], "2");
    await typeInto(cells(wrapper)[2], "3");
    await typeInto(cells(wrapper)[3], "4");
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["1234"]);
    expect(wrapper.emitted("finish")).toEqual([[{ model: "1234" }]]);
  });

  it("ignores characters that are not allowed", async() => {
    const wrapper = mountOtp();
    await typeInto(cells(wrapper)[0], "a");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(cells(wrapper)[0].element.value).toBe("");
  });

  it("uses charType, validator and isUppercase", async() => {
    const wrapper = mountOtp({ charType: "alphanumeric", isUppercase: true });
    await typeInto(cells(wrapper)[0], "a");
    expect(values(wrapper)[0]).toBe("A");
    await typeInto(cells(wrapper)[1], "-");
    expect(values(wrapper)[1]).toBe("");

    const custom = mountOtp({ validator: ({ char }) => /[abc]/.test(char) });
    await typeInto(cells(custom)[0], "d");
    await typeInto(cells(custom)[0], "b");
    expect(values(custom)[0]).toBe("b");
  });

  it("replaces the old character when a filled cell gets a new one", async() => {
    const wrapper = mountOtp({ modelValue: "1234" });
    await typeInto(cells(wrapper)[1], "29");
    expect(values(wrapper)).toEqual(["1", "9", "3", "4"]);
  });

  it("spreads pasted text and an autofilled code over the cells", async() => {
    const wrapper = mountOtp();
    await paste(cells(wrapper)[2], "98-76");
    expect(values(wrapper)).toEqual(["9", "8", "7", "6"]);
    expect(wrapper.emitted("finish")).toHaveLength(1);

    const short = mountOtp();
    await paste(cells(short)[1], "5");
    expect(values(short)).toEqual(["", "5", "", ""]);

    const autofill = mountOtp();
    await typeInto(cells(autofill)[0], "4321");
    expect(values(autofill)).toEqual(["4", "3", "2", "1"]);
  });

  it("deletes with Backspace and Delete and moves with the arrow keys", async() => {
    const wrapper = mountOtp({ modelValue: "1234" });
    await cells(wrapper)[3].trigger("keydown", { key: "Backspace" });
    expect(values(wrapper)).toEqual(["1", "2", "3", ""]);
    await cells(wrapper)[3].trigger("keydown", { key: "Backspace" });
    expect(values(wrapper)).toEqual(["1", "2", "", ""]);
    expect(document.activeElement).toBe(cells(wrapper)[2].element);
    await cells(wrapper)[0].trigger("keydown", { key: "Delete" });
    expect(values(wrapper)).toEqual(["", "2", "", ""]);
    expect(wrapper.emitted("update:modelValue").at(-1)).toEqual(["2"]);

    await cells(wrapper)[0].trigger("keydown", { key: "ArrowRight" });
    expect(document.activeElement).toBe(cells(wrapper)[1].element);
    await cells(wrapper)[1].trigger("keydown", { key: "End" });
    expect(document.activeElement).toBe(cells(wrapper)[3].element);
    await cells(wrapper)[3].trigger("keydown", { key: "Home" });
    expect(document.activeElement).toBe(cells(wrapper)[0].element);
  });

  it("emits focus and blur once for the whole group", async() => {
    const wrapper = mountOtp();
    cells(wrapper)[0].element.focus();
    cells(wrapper)[1].element.focus();
    document.body.focus();
    cells(wrapper)[1].element.blur();
    await nextTick();
    expect(wrapper.emitted("focus")).toHaveLength(1);
    expect(wrapper.emitted("blur")).toHaveLength(1);
  });

  it("focuses the first empty cell with the exposed focus method", () => {
    const wrapper = mountOtp({ modelValue: "12" });
    wrapper.vm.focus();
    expect(document.activeElement).toBe(cells(wrapper)[2].element);
  });

  it("supports mask, separator, size, variant, disabled and errors", () => {
    const wrapper = mountOtp({
      mask: true,
      separator: ({ index }) => (index === 1 ? "-" : ""),
      size: "large",
      variant: "filled",
      disabled: true,
      errors: "Wrong code",
    });
    expect(cells(wrapper)[0].attributes("type")).toBe("password");
    expect(wrapper.findAll(".a_input_otp__separator").map(item => item.text())).toEqual(["-"]);
    expect(wrapper.get(".a_input_otp").classes()).toEqual(expect.arrayContaining(["a_input_otp_large", "a_input_otp_filled"]));
    expect(cells(wrapper)[0].attributes("disabled")).toBeDefined();
    expect(cells(wrapper)[0].attributes("aria-invalid")).toBe("true");
    expect(cells(wrapper)[0].attributes("aria-describedby")).toContain("_errors");
  });

  it("renders the separator slot only where it has content", () => {
    const wrapper = mount(AInputOtp, {
      props: { length: 4 },
      slots: {
        separator: `<template #separator="{ index }"><span v-if="index === 1">-</span></template>`,
      },
    });
    wrappers.push(wrapper);
    expect(wrapper.findAll(".a_input_otp__separator").map(item => item.text())).toEqual(["-"]);
  });

  it("shows the masked value when readonly", () => {
    const wrapper = mountOtp({ modelValue: "1234", mask: true, readonly: true });
    expect(wrapper.find(".a_input_otp").exists()).toBe(false);
    expect(wrapper.text()).toContain("****");
  });
});
