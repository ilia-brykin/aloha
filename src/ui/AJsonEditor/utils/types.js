import {
  isArray,
  isPlainObject,
} from "lodash-es";

export const JSON_TYPES = ["string", "number", "boolean", "null", "object", "array"];

export function getJsonType(value) {
  if (value === null) {
    return "null";
  }
  if (isArray(value)) {
    return "array";
  }
  if (isPlainObject(value)) {
    return "object";
  }
  return typeof value;
}

export function getDefaultValue(type) {
  const DEFAULTS = {
    array: () => [],
    boolean: () => false,
    null: () => null,
    number: () => 0,
    object: () => ({}),
    string: () => "",
  };
  return (DEFAULTS[type] || DEFAULTS.string)();
}

/**
 * Converts a value to another type and keeps as much as possible:
 * "42" → 42, 42 → "42", "true" → true, [1, 2] → { 0: 1, 1: 2 }, { a: 1 } → [1], a primitive → [value].
 */
export function convertType(value, toType) {
  const FROM = getJsonType(value);
  if (FROM === toType) {
    return value;
  }
  switch (toType) {
    case "string":
      return isArray(value) || isPlainObject(value) ? JSON.stringify(value) : `${ value ?? "" }`;
    case "number": {
      const NUMBER = Number(value);
      return Number.isFinite(NUMBER) && value !== "" && value !== null ? NUMBER : 0;
    }
    case "boolean":
      if (FROM === "string") {
        return value.trim().toLowerCase() === "true";
      }
      return !!value && !(isArray(value) && !value.length);
    case "null":
      return null;
    case "array":
      if (FROM === "object") {
        return Object.values(value);
      }
      return FROM === "null" ? [] : [value];
    case "object":
      if (FROM === "array") {
        return Object.fromEntries(value.map((item, index) => [`${ index }`, item]));
      }
      return FROM === "null" ? {} : { value };
    default:
      return value;
  }
}

// "42" in the field of a number is the number 42
export function parseInputValue(text, type) {
  if (type === "number") {
    const NUMBER = Number(`${ text }`.trim().replace(",", "."));
    return `${ text }`.trim() !== "" && Number.isFinite(NUMBER) ? { value: NUMBER } : { error: true };
  }
  if (type === "boolean") {
    return { value: text === true || text === "true" };
  }
  if (type === "null") {
    return { value: null };
  }
  return { value: `${ text }` };
}
