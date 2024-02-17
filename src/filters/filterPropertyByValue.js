/**
 * Returns the mapped value for a given input value, based on a provided mapping object.
 * If the input value is found in the mapping object, the corresponding value is returned.
 * If the input value is not found in the mapping object, the defaultValue is returned.
 *
 * @param {Object} value - The input value to be checked against the mapping object
 * @param {Object} [options] - Optional parameters
 * @param {Object} [options.mapping={}] - The mapping object to be used for value lookup
 * @param {*} [options.defaultValue=""] - The default value to be returned if the input value is not found in the mapping object
 *
 * @returns {*} The mapped value or the defaultValue.
 */
export default function(value, { mapping = {}, defaultValue = "" } = {}) {
  if (`${ value }` in mapping) {
    return mapping[value];
  }
  return defaultValue;
}
