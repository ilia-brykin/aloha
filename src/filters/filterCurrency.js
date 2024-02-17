import filterFloat from "./filterFloat";

/**
 * Converts a value to a formatted string with optional suffix, digits, and digit grouping.
 *
 * @param {number|string} value - The value to be converted
 * @param {Object} [options] - Optional parameters
 * @param {string} [options.suffix="€"] - The optional suffix to be appended to the converted value
 * @param {number} [options.digits=2] - The number of digits to round the converted value to
 * @param {boolean} [options.digitGrouping=true] - Whether to apply digit grouping to the converted value
 *
 * @returns {string} - The formatted string with the converted value.
 */
export default function(value, { suffix = "€", digits = 2, digitGrouping = true } = {}) {
  return filterFloat(value, { suffix, digits, digitGrouping });
}
