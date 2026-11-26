import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  addModal,
  removeModal,
} from "../compositionAPI/ModalStackAPI";

import {
  componentsPluginOptions,
} from "../../plugins/AComponentsPlugin";
import {
  isDev,
} from "../../utils/isDev";

const getWidth = () => document.body.style.getPropertyValue("--a_scrollbar_width");
const setScrollbar = width => {
  // jsdom has no layout: the window is 1024px, the page without the scrollbar is narrower
  Object.defineProperty(document.documentElement, "clientWidth", { value: window.innerWidth - width, configurable: true });
};
const open = key => addModal({ key, getWrapper: () => document.body, useInert: false });

beforeEach(() => {
  setScrollbar(17);
});

afterEach(() => {
  removeModal("one");
  removeModal("two");
  delete componentsPluginOptions.AModal;
  delete document.documentElement.clientWidth;
  vi.unstubAllEnvs();
});

describe("ModalStackAPI: the space of the scrollbar", () => {
  it("auto: measured once at the first modal, removed after the last one", () => {
    open("one");
    expect(getWidth()).toBe("17px");
    expect(document.body.classList.contains("a_modal_open")).toBe(true);

    // the scrollbar is gone with overflow: hidden, the second modal keeps the value
    setScrollbar(0);
    open("two");
    expect(getWidth()).toBe("17px");

    removeModal("two");
    expect(getWidth()).toBe("17px");
    removeModal("one");
    expect(getWidth()).toBe("");
    expect(document.body.classList.contains("a_modal_open")).toBe(false);
  });

  it("auto without a scrollbar (macOS, iOS, Android, overlay scrollbars): 0px", () => {
    setScrollbar(0);
    open("one");

    expect(getWidth()).toBe("0px");
  });

  it("AComponentsPlugin: a number, a CSS length or false", () => {
    componentsPluginOptions.AModal = { scrollbarCompensation: 15 };
    open("one");
    expect(getWidth()).toBe("15px");
    removeModal("one");

    componentsPluginOptions.AModal = { scrollbarCompensation: "1rem" };
    open("one");
    expect(getWidth()).toBe("1rem");
    removeModal("one");

    componentsPluginOptions.AModal = { scrollbarCompensation: false };
    open("one");
    expect(getWidth()).toBe("0px");
  });
});

describe("isDev", () => {
  it("true in development and tests, false in production", () => {
    expect(isDev()).toBe(true);
    vi.stubEnv("NODE_ENV", "production");
    expect(isDev()).toBe(false);
  });
});
