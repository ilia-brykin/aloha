import {
  isNil,
  toString,
} from "lodash-es";

/**
 * Converts the first letter of every word to upper case. The other letters stay as they are.
 *
 * @param {*} value - The value to convert
 *
 * @returns {string} - The converted string, e.g. "jean-luc picard" → "Jean-Luc Picard".
 */
export default function(value) {
  if (isNil(value)) {
    return "";
  }

  return toString(value).replace(/(^|[\s-])(\p{L})/gu, (match, separator, letter) => `${ separator }${ letter.toLocaleUpperCase() }`);
}
