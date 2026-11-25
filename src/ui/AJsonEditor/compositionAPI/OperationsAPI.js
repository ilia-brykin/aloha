import {
  computed,
  ref,
  shallowRef,
  toRef,
} from "vue";

import {
  closeConfirm,
  openConfirm,
} from "../../../compositionAPI/AConfirmAPI";

import {
  convertType,
  getDefaultValue,
} from "../utils/types";
import {
  getAt,
  getUniqueKey,
  insertAt,
  isAncestor,
  isContainer,
  matchesPattern,
  moveSibling,
  parsePointer,
  removeAt,
  renameAt,
  setAt,
  toDotPath,
  toPointer,
} from "../utils/jsonPointer";
import {
  getSchemaAt,
} from "../utils/validate";
import {
  isArray,
  isPlainObject,
} from "lodash-es";

/**
 * All changes of the document: the rights (readonly, locked keys, max depth, allowed types),
 * the hooks (beforeChange + before* of the operation, afterChange), the history and the announcement.
 * Every operation returns the path of the node that should get the focus, or null.
 */
export default function OperationsAPI(props, {
  announce = () => {},
  commit = () => {},
  document = shallowRef(undefined),
  getHooks = () => [],
  translate = text => text,
}) {
  const allowedTypes = toRef(props, "allowedTypes");
  const lockedKeys = toRef(props, "lockedKeys");
  const maxDepth = toRef(props, "maxDepth");
  const readonlyPaths = toRef(props, "readonlyPaths");
  const rootName = toRef(props, "rootName");

  // the last removed node, for "Removed: name – Undo" in the status bar
  const lastRemoved = ref(null);
  // the internal clipboard of the editor (copy / cut / paste of nodes)
  const clipboard = shallowRef(null);

  const isReadonlyAll = computed(() => props.readonly || props.disabled);

  const matchesAny = (tokens, patterns = []) => {
    return patterns.some(pattern => {
      const PATTERN_TOKENS = parsePointer(pattern);
      return tokens.length >= PATTERN_TOKENS.length && matchesPattern(tokens.slice(0, PATTERN_TOKENS.length), PATTERN_TOKENS);
    });
  };

  // a readonly path and everything inside it
  const isReadonly = tokens => isReadonlyAll.value || matchesAny(tokens, readonlyPaths.value);

  // a locked key cannot be removed, renamed or moved
  const isLocked = tokens => !tokens.length || isReadonly(tokens) || (lockedKeys.value || []).some(pattern => matchesPattern(tokens, parsePointer(pattern)));

  const canAddInside = tokens => {
    return !isReadonly(tokens) &&
      props.allowAdd &&
      isContainer(getAt(document.value, tokens)) &&
      (!maxDepth.value || tokens.length < maxDepth.value);
  };

  const canAddSibling = tokens => tokens.length > 0 && canAddInside(tokens.slice(0, -1));
  const canRemove = tokens => props.allowRemove && !isLocked(tokens) && !isReadonly(tokens.slice(0, -1));
  const canRename = tokens => props.allowRename && !isLocked(tokens) && isPlainObject(getAt(document.value, tokens.slice(0, -1)));
  const canChangeType = tokens => props.allowTypeChange && !isReadonly(tokens);
  const canMove = tokens => props.allowMove && !isLocked(tokens) && !isReadonly(tokens.slice(0, -1));
  const canEditValue = tokens => !isReadonly(tokens);

  const typesAllowed = computed(() => allowedTypes.value || ["string", "number", "boolean", "null", "object", "array"]);

  const pathText = tokens => toDotPath(tokens, translate(rootName.value));

  /**
   * The hooks before an operation: false stops it, another value replaces the value (or the new key).
   */
  const runBefore = (specificHook, context) => {
    const HOOKS = [...getHooks("beforeChange"), ...(specificHook ? getHooks(specificHook) : [])];
    // one after the other: a hook gets the value of the hook before
    return HOOKS.reduce(async(previous, hook) => {
      const CONTEXT = await previous;
      if (!CONTEXT) {
        return null;
      }
      const RESULT = await hook(CONTEXT);
      if (RESULT === false) {
        return null;
      }
      if (RESULT !== undefined && RESULT !== true) {
        if (CONTEXT.operation === "rename") {
          CONTEXT.newKey = RESULT;
        } else {
          CONTEXT.value = RESULT;
        }
      }
      return CONTEXT;
    }, Promise.resolve(context));
  };

  const runAfter = context => {
    getHooks("afterChange").forEach(hook => hook(context));
  };

  const getContext = (operation, tokens, extra = {}) => ({
    document: document.value,
    key: tokens[tokens.length - 1],
    oldValue: getAt(document.value, tokens),
    operation,
    parent: getAt(document.value, tokens.slice(0, -1)),
    path: toPointer(tokens),
    tokens,
    ...extra,
  });

  const done = (context, next, { label, announcement, mergeKey, focusTokens }) => {
    const EXTRA = { path: pathText(focusTokens || context.tokens), ...context.labelExtra };
    commit(next, { label, extra: EXTRA, mergeKey });
    announce(translate(announcement || label, EXTRA));
    runAfter({ ...context, document: next });
    return focusTokens || context.tokens;
  };

  const setValue = async(tokens, value, { mergeKey } = {}) => {
    if (!canEditValue(tokens)) {
      return null;
    }
    const CONTEXT = await runBefore("beforeSet", getContext("set", tokens, { value }));
    if (!CONTEXT) {
      return null;
    }
    return done(CONTEXT, setAt(document.value, tokens, CONTEXT.value), {
      label: "_A_JSON_EDITOR_HISTORY_SET_",
      mergeKey: mergeKey ? `set:${ toPointer(tokens) }` : undefined,
    });
  };

  // the default value of a new child: from the schema (type) or an empty string
  const getNewValue = tokens => {
    const SCHEMA_TYPE = [].concat(getSchemaAt(props.schema, tokens)?.type || [])[0];
    return getDefaultValue(SCHEMA_TYPE === "integer" ? "number" : (SCHEMA_TYPE || "string"));
  };

  // the first key of the schema that is not in the object yet, else "key"
  const getNewKey = (parentTokens, parent) => {
    const PROPERTIES = Object.keys(getSchemaAt(props.schema, parentTokens)?.properties || {});
    return PROPERTIES.find(key => !(key in parent)) || getUniqueKey(parent, translate("_A_JSON_EDITOR_NEW_KEY_"));
  };

  /**
   * Adds into a container (position: "end" | "start") or next to a node (position: "before" | "after").
   */
  const add = async(tokens, { position = "end", value, key } = {}) => {
    const IS_INSIDE = position === "end" || position === "start";
    const PARENT_TOKENS = IS_INSIDE ? tokens : tokens.slice(0, -1);
    if (!(IS_INSIDE ? canAddInside(tokens) : canAddSibling(tokens))) {
      return null;
    }
    const PARENT = getAt(document.value, PARENT_TOKENS);
    const NEW_KEY = isArray(PARENT) ? undefined : (key !== undefined ? getUniqueKey(PARENT, key) : getNewKey(PARENT_TOKENS, PARENT));
    let index;
    if (isArray(PARENT)) {
      if (position === "start") {
        index = 0;
      } else if (position === "before") {
        index = tokens[tokens.length - 1];
      } else if (position === "after") {
        index = tokens[tokens.length - 1] + 1;
      } else {
        index = PARENT.length;
      }
    }
    const NEW_TOKENS = [...PARENT_TOKENS, isArray(PARENT) ? index : NEW_KEY];
    const CONTEXT = await runBefore("beforeAdd", getContext("add", NEW_TOKENS, {
      oldValue: undefined,
      value: value !== undefined ? value : getNewValue(NEW_TOKENS),
    }));
    if (!CONTEXT) {
      return null;
    }
    const OBJECT_POSITION = {};
    if (!isArray(PARENT)) {
      if (position === "before") {
        OBJECT_POSITION.beforeKey = tokens[tokens.length - 1];
      } else if (position === "after") {
        OBJECT_POSITION.afterKey = tokens[tokens.length - 1];
      } else if (position === "start") {
        OBJECT_POSITION.beforeKey = Object.keys(PARENT)[0];
      }
    }
    const NEXT = insertAt(document.value, PARENT_TOKENS, { key: NEW_KEY, value: CONTEXT.value, index, ...OBJECT_POSITION });
    return done(CONTEXT, NEXT, { label: "_A_JSON_EDITOR_HISTORY_ADD_", focusTokens: NEW_TOKENS });
  };

  const confirmRemoval = tokens => {
    const VALUE = getAt(document.value, tokens);
    const IS_NEEDED = props.confirmRemove === true || (props.confirmRemove === "containers" && isContainer(VALUE));
    if (!IS_NEEDED) {
      return true;
    }
    return new Promise(resolve => {
      openConfirm({
        headerText: "_A_JSON_EDITOR_CONFIRM_REMOVE_HEADER_",
        bodyHtml: translate("_A_JSON_EDITOR_CONFIRM_REMOVE_BODY_", { path: pathText(tokens) }),
        save: () => {
          closeConfirm();
          resolve(true);
        },
        close: () => resolve(false),
      });
    });
  };

  const remove = async tokens => {
    if (!canRemove(tokens) || !await confirmRemoval(tokens)) {
      return null;
    }
    const CONTEXT = await runBefore("beforeRemove", getContext("remove", tokens));
    if (!CONTEXT) {
      return null;
    }
    // the focus goes to the next sibling, else to the previous one, else to the parent
    const PARENT_TOKENS = tokens.slice(0, -1);
    const PARENT = getAt(document.value, PARENT_TOKENS);
    const KEYS = isArray(PARENT) ? PARENT.map((_, index) => index) : Object.keys(PARENT);
    const POSITION = KEYS.indexOf(tokens[tokens.length - 1]);
    let focusTokens = PARENT_TOKENS;
    if (KEYS.length > 1) {
      if (isArray(PARENT)) {
        focusTokens = [...PARENT_TOKENS, Math.min(POSITION, KEYS.length - 2)];
      } else {
        focusTokens = [...PARENT_TOKENS, KEYS[POSITION + 1] ?? KEYS[POSITION - 1]];
      }
    }
    lastRemoved.value = { path: pathText(tokens) };
    const EXTRA = { path: pathText(tokens) };
    commit(removeAt(document.value, tokens), { label: "_A_JSON_EDITOR_HISTORY_REMOVE_", extra: EXTRA });
    announce(translate("_A_JSON_EDITOR_ANNOUNCE_REMOVED_", EXTRA));
    runAfter({ ...CONTEXT, document: document.value });
    return focusTokens;
  };

  const rename = async(tokens, newKeyText) => {
    const NEW_KEY = `${ newKeyText }`;
    const OLD_KEY = tokens[tokens.length - 1];
    if (!canRename(tokens) || NEW_KEY === OLD_KEY) {
      return { tokens: null };
    }
    const PARENT = getAt(document.value, tokens.slice(0, -1));
    if (!NEW_KEY) {
      return { error: "_A_JSON_EDITOR_ERROR_KEY_EMPTY_" };
    }
    if (NEW_KEY in PARENT) {
      return { error: "_A_JSON_EDITOR_ERROR_KEY_EXISTS_", extra: { key: NEW_KEY } };
    }
    const CONTEXT = await runBefore("beforeRename", getContext("rename", tokens, { newKey: NEW_KEY }));
    if (!CONTEXT) {
      return { tokens: null };
    }
    const NEW_TOKENS = [...tokens.slice(0, -1), `${ CONTEXT.newKey }`];
    CONTEXT.labelExtra = { from: OLD_KEY, to: CONTEXT.newKey };
    return {
      tokens: done(CONTEXT, renameAt(document.value, tokens, `${ CONTEXT.newKey }`), {
        label: "_A_JSON_EDITOR_HISTORY_RENAME_",
        focusTokens: NEW_TOKENS,
      }),
    };
  };

  const changeType = async(tokens, type) => {
    if (!canChangeType(tokens) || !typesAllowed.value.includes(type)) {
      return null;
    }
    const OLD = getAt(document.value, tokens);
    const CONTEXT = await runBefore("beforeTypeChange", getContext("type", tokens, { value: convertType(OLD, type), type }));
    if (!CONTEXT) {
      return null;
    }
    CONTEXT.labelExtra = { type: translate(`_A_JSON_EDITOR_TYPE_${ type.toUpperCase() }_`) };
    return done(CONTEXT, setAt(document.value, tokens, CONTEXT.value), { label: "_A_JSON_EDITOR_HISTORY_TYPE_" });
  };

  const duplicate = tokens => {
    if (!canAddSibling(tokens)) {
      return null;
    }
    const VALUE = getAt(document.value, tokens);
    return add(tokens, { position: "after", value: structuredCloneSafe(VALUE), key: tokens[tokens.length - 1] });
  };

  const move = async(tokens, direction) => {
    if (!canMove(tokens)) {
      return null;
    }
    const RESULT = moveSibling(document.value, tokens, direction);
    if (RESULT.document === document.value) {
      return null;
    }
    const CONTEXT = await runBefore("beforeMove", getContext("move", tokens, { direction }));
    if (!CONTEXT) {
      return null;
    }
    return done(CONTEXT, RESULT.document, { label: "_A_JSON_EDITOR_HISTORY_MOVE_", focusTokens: RESULT.tokens });
  };

  // drag and drop: the node goes before the target (also into another parent)
  const moveBefore = async(fromTokens, targetTokens) => {
    if (!canMove(fromTokens) || !targetTokens.length || isAncestor(fromTokens, targetTokens) ||
      toPointer(fromTokens) === toPointer(targetTokens) || !canAddSibling(targetTokens)) {
      return null;
    }
    const VALUE = getAt(document.value, fromTokens);
    const CONTEXT = await runBefore("beforeMove", getContext("move", fromTokens, { target: toPointer(targetTokens) }));
    if (!CONTEXT) {
      return null;
    }
    let target = targetTokens;
    const FROM_PARENT = fromTokens.slice(0, -1);
    const TARGET_PARENT = targetTokens.slice(0, -1);
    const IS_SAME_ARRAY = toPointer(FROM_PARENT) === toPointer(TARGET_PARENT) && isArray(getAt(document.value, FROM_PARENT));
    // in the same array the index of the target goes down after the removal
    if (IS_SAME_ARRAY && fromTokens[fromTokens.length - 1] < targetTokens[targetTokens.length - 1]) {
      target = [...TARGET_PARENT, targetTokens[targetTokens.length - 1] - 1];
    }
    // the target can be inside the parent of the moved node: its path stays valid, only array indexes shift
    let next = removeAt(document.value, fromTokens);
    const PARENT = getAt(next, TARGET_PARENT);
    if (!isContainer(PARENT)) {
      return null;
    }
    const KEY = isArray(PARENT) ? undefined : getUniqueKey(PARENT, `${ fromTokens[fromTokens.length - 1] }`);
    next = insertAt(next, TARGET_PARENT, isArray(PARENT) ?
      { value: VALUE, index: target[target.length - 1] } :
      { key: KEY, value: VALUE, beforeKey: target[target.length - 1] });
    const NEW_TOKENS = [...TARGET_PARENT, isArray(PARENT) ? target[target.length - 1] : KEY];
    return done(CONTEXT, next, { label: "_A_JSON_EDITOR_HISTORY_MOVE_", focusTokens: NEW_TOKENS });
  };

  const sortKeys = async(tokens, order = "asc") => {
    const VALUE = getAt(document.value, tokens);
    if (!isPlainObject(VALUE) || isReadonly(tokens)) {
      return null;
    }
    const KEYS = Object.keys(VALUE).sort((a, b) => a.localeCompare(b));
    if (order === "desc") {
      KEYS.reverse();
    }
    const CONTEXT = await runBefore("beforeSet", getContext("sort", tokens, { value: Object.fromEntries(KEYS.map(key => [key, VALUE[key]])) }));
    if (!CONTEXT) {
      return null;
    }
    return done(CONTEXT, setAt(document.value, tokens, CONTEXT.value), { label: "_A_JSON_EDITOR_HISTORY_SORT_" });
  };

  const copyNode = (tokens, { cut = false } = {}) => {
    clipboard.value = { key: tokens[tokens.length - 1], value: getAt(document.value, tokens) };
    writeClipboardText(JSON.stringify(clipboard.value.value, null, 2));
    announce(translate("_A_JSON_EDITOR_ANNOUNCE_COPIED_", { path: pathText(tokens) }));
    return cut ? remove(tokens) : null;
  };

  // paste: into an open container, else after the node
  const paste = (tokens, { isExpanded = false } = {}) => {
    if (!clipboard.value) {
      return null;
    }
    const VALUE = getAt(document.value, tokens);
    const KEY = Number.isInteger(clipboard.value.key) ? undefined : clipboard.value.key;
    const IS_INSIDE = isContainer(VALUE) && (isExpanded || !tokens.length);
    return add(tokens, {
      position: IS_INSIDE ? "end" : "after",
      value: structuredCloneSafe(clipboard.value.value),
      key: KEY,
    });
  };

  // a whole new document (the code mode, loadChildren, a plugin action)
  const replaceDocument = (next, { label = "_A_JSON_EDITOR_HISTORY_CODE_", mergeKey, extra } = {}) => {
    commit(next, { label, mergeKey, extra });
  };

  // loadChildren: the hook loads the content of a node before it is expanded
  const loadChildren = async tokens => {
    const HOOKS = getHooks("loadChildren");
    if (!HOOKS.length) {
      return;
    }
    const RESULT = await HOOKS[0]({ path: toPointer(tokens), tokens, value: getAt(document.value, tokens), document: document.value });
    if (RESULT !== undefined) {
      commit(setAt(document.value, tokens, RESULT), { label: "_A_JSON_EDITOR_HISTORY_LOAD_", extra: { path: pathText(tokens) } });
    }
  };

  // an action of a plugin or of the hook getNodeActions: run returns a new value (or a Promise)
  const runAction = async(action, tokens) => {
    const RESULT = await action.run({ value: getAt(document.value, tokens), path: toPointer(tokens), tokens, document: document.value });
    if (RESULT === undefined) {
      return null;
    }
    const CONTEXT = await runBefore("beforeSet", getContext("action", tokens, { value: RESULT, action: action.id }));
    if (!CONTEXT) {
      return null;
    }
    CONTEXT.labelExtra = { action: translate(action.label) };
    return done(CONTEXT, setAt(document.value, tokens, CONTEXT.value), { label: "_A_JSON_EDITOR_HISTORY_ACTION_" });
  };

  return {
    add,
    canAddInside,
    canAddSibling,
    canChangeType,
    canEditValue,
    canMove,
    canRemove,
    canRename,
    changeType,
    clipboard,
    copyNode,
    duplicate,
    isReadonly,
    isReadonlyAll,
    lastRemoved,
    loadChildren,
    move,
    moveBefore,
    paste,
    pathText,
    remove,
    rename,
    replaceDocument,
    runAction,
    setValue,
    sortKeys,
    typesAllowed,
  };
}

function structuredCloneSafe(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

export function writeClipboardText(text) {
  try {
    navigator.clipboard?.writeText?.(text)?.catch?.(() => {});
  } catch {
    // no clipboard (http, test): the internal clipboard still works
  }
}
