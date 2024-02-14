import {
  isNil,
} from "lodash-es";

/**
 * Replace all occurrences of searchModel in value and wrap them with a HTML span tag
 * with the provided searchClass.
 *
 * @param {string} value - The input string to be modified
 * @param {object} options - The options object
 * @param {string} options.searchModel - The string to search for (optional, default: "")
 * @param {string} options.searchClass - The CSS class to assign to the wrapping span tag (optional, default: "a_search_highlight")
 * @returns {string} - The modified string with replaced occurrences wrapped in span tags
 */
export default function(value, { searchModel = "", searchClass = "a_search_highlight" }) {
  if (!value) {
    return "";
  }
  if (searchModel === "" || isNil(searchModel)) {
    return value;
  }
  const RE = new RegExp(searchModel, "gi");
  return value.replace(RE, val => `<span class="${ searchClass }">${ val }</span>`);
}
