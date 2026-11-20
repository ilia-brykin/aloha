import filterFloat from "./filterFloat";
import {
  isNil,
  toNumber,
  toString,
} from "lodash-es";

/**
 * Formats a value as a percentage, for example "15,30 %". Uses filterFloat.
 *
 * @param {number|string} value - The value to format
 * @param {Object} [options] - Optional parameters
 * @param {number} [options.digits=2] - The number of decimal places
 * @param {boolean} [options.digitGrouping=true] - Whether to include digit grouping separators
 * @param {boolean} [options.isFraction=false] - Whether the value is a fraction (0.153 → 15,30 %) instead of a percentage (15.3 → 15,30 %)
 *
 * @returns {string} - The formatted percentage.
 */
export default function(value, { digits = 2, digitGrouping = true, isFraction = false } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  let valueLocal = value;
  if (isFraction) {
    const VALUE_NUMBER = toNumber(toString(value).replace(",", "."));
    if (!Number.isFinite(VALUE_NUMBER)) {
      return value;
    }
    valueLocal = VALUE_NUMBER * 100;
  }

  return filterFloat(valueLocal, { suffix: "%", digits, digitGrouping });
}
