import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isArguments,
} from "../utilsLang";

describe("isArguments function", () => {
  it("should return true for arguments objects", () => {
    const args = (function example() {
      return arguments;
    })();

    expect(isArguments(args)).toBe(true);
  });

  it("should return false for non-arguments types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isArguments([])).toBe(false);
    expect(isArguments([1, 2, 3])).toBe(false);
    expect(isArguments({})).toBe(false);
    expect(isArguments(fn)).toBe(false);
    expect(isArguments(arrow)).toBe(false);
    expect(isArguments(Example)).toBe(false);
    expect(isArguments(0)).toBe(false);
    expect(isArguments(1)).toBe(false);
    expect(isArguments(NaN)).toBe(false);
    expect(isArguments(Infinity)).toBe(false);
    expect(isArguments(true)).toBe(false);
    expect(isArguments(false)).toBe(false);
    expect(isArguments(null)).toBe(false);
    expect(isArguments(undefined)).toBe(false);
    expect(isArguments("")).toBe(false);
    expect(isArguments("test")).toBe(false);
    expect(isArguments(new Date())).toBe(false);
    expect(isArguments(/test/)).toBe(false);
    expect(isArguments(Symbol("x"))).toBe(false);
    expect(isArguments(1n)).toBe(false);
    expect(isArguments(new Map())).toBe(false);
    expect(isArguments(new Set())).toBe(false);
  });
});
