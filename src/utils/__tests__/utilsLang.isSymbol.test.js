import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isSymbol,
} from "../utilsLang";

describe("isSymbol function", () => {
  it("should return true for Symbol primitives", () => {
    expect(isSymbol(Symbol("x"))).toBe(true);
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  it("should return true for Symbol objects", () => {
    expect(isSymbol(Object(Symbol("x")))).toBe(true);
  });

  it("should return false for non-symbol types", () => {
    const fn = function example() {};
    const arrow = () => {};
    class Example {}

    expect(isSymbol("symbol")).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(Infinity)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol(fn)).toBe(false);
    expect(isSymbol(arrow)).toBe(false);
    expect(isSymbol(Example)).toBe(false);
    expect(isSymbol(new Date())).toBe(false);
    expect(isSymbol(/test/)).toBe(false);
    expect(isSymbol(1n)).toBe(false);
    expect(isSymbol(new Map())).toBe(false);
    expect(isSymbol(new Set())).toBe(false);
  });
});
