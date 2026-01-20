import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isBoolean,
} from "../utilsLang";

describe("isBoolean function", () => {
  it("should return true for boolean values", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it("should return false for undefined and null", () => {
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });

  it("should return false for number-like values", () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
    expect(isBoolean(Infinity)).toBe(false);
  });

  it("should return false for strings and objects", () => {
    expect(isBoolean("true")).toBe(false);
    expect(isBoolean("false")).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
  });

  it("should return false for other types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isBoolean(fn)).toBe(false);
    expect(isBoolean(arrow)).toBe(false);
    expect(isBoolean(Example)).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
    expect(isBoolean(/test/)).toBe(false);
    expect(isBoolean(Symbol("x"))).toBe(false);
    expect(isBoolean(1n)).toBe(false);
    expect(isBoolean(new Map())).toBe(false);
    expect(isBoolean(new Set())).toBe(false);
  });
});
