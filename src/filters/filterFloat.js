import {
  isNil,
  toNumber,
  toString,
  forEachRight,
  padStart,
  isUndefined,
  round,
  repeat,
  size,
} from "lodash-es";

/**
 * Converts a given value to a string representing formatted floating-point number according to specified formatting options.
 *
 * @param {any} value - The value to be formatted.
 * @param {Object} options - The formatting options.
 * @param {string} [options.suffix=""] - The suffix to be appended to the formatted string.
 * @param {number} [options.digits=2] - The number of decimal places to include in the formatted string.
 * @param {boolean} [options.digitGrouping=true] - Whether to include digit grouping separators in the formatted string.
 *
 * @returns {string} The formatted value as a string.
 */
export default function(value, { suffix = "", digits = 2, digitGrouping = true } = {}) {
  if (isNil(value)) {
    return "";
  }
  let valString = toString(value);
  const countCommas = valString.split(",").length - 1;
  if (countCommas > 1) {
    return value;
  }

  valString = valString.replace(",", ".").replace(/[.](?=.*[.])/g, "");
  let valNumber = toNumber(valString);
  if (valNumber === 0) {
    return `0${ digits > 0 ? "," : "" }${ repeat("0", digits) }${ suffix ? ` ${ suffix }` : "" }`;
  }
  if (!valNumber) {
    return value;
  }
  valNumber = round(valNumber, digits);
  valString = toString(valNumber);
  const valArr = valString.split(".");
  let fractVal = "";
  if (valArr[1]) {
    for (let i = 0; i < digits; i++) {
      const VALUE_IN_FRACT = isUndefined(valArr[1][i]) ? "0" : valArr[1][i];
      fractVal = `${ fractVal }${ VALUE_IN_FRACT }`;
    }
  } else {
    fractVal = padStart("", digits, "0");
  }

  let floorValString = toString(valArr[0] || "0");
  let negative = false;
  if (floorValString.startsWith("-")) {
    floorValString = floorValString.substring(1);
    negative = true;
  }
  let count = 0;
  let antwort = "";
  forEachRight(floorValString, val => {
    if (count > 0 && count % 3 === 0 && digitGrouping) {
      antwort += ".";
    }
    count++;
    antwort += val;
  });
  return `${ negative ? "-" : "" }${ antwort.split("").reverse().join("") }${ size(fractVal) > 0 ? "," : "" }${ fractVal }${ suffix ? ` ${ suffix }` : "" }`;
}
