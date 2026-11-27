import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  mount,
} from "@vue/test-utils";

import AInfiniteScroll from "../AInfiniteScroll";

let observers;

beforeEach(() => {
  observers = [];
  globalThis.IntersectionObserver = class {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      this.elements = [];
      observers.push(this);
    }
    observe(element) {
      this.elements.push(element);
    }
    disconnect() {
      this.elements = [];
    }
  };
});

afterEach(() => {
  delete globalThis.IntersectionObserver;
});

const getObserver = () => observers[0];

describe("AInfiniteScroll", () => {
  it("observes the sentinel and calls the callback when it is visible", () => {
    const CALLBACK = vi.fn();
    const wrapper = mount(AInfiniteScroll, { props: { callback: CALLBACK } });
    const SENTINEL = wrapper.find("[aria-hidden='true']").element;

    expect(getObserver().elements).toEqual([SENTINEL]);
    expect(getObserver().options).toEqual({ rootMargin: "300px", threshold: 0.5 });
    getObserver().callback([{ isIntersecting: false }]);
    expect(CALLBACK).not.toHaveBeenCalled();
    getObserver().callback([{ isIntersecting: true }]);
    expect(CALLBACK).toHaveBeenCalledTimes(1);
  });

  it("disabled stops the observer, enabled again starts it", async() => {
    const wrapper = mount(AInfiniteScroll, { props: { callback: () => {} } });
    expect(getObserver().elements).toHaveLength(1);

    await wrapper.setProps({ disabled: true });
    expect(getObserver().elements).toHaveLength(0);

    await wrapper.setProps({ disabled: false });
    expect(getObserver().elements).toHaveLength(1);
  });

  it("disabled from the start: no observer until it is enabled", async() => {
    const wrapper = mount(AInfiniteScroll, { props: { callback: () => {}, disabled: true } });
    expect(getObserver().elements).toHaveLength(0);

    await wrapper.setProps({ disabled: false });
    expect(getObserver().elements).toHaveLength(1);
  });

  it("the unmount stops the observer", () => {
    const wrapper = mount(AInfiniteScroll, { props: { callback: () => {} } });
    wrapper.unmount();

    expect(getObserver().elements).toHaveLength(0);
  });
});
