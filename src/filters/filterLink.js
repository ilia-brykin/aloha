import {
  isNil,
  isString,
} from "lodash-es";

/**
 * Returns an HTML link element based on the given URL and options.
 *
 * @param {string} url - The URL to be used as the href attribute of the link
 * @param {Object} [options] - Optional parameters
 * @param {string} [options.linkText=""] - The text to be displayed as the link's text
 * @param {string} [options.protocol="https://"] - The protocol to be prefixed to the URL
 * @param {string} [options.target=""] - The value to be used as the target attribute of the link
 * @param {string} [options.linkClass=""] - The CSS class to be added to the link
 *
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
