import {
  computed,
  ref,
  shallowRef,
  toRef,
  watch,
} from "vue";

import {
  formatJson,
  parseJson,
} from "../utils/format";
import {
  isEqual,
  isFunction,
  isString,
} from "lodash-es";

/**
 * The document, the model and the history (undo, redo, jump to an entry, reset).
 * The history keeps the documents (immutable, the untouched branches are shared), so a step back is cheap.
 */
export default function DocumentAPI(props, {
  changeModel = () => {},
  formatOptions = computed(() => ({})),
}) {
  const modelValue = toRef(props, "modelValue");
  const modelType = toRef(props, "modelType");
  const resetValue = toRef(props, "resetValue");
  const undoLimit = toRef(props, "undoLimit");

  const document = shallowRef(undefined);
  const initialDocument = shallowRef(undefined);
  const history = shallowRef([]);
  const historyIndex = ref(0);
  // the model of a string that is no JSON: the tree is empty, the code shows the text
  const modelParseError = ref(null);
  let lastEmitted;
  let lastCommitTime = 0;

  const fromModel = value => {
    if (modelType.value !== "string") {
      return { value };
    }
    if (isFunction(props.parse)) {
      return { value: props.parse(value) };
    }
    if (!isString(value) || value.trim() === "") {
      return { value: undefined };
    }
    return parseJson(value);
  };

  const toModel = value => {
    if (modelType.value !== "string") {
      return value;
    }
    if (isFunction(props.stringify)) {
      return props.stringify(value);
    }
    return value === undefined ? "" : formatJson(value, formatOptions.value);
  };

  const emitModel = () => {
    lastEmitted = toModel(document.value);
    changeModel({ model: lastEmitted });
  };

  // a new value from outside: a new start of the history and the value for "reset"
  const setFromModel = value => {
    const RESULT = fromModel(value);
    modelParseError.value = RESULT.error || null;
    document.value = RESULT.error ? undefined : RESULT.value;
    initialDocument.value = resetValue.value === undefined ? document.value : fromModel(resetValue.value).value;
    history.value = [{ document: document.value, label: "_A_JSON_EDITOR_HISTORY_START_", time: Date.now() }];
    historyIndex.value = 0;
  };

  watch(modelValue, value => {
    if (!isEqual(value, lastEmitted)) {
      setFromModel(value);
    }
  }, { immediate: true });

  /**
   * A new state: label and extra describe it in the history ("Value changed: /name").
   * mergeKey: quick changes of the same field (typing) are one entry.
   */
  const commit = (next, { label, extra, mergeKey } = {}) => {
    if (next === document.value) {
      return false;
    }
    const NOW = Date.now();
    const LAST = history.value[historyIndex.value];
    const IS_MERGE = mergeKey && LAST?.mergeKey === mergeKey && historyIndex.value === history.value.length - 1 && NOW - lastCommitTime < 1000;
    let entries = history.value.slice(0, historyIndex.value + 1);
    if (IS_MERGE) {
      entries[entries.length - 1] = { ...LAST, document: next, time: NOW };
    } else {
      entries.push({ document: next, label, extra, mergeKey, time: NOW });
    }
    // the oldest steps go, the start stays
    if (undoLimit.value && entries.length > undoLimit.value + 1) {
      entries = [entries[0], ...entries.slice(entries.length - undoLimit.value)];
    }
    lastCommitTime = NOW;
    history.value = entries;
    historyIndex.value = entries.length - 1;
    document.value = next;
    modelParseError.value = null;
    emitModel();
    return true;
  };

  const goToHistory = index => {
    if (index < 0 || index >= history.value.length || index === historyIndex.value) {
      return false;
    }
    historyIndex.value = index;
    document.value = history.value[index].document;
    lastCommitTime = 0;
    emitModel();
    return true;
  };

  const canUndo = computed(() => historyIndex.value > 0);
  const canRedo = computed(() => historyIndex.value < history.value.length - 1);
  const canReset = computed(() => !isEqual(document.value, initialDocument.value));

  const undo = () => goToHistory(historyIndex.value - 1);
  const redo = () => goToHistory(historyIndex.value + 1);

  // reset is a step of the history too, so it can be undone
  const reset = () => {
    if (!canReset.value) {
      return false;
    }
    return commit(initialDocument.value, { label: "_A_JSON_EDITOR_HISTORY_RESET_" });
  };

  return {
    canRedo,
    canReset,
    canUndo,
    commit,
    document,
    goToHistory,
    history,
    historyIndex,
    initialDocument,
    modelParseError,
    redo,
    reset,
    undo,
  };
}
