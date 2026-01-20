import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isDate,
} from "../utilsLang";

describe("isDate function", () => {
  it("should return true for Date instances", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date(0))).toBe(true);
    expect(isDate(new Date("2020-01-01T00:00:00Z"))).toBe(true);
    expect(isDate(new Date(Date.UTC(2020, 0, 1)))).toBe(true);
    expect(isDate(new Date(NaN))).toBe(true);
  });

  it("should return false for non-date types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isDate(Date.parse("2020-01-01"))).toBe(false);
    expect(isDate(Date.parse("01/02/2020"))).toBe(false);
    expect(isDate("Mon April 23 2012")).toBe(false);
    expect(isDate("2020-01-01")).toBe(false);
    expect(isDate("2020-01-01T00:00:00Z")).toBe(false);
    expect(isDate("01/02/2020")).toBe(false);
    expect(isDate("January 2, 2020")).toBe(false);
    expect(isDate(0)).toBe(false);
    expect(isDate(NaN)).toBe(false);
    expect(isDate(Infinity)).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(false)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(fn)).toBe(false);
    expect(isDate(arrow)).toBe(false);
    expect(isDate(Example)).toBe(false);
    expect(isDate(/test/)).toBe(false);
    expect(isDate(Symbol("x"))).toBe(false);
    expect(isDate(1n)).toBe(false);
    expect(isDate(new Map())).toBe(false);
    expect(isDate(new Set())).toBe(false);
  });
});
