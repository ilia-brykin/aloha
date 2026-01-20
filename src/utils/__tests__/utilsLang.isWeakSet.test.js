import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isWeakSet,
} from "../utilsLang";

describe("isWeakSet function", () => {
  it("should return true for WeakSet instances", () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  it("should return false for Set instances", () => {
    expect(isWeakSet(new Set())).toBe(false);
  });

  it("should return false for non-weakset types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isWeakSet("WeakSet")).toBe(false);
    expect(isWeakSet(0)).toBe(false);
    expect(isWeakSet(NaN)).toBe(false);
    expect(isWeakSet(Infinity)).toBe(false);
    expect(isWeakSet(true)).toBe(false);
    expect(isWeakSet(false)).toBe(false);
    expect(isWeakSet(null)).toBe(false);
    expect(isWeakSet(undefined)).toBe(false);
    expect(isWeakSet({})).toBe(false);
    expect(isWeakSet([])).toBe(false);
    expect(isWeakSet(fn)).toBe(false);
    expect(isWeakSet(arrow)).toBe(false);
    expect(isWeakSet(Example)).toBe(false);
    expect(isWeakSet(new Date())).toBe(false);
    expect(isWeakSet(/test/)).toBe(false);
    expect(isWeakSet(Symbol("x"))).toBe(false);
    expect(isWeakSet(1n)).toBe(false);
    expect(isWeakSet(new Map())).toBe(false);
    expect(isWeakSet(new Error("oops"))).toBe(false);
  });
});
