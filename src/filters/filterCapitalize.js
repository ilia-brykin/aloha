import {
  capitalize,
} from "lodash-es";

/**
 * Converts the first character of string to upper case and the remaining to lower case.
 *
 * This function uses lodash's `capitalize` method to convert the provided value.
 * It is designed to handle input strings safely and consistently.
 *
 * @param {string} value - The string to be converted to capitalize.
 * @returns {string} The capitalize version of the input string.
 * @example
 *
 * filterCapitalize('foobar');
 * // => 'Foobar'
 */
export default function filterCapitalize(value) {
  return capitalize(value);
}
