import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isError,
} from "../utilsLang";

describe("isError function", () => {
  it("should return true for Error instances", () => {
    expect(isError(new Error("oops"))).toBe(true);
    expect(isError(new EvalError("oops"))).toBe(true);
    expect(isError(new RangeError("oops"))).toBe(true);
    expect(isError(new ReferenceError("oops"))).toBe(true);
    expect(isError(new SyntaxError("oops"))).toBe(true);
    expect(isError(new TypeError("oops"))).toBe(true);
    expect(isError(new URIError("oops"))).toBe(true);
  });

  it("should return false for non-error types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isError("Error")).toBe(false);
    expect(isError("oops")).toBe(false);
    expect(isError(0)).toBe(false);
    expect(isError(NaN)).toBe(false);
    expect(isError(Infinity)).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError(false)).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
    expect(isError({ message: "oops" })).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError(fn)).toBe(false);
    expect(isError(arrow)).toBe(false);
    expect(isError(Example)).toBe(false);
    expect(isError(new Date())).toBe(false);
    expect(isError(/test/)).toBe(false);
    expect(isError(Symbol("x"))).toBe(false);
    expect(isError(1n)).toBe(false);
    expect(isError(new Map())).toBe(false);
    expect(isError(new Set())).toBe(false);
  });
});
