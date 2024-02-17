import {
  isNil,
} from "lodash-es";

/**
 * Converts a JavaScript value to a formatted JSON string.
 *
 * @param {*} value - The value to be converted to JSON
 * @param {Object} [options] - Optional parameters
 * @param {Function} [options.replacer] - A function that alters the behavior of the stringification process
 * @param {number} [options.space=2] - The number of spaces used for indentation in the resulting string
 *
 * @returns {string} The JSON string representation of the value; an empty string if the value is undefined or null, or an error occurred during the stringification process.
 */
export default function(value, { replacer, space = 2 } = {}) {
  if (isNil(value)) {
    return "";
  }
  try {
    return JSON.stringify(value, replacer, space);
  } catch (e) {
    return "";
  }
}
