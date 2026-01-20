import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isArrayBuffer,
} from "../utilsLang";

describe("isArrayBuffer function", () => {
  it("should return true for ArrayBuffer instances", () => {
    expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true);
    expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true);
  });

  it("should return false for non-arraybuffer types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isArrayBuffer(new Array(2))).toBe(false);
    expect(isArrayBuffer("ArrayBuffer")).toBe(false);
    expect(isArrayBuffer(0)).toBe(false);
    expect(isArrayBuffer(NaN)).toBe(false);
    expect(isArrayBuffer(Infinity)).toBe(false);
    expect(isArrayBuffer(true)).toBe(false);
    expect(isArrayBuffer(false)).toBe(false);
    expect(isArrayBuffer(null)).toBe(false);
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
    expect(isArrayBuffer(fn)).toBe(false);
    expect(isArrayBuffer(arrow)).toBe(false);
    expect(isArrayBuffer(Example)).toBe(false);
    expect(isArrayBuffer(new Date())).toBe(false);
    expect(isArrayBuffer(/test/)).toBe(false);
    expect(isArrayBuffer(Symbol("x"))).toBe(false);
    expect(isArrayBuffer(1n)).toBe(false);
    expect(isArrayBuffer(new Map())).toBe(false);
    expect(isArrayBuffer(new Set())).toBe(false);
    expect(isArrayBuffer(new Error("oops"))).toBe(false);
  });
});
