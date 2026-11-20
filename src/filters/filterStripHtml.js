import {
  isNil,
  toString,
} from "lodash-es";

/**
 * Removes HTML tags from a string and returns its text, e.g. for previews or the title attribute.
 * The contents of <script> and <style> are removed too.
 *
 * @param {*} value - The string with HTML
 *
 * @returns {string} - The text without HTML tags.
 */
export default function(value) {
  if (isNil(value)) {
    return "";
  }
  // DOMParser does not run scripts or load images
  const DOC = new DOMParser().parseFromString(toString(value), "text/html");
  DOC.querySelectorAll("script, style").forEach(element => element.remove());

  return DOC.body.textContent || "";
}
