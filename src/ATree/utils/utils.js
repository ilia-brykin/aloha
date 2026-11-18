import {
  get,
  isArray,
  isFunction,
  isNil,
  isPlainObject,
  toLower,
} from "lodash-es";

/**
 * Reads a value of an item by a key (also a path like "meta.title") or by a function ({ item }) => value.
 */
export function getItemValue({ item, key }) {
  if (isFunction(key)) {
    return key({ item });
  }
  if (isNil(key) || key === "") {
    return undefined;
  }
  return get(item, key);
}

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

/**
 * Turns any JSON value into tree items. Objects and arrays become nodes, other values leaves.
 * The id of an item is its JSON path, e.g. $.user.roles[0].
 */
export function getItemsFromJson(value, path = "$") {
  const TYPE = getJsonType(value);
  if (TYPE !== "object" && TYPE !== "array") {
    return [];
  }
  const ENTRIES = TYPE === "array" ?
    value.map((child, index) => [index, child]) :
    Object.keys(value).map(key => [key, value[key]]);
  return ENTRIES.map(([key, child]) => {
    const CHILD_TYPE = getJsonType(child);
    const IS_NESTED = CHILD_TYPE === "object" || CHILD_TYPE === "array";
    const CHILD_PATH = TYPE === "array" ?
      `${ path }[${ key }]` :
      (/^[A-Za-z_$][\w$]*$/.test(key) ? `${ path }.${ key }` : `${ path }[${ JSON.stringify(key) }]`);
    return {
      id: CHILD_PATH,
      label: String(key),
      jsonKey: key,
      jsonPath: CHILD_PATH,
      jsonType: CHILD_TYPE,
      jsonValue: child,
      jsonSize: IS_NESTED ? Object.keys(child).length : undefined,
      children: IS_NESTED ? getItemsFromJson(child, CHILD_PATH) : undefined,
    };
  });
}

export function getJsonValueText({ jsonType, jsonValue }) {
  if (jsonType === "string") {
    return JSON.stringify(jsonValue);
  }
  if (jsonType === "object") {
    return `{${ Object.keys(jsonValue).length }}`;
  }
  if (jsonType === "array") {
    return `[${ jsonValue.length }]`;
  }
  return String(jsonValue);
}

/**
 * Splits a text into parts, the parts that match the search have isMatch: true.
 */
export function getHighlightParts({ text = "", searchModel = "" }) {
  const TEXT = String(text);
  const SEARCH = toLower(searchModel);
  if (!SEARCH) {
    return [{ text: TEXT, isMatch: false }];
  }
  const PARTS = [];
  const TEXT_LOWER = toLower(TEXT);
  let start = 0;
  let index = TEXT_LOWER.indexOf(SEARCH);
  while (index !== -1) {
    if (index > start) {
      PARTS.push({ text: TEXT.slice(start, index), isMatch: false });
    }
    PARTS.push({ text: TEXT.slice(index, index + SEARCH.length), isMatch: true });
    start = index + SEARCH.length;
    index = TEXT_LOWER.indexOf(SEARCH, start);
  }
  if (start < TEXT.length) {
    PARTS.push({ text: TEXT.slice(start), isMatch: false });
  }
  return PARTS;
}
