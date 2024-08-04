/**
 * Escapes HTML special characters in a string to prevent XSS attacks.
 *
 * This function takes a string input and converts special characters
 * (such as <, >, &, etc.) to their corresponding HTML entities
 * (e.g., &lt;, &gt;, &amp;, etc.), making the string safe to render as HTML.
 *
 * @param {string} value - The string containing potentially unsafe HTML.
 * @returns {string} - The escaped string safe for rendering as HTML.
 */
export default function filterEscapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;

  return div.innerHTML;
}
