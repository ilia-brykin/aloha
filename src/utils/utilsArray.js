/**
 * Returns the first element of an array, or the provided default value if empty or not provided.
 *
 * @param {Array} [array] - The array from which to retrieve the first element.
 * @param {*} [defaultValue=undefined] - Value returned when the array is empty or not provided.
 * @return {*} The first element of the array, or the default value.
 *
 * @example
 * aFirst([1, 2, 3]); // 1
 * aFirst([], 0); // 0
 */
export function aFirst(array, defaultValue = undefined) {
  return array && array.length ? array[0] : defaultValue;
}

/**
 * Retrieves the last element of an array, or the provided default value if empty or not provided.
 *
 * @param {Array} [array] The array from which to retrieve the last element.
 * @param {*} [defaultValue=undefined] - Value returned when the array is empty or not provided.
 * @return {*} The last element of the array, or the default value.
 *
 * @example
 * aLast([1, 2, 3]); // 3
 * aLast([], null); // null
 */
export function aLast(array, defaultValue = undefined) {
  return array && array.length ? array[array.length - 1] : defaultValue;
}
