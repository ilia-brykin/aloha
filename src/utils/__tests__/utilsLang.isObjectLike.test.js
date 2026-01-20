import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isObjectLike,
} from "../utilsLang";

describe("isObjectLike function", () => {
  it("should return true for object-like values", () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([])).toBe(true);
    expect(isObjectLike(new Date())).toBe(true);
    expect(isObjectLike(/abc/)).toBe(true);
    expect(isObjectLike(new Map())).toBe(true);
    expect(isObjectLike(new Set())).toBe(true);
    expect(isObjectLike(new Error("oops"))).toBe(true);
    expect(isObjectLike(new Number(0))).toBe(true);
    expect(isObjectLike(new String("x"))).toBe(true);
    expect(isObjectLike(new Boolean(false))).toBe(true);
  });

  it("should return false for non-object-like values", () => {
    const fn = function example() {};
    const arrow = () => {};
    class Example {}

    expect(isObjectLike(fn)).toBe(false);
    expect(isObjectLike(arrow)).toBe(false);
    expect(isObjectLike(Example)).toBe(false);
    expect(isObjectLike(null)).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
    expect(isObjectLike(0)).toBe(false);
    expect(isObjectLike(NaN)).toBe(false);
    expect(isObjectLike(Infinity)).toBe(false);
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(false)).toBe(false);
    expect(isObjectLike("")).toBe(false);
    expect(isObjectLike("test")).toBe(false);
    expect(isObjectLike(Symbol("x"))).toBe(false);
    expect(isObjectLike(1n)).toBe(false);
  });
});
