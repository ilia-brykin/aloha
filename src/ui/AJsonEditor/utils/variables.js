import {
  escapeRegExp,
  isArray,
  isPlainObject,
  isString,
} from "lodash-es";

export const DEFAULT_VARIABLE_PATTERN = { open: "{{", close: "}}" };

function getRegExp({ open, close } = DEFAULT_VARIABLE_PATTERN) {
  return new RegExp(`${ escapeRegExp(open) }\\s*([\\w.\\-\\[\\]$]+)\\s*${ escapeRegExp(close) }`, "g");
}

/**
 * The variables in a string: [{ name, start, end, raw }].
 */
export function findVariables(text, pattern = DEFAULT_VARIABLE_PATTERN) {
  if (!isString(text)) {
    return [];
  }
  return Array.from(text.matchAll(getRegExp(pattern)), match => ({
    name: match[1],
    start: match.index,
    end: match.index + match[0].length,
    raw: match[0],
  }));
}

// "{{ order.total }}" is a whole variable: the value is the variable, not a text with a variable
export function getWholeVariable(text, pattern = DEFAULT_VARIABLE_PATTERN) {
  const VARIABLES = findVariables(text, pattern);
  return VARIABLES.length === 1 && VARIABLES[0].raw === `${ text }`.trim() ? VARIABLES[0].name : null;
}

// text and variables in order, for the chips: [{ text }, { variable: "user.name", raw }]
export function splitVariables(text, pattern = DEFAULT_VARIABLE_PATTERN) {
  const PARTS = [];
  let index = 0;
  findVariables(text, pattern).forEach(variable => {
    if (variable.start > index) {
      PARTS.push({ text: text.slice(index, variable.start) });
    }
    PARTS.push({ variable: variable.name, raw: variable.raw });
    index = variable.end;
  });
  if (index < `${ text }`.length) {
    PARTS.push({ text: text.slice(index) });
  }
  return PARTS;
}

export function formatVariable(name, pattern = DEFAULT_VARIABLE_PATTERN) {
  return `${ pattern.open } ${ name } ${ pattern.close }`;
}

// a value of a variable by name: "user.name" in { user: { name } } or in { "user.name": … }
function getVariableValue(values, name) {
  if (values && Object.prototype.hasOwnProperty.call(values, name)) {
    return { found: true, value: values[name] };
  }
  let current = values;
  for (const PART of name.split(".")) {
    if (current === null || typeof current !== "object" || !(PART in current)) {
      return { found: false };
    }
    current = current[PART];
  }
  return { found: true, value: current };
}

/**
 * Replaces the variables in all strings of a value. A whole variable keeps the type of its value
 * ("{{ order.total }}" → 12.5), in a text the value is written as text. Unknown variables stay.
 */
export function resolveVariables(value, values = {}, pattern = DEFAULT_VARIABLE_PATTERN) {
  if (isArray(value)) {
    return value.map(item => resolveVariables(item, values, pattern));
  }
  if (isPlainObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveVariables(item, values, pattern)]));
  }
  if (!isString(value)) {
    return value;
  }
  const WHOLE = getWholeVariable(value, pattern);
  if (WHOLE) {
    const RESULT = getVariableValue(values, WHOLE);
    return RESULT.found ? RESULT.value : value;
  }
  return value.replace(getRegExp(pattern), (raw, name) => {
    const RESULT = getVariableValue(values, name);
    if (!RESULT.found) {
      return raw;
    }
    return typeof RESULT.value === "object" && RESULT.value !== null ? JSON.stringify(RESULT.value) : `${ RESULT.value }`;
  });
}

// "{{ us" before the caret: the variable that is typed, for the suggestions
export function getVariableQuery(text, caret, pattern = DEFAULT_VARIABLE_PATTERN) {
  const BEFORE = `${ text }`.slice(0, caret);
  const START = BEFORE.lastIndexOf(pattern.open);
  if (START === -1 || BEFORE.indexOf(pattern.close, START) !== -1) {
    return null;
  }
  const QUERY = BEFORE.slice(START + pattern.open.length);
  if (/[^\w.\-[\]$\s]/.test(QUERY)) {
    return null;
  }
  return { query: QUERY.trim(), start: START, end: caret };
}

// the nearest known name, for "Unknown variable user.nmae, did you mean user.name?"
export function getSimilarName(name, names = []) {
  let best = null;
  let bestDistance = Infinity;
  names.forEach(candidate => {
    const DISTANCE = levenshtein(name, candidate);
    if (DISTANCE < bestDistance) {
      bestDistance = DISTANCE;
      best = candidate;
    }
  });
  return bestDistance <= Math.max(2, Math.floor(name.length / 4)) ? best : null;
}

function levenshtein(a, b) {
  const ROW = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = ROW[0];
    ROW[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const CURRENT = ROW[j];
      ROW[j] = Math.min(ROW[j] + 1, ROW[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = CURRENT;
    }
  }
  return ROW[b.length];
}
