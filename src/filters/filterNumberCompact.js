import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";

import filterFloat from "./filterFloat";
import {
  isNil,
  round,
  toNumber,
} from "lodash-es";

const UNITS = [
  { value: 1e12, placeholder: "_A_NUMBER_COMPACT_TRILLION_" },
  { value: 1e9, placeholder: "_A_NUMBER_COMPACT_BILLION_" },
  { value: 1e6, placeholder: "_A_NUMBER_COMPACT_MILLION_" },
  { value: 1e3, placeholder: "_A_NUMBER_COMPACT_THOUSAND_" },
];

const formatNumber = ({ number, digits, suffix, isTrailingZeros }) => {
  const NUMBER_ROUNDED = round(number, digits);
  const DIGITS = !isTrailingZeros && Number.isInteger(NUMBER_ROUNDED) ? 0 : digits;
  return filterFloat(NUMBER_ROUNDED, { digits: DIGITS, suffix });
};

/**
 * Shortens a large number with a unit, for example 1234567 -> "1,2 Mio.".
 *
 * @param {number|string} value - The number
 * @param {Object} [options] - Optional parameters
 * @param {number} [options.digits=1] - The number of decimal places of a shortened number
 * @param {number} [options.minValue=1000] - Numbers below this value (by amount) are not shortened
 * @param {boolean} [options.isTrailingZeros=false] - Whether "1,0 Mio." is shown instead of "1 Mio."
 *
 * @returns {string} - The shortened number.
 */
export default function(value, { digits = 1, minValue = 1000, isTrailingZeros = false } = {}) {
  if (isNil(value) || value === "") {
    return "";
  }
  const VALUE_NUMBER = toNumber(value);
  if (!Number.isFinite(VALUE_NUMBER)) {
    return "";
  }

  const ABS = Math.abs(VALUE_NUMBER);
  if (ABS < Math.max(minValue, UNITS[UNITS.length - 1].value)) {
    return formatNumber({ number: VALUE_NUMBER, digits, isTrailingZeros: false });
  }

  let index = UNITS.findIndex(unit => ABS >= unit.value);
  // 999.950 is rounded to 1.000 thousand, so the next unit is used: 1 million
  if (index > 0 && round(ABS / UNITS[index].value, digits) >= 1000) {
    index--;
  }
  const UNIT = UNITS[index];

  return formatNumber({
    number: VALUE_NUMBER / UNIT.value,
    digits,
    suffix: getTranslatedText({ placeholder: UNIT.placeholder }),
    isTrailingZeros,
  });
}
