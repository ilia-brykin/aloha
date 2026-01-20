import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isInteger,
} from "../utilsLang";

describe("isInteger function", () => {
  it("should return true for integers", () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(42)).toBe(true);
  });

  it("should return false for non-integers", () => {
    expect(isInteger(1.5)).toBe(false);
    expect(isInteger(-2.2)).toBe(false);
    expect(isInteger(Number.EPSILON)).toBe(false);
    expect(isInteger(Math.PI)).toBe(false);
  });

  it("should return false for NaN and infinities", () => {
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });

  it("should return false for non-number types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isInteger("1")).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger(fn)).toBe(false);
    expect(isInteger(arrow)).toBe(false);
    expect(isInteger(Example)).toBe(false);
    expect(isInteger(new Date())).toBe(false);
    expect(isInteger(/test/)).toBe(false);
    expect(isInteger(Symbol("x"))).toBe(false);
    expect(isInteger(1n)).toBe(false);
    expect(isInteger(new Map())).toBe(false);
    expect(isInteger(new Set())).toBe(false);
  });
});
