/**
 * Determines if the current environment is a browser.
 *
 * This function checks the existence of global `window` and `document` objects,
 * which are specific to browser environments, to confirm if the code is running
 * in a browser context.
 *
 * @return {boolean} Returns `true` if both `window` and `document` objects are defined, indicating a browser environment; otherwise, returns `false`.
 */
export function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
