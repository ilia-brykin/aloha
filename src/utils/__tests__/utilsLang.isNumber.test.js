import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isNumber,
} from "../utilsLang";

describe("isNumber function", () => {
  it("should return true for number values", () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(1.5)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(Number.EPSILON)).toBe(true);
    expect(isNumber(Number.MAX_VALUE)).toBe(true);
    expect(isNumber(Number.MIN_VALUE)).toBe(true);
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return false for non-number types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isNumber("1")).toBe(false);
    expect(isNumber("0")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(fn)).toBe(false);
    expect(isNumber(arrow)).toBe(false);
    expect(isNumber(Example)).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(/test/)).toBe(false);
    expect(isNumber(Symbol("x"))).toBe(false);
    expect(isNumber(1n)).toBe(false);
    expect(isNumber(new Map())).toBe(false);
    expect(isNumber(new Set())).toBe(false);
  });
});
