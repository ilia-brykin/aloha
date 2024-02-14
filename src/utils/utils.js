import DOMPurify from "dompurify";

import {
  every,
  isArray,
  isNumber,
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
 * Retrieves a property from an object using a given path.
 * If the property is not found, it returns a default value.
 *
 * @param {Object} object - The object to retrieve the property from.
 * @param {string|string[]} path - The path to the property, either as a dot-separated string or an array of keys.
 * @param {*} defaultValue - The default value to return if the property is not found. Default is undefined.
 * @return {*} - The value of the property if found, or the default value if not found.
 */
export function getPropByPath(object, path, defaultValue) {
  const _path = Array.isArray(path)
    ? path
    : path.split(".");
  if (object && _path.length) {
    return getPropByPath(object[_path.shift()], _path, defaultValue);
  }
  return object === undefined ? defaultValue : object;
}

/**
 * Replaces the text "template" with the text "a-slot" in the given input text.
 *
 * @param {string} text - The text in which to replace the template.
 * @return {string} The input text with the template replaced by a slot, if applicable.
 */
export function replaceTextTemplateToASlot(text) {
  if (text === "template") {
    return "a-slot";
  }
  return text;
}

/**
 * Concatenates two strings with a space between them.
 *
 * @param {Object} options - The options for concatenation.
 * @param {string} options.class1 - The first class to concatenate.
 * @param {string} options.class2 - The second class to concatenate.
 * @param {string} [options.defaultValue=undefined] - The default value to return if both class1 and class2 are falsy.
 * @returns {string} The concatenated string or the defaultValue if both class1 and class2 are falsy.
 */
export function concatenateTwoStringsWithSpace({ class1, class2, defaultValue = undefined }) {
  if (class1) {
    if (class2) {
      return `${ class1 } ${ class2 }`;
    }
    return class1;
  }
  if (class2) {
    return class2;
  }
  return defaultValue;
}

/**
 * Checks if the given input is an array of strings.
 * @param {Array} array - The input array to be checked.
 * @return {boolean} - True if the input is an array of strings, false otherwise.
 */
export function isArrayOfStrings(array) {
  if (!isArray(array)) {
    return false;
  }

  return every(array, String);
}

/**
 * Check if given array is an array of arrays.
 *
 * @param {Array} array - The array to be checked.
 * @return {boolean} - Returns `true` if the array is an array of arrays, otherwise `false`.
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
