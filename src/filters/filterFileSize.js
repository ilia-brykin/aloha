import filterFloat from "./filterFloat";
import {
  getTranslatedText,
} from "../ATranslation/compositionAPI/UtilsAPI";
import {
  isNaN,
  toNumber,
  toUpper,
} from "lodash-es";

/**
 * Converts a value from one unit of measurement to another unit of measurement.
 * By default, converts a value from bytes to kilobytes, but can be customized to convert to any other units supported.
 *
 * @param {number} value - The value to be converted.
 * @param {object} options - Optional configuration for the conversion.
 * @param {string} options.units - The desired units for the converted value. Defaults to "kb".
 * @param {string} options.sourceUnits - The source units of the value. Defaults to "b".
 * @param {number} options.digits - The number of decimal places to round the converted value. Defaults to 2.
 * @returns {string} - The converted value, formatted as a string.
 */
export default function(value, { units = "kb", sourceUnits = "b", digits = 2 } = {}) {
  const KB = 1024;
  const UNITS_ORDER = [
    "b",
    "kb",
    "mb",
    "gb",
    "tb",
    "pb",
    "eb",
    "zb",
    "yb",
  ];
  const VALUE_NUMBER = toNumber(value);
  if (isNaN(VALUE_NUMBER)) {
    return "";
  }

  const INDEX_SOURCE_UNITS = UNITS_ORDER.indexOf(sourceUnits);
  let indexUnits = UNITS_ORDER.indexOf(units);
  if (INDEX_SOURCE_UNITS === -1) {
    return "";
  }
  const VALUE_IN_BYTES = VALUE_NUMBER * Math.pow(KB, INDEX_SOURCE_UNITS);
  if (indexUnits === -1) {
    indexUnits = Math.floor(Math.log(VALUE_IN_BYTES) / Math.log(KB));
    if (indexUnits < 0) {
      indexUnits = 0;
    }
    units = UNITS_ORDER[indexUnits];
  }

  const UNITS_TRANSLATED = getTranslatedText({ placeholder: `_A_FILE_SIZE_${ toUpper(units) }_` });

  if (VALUE_NUMBER === 0) {
    return filterFloat(0, { suffix: UNITS_TRANSLATED, digits });
  }
  if (INDEX_SOURCE_UNITS === indexUnits) {
    return filterFloat(VALUE_NUMBER, { suffix: UNITS_TRANSLATED, digits });
  }
  const size = VALUE_IN_BYTES / Math.pow(KB, Math.abs(indexUnits));

  return filterFloat(size, { suffix: UNITS_TRANSLATED, digits });
}
