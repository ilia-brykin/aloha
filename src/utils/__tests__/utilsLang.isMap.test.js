import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isMap,
} from "../utilsLang";

describe("isMap function", () => {
  it("should return true for Map instances", () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap(new Map([["a", 1]]))).toBe(true);
  });

  it("should return false for WeakMap instances", () => {
    expect(isMap(new WeakMap())).toBe(false);
  });

  it("should return false for non-map types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isMap("Map")).toBe(false);
    expect(isMap(0)).toBe(false);
    expect(isMap(NaN)).toBe(false);
    expect(isMap(Infinity)).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap(false)).toBe(false);
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap({})).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap(fn)).toBe(false);
    expect(isMap(arrow)).toBe(false);
    expect(isMap(Example)).toBe(false);
    expect(isMap(new Date())).toBe(false);
    expect(isMap(/test/)).toBe(false);
    expect(isMap(Symbol("x"))).toBe(false);
    expect(isMap(1n)).toBe(false);
    expect(isMap(new Set())).toBe(false);
    expect(isMap(new Error("oops"))).toBe(false);
  });
});
