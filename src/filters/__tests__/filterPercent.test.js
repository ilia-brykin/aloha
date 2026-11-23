import {
  describe,
  expect,
  it,
} from "vitest";

import filterPercent from "../filterPercent.js";

describe("filterPercent", () => {
  it("default", () => {
    expect(filterPercent(15.3)).toBe("15,30 %");
    expect(filterPercent("15,3")).toBe("15,30 %");
    expect(filterPercent(0)).toBe("0,00 %");
    expect(filterPercent(-2.5)).toBe("-2,50 %");
    expect(filterPercent(12345.678)).toBe("12.345,68 %");
    expect(filterPercent("Aloha")).toBe("Aloha");
  });

  it("digits and digitGrouping", () => {
    expect(filterPercent(15.36, { digits: 1 })).toBe("15,4 %");
    expect(filterPercent(15.36, { digits: 0 })).toBe("15 %");
    expect(filterPercent(12345, { digits: 0, digitGrouping: false })).toBe("12345 %");
  });

  it("isFraction", () => {
    expect(filterPercent(0.153, { isFraction: true })).toBe("15,30 %");
    expect(filterPercent("0,153", { isFraction: true })).toBe("15,30 %");
    expect(filterPercent(1, { isFraction: true, digits: 0 })).toBe("100 %");
    expect(filterPercent(0.0005, { isFraction: true, digits: 1 })).toBe("0,1 %");
    expect(filterPercent("Aloha", { isFraction: true })).toBe("Aloha");
  });

  it("empty values", () => {
    expect(filterPercent(undefined)).toBe("");
    expect(filterPercent(null)).toBe("");
    expect(filterPercent("")).toBe("");
  });
});
