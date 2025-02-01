import {
  escapeRegExp,
  isNil,
} from "lodash-es";

/**
 * Replace all occurrences of searchModel in value and wrap them with a specified HTML tag.
 *
 * @param {string} value - The input string to be modified.
 * @param {Object} [options] - Optional parameters.
 * @param {string} [options.searchModel=""] - The string to search.
 * @param {string} [options.searchClass="a_search_highlight"] - The CSS class to assign to the wrapping tag.
 * @param {string} [options.tag="mark"] - The HTML tag to use instead of mark.
 * @param {Array<string>} [options.attributes=[]] - List of additional attributes in the format ['key="value"', 'key2="value2"'].
 * @param {boolean} [options.caseSensitive=false] - Whether the search should be case-sensitive.
 *
 * @returns {string} - The modified string with replaced occurrences wrapped in the specified tag.
 */
export default function(value, {
  searchModel = "",
  searchClass = "a_search_highlight",
  tag = "mark",
  attributes = [],
  caseSensitive = false,
} = {}) {
  if (!value) {
    return "";
  }
  if (searchModel === "" || isNil(searchModel)) {
    return value;
  }

  const FLAGS = caseSensitive ? "g" : "gi";
  const RE = new RegExp(escapeRegExp(searchModel), FLAGS);

  const ATTRIBUTES_STRING = attributes.length ? ` ${ attributes.join(" ") }` : "";

  return value.replace(RE, val => `<${ tag } class="${ searchClass }"${ ATTRIBUTES_STRING }>${ val }</${ tag }>`);
}
