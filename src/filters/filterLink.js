import {
  isNil,
  isString,
} from "lodash-es";

/**
 * Returns an HTML link element based on the given URL and options.
 *
 * @param {string} url - The URL to be used as the href attribute of the link.
 * @param {Object} options - An optional object that contains additional options for the link.
 * @param {string} options.linkText - The text to be displayed as the link's text (default: "")
 * @param {string} options.protocol - The protocol to be prefixed to the URL (default: "https://")
 * @param {string} options.target - The value to be used as the target attribute of the link (default: "")
 * @param {string} options.linkClass - The CSS class to be added to the link (default: "")
 * @returns {string} The HTML anchor link element.
 */
export default function(url, { linkText = "", protocol = "https://", target = "", linkClass = "" } = {}) {
  if (isNil(url) ||
    !isString(url)) {
    return "";
  }
  let protocolLocal = protocol;
  if (url.startsWith("https://") || url.startsWith("http://")) {
    protocolLocal = "";
  }
  const targetAttributes = target ? ` target="${ target }"` : "";
  const classAttributes = linkClass ? ` class="${ linkClass }"` : "";
  return `<a href="${ protocolLocal }${ url }"${ targetAttributes }${ classAttributes }>${ linkText || url }</a>`;
}
