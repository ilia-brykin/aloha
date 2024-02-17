import {
  isNil,
} from "lodash-es";

/**
 * Returns the provided value if it is not null or an empty string,
 * otherwise returns the specified emptyValue.
 *
 * @param {*} value - The value to be checked
 * @param {Object} [options] - Optional parameters
 * @param {*} [options.emptyValue="-"] - The value to be returned if `value` is null, undefined or an empty string
 *
 * @returns {*} The original value if it is not null, undefined or an empty string, otherwise the emptyValue.
 */
export default function(value, { emptyValue = "-" } = {}) {
  if (isNil(value) || value === "") {
    return emptyValue;
  }
  return value;
}
