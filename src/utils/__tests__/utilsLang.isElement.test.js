import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isElement,
} from "../utilsLang";

describe("isElement function", () => {
  it("should return true for DOM-like elements", () => {
    const element = {
      nodeType: 1,
      nodeName: "DIV",
    };

    expect(isElement(element)).toBe(true);
  });

  it("should return false for non-elements", () => {
    const fn = function example() {};
    const arrow = () => {};
    class Example {}

    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement("body")).toBe(false);
    expect(isElement("<body>")).toBe(false);
    expect(isElement(0)).toBe(false);
    expect(isElement(NaN)).toBe(false);
    expect(isElement(Infinity)).toBe(false);
    expect(isElement(true)).toBe(false);
    expect(isElement(false)).toBe(false);
    expect(isElement({})).toBe(false);
    expect(isElement([])).toBe(false);
    expect(isElement(fn)).toBe(false);
    expect(isElement(arrow)).toBe(false);
    expect(isElement(Example)).toBe(false);
    expect(isElement(new Date())).toBe(false);
    expect(isElement(/test/)).toBe(false);
    expect(isElement(Symbol("x"))).toBe(false);
    expect(isElement(1n)).toBe(false);
    expect(isElement(new Map())).toBe(false);
    expect(isElement(new Set())).toBe(false);
  });

  it("should return false for element-like objects with wrong fields", () => {
    expect(isElement({ nodeType: 1 })).toBe(false);
    expect(isElement({ nodeName: "DIV" })).toBe(false);
    expect(isElement({ nodeType: 2, nodeName: "DIV" })).toBe(false);
  });
});
