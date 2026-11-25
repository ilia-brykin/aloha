import {
  getJsonType,
} from "./types";
import {
  matchesPattern,
  parsePointer,
  toPointer,
  walk,
} from "./jsonPointer";
import {
  isArray,
  isEqual,
  isPlainObject,
  uniqWith,
} from "lodash-es";

/**
 * An error: { pointer, level: "error" | "warning" | "info", message: key of a translation, extra }.
 */
function error(pointer, message, extra, level = "error") {
  return { pointer, level, message, extra };
}

function isType(value, type) {
  if (type === "integer") {
    return Number.isInteger(value);
  }
  return getJsonType(value) === type;
}

// the checks of one rule (also used for the JSON Schema subset)
function checkRule(value, rule, pointer) {
  const ERRORS = [];
  const LEVEL = rule.level || "error";
  const add = (message, extra) => ERRORS.push(error(pointer, rule.message || message, extra, LEVEL));
  if (value === undefined) {
    return ERRORS;
  }
  const TYPES = rule.type ? [].concat(rule.type) : [];
  if (TYPES.length && !TYPES.some(type => isType(value, type))) {
    add("_A_JSON_EDITOR_ERROR_TYPE_", { type: TYPES.join(" / ") });
    return ERRORS;
  }
  if (rule.integer && !Number.isInteger(value)) {
    add("_A_JSON_EDITOR_ERROR_INTEGER_");
  }
  if (rule.enum && !rule.enum.some(item => isEqual(item, value))) {
    add("_A_JSON_EDITOR_ERROR_ENUM_", { values: rule.enum.map(item => JSON.stringify(item)).join(", ") });
  }
  if (typeof value === "number") {
    const MIN = rule.min ?? rule.minimum;
    const MAX = rule.max ?? rule.maximum;
    if (MIN !== undefined && value < MIN) {
      add("_A_JSON_EDITOR_ERROR_MIN_", { min: MIN });
    }
    if (MAX !== undefined && value > MAX) {
      add("_A_JSON_EDITOR_ERROR_MAX_", { max: MAX });
    }
  }
  if (typeof value === "string") {
    if (rule.minLength !== undefined && value.length < rule.minLength) {
      add("_A_JSON_EDITOR_ERROR_MIN_LENGTH_", { min: rule.minLength });
    }
    if (rule.maxLength !== undefined && value.length > rule.maxLength) {
      add("_A_JSON_EDITOR_ERROR_MAX_LENGTH_", { max: rule.maxLength });
    }
    if (rule.pattern && !new RegExp(rule.pattern).test(value)) {
      add("_A_JSON_EDITOR_ERROR_PATTERN_");
    }
  }
  if (isArray(value)) {
    if (rule.minItems !== undefined && value.length < rule.minItems) {
      add("_A_JSON_EDITOR_ERROR_MIN_ITEMS_", { min: rule.minItems });
    }
    if (rule.maxItems !== undefined && value.length > rule.maxItems) {
      add("_A_JSON_EDITOR_ERROR_MAX_ITEMS_", { max: rule.maxItems });
    }
    if (rule.uniqueItems && uniqWith(value, isEqual).length !== value.length) {
      add("_A_JSON_EDITOR_ERROR_UNIQUE_");
    }
  }
  if (isPlainObject(value)) {
    const REQUIRED = isArray(rule.required) ? rule.required : [];
    REQUIRED.filter(key => !(key in value)).forEach(key => {
      ERRORS.push(error(pointer, "_A_JSON_EDITOR_ERROR_REQUIRED_KEY_", { key }, LEVEL));
    });
    if (rule.additionalKeys === false && isArray(rule.keys)) {
      Object.keys(value).filter(key => !rule.keys.includes(key)).forEach(key => {
        ERRORS.push(error(toPointer([...parsePointer(pointer), key]), "_A_JSON_EDITOR_ERROR_KEY_NOT_ALLOWED_", { key }, LEVEL));
      });
    }
  }
  return ERRORS;
}

/**
 * rules: { "/name": { required: true, type: "string", minLength: 2 }, "/users/*\/role": { enum: [...] } }.
 * required: true means the path must exist.
 */
export function validateRules(document, rules = {}, { skip = () => false } = {}) {
  const ERRORS = [];
  Object.entries(rules).forEach(([pattern, rule]) => {
    const PATTERN_TOKENS = parsePointer(pattern);
    let found = false;
    walk(document, (value, tokens) => {
      if (!matchesPattern(tokens, PATTERN_TOKENS)) {
        return;
      }
      found = true;
      // e.g. a whole variable: its value comes later
      if (!skip(value)) {
        ERRORS.push(...checkRule(value, rule, toPointer(tokens)));
      }
    });
    // a required path without "*" that does not exist
    if (rule.required === true && !found && !PATTERN_TOKENS.includes("*")) {
      const PARENT = toPointer(PATTERN_TOKENS.slice(0, -1));
      ERRORS.push(error(PARENT, rule.message || "_A_JSON_EDITOR_ERROR_REQUIRED_KEY_", { key: PATTERN_TOKENS[PATTERN_TOKENS.length - 1] }, rule.level || "error"));
    }
  });
  return ERRORS;
}

/**
 * A subset of JSON Schema: type, enum, minimum, maximum, minLength, maxLength, pattern,
 * properties, required, additionalProperties: false, items, minItems, maxItems, uniqueItems.
 */
export function validateSchema(value, schema = {}, pointer = "", { skip = () => false } = {}) {
  if (!schema || typeof schema !== "object" || skip(value)) {
    return [];
  }
  const ERRORS = checkRule(value, {
    ...schema,
    required: undefined,
    keys: schema.properties ? Object.keys(schema.properties) : undefined,
    additionalKeys: schema.additionalProperties === false ? false : undefined,
  }, pointer);
  if (isPlainObject(value)) {
    (schema.required || []).filter(key => !(key in value)).forEach(key => {
      ERRORS.push(error(pointer, "_A_JSON_EDITOR_ERROR_REQUIRED_KEY_", { key }));
    });
    Object.entries(schema.properties || {}).forEach(([key, childSchema]) => {
      if (key in value) {
        ERRORS.push(...validateSchema(value[key], childSchema, `${ pointer }/${ key.replace(/~/g, "~0").replace(/\//g, "~1") }`, { skip }));
      }
    });
  }
  if (isArray(value) && schema.items) {
    value.forEach((item, index) => ERRORS.push(...validateSchema(item, schema.items, `${ pointer }/${ index }`, { skip })));
  }
  return ERRORS;
}

// the schema of a path: the keys and the types for "add" (properties of the object)
export function getSchemaAt(schema, tokens) {
  let current = schema;
  for (const TOKEN of tokens) {
    if (!current) {
      return undefined;
    }
    current = current.properties?.[TOKEN] || current.items;
  }
  return current;
}

// the type of a rule or the schema at a path, e.g. for a variable: number in a field of a boolean
export function getExpectedTypes({ rules = {}, schema, tokens }) {
  const TYPES = [];
  Object.entries(rules).forEach(([pattern, rule]) => {
    if (rule.type && matchesPattern(tokens, parsePointer(pattern))) {
      TYPES.push(...[].concat(rule.type));
    }
  });
  const SCHEMA_TYPE = getSchemaAt(schema, tokens)?.type;
  if (SCHEMA_TYPE) {
    TYPES.push(...[].concat(SCHEMA_TYPE));
  }
  return TYPES.map(type => (type === "integer" ? "number" : type));
}
