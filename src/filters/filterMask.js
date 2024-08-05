import {
  isNil,
  max,
  toString,
} from "lodash-es";

/**
 * Masks a given value, displaying only the last few characters.
 *
 * @param {any} value - The value to be masked. It will be converted to a string.
 * @param {Object} options - The options object.
 * @param {number} [options.chars=4] - The number of characters to show unmasked at the end of the string.
 * @param {string} [options.mask="*"] - The character to use for masking.
 * @returns {string} - The masked string with only the last few characters visible.
 *
 * @example
 * filterMask('1234567812345678', { chars: 4 });
 * // Returns '************5678'
 *
 * @example
 * filterMask(9876543210, { chars: 3 });
 * // Returns '*******210'
 *
 * @example
 * filterMask('secretData', { chars: 3, mask: '#' });
 * // Returns '#######ata'
 *
 * @example
 * filterMask(null);
 * // Returns ''
 *
 * @example
 * filterMask(undefined);
 * // Returns ''
 *
 * @example
 * filterMask({ key: 'value' });
 * // Returns '***********ect]'
 *
 * @example
 * filterMask('short', { chars: 10 });
 * // Returns 'short'
 *
 * @example
 * filterMask('empty', { chars: 0 });
 * // Returns '*****'
 */
export default function filterMask(value, { chars = 4, mask = "*" } = {}) {
  if (isNil(value)) {
    return "";
  }

  const VALUE_STRING = toString(value);

  if (VALUE_STRING.length <= chars) {
    return VALUE_STRING;
  }

  const CHARS_COUNT = max([chars, 0]);

  const maskedSection = mask.repeat(VALUE_STRING.length - CHARS_COUNT);
  const characters = CHARS_COUNT === 0 ?
    "" :
    VALUE_STRING.slice(-CHARS_COUNT);

  return `${ maskedSection }${ characters }`;
}
