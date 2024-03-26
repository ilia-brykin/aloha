import DOMPurify from "dompurify";

import {
  every,
  forEach,
  get,
  isArray,
  isNumber,
  isString,
  toString,
} from "lodash-es";

export const dompurify = DOMPurify;
export const sanitize = DOMPurify.sanitize;
/**
 * Sanitizes a local value using DOMPurify with additional attribute "target" added.
 *
 * @param {string} value - The local value to be sanitized.
 * @return {string} - The sanitized value.
 */
export function sanitizeLocal(value) {
  return DOMPurify.sanitize(toCorrectFormat(value), { ADD_ATTR: ["target"] });
}

function toCorrectFormat(value) {
  if (isNumber(value)) {
    return toString(value);
  }
  return value;
}

/**
 * Checks if the given input is an array of strings.
 *
 * @param {Array} array - The array to be checked
 *
 * @return {boolean} - True if the input is an array of strings, false otherwise.
 */
export function isArrayOfStrings(array) {
  if (!isArray(array) || !array.length) {
    return false;
  }

  return every(array, isString);
}

/**
 * Checks if the given input is an array of arrays.
 *
 * @param {Array} array - The array to be checked
 *
 * @return {boolean} - True if the input is an array of arrays, false otherwise.
 */
export function isArrayOfArrays(array) {
  if (!isArray(array) || !array.length) {
    return false;
  }

  return every(array, isArray);
}

export function createListFromObject(obj) { // TODO: filterList, soll gelöscht werden
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return "";
  }

  const items = keys.map(key => `<li>${ obj[key] }</li>`).join("");
  return `<ul class="a_list_without_styles">${ items }</ul>`;
}

/**
 * Calculates the total count of elements within a nested structure, including all children and sub-children, based on the specified child key.
 *
 * @param {Object} [options] - Optional parameters
 * @param {Array} options.array - The initial array to traverse for counting
 * @param {string} options.keyChildren - The key used to identify child elements within each object in the array
 *
 * @returns {number} The total count of elements, including nested children
 */
export function getTotalNestedCount({ array = [], keyChildren = "" }) {
  return _getTotalNestedCount({ array, keyChildren, count: 0 });
}

function _getTotalNestedCount({ array = [], keyChildren = "", count = 0 }) {
  if (isArray(array)) {
    forEach(array, item => {
      count++;
      const CHILDREN = get(item, keyChildren);
      count = _getTotalNestedCount({ array: CHILDREN, keyChildren, count });
    });
  }

  return count;
}
