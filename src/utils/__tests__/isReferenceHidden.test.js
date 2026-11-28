import {
  afterEach,
  describe,
  expect,
  it,
} from "vitest";

import {
  isReferenceHidden,
} from "../isReferenceHidden";

// jsdom has no layout: the rectangles are given
const withRect = (element, rect) => {
  element.getBoundingClientRect = () => ({ width: rect.right - rect.left, height: rect.bottom - rect.top, ...rect });
  return element;
};

const field = (rect, parent = document.body) => {
  const ELEMENT = withRect(document.createElement("button"), rect);
  parent.appendChild(ELEMENT);
  return ELEMENT;
};

afterEach(() => {
  document.body.innerHTML = "";
});

describe("isReferenceHidden", () => {
  it("false: the field is in the window", () => {
    expect(isReferenceHidden(field({ top: 100, bottom: 140, left: 10, right: 210 }))).toBe(false);
  });

  it("false: partly in the window", () => {
    expect(isReferenceHidden(field({ top: -20, bottom: 20, left: 10, right: 210 }))).toBe(false);
  });

  it("true: scrolled above or below the window", () => {
    expect(isReferenceHidden(field({ top: -60, bottom: -20, left: 10, right: 210 }))).toBe(true);
    expect(isReferenceHidden(field({ top: window.innerHeight + 10, bottom: window.innerHeight + 50, left: 10, right: 210 }))).toBe(true);
  });

  it("true: scrolled out of a parent with overflow (e.g. the body of a modal), in the window", () => {
    const PARENT = withRect(document.createElement("div"), { top: 200, bottom: 400, left: 0, right: 500 });
    PARENT.style.overflowY = "auto";
    document.body.appendChild(PARENT);
    expect(isReferenceHidden(field({ top: 120, bottom: 160, left: 10, right: 210 }, PARENT))).toBe(true);
    expect(isReferenceHidden(field({ top: 250, bottom: 290, left: 10, right: 210 }, PARENT))).toBe(false);
  });

  it("false: a parent without overflow does not clip", () => {
    const PARENT = withRect(document.createElement("div"), { top: 200, bottom: 400, left: 0, right: 500 });
    document.body.appendChild(PARENT);
    expect(isReferenceHidden(field({ top: 120, bottom: 160, left: 10, right: 210 }, PARENT))).toBe(false);
  });

  it("false: a popup larger than the window (small screen, the page must scroll to use it)", () => {
    const POPUP = withRect(document.createElement("div"), { top: 0, bottom: window.innerHeight + 100, left: 0, right: 300 });
    expect(isReferenceHidden(field({ top: -60, bottom: -20, left: 10, right: 210 }), POPUP)).toBe(false);
    const SMALL = withRect(document.createElement("div"), { top: 0, bottom: 200, left: 0, right: 300 });
    expect(isReferenceHidden(field({ top: -60, bottom: -20, left: 10, right: 210 }), SMALL)).toBe(true);
  });

  it("false: no reference, no size (not laid out: display none, jsdom)", () => {
    expect(isReferenceHidden(undefined)).toBe(false);
    expect(isReferenceHidden(field({ top: -60, bottom: -60, left: 10, right: 10 }))).toBe(false);
  });
});
