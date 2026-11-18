import {
  isNil,
  toString,
  toUpper,
} from "lodash-es";

const FIRST_CHAR_REGEX = /[\p{L}\p{N}]/u;

/**
 * Returns the initials of a name, for example for an avatar.
 * With more words than the limit, the initials of the first words and of the last word are used ("Anna Maria Schmidt" -> "AS").
 *
 * @param {*} value - The name
 * @param {Object} [options] - Optional parameters
 * @param {number} [options.limit=2] - The maximum number of initials
 * @param {boolean} [options.isUppercase=true] - Whether the initials are converted to uppercase
 *
 * @returns {string} - The initials.
 */
export default function(value, { limit = 2, isUppercase = true } = {}) {
  if (isNil(value) || limit < 1) {
    return "";
  }

  const INITIALS = toString(value)
    .split(/[\s\-_.,;]+/)
    .map(word => word.match(FIRST_CHAR_REGEX)?.[0])
    .filter(Boolean);

  let result = INITIALS;
  if (limit === 1) {
    result = INITIALS.slice(0, 1);
  } else if (INITIALS.length > limit) {
    result = [
      ...INITIALS.slice(0, limit - 1),
      INITIALS[INITIALS.length - 1],
    ];
  }
  const INITIALS_STRING = result.join("");

  return isUppercase ? toUpper(INITIALS_STRING) : INITIALS_STRING;
}
