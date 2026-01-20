import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isRegExp,
} from "../utilsLang";

describe("isRegExp function", () => {
  it("should return true for RegExp instances", () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(new RegExp("abc"))).toBe(true);
  });

  it("should return false for non-regexp types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isRegExp("/abc/")).toBe(false);
    expect(isRegExp(0)).toBe(false);
    expect(isRegExp(NaN)).toBe(false);
    expect(isRegExp(Infinity)).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(false)).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp(fn)).toBe(false);
    expect(isRegExp(arrow)).toBe(false);
    expect(isRegExp(Example)).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(Symbol("x"))).toBe(false);
    expect(isRegExp(1n)).toBe(false);
    expect(isRegExp(new Map())).toBe(false);
    expect(isRegExp(new Set())).toBe(false);
    expect(isRegExp(new Error("oops"))).toBe(false);
  });
});
