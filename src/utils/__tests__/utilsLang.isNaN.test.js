import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isNaN,
} from "../utilsLang";

describe("isNaN function", () => {
  it("should return true for NaN", () => {
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN(Number.NaN)).toBe(true);
    expect(isNaN(0 / 0)).toBe(true);
    expect(isNaN(Number("not-a-number"))).toBe(true);
  });

  it("should return false for other numbers", () => {
    expect(isNaN(0)).toBe(false);
    expect(isNaN(1)).toBe(false);
    expect(isNaN(-1)).toBe(false);
    expect(isNaN(1.5)).toBe(false);
    expect(isNaN(Infinity)).toBe(false);
    expect(isNaN(-Infinity)).toBe(false);
  });

  it("should return false for non-number types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isNaN("NaN")).toBe(false);
    expect(isNaN("1")).toBe(false);
    expect(isNaN(true)).toBe(false);
    expect(isNaN(false)).toBe(false);
    expect(isNaN(null)).toBe(false);
    expect(isNaN(undefined)).toBe(false);
    expect(isNaN({})).toBe(false);
    expect(isNaN([])).toBe(false);
    expect(isNaN(fn)).toBe(false);
    expect(isNaN(arrow)).toBe(false);
    expect(isNaN(Example)).toBe(false);
    expect(isNaN(new Date())).toBe(false);
    expect(isNaN(/test/)).toBe(false);
    expect(isNaN(Symbol("x"))).toBe(false);
    expect(isNaN(1n)).toBe(false);
    expect(isNaN(new Map())).toBe(false);
    expect(isNaN(new Set())).toBe(false);
  });
});
