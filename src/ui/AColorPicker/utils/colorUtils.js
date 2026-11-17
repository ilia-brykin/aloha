import {
  isNil,
  isString,
} from "lodash-es";

export const COLOR_FORMATS = ["hex", "rgb", "hsl", "hsv"];

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function round(value, digits = 0) {
  const FACTOR = 10 ** digits;
  return Math.round(value * FACTOR) / FACTOR;
}

/**
 * HSV (h 0-360, s 0-100, v 0-100) → RGB (0-255).
 */
export function hsvToRgb({ h, s, v }) {
  const S = s / 100;
  const V = v / 100;
  const f = n => {
    const k = (n + h / 60) % 6;
    return V - V * S * Math.max(0, Math.min(k, 4 - k, 1));
  };
  return {
    r: Math.round(f(5) * 255),
    g: Math.round(f(3) * 255),
    b: Math.round(f(1) * 255),
  };
}

/**
 * RGB (0-255) → HSV (h 0-360, s 0-100, v 0-100).
 */
export function rgbToHsv({ r, g, b }) {
  const R = r / 255;
  const G = g / 255;
  const B = b / 255;
  const MAX = Math.max(R, G, B);
  const D = MAX - Math.min(R, G, B);
  let h = 0;
  if (D) {
    if (MAX === R) {
      h = ((G - B) / D) % 6;
    } else if (MAX === G) {
      h = (B - R) / D + 2;
    } else {
      h = (R - G) / D + 4;
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
  }
  return {
    h,
    s: MAX ? D / MAX * 100 : 0,
    v: MAX * 100,
  };
}

/**
 * HSL (h 0-360, s 0-100, l 0-100) → RGB (0-255).
 */
export function hslToRgb({ h, s, l }) {
  const S = s / 100;
  const L = l / 100;
  const A = S * Math.min(L, 1 - L);
  const f = n => {
    const k = (n + h / 30) % 12;
    return L - A * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  };
}

/**
 * RGB (0-255) → HSL (h 0-360, s 0-100, l 0-100).
 */
export function rgbToHsl({ r, g, b }) {
  const { h, s: sv, v } = rgbToHsv({ r, g, b });
  const V = v / 100;
  const SV = sv / 100;
  const L = V * (1 - SV / 2);
  const S = L === 0 || L === 1 ? 0 : (V - L) / Math.min(L, 1 - L);
  return {
    h,
    s: S * 100,
    l: L * 100,
  };
}

export function hsvToHsl({ h, s, v }) {
  const V = v / 100;
  const SV = s / 100;
  const L = V * (1 - SV / 2);
  const S = L === 0 || L === 1 ? 0 : (V - L) / Math.min(L, 1 - L);
  return {
    h,
    s: S * 100,
    l: L * 100,
  };
}

export function hslToHsv({ h, s, l }) {
  const L = l / 100;
  const SL = s / 100;
  const V = L + SL * Math.min(L, 1 - L);
  return {
    h,
    s: V ? 2 * (1 - L / V) * 100 : 0,
    v: V * 100,
  };
}

function parseAlpha(value) {
  if (isNil(value) || value === "") {
    return 1;
  }
  const TEXT = String(value).trim();
  const NUMBER = parseFloat(TEXT);
  if (Number.isNaN(NUMBER)) {
    return undefined;
  }
  return clamp(TEXT.endsWith("%") ? NUMBER / 100 : NUMBER, 0, 1);
}

function parseHex(text) {
  const MATCH = /^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(text);
  if (!MATCH) {
    return undefined;
  }
  let hex = MATCH[1];
  if (hex.length <= 4) {
    hex = hex.split("").map(char => char + char).join("");
  }
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: hex.length === 8 ? round(parseInt(hex.slice(6, 8), 16) / 255, 2) : 1,
  };
}

function parseFunction(text) {
  const MATCH = /^(rgba?|hsla?|hsva?)\(([^)]*)\)$/i.exec(text);
  if (!MATCH) {
    return undefined;
  }
  const NAME = MATCH[1].toLowerCase().replace("a", "");
  const PARTS = MATCH[2].trim().split(/\s*[,/]\s*|\s+/).filter(Boolean);
  if (PARTS.length < 3 || PARTS.length > 4) {
    return undefined;
  }
  const NUMBERS = PARTS.slice(0, 3).map(part => parseFloat(part));
  if (NUMBERS.some(number => Number.isNaN(number))) {
    return undefined;
  }
  const A = parseAlpha(PARTS[3]);
  if (isNil(A)) {
    return undefined;
  }
  if (NAME === "rgb") {
    const [R, G, B] = PARTS.slice(0, 3).map((part, index) => {
      return part.endsWith("%") ? NUMBERS[index] * 2.55 : NUMBERS[index];
    });
    return {
      r: Math.round(clamp(R, 0, 255)),
      g: Math.round(clamp(G, 0, 255)),
      b: Math.round(clamp(B, 0, 255)),
      a: A,
    };
  }
  const H = ((NUMBERS[0] % 360) + 360) % 360;
  const S = clamp(NUMBERS[1], 0, 100);
  const THIRD = clamp(NUMBERS[2], 0, 100);
  const RGB = NAME === "hsl" ?
    hslToRgb({ h: H, s: S, l: THIRD }) :
    hsvToRgb({ h: H, s: S, v: THIRD });
  return {
    ...RGB,
    a: A,
  };
}

/**
 * Parses hex (#rgb, #rgba, #rrggbb, #rrggbbaa), rgb(a), hsl(a) and hsv(a).
 * Returns { r, g, b, a } or undefined for an invalid value.
 */
export function parseColor(value) {
  if (!isString(value)) {
    return undefined;
  }
  const TEXT = value.trim();
  if (!TEXT) {
    return undefined;
  }
  return parseHex(TEXT) || parseFunction(TEXT);
}

function toHex(number) {
  return Math.round(number).toString(16).padStart(2, "0");
}

/**
 * Formats a color { r, g, b, a } as hex, rgb, hsl or hsv.
 * The alpha channel is written only if showAlpha is set and the color is not opaque.
 */
export function formatColor({ r, g, b, a = 1 }, format = "hex", showAlpha = false) {
  const IS_ALPHA = showAlpha && a < 1;
  const ALPHA = round(a, 2);
  if (format === "rgb") {
    return IS_ALPHA ?
      `rgba(${ r }, ${ g }, ${ b }, ${ ALPHA })` :
      `rgb(${ r }, ${ g }, ${ b })`;
  }
  if (format === "hsl") {
    const { h, s, l } = rgbToHsl({ r, g, b });
    const VALUES = `${ Math.round(h) }, ${ Math.round(s) }%, ${ Math.round(l) }%`;
    return IS_ALPHA ? `hsla(${ VALUES }, ${ ALPHA })` : `hsl(${ VALUES })`;
  }
  if (format === "hsv") {
    const { h, s, v } = rgbToHsv({ r, g, b });
    const VALUES = `${ Math.round(h) }, ${ Math.round(s) }%, ${ Math.round(v) }%`;
    return IS_ALPHA ? `hsva(${ VALUES }, ${ ALPHA })` : `hsv(${ VALUES })`;
  }
  return `#${ toHex(r) }${ toHex(g) }${ toHex(b) }${ IS_ALPHA ? toHex(a * 255) : "" }`;
}

/**
 * CSS value for the browser (hsv is not a CSS color).
 */
export function toCssColor({ r, g, b, a = 1 }) {
  return a < 1 ?
    `rgba(${ r }, ${ g }, ${ b }, ${ round(a, 2) })` :
    `rgb(${ r }, ${ g }, ${ b })`;
}

function relativeLuminance({ r, g, b }) {
  const [R, G, B] = [r, g, b].map(channel => {
    const C = channel / 255;
    return C <= 0.03928 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function contrastRatio(colorA, colorB) {
  const LA = relativeLuminance(colorA);
  const LB = relativeLuminance(colorB);
  return (Math.max(LA, LB) + 0.05) / (Math.min(LA, LB) + 0.05);
}

/**
 * Black or white, whichever is more readable on the color.
 * A transparent color is blended over the background (white by default).
 */
export function getContrastTextColor({ r, g, b, a = 1 }, background = { r: 255, g: 255, b: 255 }) {
  const COLOR = {
    r: r * a + background.r * (1 - a),
    g: g * a + background.g * (1 - a),
    b: b * a + background.b * (1 - a),
  };
  const ON_BLACK = contrastRatio(COLOR, { r: 0, g: 0, b: 0 });
  const ON_WHITE = contrastRatio(COLOR, { r: 255, g: 255, b: 255 });
  return ON_BLACK >= ON_WHITE ? "#000" : "#fff";
}

export function isSameColor(colorA, colorB) {
  if (!colorA || !colorB) {
    return false;
  }
  return colorA.r === colorB.r &&
    colorA.g === colorB.g &&
    colorA.b === colorB.b &&
    round(colorA.a ?? 1, 2) === round(colorB.a ?? 1, 2);
}
