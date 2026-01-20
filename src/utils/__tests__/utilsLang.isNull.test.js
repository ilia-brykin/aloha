import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isNull,
} from "../utilsLang";

describe("isNull function", () => {
  it("should return true for null", () => {
    expect(isNull(null)).toBe(true);
  });

  it("should return false for undefined", () => {
    expect(isNull(undefined)).toBe(false);
  });

  it("should return false for other falsy values", () => {
    expect(isNull(false)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull("")).toBe(false);
    expect(isNull(NaN)).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(isNull({})).toBe(false);
    expect(isNull([])).toBe(false);
  });

  it("should return false for other types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isNull(Infinity)).toBe(false);
    expect(isNull(-Infinity)).toBe(false);
    expect(isNull(fn)).toBe(false);
    expect(isNull(arrow)).toBe(false);
    expect(isNull(Example)).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(/test/)).toBe(false);
    expect(isNull(Symbol("x"))).toBe(false);
    expect(isNull(1n)).toBe(false);
    expect(isNull(new Map())).toBe(false);
    expect(isNull(new Set())).toBe(false);
  });
});
