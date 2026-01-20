import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isFunction,
} from "../utilsLang";

describe("isFunction function", () => {
  it("should return true for function values", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isFunction(fn)).toBe(true);
    expect(isFunction(arrow)).toBe(true);
    expect(isFunction(Example)).toBe(true);
  });

  it("should return false for non-function types", () => {
    expect(isFunction(0)).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(Infinity)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction("")).toBe(false);
    expect(isFunction("test")).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(/test/)).toBe(false);
    expect(isFunction(Symbol("x"))).toBe(false);
    expect(isFunction(1n)).toBe(false);
    expect(isFunction(new Map())).toBe(false);
    expect(isFunction(new Set())).toBe(false);
  });
});
