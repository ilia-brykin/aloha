import {
  isNil, isString,
} from "lodash-es";

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
