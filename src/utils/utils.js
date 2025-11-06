import DOMPurify from "dompurify";
import {
  isBrowser,
} from "./isBrowser";
import {
  every,
  forEach,
  get,
  isArray,
  isNull,
  isNumber,
  isPlainObject,
  isString,
  iteratee,
  orderBy,
  sortBy,
  toString,
} from "lodash-es";

export const dompurify = DOMPurify;
export const sanitize = DOMPurify.sanitize;

/**
 * Sanitizes a local value using DOMPurify with additional attribute "target" added.
 *
 * @param {string} value - The local value to be sanitized.
 * @return {string} - The sanitized value.
 */
export function sanitizeLocal(value) {
  if (!isBrowser()) {
    return value;
  }

  return DOMPurify.sanitize(toCorrectFormat(value), { ADD_ATTR: ["target"] });
}

function toCorrectFormat(value) {
  if (isNumber(value)) {
    return toString(value);
  }
  return value;
}

/**
 * Checks if the given input is an array of strings.
 *
 * @param {Array} array - The array to be checked
 *
 * @return {boolean} - True if the input is an array of strings, false otherwise.
 */
export function isArrayOfStrings(array) {
  if (!isArray(array) || !array.length) {
    return false;
  }

  return every(array, isString);
}

/**
 * Checks if the given input is an array of arrays.
 *
 * @param {Array} array - The array to be checked
 *
 * @return {boolean} - True if the input is an array of arrays, false otherwise.
 */
export function isArrayOfArrays(array) {
  if (!isArray(array) || !array.length) {
    return false;
  }

  return every(array, isArray);
}

export function createListFromObject(obj) { // TODO: filterList, soll gelöscht werden
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return "";
  }

  const items = keys.map(key => `<li>${ obj[key] }</li>`).join("");
  return `<ul class="a_list_without_styles">${ items }</ul>`;
}

/**
 * Calculates the total count of elements within a nested structure, including all children and sub-children, based on the specified child key.
 *
 * @param {Object} [options] - Optional parameters
 * @param {Array} options.array - The initial array to traverse for counting
 * @param {string} options.keyChildren - The key used to identify child elements within each object in the array
 *
 * @returns {number} The total count of elements, including nested children
 */
export function getTotalNestedCount({ array, keyChildren }) {
  return _getTotalNestedCount({ array, keyChildren, count: 0 });
}

function _getTotalNestedCount({ array, keyChildren, count = 0 }) {
  if (isArray(array)) {
    forEach(array, item => {
      count++;
      const CHILDREN = get(item, keyChildren);
      count = _getTotalNestedCount({ array: CHILDREN, keyChildren, count });
    });
  }

  return count;
}

/**
 * Extracts visible text content from an HTML string, removing all tags.
 *
 * This function parses the input HTML using DOMParser and returns the plain
 * text content, preserving only what would be visible to the user.
 *
 * @param {string} htmlString - A string containing HTML markup.
 * @returns {string} The extracted plain text content.
 *
 * @example
 * const html = '<div><strong>Hello</strong> <em>world</em>!</div>';
 * const text = extractTextFromHtml(html);
 * console.log(text); // "Hello world!"
 */
export function extractTextFromHtml(htmlString) {
  if (!isBrowser()) {
    return htmlString;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  return doc.body.textContent || "";
}


/**
 * Extended sortBy: adds support for case-insensitive sorting.
 *
 * Examples:
 * aSortBy(users, "name") // sort by name, case-insensitive
 * aSortBy(users, "name", "age") // sort by name (ci), then by age
 * aSortBy(users, ["profile.lastName", u => u.age]) // mixed iteratees
 * aSortBy(users, "name", { caseSensitive: true }) // behaves like lodash sortBy
 *
 * @param {Array|Object} collection
 * @param  {...any} args  — iteratees (strings/functions/arrays) and optionally options
 *                          where options = { caseSensitive: false }
 * @returns {Array}
 */
export function aSortBy(collection, ...args) {
  let options = { caseSensitive: false };
  if (args.length && isPlainObject(args[args.length - 1]) && "caseSensitive" in args[args.length - 1]) {
    options = { ...options, ...args.pop() };
  }

  const specs = normalizeSortByIterateeSpecs(args);

  if (options.caseSensitive) {
    // behaves exactly like lodash sortBy
    return sortBy(collection, ...specs);
  }

  // if no iteratees are provided, behaves like sortBy(collection, _.identity)
  const effectiveSpecs = specs.length > 0 ? specs : [undefined];

  // wrap each iteratee so that string values are converted to lower case
  const iterateeFns = effectiveSpecs.map(spec => createCaseAwareIteratee(spec, options));

  return sortBy(collection, ...iterateeFns);
}

/**
 * Extended orderBy: adds support for case-insensitive sorting.
 *
 * Examples:
 * aOrderBy(users, "name", "desc") // by name (ci) desc
 * aOrderBy(users, ["name", "age"], ["asc", "desc"]) // mixed orders, case-insensitive
 * aOrderBy(users, "name", "asc", { caseSensitive: true }) // behaves like lodash orderBy
 *
 * @param {Array|Object} collection
 * @param args
 * @returns {Array}
 */
export function aOrderBy(collection, ...args) {
  // extract options if present at the end
  let options = { caseSensitive: false };
  if (args.length && isPlainObject(args[args.length - 1]) && "caseSensitive" in args[args.length - 1]) {
    options = { ...options, ...args.pop() };
  }

  const iterateesArg = args[0]; // could be single iteratee or array
  const ordersArg = args[1]; // could be single order or array

  const specs = toIterateeArray(iterateesArg);
  const orders = toOrderArray(ordersArg);

  if (options.caseSensitive) {
    // behave exactly like lodash/orderBy
    return orderBy(collection, specs.length ? specs : [undefined], orders);
  }

  // wrap iteratees to normalize strings for case-insensitive compare
  const effectiveSpecs = specs.length ? specs : [undefined];
  const iterateeFns = effectiveSpecs.map(spec => createCaseAwareIteratee(spec, options));

  return orderBy(collection, iterateeFns, orders);
}

function toIterateeArray(iteratees) {
  if (isNull(iteratees)) {
    return [];
  }
  return isArray(iteratees) ? iteratees : [iteratees];
}

function toOrderArray(orders) {
  if (isNull(orders)) {
    return [];
  }
  return isArray(orders) ? orders : [orders];
}

function normalizeSortByIterateeSpecs(iterateeArgs) {
  if (!iterateeArgs || iterateeArgs.length === 0) {
    return [];
  }
  // if a single array of iteratees is passed, use it as is
  if (iterateeArgs.length === 1 && isArray(iterateeArgs[0])) {
    return iterateeArgs[0];
  }
  // otherwise, treat it as a list of iteratees
  return iterateeArgs;
}

function createCaseAwareIteratee(spec, options) {
  const compiled = iteratee(spec); // converts path/function/etc. into an iteratee function
  return (...iterArgs) => normalizeStringForSort(compiled(...iterArgs), options);
}

function normalizeStringForSort(value, { caseSensitive }) {
  if (caseSensitive) {
    return value;
  }

  /*
   * Convert only string values to lower case, leave everything else unchanged.
   * Using toLocaleLowerCase without specifying locale is the most reliable universal option.
   */
  return typeof value === "string" ? value.toLocaleLowerCase() : value;
}
