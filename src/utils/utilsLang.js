/**
 * Checks if value is likely an arguments object.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isArguments((function () { return arguments; })());
 * // => true
 */
export function isArguments(value) {
  if (!isObjectLike(value)) {
    return false;
  }

  const tag = Object.prototype.toString.call(value);
  if (tag === "[object Arguments]") {
    return true;
  }

  return Object.prototype.hasOwnProperty.call(value, "callee")
    && !Object.prototype.propertyIsEnumerable.call(value, "callee");
}

/**
 * Checks if value is an array.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isArray([1, 2, 3]);
 * // => true
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * Checks if value is an ArrayBuffer.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isArrayBuffer(new ArrayBuffer(8));
 * // => true
 */
export function isArrayBuffer(value) {
  return value instanceof ArrayBuffer;
}

/**
 * Checks if value is a boolean.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isBoolean(false);
 * // => true
 */
export function isBoolean(value) {
  return typeof value === "boolean";
}

/**
 * Checks if value is a Buffer (Node.js).
 * @param {*} value
 * @returns {boolean}
 * @example
 * isBuffer(Buffer.from("x"));
 * // => true
 */
export function isBuffer(value) {
  return typeof Buffer !== "undefined" && Buffer.isBuffer(value);
}

/**
 * Checks if value is a Date.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isDate(new Date());
 * // => true
 */
export function isDate(value) {
  return value instanceof Date;
}

/**
 * Checks if value is a DOM Element.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isElement(document.createElement("div"));
 * // => true
 */
export function isElement(value) {
  return value !== null
    && typeof value === "object"
    && value.nodeType === 1
    && typeof value.nodeName === "string";
}

/**
 * Checks if value is an Error instance.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isError(new Error("oops"));
 * // => true
 */
export function isError(value) {
  return value instanceof Error;
}

/**
 * Checks if value is a finite number.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isFinite(10);
 * // => true
 */
export function isFinite(value) {
  return Number.isFinite(value);
}

/**
 * Checks if value is a function.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isFunction(function () {});
 * // => true
 */
export function isFunction(value) {
  return typeof value === "function";
}

/**
 * Checks if value is an integer.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isInteger(42);
 * // => true
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * Checks if value is a Map.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isMap(new Map());
 * // => true
 */
export function isMap(value) {
  return value instanceof Map;
}

/**
 * Checks if value is NaN.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNaN(NaN);
 * // => true
 */
export function isNaN(value) {
  return Number.isNaN(value);
}

/**
 * Checks if value is null or undefined.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNil(null);
 * // => true
 * isNil(undefined);
 * // => true
 */
export function isNil(value) {
  return isUndefined(value) || isNull(value);
}

/**
 * Checks if value is null.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNull(null);
 * // => true
 */
export function isNull(value) {
  return value === null;
}

/**
 * Checks if value is a number.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNumber(3.14);
 * // => true
 */
export function isNumber(value) {
  return typeof value === "number";
}

/**
 * Checks if value is object-like (object or function) and not null.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isObject(() => {});
 * // => true
 */
export function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}

/**
 * Checks if value is object-like (object only) and not null.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isObjectLike({});
 * // => true
 */
export function isObjectLike(value) {
  return value !== null && typeof value === "object";
}

/**
 * Checks if value is a plain object.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isPlainObject({ a: 1 });
 * // => true
 */
export function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

/**
 * Checks if value is a promise-like object.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isPromise(Promise.resolve(1));
 * // => true
 */
export function isPromise(value) {
  return isObject(value)
    && typeof value.then === "function"
    && typeof value.catch === "function";
}

/**
 * Checks if value is a RegExp.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isRegExp(/abc/);
 * // => true
 */
export function isRegExp(value) {
  return value instanceof RegExp;
}

/**
 * Checks if value is a Set.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isSet(new Set());
 * // => true
 */
export function isSet(value) {
  return value instanceof Set;
}

/**
 * Checks if value is a string.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isString("test");
 * // => true
 */
export function isString(value) {
  return typeof value === "string";
}

/**
 * Checks if value is a symbol.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isSymbol(Symbol("x"));
 * // => true
 */
export function isSymbol(value) {
  return typeof value === "symbol" || value instanceof Symbol;
}

/**
 * Checks if value is undefined.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isUndefined(undefined);
 * // => true
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Checks if value is a WeakMap.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isWeakMap(new WeakMap());
 * // => true
 */
export function isWeakMap(value) {
  return value instanceof WeakMap;
}

/**
 * Checks if value is a WeakSet.
 * @param {*} value
 * @returns {boolean}
 * @example
 * isWeakSet(new WeakSet());
 * // => true
 */
export function isWeakSet(value) {
  return value instanceof WeakSet;
}
