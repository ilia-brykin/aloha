import {
  isNil,
  toString,
} from "lodash-es";

const HTML_ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
};

/**
 * Shows a multi-line text (e.g. from a textarea) as HTML: escapes the HTML special characters
 * and replaces the line breaks with <br>. The result is safe for v-html, the html prop and table columns.
 *
 * @param {*} value - The text with line breaks.
 *
 * @returns {string} - Escaped HTML with <br> instead of the line breaks.
 */
export default function filterNewlines(value) {
  if (isNil(value)) {
    return "";
  }

  return toString(value)
    .replace(/[&<>"']/g, char => HTML_ENTITIES[char])
    .replace(/\r\n|\r|\n/g, "<br>");
}
