import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";

import {
  isNil,
  padStart,
  toNumber,
} from "lodash-es";

const SECONDS_IN = {
  ms: 1 / 1000,
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
};

const UNITS = [
  { key: "d", seconds: SECONDS_IN.d, placeholder: "_A_DURATION_DAYS_" },
  { key: "h", seconds: SECONDS_IN.h, placeholder: "_A_DURATION_HOURS_" },
  { key: "m", seconds: SECONDS_IN.m, placeholder: "_A_DURATION_MINUTES_" },
  { key: "s", seconds: SECONDS_IN.s, placeholder: "_A_DURATION_SECONDS_" },
];

/**
 * Formats a duration, for example "1 h 2 min 5 s" or "01:02:05".
 *
 * @param {number|string} value - The duration
 * @param {Object} [options] - Optional parameters
 * @param {string} [options.sourceUnits="s"] - The units of the value: "ms", "s", "m", "h" or "d"
 * @param {string} [options.format="long"] - "long" ("1 h 2 min 5 s") or "clock" ("01:02:05")
 * @param {number} [options.maxUnits=0] - "long" only: the maximum number of shown units, starting with the largest one (0 shows all)
 * @param {boolean} [options.showDays=true] - "long" only: whether days are shown; otherwise they are counted as hours
 *
 * @returns {string} - The formatted duration.
 */
export default function(value, {
  sourceUnits = "s",
  format = "long",
  maxUnits = 0,
  showDays = true,
} = {}) {
  if (isNil(value) || value === "" || !SECONDS_IN[sourceUnits]) {
    return "";
  }
  const VALUE_NUMBER = toNumber(value);
  if (!Number.isFinite(VALUE_NUMBER)) {
    return "";
  }

  let seconds = Math.round(Math.abs(VALUE_NUMBER) * SECONDS_IN[sourceUnits]);
  const SIGN = VALUE_NUMBER < 0 && seconds > 0 ? "-" : "";

  if (format === "clock") {
    const HOURS = Math.floor(seconds / SECONDS_IN.h);
    const MINUTES = Math.floor((seconds % SECONDS_IN.h) / SECONDS_IN.m);
    const SECONDS = seconds % SECONDS_IN.m;
    return `${ SIGN }${ [HOURS, MINUTES, SECONDS].map(part => padStart(part, 2, "0")).join(":") }`;
  }

  const UNITS_USED = showDays ? UNITS : UNITS.slice(1);
  const PARTS = [];
  UNITS_USED.forEach(unit => {
    const COUNT = Math.floor(seconds / unit.seconds);
    seconds -= COUNT * unit.seconds;
    if (COUNT > 0) {
      PARTS.push(`${ COUNT } ${ getTranslatedText({ placeholder: unit.placeholder }) }`);
    }
  });
  if (!PARTS.length) {
    return `0 ${ getTranslatedText({ placeholder: "_A_DURATION_SECONDS_" }) }`;
  }

  return `${ SIGN }${ (maxUnits > 0 ? PARTS.slice(0, maxUnits) : PARTS).join(" ") }`;
}
