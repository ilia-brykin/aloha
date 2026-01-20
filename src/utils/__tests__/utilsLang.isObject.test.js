import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isObject,
} from "../utilsLang";

describe("isObject function", () => {
  it("should return true for objects and functions", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(fn)).toBe(true);
    expect(isObject(arrow)).toBe(true);
    expect(isObject(Example)).toBe(true);
    expect(isObject(/test/)).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new Number(0))).toBe(true);
    expect(isObject(new String("x"))).toBe(true);
    expect(isObject(new Boolean(false))).toBe(true);
    expect(isObject(new Map())).toBe(true);
    expect(isObject(new Set())).toBe(true);
  });

  it("should return false for null and primitives", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(Infinity)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject("")).toBe(false);
    expect(isObject("test")).toBe(false);
    expect(isObject(Symbol("x"))).toBe(false);
    expect(isObject(1n)).toBe(false);
  });
});
