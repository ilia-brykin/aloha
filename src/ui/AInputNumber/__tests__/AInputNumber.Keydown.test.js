import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AInputNumber from "../AInputNumber";

const wrappers = [];

const mountNumber = (props = {}) => {
  const wrapper = mount(AInputNumber, {
    props: {
      label: "Count",
      modelValue: 5,
      ...props,
    },
    attachTo: document.body,
  });
  wrappers.push(wrapper);
  return wrapper;
};

const keydown = (wrapper, init) => {
  const event = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, ...init });
  wrapper.find("input").element.dispatchEvent(event);
  return event;
};

afterEach(() => {
  wrappers.splice(0).forEach(wrapper => wrapper.unmount());
});

describe("AInputNumber keydown", () => {
  it("blocks the minus with min >= 0 in Chrome, Firefox and on the numpad", () => {
    const wrapper = mountNumber({ min: 0 });

    expect(keydown(wrapper, { key: "-", keyCode: 189 }).defaultPrevented).toBe(true);
    expect(keydown(wrapper, { key: "-", keyCode: 173 }).defaultPrevented).toBe(true);
    expect(keydown(wrapper, { key: "-", keyCode: 109 }).defaultPrevented).toBe(true);
  });

  it("lets the minus through without min", () => {
    const wrapper = mountNumber();

    expect(keydown(wrapper, { key: "-", keyCode: 173 }).defaultPrevented).toBe(false);
  });

  it("blocks the plus in Chrome, Firefox and on the numpad", () => {
    const wrapper = mountNumber();

    expect(keydown(wrapper, { key: "+", keyCode: 187, shiftKey: true }).defaultPrevented).toBe(true);
    expect(keydown(wrapper, { key: "+", keyCode: 61, shiftKey: true }).defaultPrevented).toBe(true);
    expect(keydown(wrapper, { key: "+", keyCode: 107 }).defaultPrevented).toBe(true);
  });

  it("does not block \"=\" on the key of the plus", () => {
    const wrapper = mountNumber();

    expect(keydown(wrapper, { key: "=", keyCode: 187 }).defaultPrevented).toBe(false);
  });

  it("blocks e and E by the character, unless e-allowed", () => {
    const wrapper = mountNumber();
    expect(keydown(wrapper, { key: "e", keyCode: 69 }).defaultPrevented).toBe(true);
    expect(keydown(wrapper, { key: "E", keyCode: 69, shiftKey: true }).defaultPrevented).toBe(true);

    const allowed = mountNumber({ eAllowed: true });
    expect(keydown(allowed, { key: "e", keyCode: 69 }).defaultPrevented).toBe(false);
  });

  it("lets digits through", () => {
    const wrapper = mountNumber({ min: 0 });

    expect(keydown(wrapper, { key: "7", keyCode: 55 }).defaultPrevented).toBe(false);
  });
});
