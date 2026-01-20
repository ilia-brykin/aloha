import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isString,
} from "../utilsLang";

describe("isString function", () => {
  it("should return true for string values", () => {
    expect(isString("")).toBe(true);
    expect(isString("hello")).toBe(true);
    expect(isString("123")).toBe(true);
    expect(isString(" ")).toBe(true);
    expect(isString(String(123))).toBe(true);
    expect(isString(`${ 1 }`)).toBe(true);
  });

  it("should return false for non-string types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isString(0)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(NaN)).toBe(false);
    expect(isString(Infinity)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(fn)).toBe(false);
    expect(isString(arrow)).toBe(false);
    expect(isString(Example)).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(/test/)).toBe(false);
    expect(isString(Symbol("x"))).toBe(false);
    expect(isString(1n)).toBe(false);
    expect(isString(new Map())).toBe(false);
    expect(isString(new Set())).toBe(false);
  });
});
