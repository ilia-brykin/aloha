import {
  isNil,
  isString,
} from "lodash-es";

/**
 * Generates an HTML anchor tag with a mailto link.
 *
 * @param {string} value - The email address to be used as the link
 * @param {Object} [options] - Optional parameters
 * @param {string} [options.linkClass] - The CSS class to be applied to the anchor tag
 *
 * @returns {string} The generated HTML anchor tag.
 */
export default function(value, { linkClass } = {}) {
  if (isNil(value) ||
    value === "" ||
    !isString(value) ||
    !/^\S+@\S+\.\S+$/.test(value)) {
    return "";
  }
  let classAttribut = "";
  if (linkClass) {
    classAttribut = ` class="${ linkClass }"`;
  }
  return `<a href="mailto:${ value }"${ classAttribut }>${ value }</a>`;
}
