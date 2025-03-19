import {
  isNil,
} from "lodash-es";

/**
 * Converts a JavaScript value to a formatted JSON string.
 *
 * @param {*} value - The value to be converted to JSON.
 * @param {Object} [options] - Optional parameters.
 * @param {Function} [options.replacer] - A function that alters the behavior of the stringification process.
 * @param {number} [options.space=2] - The number of spaces used for indentation in the resulting string.
 * @param {boolean} [options.isHtml=false] - Determines if the output should be formatted as HTML.
 *                                          When set to false, the output is returned as a plain text string.
 * @param {string} [options.jsonClass="a_code_content"] - The CSS class to be applied when `isHtml` is true.
 * @param {string} [options.tag="pre"] - The HTML tag to wrap the formatted JSON string when `isHtml` is true.
 *
 * @returns {string} The JSON string representation of the value.
 *                   Returns an empty string if the value is `undefined` or `null`,
 *                   or if an error occurred during the stringification process.
 */
export default function(value, { replacer, space = 2, isHtml = false, jsonClass = "a_code_content", tag = "pre" } = {}) {
  if (isNil(value)) {
    return "";
  }

  try {
    const RESULT_STRING = JSON.stringify(value, replacer, space);
    if (isHtml) {
      const CLASS = jsonClass ?
        ` class="${ jsonClass }` :
        "";
      return `<${ tag }${ CLASS }>${ RESULT_STRING }</${ tag }>`;
    }

    return RESULT_STRING;
  } catch (e) {
    return "";
  }
}
