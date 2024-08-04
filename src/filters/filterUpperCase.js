import {
  toUpper,
} from "lodash-es";

/**
 * Converts the input string to uppercase.
 *
 * This function uses lodash's `toUpper` method to convert the provided value
 * to uppercase. It is designed to handle input strings safely and consistently.
 *
 * @param {string} value - The string to be converted to uppercase.
 * @returns {string} The uppercase version of the input string.
 * @example
 *
 * filterUpperCase('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * filterUpperCase('fooBar');
 * // => 'FOOBAR'
 *
 * filterUpperCase('__foo_bar__');
 * // => '__FOO_BAR__'
 */
export default function filterUpperCase(value) {
  return toUpper(value);
}
