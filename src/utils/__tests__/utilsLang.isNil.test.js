import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isNil,
} from "../utilsLang";

describe("isNil function", () => {
  it("should return true for undefined", () => {
    expect(isNil(undefined)).toBe(true);
  });

  it("should return true when called without arguments", () => {
    expect(isNil()).toBe(true);
  });

  it("should return true for null", () => {
    expect(isNil(null)).toBe(true);
  });

  it("should return false for other falsy values", () => {
    expect(isNil(false)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil("")).toBe(false);
    expect(isNil(NaN)).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);
  });

  it("should return false for other types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isNil(Infinity)).toBe(false);
    expect(isNil(-Infinity)).toBe(false);
    expect(isNil(fn)).toBe(false);
    expect(isNil(arrow)).toBe(false);
    expect(isNil(Example)).toBe(false);
    expect(isNil(new Date())).toBe(false);
    expect(isNil(/test/)).toBe(false);
    expect(isNil(Symbol("x"))).toBe(false);
    expect(isNil(1n)).toBe(false);
    expect(isNil(new Map())).toBe(false);
    expect(isNil(new Set())).toBe(false);
  });
});
