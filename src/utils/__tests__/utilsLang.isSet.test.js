import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isSet,
} from "../utilsLang";

describe("isSet function", () => {
  it("should return true for Set instances", () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet(new Set([1, 2]))).toBe(true);
  });

  it("should return false for WeakSet instances", () => {
    expect(isSet(new WeakSet())).toBe(false);
  });

  it("should return false for non-set types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isSet("Set")).toBe(false);
    expect(isSet(0)).toBe(false);
    expect(isSet(NaN)).toBe(false);
    expect(isSet(Infinity)).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet(false)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet(fn)).toBe(false);
    expect(isSet(arrow)).toBe(false);
    expect(isSet(Example)).toBe(false);
    expect(isSet(new Date())).toBe(false);
    expect(isSet(/test/)).toBe(false);
    expect(isSet(Symbol("x"))).toBe(false);
    expect(isSet(1n)).toBe(false);
    expect(isSet(new Map())).toBe(false);
    expect(isSet(new Error("oops"))).toBe(false);
  });
});
