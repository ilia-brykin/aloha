import {
  describe,
  expect,
  it,
} from "vitest";

import filterDuration from "../filterDuration.js";

const D = "_A_DURATION_DAYS_";
const H = "_A_DURATION_HOURS_";
const M = "_A_DURATION_MINUTES_";
const S = "_A_DURATION_SECONDS_";

describe("filterDuration", () => {
  it("default", () => {
    expect(filterDuration(3725)).toBe(`1 ${ H } 2 ${ M } 5 ${ S }`);
    expect(filterDuration(3600)).toBe(`1 ${ H }`);
    expect(filterDuration(90061)).toBe(`1 ${ D } 1 ${ H } 1 ${ M } 1 ${ S }`);
    expect(filterDuration(0)).toBe(`0 ${ S }`);
    expect(filterDuration("125")).toBe(`2 ${ M } 5 ${ S }`);
    expect(filterDuration(-65)).toBe(`-1 ${ M } 5 ${ S }`);
  });

  it("sourceUnits", () => {
    expect(filterDuration(1500, { sourceUnits: "ms" })).toBe(`2 ${ S }`);
    expect(filterDuration(90, { sourceUnits: "m" })).toBe(`1 ${ H } 30 ${ M }`);
    expect(filterDuration(1.5, { sourceUnits: "h" })).toBe(`1 ${ H } 30 ${ M }`);
    expect(filterDuration(2, { sourceUnits: "d" })).toBe(`2 ${ D }`);
    expect(filterDuration(2, { sourceUnits: "years" })).toBe("");
  });

  it("maxUnits and showDays", () => {
    expect(filterDuration(90061, { maxUnits: 2 })).toBe(`1 ${ D } 1 ${ H }`);
    expect(filterDuration(90061, { showDays: false })).toBe(`25 ${ H } 1 ${ M } 1 ${ S }`);
  });

  it("format clock", () => {
    expect(filterDuration(3725, { format: "clock" })).toBe("01:02:05");
    expect(filterDuration(90061, { format: "clock" })).toBe("25:01:01");
    expect(filterDuration(0, { format: "clock" })).toBe("00:00:00");
    expect(filterDuration(-59, { format: "clock" })).toBe("-00:00:59");
  });

  it("empty values", () => {
    expect(filterDuration(undefined)).toBe("");
    expect(filterDuration(null)).toBe("");
    expect(filterDuration("")).toBe("");
    expect(filterDuration("abc")).toBe("");
  });
});
