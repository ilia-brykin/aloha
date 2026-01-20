import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isPlainObject,
} from "../utilsLang";

describe("isPlainObject function", () => {
  it("should return true for plain objects", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ x: 0, y: 0 })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it("should return false for objects with custom prototypes", () => {
    function Foo() {
      this.a = 1;
    }

    class Bar {
      constructor() {
        this.b = 2;
      }
    }

    expect(isPlainObject(new Foo())).toBe(false);
    expect(isPlainObject(new Bar())).toBe(false);
  });

  it("should return false for arrays and other built-ins", () => {
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/abc/)).toBe(false);
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject(new Set())).toBe(false);
    expect(isPlainObject(new Error("oops"))).toBe(false);
  });

  it("should return false for non-object types", () => {
    const fn = function example() {};
    const arrow = () => {};

    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(0)).toBe(false);
    expect(isPlainObject(NaN)).toBe(false);
    expect(isPlainObject(Infinity)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(false)).toBe(false);
    expect(isPlainObject("")).toBe(false);
    expect(isPlainObject("test")).toBe(false);
    expect(isPlainObject(Symbol("x"))).toBe(false);
    expect(isPlainObject(1n)).toBe(false);
    expect(isPlainObject(fn)).toBe(false);
    expect(isPlainObject(arrow)).toBe(false);
  });
});
