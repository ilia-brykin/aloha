import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AInputCurrency from "../AInputCurrency";

const wrappers = [];

const mountCurrency = () => {
  const wrapper = mount(AInputCurrency, {
    props: {
      label: "Amount",
      modelValue: 12.5,
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

describe("AInputCurrency keydown", () => {
  it("lets through paste with Ctrl (Windows/Linux) and Cmd (Mac)", () => {
    const wrapper = mountCurrency();

    expect(keydown(wrapper, { key: "v", keyCode: 86, ctrlKey: true }).defaultPrevented).toBe(false);
    expect(keydown(wrapper, { key: "v", keyCode: 86, metaKey: true }).defaultPrevented).toBe(false);
  });

  it("blocks letters without a modifier", () => {
    const wrapper = mountCurrency();

    expect(keydown(wrapper, { key: "v", keyCode: 86 }).defaultPrevented).toBe(true);
  });

  it("takes the typed character, not the key: \"&\" on the key of 1 (AZERTY) is not a digit", () => {
    const wrapper = mountCurrency();

    expect(keydown(wrapper, { key: "&", keyCode: 49 }).defaultPrevented).toBe(true);
    expect(keydown(wrapper, { key: "é", keyCode: 50 }).defaultPrevented).toBe(true);
  });
});
