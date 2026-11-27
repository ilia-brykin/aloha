import {
  getJsonType,
} from "./types";
import {
  isContainer,
  toPointer,
} from "./jsonPointer";
import {
  isArray,
} from "lodash-es";

/**
 * The visible rows of the tree: the root and the children of the expanded nodes.
 * expanded: Set of pointers, filter: Set of pointers (search filter) or null,
 * pageSize: in big arrays only the first rows, then a row "show more".
 */
export function flattenRows(document, {
  expanded = new Set(),
  filter = null,
  hiddenPaths = [],
  pageSize = Infinity,
  pageLimits = {},
  rootName = "root",
} = {}) {
  const ROWS = [];
  const HIDDEN = new Set(hiddenPaths);

  const addRow = ({ value, tokens, key, level, posinset, setsize, parentPointer }) => {
    const POINTER = toPointer(tokens);
    if (HIDDEN.has(POINTER) || (filter && !filter.has(POINTER))) {
      return;
    }
    const IS_CONTAINER = isContainer(value);
    const CHILD_KEYS = IS_CONTAINER ? (isArray(value) ? value.map((_, index) => index) : Object.keys(value)) : [];
    const IS_EXPANDED = IS_CONTAINER && expanded.has(POINTER);
    ROWS.push({
      childCount: CHILD_KEYS.length,
      isContainer: IS_CONTAINER,
      isExpanded: IS_EXPANDED,
      isIndex: Number.isInteger(key),
      key,
      level,
      parentPointer,
      pointer: POINTER,
      posinset,
      setsize,
      tokens,
      type: getJsonType(value),
      value,
    });
    if (!IS_EXPANDED) {
      return;
    }
    const LIMIT = pageLimits[POINTER] || pageSize;
    CHILD_KEYS.slice(0, LIMIT).forEach((childKey, index) => {
      addRow({
        value: value[childKey],
        tokens: [...tokens, childKey],
        key: childKey,
        level: level + 1,
        posinset: index + 1,
        setsize: CHILD_KEYS.length,
        parentPointer: POINTER,
      });
    });
    if (CHILD_KEYS.length > LIMIT) {
      ROWS.push({
        isMore: true,
        level: level + 1,
        parentPointer: POINTER,
        pointer: `${ POINTER }/~more`,
        rest: CHILD_KEYS.length - LIMIT,
        tokens,
      });
    }
  };

  addRow({ value: document, tokens: [], key: rootName, level: 1, posinset: 1, setsize: 1, parentPointer: null });
  return ROWS;
}

// pointers of all containers up to a level (1 = only the root)
export function getContainerPointers(document, maxLevel = Infinity) {
  const RESULT = [];
  const visit = (value, tokens) => {
    if (!isContainer(value) || tokens.length >= maxLevel) {
      return;
    }
    RESULT.push(toPointer(tokens));
    const KEYS = isArray(value) ? value.map((_, index) => index) : Object.keys(value);
    KEYS.forEach(key => visit(value[key], [...tokens, key]));
  };
  visit(document, []);
  return RESULT;
}

// the pointers of the ancestors of a path, from the root
export function getAncestorPointers(tokens) {
  return tokens.map((_, index) => toPointer(tokens.slice(0, index)));
}
