/**
 * JSON Pointer (RFC 6901) and immutable changes of a document by path.
 * A path is an array of tokens: ["users", 0, "name"]; the pointer is "/users/0/name".
 * Every change returns a new document, the untouched branches are shared.
 */

import {
  isArray,
  isPlainObject,
} from "lodash-es";

export function escapeToken(token) {
  return `${ token }`.replace(/~/g, "~0").replace(/\//g, "~1");
}

export function unescapeToken(token) {
  return token.replace(/~1/g, "/").replace(/~0/g, "~");
}

export function toPointer(tokens) {
  return tokens.map(token => `/${ escapeToken(token) }`).join("");
}

export function parsePointer(pointer) {
  if (!pointer) {
    return [];
  }
  return pointer.slice(1).split("/").map(unescapeToken);
}

// "users[0].name" for the status bar and the copy of a path
export function toDotPath(tokens, rootName = "") {
  return tokens.reduce((result, token) => {
    if (Number.isInteger(token)) {
      return `${ result }[${ token }]`;
    }
    return result ? `${ result }.${ token }` : `${ token }`;
  }, rootName);
}

export function isContainer(value) {
  return isArray(value) || isPlainObject(value);
}

// the tokens of a parsed pointer are strings, in arrays they are indexes
export function normalizeTokens(document, tokens) {
  const RESULT = [];
  let current = document;
  for (const TOKEN of tokens) {
    const KEY = isArray(current) ? Number(TOKEN) : TOKEN;
    RESULT.push(KEY);
    current = current?.[KEY];
  }
  return RESULT;
}

export function getAt(document, tokens) {
  let current = document;
  for (const TOKEN of tokens) {
    if (!isContainer(current) || !(TOKEN in current)) {
      return undefined;
    }
    current = current[TOKEN];
  }
  return current;
}

export function hasAt(document, tokens) {
  if (!tokens.length) {
    return true;
  }
  const PARENT = getAt(document, tokens.slice(0, -1));
  return isContainer(PARENT) && tokens[tokens.length - 1] in PARENT;
}

// copy of a container with a change of one child, the order of the keys stays
function withChild(container, key, value) {
  if (isArray(container)) {
    const COPY = container.slice();
    COPY[key] = value;
    return COPY;
  }
  return { ...container, [key]: value };
}

export function setAt(document, tokens, value) {
  if (!tokens.length) {
    return value;
  }
  const [FIRST, ...REST] = tokens;
  return withChild(document, FIRST, setAt(document[FIRST], REST, value));
}

// changes the parent of the path with fn(parent, lastToken)
function updateParent(document, tokens, fn) {
  const PARENT_TOKENS = tokens.slice(0, -1);
  const PARENT = getAt(document, PARENT_TOKENS);
  return setAt(document, PARENT_TOKENS, fn(PARENT, tokens[tokens.length - 1]));
}

export function removeAt(document, tokens) {
  return updateParent(document, tokens, (parent, key) => {
    if (isArray(parent)) {
      return parent.filter((_, index) => index !== key);
    }
    const COPY = { ...parent };
    delete COPY[key];
    return COPY;
  });
}

/**
 * Inserts into a container: in an array at the index (the end without index),
 * in an object the key before or after another key (the end without position).
 */
export function insertAt(document, parentTokens, { key, value, index, beforeKey, afterKey } = {}) {
  const PARENT = getAt(document, parentTokens);
  let next;
  if (isArray(PARENT)) {
    const AT = Number.isInteger(index) ? Math.max(0, Math.min(index, PARENT.length)) : PARENT.length;
    next = [...PARENT.slice(0, AT), value, ...PARENT.slice(AT)];
  } else {
    const ENTRIES = Object.entries(PARENT).filter(([entryKey]) => entryKey !== key);
    let at = ENTRIES.length;
    if (beforeKey !== undefined) {
      at = ENTRIES.findIndex(([entryKey]) => entryKey === beforeKey);
    } else if (afterKey !== undefined) {
      at = ENTRIES.findIndex(([entryKey]) => entryKey === afterKey) + 1;
    }
    if (at < 0) {
      at = ENTRIES.length;
    }
    ENTRIES.splice(at, 0, [key, value]);
    next = Object.fromEntries(ENTRIES);
  }
  return setAt(document, parentTokens, next);
}

// renames a key, its place in the object stays
export function renameAt(document, tokens, newKey) {
  return updateParent(document, tokens, (parent, key) => {
    return Object.fromEntries(Object.entries(parent).map(([entryKey, value]) => [entryKey === key ? newKey : entryKey, value]));
  });
}

// moves a child one place up (-1) or down (1) in its parent
export function moveSibling(document, tokens, direction) {
  const PARENT_TOKENS = tokens.slice(0, -1);
  const PARENT = getAt(document, PARENT_TOKENS);
  const KEY = tokens[tokens.length - 1];
  if (isArray(PARENT)) {
    const TO = KEY + direction;
    if (TO < 0 || TO >= PARENT.length) {
      return { document, tokens };
    }
    const COPY = PARENT.slice();
    [COPY[KEY], COPY[TO]] = [COPY[TO], COPY[KEY]];
    return { document: setAt(document, PARENT_TOKENS, COPY), tokens: [...PARENT_TOKENS, TO] };
  }
  const ENTRIES = Object.entries(PARENT);
  const FROM = ENTRIES.findIndex(([entryKey]) => entryKey === KEY);
  const TO = FROM + direction;
  if (TO < 0 || TO >= ENTRIES.length) {
    return { document, tokens };
  }
  [ENTRIES[FROM], ENTRIES[TO]] = [ENTRIES[TO], ENTRIES[FROM]];
  return { document: setAt(document, PARENT_TOKENS, Object.fromEntries(ENTRIES)), tokens };
}

export function isAncestor(ancestorTokens, tokens) {
  return ancestorTokens.length < tokens.length && ancestorTokens.every((token, index) => `${ token }` === `${ tokens[index] }`);
}

// a key that is not in the object yet: "key", "key_1", "key_2"…
export function getUniqueKey(object, base = "key") {
  if (!(base in object)) {
    return base;
  }
  let index = 1;
  while (`${ base }_${ index }` in object) {
    index++;
  }
  return `${ base }_${ index }`;
}

// "/users/*/role" matches "/users/3/role"
export function matchesPattern(tokens, patternTokens) {
  return tokens.length === patternTokens.length &&
    patternTokens.every((pattern, index) => pattern === "*" || `${ pattern }` === `${ tokens[index] }`);
}

// all paths of the document, also inside collapsed nodes (for search, validation, expand all)
export function walk(document, callback, tokens = []) {
  callback(document, tokens);
  if (isArray(document)) {
    document.forEach((child, index) => walk(child, callback, [...tokens, index]));
  } else if (isPlainObject(document)) {
    Object.keys(document).forEach(key => walk(document[key], callback, [...tokens, key]));
  }
}
