import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isWeakMap,
} from "../utilsLang";

describe("isWeakMap function", () => {
  it("should return true for WeakMap instances", () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  it("should return false for Map instances", () => {
    expect(isWeakMap(new Map())).toBe(false);
  });

  it("should return false for non-weakmap types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isWeakMap("WeakMap")).toBe(false);
    expect(isWeakMap(0)).toBe(false);
    expect(isWeakMap(NaN)).toBe(false);
    expect(isWeakMap(Infinity)).toBe(false);
    expect(isWeakMap(true)).toBe(false);
    expect(isWeakMap(false)).toBe(false);
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap(fn)).toBe(false);
    expect(isWeakMap(arrow)).toBe(false);
    expect(isWeakMap(Example)).toBe(false);
    expect(isWeakMap(new Date())).toBe(false);
    expect(isWeakMap(/test/)).toBe(false);
    expect(isWeakMap(Symbol("x"))).toBe(false);
    expect(isWeakMap(1n)).toBe(false);
    expect(isWeakMap(new Set())).toBe(false);
    expect(isWeakMap(new Error("oops"))).toBe(false);
  });
});
