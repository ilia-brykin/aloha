import DOMPurify from "dompurify";

import {
  every,
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
  if (!isArray(array)) {
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
  if (!isArray(array)) {
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
