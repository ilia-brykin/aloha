import {
  toLower,
} from "lodash-es";

/**
 * Converts the input string to lowercase.
 *
 * This function uses lodash's `toLower` method to convert the provided value
 * to lowercase. It is designed to handle input strings safely and consistently.
 *
 * @param {string} value - The string to be converted to lowercase.
 * @returns {string} The lowercase version of the input string.
 * @example
 *
 * filterLowerCase('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * filterLowerCase('fooBar');
 * // => 'foobar'
 *
 * filterLowerCase('__FOO_BAR__');
 * // => '__foo_bar__'
 */
export default function filterLowerCase(value) {
  return toLower(value);
}
