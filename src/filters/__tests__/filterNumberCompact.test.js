import {
  describe,
  expect,
  it,
} from "vitest";

import filterNumberCompact from "../filterNumberCompact.js";

const K = "_A_NUMBER_COMPACT_THOUSAND_";
const M = "_A_NUMBER_COMPACT_MILLION_";
const B = "_A_NUMBER_COMPACT_BILLION_";
const T = "_A_NUMBER_COMPACT_TRILLION_";

describe("filterNumberCompact", () => {
  it("default", () => {
    expect(filterNumberCompact(1234567)).toBe(`1,2 ${ M }`);
    expect(filterNumberCompact(15300)).toBe(`15,3 ${ K }`);
    expect(filterNumberCompact(1000)).toBe(`1 ${ K }`);
    expect(filterNumberCompact(2500000000)).toBe(`2,5 ${ B }`);
    expect(filterNumberCompact(7e12)).toBe(`7 ${ T }`);
    expect(filterNumberCompact(1234567e12)).toBe(`1.234.567 ${ T }`);
    expect(filterNumberCompact(-1234567)).toBe(`-1,2 ${ M }`);
    expect(filterNumberCompact("15300")).toBe(`15,3 ${ K }`);
  });

  it("does not shorten small numbers", () => {
    expect(filterNumberCompact(999)).toBe("999");
    expect(filterNumberCompact(12.34)).toBe("12,3");
    expect(filterNumberCompact(0)).toBe("0");
  });

  it("moves to the next unit after rounding", () => {
    expect(filterNumberCompact(999950)).toBe(`1 ${ M }`);
    expect(filterNumberCompact(999949)).toBe(`999,9 ${ K }`);
  });

  it("digits", () => {
    expect(filterNumberCompact(1234567, { digits: 2 })).toBe(`1,23 ${ M }`);
    expect(filterNumberCompact(1234567, { digits: 0 })).toBe(`1 ${ M }`);
  });

  it("minValue", () => {
    expect(filterNumberCompact(15300, { minValue: 100000 })).toBe("15.300");
    expect(filterNumberCompact(153000, { minValue: 100000 })).toBe(`153 ${ K }`);
  });

  it("isTrailingZeros", () => {
    expect(filterNumberCompact(1000000, { isTrailingZeros: true })).toBe(`1,0 ${ M }`);
  });

  it("empty values", () => {
    expect(filterNumberCompact(undefined)).toBe("");
    expect(filterNumberCompact(null)).toBe("");
    expect(filterNumberCompact("")).toBe("");
    expect(filterNumberCompact("abc")).toBe("");
  });
});
