import {
  computed,
  onMounted,
  ref,
} from "vue";

export const THEME_COLORS = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning",
  "danger",
];

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return [0, 2, 4].map(index => parseInt(value.slice(index, index + 2), 16) / 255);
}

function rgbToHex(rgb) {
  return `#${ rgb.map(channel => Math.round(channel * 255).toString(16).padStart(2, "0")).join("") }`;
}

export function hexToHsl(hex) {
  const [r, g, b] = hexToRgb(hex);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }
    h *= 60;
  }
  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToHex({ h, s, l }) {
  const sat = s / 100;
  const light = l / 100;
  const k = n => (n + h / 30) % 12;
  const a = sat * Math.min(light, 1 - light);
  const f = n => light - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return rgbToHex([f(0), f(8), f(4)]);
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map(channel => {
    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(hexA, hexB) {
  const lumA = luminance(hexA);
  const lumB = luminance(hexB);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

function readToken(style, name) {
  return style.getPropertyValue(name).trim();
}

export default function GeneratorAPI() {
  const colors = ref(THEME_COLORS.reduce((result, name) => {
    result[name] = "#000000";
    return result;
  }, {}));
  const gray = ref("#808080");
  const radius = ref(0.375);
  const focusWidthInside = ref(2);
  const focusWidthOutside = ref(2);
  const theme = ref("light");
  const density = ref("default");

  const readDefaults = () => {
    const style = getComputedStyle(document.documentElement);
    THEME_COLORS.forEach(name => {
      colors.value[name] = hslToHex({
        h: parseFloat(readToken(style, `--a_${ name }_h`)),
        s: parseFloat(readToken(style, `--a_${ name }_s`)),
        l: parseFloat(readToken(style, `--a_${ name }_l`)),
      });
    });
    gray.value = hslToHex({
      h: parseFloat(readToken(style, "--a_gray_h")),
      s: parseFloat(readToken(style, "--a_gray_s")),
      l: 50,
    });
    radius.value = parseFloat(readToken(style, "--a_radius")) || 0;
    focusWidthInside.value = parseFloat(readToken(style, "--a_focus_width_inside")) || 0;
    focusWidthOutside.value = parseFloat(readToken(style, "--a_focus_width_outside")) || 0;
  };

  const colorRows = computed(() => {
    return THEME_COLORS.map(name => {
      const hex = colors.value[name];
      const onWhite = contrastRatio(hex, "#ffffff");
      const onBlack = contrastRatio(hex, "#000000");
      const isBlackText = onBlack > onWhite;
      const ratio = isBlackText ? onBlack : onWhite;
      return {
        name,
        hex,
        hsl: hexToHsl(hex),
        isBlackText,
        ratio: ratio.toFixed(2),
        isAA: ratio >= 4.5,
      };
    });
  });

  const baseTokens = computed(() => {
    const tokens = {};
    colorRows.value.forEach(row => {
      tokens[`--a_${ row.name }_h`] = `${ row.hsl.h }`;
      tokens[`--a_${ row.name }_s`] = `${ row.hsl.s }%`;
      tokens[`--a_${ row.name }_l`] = `${ row.hsl.l }%`;
      // 0% = always black text, 101% = always white text
      tokens[`--a_${ row.name }_contrast_threshold`] = row.isBlackText ? "0%" : "101%";
    });
    const grayHsl = hexToHsl(gray.value);
    tokens["--a_gray_h"] = `${ grayHsl.h }`;
    tokens["--a_gray_s"] = `${ grayHsl.s }%`;
    tokens["--a_radius"] = `${ radius.value }rem`;
    tokens["--a_focus_width_inside"] = `${ focusWidthInside.value }px`;
    tokens["--a_focus_width_outside"] = `${ focusWidthOutside.value }px`;
    return tokens;
  });

  const previewStyle = computed(() => baseTokens.value);

  const generatedCode = computed(() => {
    const lines = Object.keys(baseTokens.value).map(key => `  ${ key }: ${ baseTokens.value[key] };`);
    const attributes = [];
    if (theme.value !== "light") {
      attributes.push(`data-a-theme="${ theme.value }"`);
    }
    if (density.value !== "default") {
      attributes.push(`data-a-density="${ density.value }"`);
    }
    const htmlHint = attributes.length ? `/* <html ${ attributes.join(" ") }> */\n` : "";
    return `${ htmlHint }:root {\n${ lines.join("\n") }\n}`;
  });

  onMounted(readDefaults);

  return {
    colorRows,
    colors,
    density,
    focusWidthInside,
    focusWidthOutside,
    generatedCode,
    gray,
    previewStyle,
    radius,
    readDefaults,
    theme,
  };
}
