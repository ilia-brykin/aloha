import {
  reduce,
} from "lodash-es";

/**
 * Generates a formatted and readable string representation of an object's properties and their values.
 *
 * @param {object} value - The object whose properties will be included in the result.
 * @returns {string} - The formatted string representation of the object's properties and their values.
 */
export default function(value) {
  if (!value) {
    return "";
  }
  return reduce(value, (sum, v, key) => `${ sum }${ sum ? ", " : "" }${ key }: ${ v }`, "");
}
