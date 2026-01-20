export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isString(value) {
  return typeof value === "string";
}

export function isNumber(value) {
  return typeof value === "number";
}

export function isNaN(value) {
  return Number.isNaN(value);
}

export function isUndefined(value) {
  return value === undefined;
}

export function isNull(value) {
  return value === null;
}

export function isNil(value) {
  return isUndefined(value) || isNull(value);
}

export function isBoolean(value) {
  return typeof value === "boolean";
}

export function isInteger(value) {
  return Number.isInteger(value);
}

export function isFinite(value) {
  return Number.isFinite(value);
}

export function isBuffer(value) {
  return typeof Buffer !== "undefined" && Buffer.isBuffer(value);
}

export function isDate(value) {
  return value instanceof Date;
}

export function isError(value) {
  return value instanceof Error;
}

export function isMap(value) {
  return value instanceof Map;
}

export function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}

export function isSet(value) {
  return value instanceof Set;
}

export function isSymbol(value) {
  return typeof value === "symbol" || value instanceof Symbol;
}

export function isWeakMap(value) {
  return value instanceof WeakMap;
}

export function isWeakSet(value) {
  return value instanceof WeakSet;
}

export function isRegExp(value) {
  return value instanceof RegExp;
}

export function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

export function isObjectLike(value) {
  return value !== null && typeof value === "object";
}

export function isElement(value) {
  return value !== null
    && typeof value === "object"
    && value.nodeType === 1
    && typeof value.nodeName === "string";
}

export function isArrayBuffer(value) {
  return value instanceof ArrayBuffer;
}
