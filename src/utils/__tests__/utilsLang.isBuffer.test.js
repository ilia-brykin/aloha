import {
  describe,
  expect,
  it,
} from "@jest/globals";

import {
  isBuffer,
} from "../utilsLang";

describe("isBuffer function", () => {
  it("should return true for Buffer instances", () => {
    expect(isBuffer(Buffer.from("test"))).toBe(true);
    expect(isBuffer(new Buffer(2))).toBe(true);
  });

  it("should return false for non-buffer types", () => {
    const fn = function example() {

    };
    const arrow = () => {};
    class Example {

    }

    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer("test")).toBe(false);
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer(NaN)).toBe(false);
    expect(isBuffer(Infinity)).toBe(false);
    expect(isBuffer(true)).toBe(false);
    expect(isBuffer(false)).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer({})).toBe(false);
    expect(isBuffer([])).toBe(false);
    expect(isBuffer(fn)).toBe(false);
    expect(isBuffer(arrow)).toBe(false);
    expect(isBuffer(Example)).toBe(false);
    expect(isBuffer(new Date())).toBe(false);
    expect(isBuffer(/test/)).toBe(false);
    expect(isBuffer(Symbol("x"))).toBe(false);
    expect(isBuffer(1n)).toBe(false);
    expect(isBuffer(new Map())).toBe(false);
    expect(isBuffer(new Set())).toBe(false);
  });
});
