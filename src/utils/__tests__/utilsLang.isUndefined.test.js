import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isUndefined,
} from "../utilsLang";

describe("isUndefined function", () => {
  it("should return true for undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it("should return true when called without arguments", () => {
    expect(isUndefined()).toBe(true);
  });

  it("should return false for null", () => {
    expect(isUndefined(null)).toBe(false);
  });

  it("should return false for other falsy values", () => {
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined("")).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
  });

  it("should return false for objects and arrays", () => {
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
  });

  it("should return false for other types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isUndefined(Infinity)).toBe(false);
    expect(isUndefined(-Infinity)).toBe(false);
    expect(isUndefined(fn)).toBe(false);
    expect(isUndefined(arrow)).toBe(false);
    expect(isUndefined(Example)).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(/test/)).toBe(false);
    expect(isUndefined(Symbol("x"))).toBe(false);
    expect(isUndefined(1n)).toBe(false);
    expect(isUndefined(new Map())).toBe(false);
    expect(isUndefined(new Set())).toBe(false);
  });
});
