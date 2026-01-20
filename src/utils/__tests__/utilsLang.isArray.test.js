import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isArray,
} from "../utilsLang";

describe("isArray function", () => {
  it("should return true for arrays", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(new Array(3))).toBe(true);
    expect(isArray(Array.of(1, 2))).toBe(true);
    expect(isArray(Array.from({ length: 2 }))).toBe(true);
  });

  it("should return false for non-array types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isArray(0)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(NaN)).toBe(false);
    expect(isArray(Infinity)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray("")).toBe(false);
    expect(isArray("test")).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(fn)).toBe(false);
    expect(isArray(arrow)).toBe(false);
    expect(isArray(Example)).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(/test/)).toBe(false);
    expect(isArray(Symbol("x"))).toBe(false);
    expect(isArray(1n)).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
  });
});
