import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isFinite,
} from "../utilsLang";

describe("isFinite function", () => {
  it("should return true for finite numbers", () => {
    expect(isFinite(0)).toBe(true);
    expect(isFinite(1)).toBe(true);
    expect(isFinite(-1)).toBe(true);
    expect(isFinite(1.5)).toBe(true);
    expect(isFinite(Number.EPSILON)).toBe(true);
    expect(isFinite(Number.MAX_VALUE)).toBe(true);
    expect(isFinite(Number.MIN_VALUE)).toBe(true);
    expect(isFinite(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isFinite(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return false for NaN and infinities", () => {
    expect(isFinite(NaN)).toBe(false);
    expect(isFinite(Infinity)).toBe(false);
    expect(isFinite(-Infinity)).toBe(false);
  });

  it("should return false for non-number types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isFinite("1")).toBe(false);
    expect(isFinite("0")).toBe(false);
    expect(isFinite(true)).toBe(false);
    expect(isFinite(false)).toBe(false);
    expect(isFinite(null)).toBe(false);
    expect(isFinite(undefined)).toBe(false);
    expect(isFinite({})).toBe(false);
    expect(isFinite([])).toBe(false);
    expect(isFinite(fn)).toBe(false);
    expect(isFinite(arrow)).toBe(false);
    expect(isFinite(Example)).toBe(false);
    expect(isFinite(new Date())).toBe(false);
    expect(isFinite(/test/)).toBe(false);
    expect(isFinite(Symbol("x"))).toBe(false);
    expect(isFinite(1n)).toBe(false);
    expect(isFinite(new Map())).toBe(false);
    expect(isFinite(new Set())).toBe(false);
  });
});
