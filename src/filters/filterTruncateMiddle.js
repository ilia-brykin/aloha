import {
  isNil,
  toString,
} from "lodash-es";

/**
 * Shortens a string in the middle and keeps its start and its end, for example for IDs, hashes, IBANs or file paths.
 *
 * @param {*} value - The value to shorten
 * @param {Object} [options] - Optional parameters
 * @param {number} [options.start=6] - The number of characters kept at the start
 * @param {number} [options.end=4] - The number of characters kept at the end
 * @param {string} [options.separator="…"] - The text put in place of the removed characters
 *
 * @returns {string} - The shortened string.
 */
export default function(value, { start = 6, end = 4, separator = "…" } = {}) {
  if (isNil(value)) {
    return "";
  }

  // Array.from keeps characters that are made of two code units (e.g. emoji) together
  const CHARS = Array.from(toString(value));
  const START = Math.max(0, start);
  const END = Math.max(0, end);
  if (CHARS.length <= START + END + Array.from(separator).length) {
    return CHARS.join("");
  }

  return `${ CHARS.slice(0, START).join("") }${ separator }${ END > 0 ? CHARS.slice(-END).join("") : "" }`;
}
