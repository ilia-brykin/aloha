import {
  describe,
  expect,
  it,
} from "vitest";

import {
  contrastRatio,
  detectColorFormat,
  formatColor,
  getContrastTextColor,
  hslToHsv,
  hsvToHsl,
  hsvToRgb,
  isSameColor,
  parseColor,
  rgbToHsl,
  rgbToHsv,
} from "../utils/colorUtils";

describe("colorUtils parseColor", () => {
  it("parses hex in all lengths", () => {
    expect(parseColor("#f00")).toEqual({ r: 255, g: 0, b: 0, a: 1 });
    expect(parseColor("#f008")).toEqual({ r: 255, g: 0, b: 0, a: 0.53 });
    expect(parseColor("#0775B0")).toEqual({ r: 7, g: 117, b: 176, a: 1 });
    expect(parseColor("0775b080")).toEqual({ r: 7, g: 117, b: 176, a: 0.5 });
  });

  it("parses rgb, hsl and hsv functions with commas, spaces and slash", () => {
    expect(parseColor("rgb(7, 117, 176)")).toEqual({ r: 7, g: 117, b: 176, a: 1 });
    expect(parseColor("rgba(7, 117, 176, .5)")).toEqual({ r: 7, g: 117, b: 176, a: 0.5 });
    expect(parseColor("rgb(7 117 176 / 50%)")).toEqual({ r: 7, g: 117, b: 176, a: 0.5 });
    expect(parseColor("hsl(0, 100%, 50%)")).toEqual({ r: 255, g: 0, b: 0, a: 1 });
    expect(parseColor("hsva(120, 100%, 100%, 0.25)")).toEqual({ r: 0, g: 255, b: 0, a: 0.25 });
  });

  it("returns undefined for invalid values", () => {
    expect(parseColor("")).toBeUndefined();
    expect(parseColor("red")).toBeUndefined();
    expect(parseColor("#12345")).toBeUndefined();
    expect(parseColor("rgb(1, 2)")).toBeUndefined();
    expect(parseColor(undefined)).toBeUndefined();
  });
});

describe("colorUtils detectColorFormat", () => {
  it("detects the format of a value", () => {
    expect(detectColorFormat("#0775b0")).toBe("hex");
    expect(detectColorFormat("RGBA(7, 117, 176, .5)")).toBe("rgb");
    expect(detectColorFormat("hsl(0, 100%, 50%)")).toBe("hsl");
    expect(detectColorFormat("hsva(0, 100%, 100%, 1)")).toBe("hsv");
    expect(detectColorFormat("red")).toBeUndefined();
    expect(detectColorFormat(undefined)).toBeUndefined();
  });
});

describe("colorUtils formatColor", () => {
  const COLOR = { r: 7, g: 117, b: 176, a: 0.5 };

  it("writes alpha only with showAlpha and a < 1", () => {
    expect(formatColor(COLOR, "hex")).toBe("#0775b0");
    expect(formatColor(COLOR, "hex", true)).toBe("#0775b080");
    expect(formatColor({ ...COLOR, a: 1 }, "hex", true)).toBe("#0775b0");
  });

  it("formats rgb, hsl and hsv", () => {
    expect(formatColor(COLOR, "rgb", true)).toBe("rgba(7, 117, 176, 0.5)");
    expect(formatColor(COLOR, "rgb")).toBe("rgb(7, 117, 176)");
    expect(formatColor({ r: 255, g: 0, b: 0 }, "hsl")).toBe("hsl(0, 100%, 50%)");
    expect(formatColor({ r: 255, g: 0, b: 0 }, "hsv")).toBe("hsv(0, 100%, 100%)");
  });

  it("round-trips through parseColor", () => {
    ["#0775b0", "rgb(7, 117, 176)", "hsl(201, 92%, 36%)"].forEach(value => {
      const FORMAT = value.startsWith("#") ? "hex" : value.slice(0, 3);
      expect(formatColor(parseColor(value), FORMAT)).toBe(value);
    });
  });
});

describe("colorUtils conversions", () => {
  it("converts between rgb, hsv and hsl", () => {
    expect(hsvToRgb({ h: 201, s: 96, v: 69 })).toEqual({ r: 7, g: 117, b: 176 });
    expect(rgbToHsv({ r: 255, g: 255, b: 255 })).toEqual({ h: 0, s: 0, v: 100 });
    const HSL = rgbToHsl({ r: 255, g: 0, b: 0 });
    expect(HSL).toEqual({ h: 0, s: 100, l: 50 });
    expect(hslToHsv(hsvToHsl({ h: 10, s: 40, v: 80 }))).toEqual({ h: 10, s: expect.closeTo(40, 6), v: expect.closeTo(80, 6) });
  });
});

describe("colorUtils contrast", () => {
  it("chooses the more readable text color", () => {
    expect(getContrastTextColor({ r: 255, g: 255, b: 0 })).toBe("#000");
    expect(getContrastTextColor({ r: 7, g: 117, b: 176 })).toBe("#fff");
    // almost transparent dark color on white stays readable with black text
    expect(getContrastTextColor({ r: 0, g: 0, b: 0, a: 0.1 })).toBe("#000");
    expect(contrastRatio({ r: 0, g: 0, b: 0 }, { r: 255, g: 255, b: 255 })).toBeCloseTo(21);
  });

  it("compares colors including alpha", () => {
    expect(isSameColor(parseColor("#f00"), parseColor("rgb(255, 0, 0)"))).toBe(true);
    expect(isSameColor(parseColor("#f00"), parseColor("#f008"))).toBe(false);
  });
});
