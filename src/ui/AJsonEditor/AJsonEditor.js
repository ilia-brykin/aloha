import {
  computed,
  h,
  nextTick,
  provide,
  ref,
  watch,
} from "vue";
import {
  AErrorsText,
  AFormHelpText,
  AFormLabelDescription,
  ALabel,
  UiAPI,
  UIExcludeRenderAttributesAPI,
  UiStyleHideAPI,
} from "../../index";

import AJsonEditorCode from "./AJsonEditorCode/AJsonEditorCode";
import AJsonEditorErrorSummary from "./AJsonEditorErrorSummary/AJsonEditorErrorSummary";
import AJsonEditorStatusBar from "./AJsonEditorStatusBar/AJsonEditorStatusBar";
import AJsonEditorToolbar from "./AJsonEditorToolbar/AJsonEditorToolbar";
import AJsonEditorTree from "./AJsonEditorTree/AJsonEditorTree";

import DocumentAPI from "./compositionAPI/DocumentAPI";
import ExpandAPI from "./compositionAPI/ExpandAPI";
import OperationsAPI from "./compositionAPI/OperationsAPI";
import PluginsAPI from "./compositionAPI/PluginsAPI";
import SearchAPI from "./compositionAPI/SearchAPI";
import ValidationAPI from "./compositionAPI/ValidationAPI";
import VariablesAPI from "./compositionAPI/VariablesAPI";
import {
  getTranslatedText,
} from "../../ATranslation/compositionAPI/UtilsAPI";

import {
  DEFAULT_FORMAT_OPTIONS,
  formatJson,
  minifyJson,
} from "./utils/format";
import {
  flattenRows,
} from "./utils/flatten";
import {
  getAt,
  normalizeTokens,
  parsePointer,
  setAt,
  toPointer,
} from "./utils/jsonPointer";
import {
  resolveVariables,
} from "./utils/variables";
import {
  isNil,
  uniqueId,
} from "lodash-es";

const FORMAT_PROPS = Object.keys(DEFAULT_FORMAT_OPTIONS);

const bool = (defaultValue = false) => ({ type: Boolean, required: false, default: defaultValue });
const fn = () => ({ type: Function, required: false, default: undefined });
const any = (type, defaultValue = undefined) => ({ type, required: false, default: defaultValue });

export default {
  name: "AJsonEditor",
  inheritAttrs: false,
  props: {
    // ---------- form element ----------
    alwaysTranslate: bool(),
    change: any(Function, () => {}),
    dependencies: any([Array, Object]),
    disabled: bool(),
    errors: any([String, Array]),
    errorsClass: any([String, Object]),
    excludeRenderAttributes: any(Array, () => []),
    extra: any(Object),
    helpText: any(String),
    htmlId: any(String),
    id: any([String, Number], () => uniqueId("a_json_editor_")),
    idPrefix: any(String),
    isHide: bool(),
    isRender: bool(true),
    label: any([String, Number]),
    labelClass: any([String, Object]),
    labelDescription: any(String),
    labelScreenReader: any([String, Number]),
    modelDependencies: any(Object, () => ({})),
    modelUndefined: any([Array, Object, String, Number, Boolean], null),
    modelValue: { required: false, default: undefined },
    readonly: bool(),
    required: bool(),
    type: any(String, "jsonEditor"),

    /*
     * ---------- data ----------
     * "object": the model is a JS value; "string": the model is a JSON text
     */
    modelType: { type: String, required: false, default: "object", validator: value => ["object", "string"].includes(value) },
    // the value of "reset"; by default the first value of the model
    resetValue: { required: false, default: undefined },
    rootName: any(String, "_A_JSON_EDITOR_ROOT_"),
    mode: { type: String, required: false, default: "tree", validator: value => ["tree", "code", "split"].includes(value) },
    modes: any(Array, () => ["tree", "code", "split"]),
    // ---------- view ----------
    arrayPageSize: any(Number, 100),
    density: { type: String, required: false, default: "normal", validator: value => ["compact", "normal"].includes(value) },
    displayFormatters: any(Object, () => ({})),
    expandLevel: any(Number, 1),
    expandedPaths: any(Array, () => []),
    height: any(String),
    maxHeight: any(String, "32rem"),
    pathFormat: { type: String, required: false, default: "dot", validator: value => ["dot", "pointer"].includes(value) },
    rowHeight: any(Number, 32),
    showCounts: bool(true),
    showGuides: bool(true),
    showHistory: bool(true),
    showIndexes: bool(true),
    showStatusBar: bool(true),
    showToolbar: bool(true),
    showTypes: bool(true),
    stringMaxLength: any(Number, 120),
    virtualThreshold: any(Number, 300),
    // ---------- edit ----------
    allowAdd: bool(true),
    allowMove: bool(true),
    allowRemove: bool(true),
    allowRename: bool(true),
    allowTypeChange: bool(true),
    allowedTypes: any(Array),
    // false, true or "containers": confirm the removal with AConfirm (AModalConfirm in the app)
    confirmRemove: any([Boolean, String], false),
    hiddenPaths: any(Array, () => []),
    lockedKeys: any(Array, () => []),
    maxDepth: any(Number),
    readonlyPaths: any(Array, () => []),
    undoLimit: any(Number, 100),
    // ---------- search ----------
    searchable: bool(true),
    searchCaseSensitive: bool(),
    searchDebounce: any(Number, 200),
    searchFilter: bool(),
    searchIn: { type: String, required: false, default: "both", validator: value => ["keys", "values", "both"].includes(value) },
    searchRegex: bool(),
    // ---------- variables ----------
    allowUnknownVariables: bool(),
    showResolved: bool(),
    variablePattern: any(Object),
    variableValues: any(Object),
    variables: any([Array, Function]),
    // ---------- validation ----------
    blockInvalidSave: bool(true),
    errorSummaryPosition: { type: String, required: false, default: "top", validator: value => ["top", "bottom"].includes(value) },
    maxErrors: any(Number),
    rules: any(Object),
    schema: any(Object),
    showErrorSummary: bool(true),
    validateOn: { type: String, required: false, default: "change", validator: value => ["change", "blur", "submit", "none"].includes(value) },
    // ---------- format (also in formatOptions; a single prop wins) ----------
    emptyContainers: any(String),
    escapeSlashes: any(Boolean, undefined),
    escapeUnicode: any(Boolean, undefined),
    formatOn: { type: String, required: false, default: "none", validator: value => ["none", "blur"].includes(value) },
    formatOptions: any(Object, () => ({})),
    indent: any([Number, String]),
    inlineArrays: any([Boolean, Number], undefined),
    inlineObjects: any([Boolean, Number], undefined),
    lineEnding: any(String),
    maxLineLength: any(Number),
    minify: any(Boolean, undefined),
    numberFormat: fn(),
    sortKeys: any([Boolean, String, Function], undefined),
    spaceAfterColon: any(Boolean, undefined),
    trailingNewline: any(Boolean, undefined),
    // ---------- hooks ----------
    afterChange: fn(),
    beforeAdd: fn(),
    beforeChange: fn(),
    beforeMove: fn(),
    beforeRemove: fn(),
    beforeRename: fn(),
    beforeSet: fn(),
    beforeTypeChange: fn(),
    getNodeActions: fn(),
    getValueType: fn(),
    loadChildren: fn(),
    onSelect: fn(),
    parse: fn(),
    stringify: fn(),
    validateDocument: fn(),
    validateNode: fn(),
    // ---------- plugins and texts ----------
    plugins: any(Array, () => []),
    keyboardHint: any(String, "_A_JSON_EDITOR_KEYBOARD_HINT_"),
  },
  emits: [
    "collapse",
    "expand",
    "modeChange",
    "search",
    "select",
    "update:modelValue",
    "validate",
  ],
  setup(props, context) {
    const {
      attributesToExcludeFromRender,
    } = UIExcludeRenderAttributesAPI(props);

    const {
      componentStyleHide,
    } = UiStyleHideAPI(props);

    const {
      changeModel,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      labelDescriptionId,
    } = UiAPI(props, context);

    const translate = (placeholder, extra) => getTranslatedText({ placeholder, extra: { ...(props.extra || {}), ...(extra || {}) } });

    // the options of the text: formatOptions, then the single props
    const formatOptionsLocal = computed(() => {
      const OPTIONS = { ...DEFAULT_FORMAT_OPTIONS, ...props.formatOptions };
      FORMAT_PROPS.forEach(name => {
        if (!isNil(props[name])) {
          OPTIONS[name] = props[name];
        }
      });
      return OPTIONS;
    });

    const {
      canRedo,
      canReset,
      canUndo,
      commit,
      document,
      goToHistory,
      history,
      historyIndex,
      modelParseError,
      redo,
      reset,
      undo,
    } = DocumentAPI(props, {
      changeModel,
      formatOptions: formatOptionsLocal,
    });

    const {
      findVariables,
      hasVariables,
      variablePattern,
      variablesByName,
      variablesList,
    } = VariablesAPI(props);

    const {
      getHooks,
      pluginActions,
      pluginToolbar,
      resolveType,
    } = PluginsAPI(props, {
      variablePattern,
    });

    const {
      collapse,
      collapseAll,
      expand,
      expandAll,
      expanded,
      expandPath,
      expandPointers,
      expandToLevel,
      isExpanded,
      pageLimits,
      showMore,
    } = ExpandAPI(props, {
      document,
    });

    const {
      currentIndex: searchIndex,
      currentMatch,
      filterSet,
      getHighlightParts,
      isRegexInvalid,
      matches,
      moveMatch,
      query: searchQuery,
      searchOptions,
    } = SearchAPI(props, {
      document,
    });

    // one live region for all messages; the same text again is announced again
    const announcement = ref("");
    const announce = text => {
      announcement.value = announcement.value === text ? `${ text } ` : text;
    };

    const {
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
      sortKeys: sortNodeKeys,
      typesAllowed,
    } = OperationsAPI(props, {
      announce,
      commit,
      document,
      getHooks,
      translate,
    });

    // the error of the text in the code mode (the tree keeps the last valid document)
    const codeError = ref(null);
    const codeErrorLocal = computed(() => codeError.value || modelParseError.value);

    const {
      errorCountsInside,
      errors: validationErrors,
      errorsByPointer,
      isValid,
      validate,
    } = ValidationAPI(props, context, {
      codeError: codeErrorLocal,
      document,
      getHooks,
      hasVariablesProp: computed(() => !!props.variables),
      resolveType,
      variablePattern,
      variablesByName,
    });

    const modeLocal = ref(props.mode);
    watch(() => props.mode, value => {
      modeLocal.value = value;
    });
    const setMode = mode => {
      if (props.modes.includes(mode) && mode !== modeLocal.value) {
        modeLocal.value = mode;
        context.emit("modeChange", { mode });
      }
    };

    const showResolvedLocal = ref(props.showResolved);
    watch(() => props.showResolved, value => {
      showResolvedLocal.value = value;
    });

    // "show with values": the document with the variables replaced (only for the view)
    const resolvedDocument = computed(() => {
      if (!showResolvedLocal.value || document.value === undefined) {
        return undefined;
      }
      return resolveVariables(document.value, props.variableValues || {}, variablePattern.value);
    });

    const rootNameText = computed(() => translate(props.rootName));

    const rows = computed(() => {
      if (document.value === undefined) {
        return [];
      }
      return flattenRows(document.value, {
        expanded: expanded.value,
        filter: filterSet.value,
        hiddenPaths: props.hiddenPaths,
        pageLimits: pageLimits.value,
        pageSize: props.arrayPageSize,
        rootName: rootNameText.value,
      });
    });

    // ---------- the active row and the editing ----------
    const activePointer = ref("");
    // { pointer, part: "key" | "value" | "type", error }
    const editState = ref(null);
    // the tree registers its function to scroll a row into view and focus it
    let treeFocus = () => {};
    const registerTreeFocus = fnFocus => {
      treeFocus = fnFocus;
    };

    const tokensOf = pointer => normalizeTokens(document.value, parsePointer(pointer));

    const setActive = (pointer, { focus = false } = {}) => {
      const CHANGED = activePointer.value !== pointer;
      activePointer.value = pointer;
      if (CHANGED) {
        const TOKENS = tokensOf(pointer);
        const VALUE = getAt(document.value, TOKENS);
        context.emit("select", { path: pointer, tokens: TOKENS, value: VALUE });
        getHooks("onSelect").forEach(hook => hook({ path: pointer, tokens: TOKENS, value: VALUE }));
      }
      if (focus) {
        nextTick(() => treeFocus(pointer));
      }
    };

    // focus a node by path: expands its parents, also in the code mode the tree is shown
    const focusPath = pathOrTokens => {
      const TOKENS = Array.isArray(pathOrTokens) ? pathOrTokens : tokensOf(pathOrTokens);
      if (modeLocal.value === "code") {
        setMode("tree");
      }
      expandPath(TOKENS);
      setActive(toPointer(TOKENS), { focus: true });
    };

    // extra: { openVariables: true } opens the list of the variables at once
    const startEdit = (pointer, part = "value", extra = {}) => {
      editState.value = { pointer, part, error: null, ...extra };
    };

    const stopEdit = ({ focus = true } = {}) => {
      const POINTER = editState.value?.pointer;
      editState.value = null;
      if (focus && POINTER !== undefined) {
        setActive(POINTER, { focus: true });
      }
    };

    // the result of an operation: the focus goes to the new path
    const afterOperation = tokens => {
      if (tokens) {
        expandPath(tokens);
        setActive(toPointer(tokens), { focus: true });
      }
      return tokens;
    };

    const toggleNode = async(pointer, { expandOnly, collapseOnly } = {}) => {
      if (isExpanded(pointer) && !expandOnly) {
        collapse(pointer);
        context.emit("collapse", { path: pointer });
      } else if (!isExpanded(pointer) && !collapseOnly) {
        await loadChildren(tokensOf(pointer));
        expand(pointer);
        context.emit("expand", { path: pointer });
      }
    };

    const expandAllAnnounced = () => {
      expandAll();
      announce(translate("_A_JSON_EDITOR_ANNOUNCE_EXPANDED_ALL_"));
    };

    const collapseAllAnnounced = () => {
      collapseAll();
      setActive("");
      announce(translate("_A_JSON_EDITOR_ANNOUNCE_COLLAPSED_ALL_"));
    };

    // ---------- history ----------
    const historyStep = (fnStep, announcementKey) => {
      if (fnStep()) {
        editState.value = null;
        const ENTRY = history.value[historyIndex.value];
        announce(translate(announcementKey, { step: translate(ENTRY.label, ENTRY.extra) }));
        // the active row can be gone: the focus stays in the editor
        if (getAt(document.value, tokensOf(activePointer.value)) === undefined) {
          setActive("");
        }
      }
    };
    const undoAnnounced = () => historyStep(undo, "_A_JSON_EDITOR_ANNOUNCE_UNDO_");
    const redoAnnounced = () => historyStep(redo, "_A_JSON_EDITOR_ANNOUNCE_REDO_");
    const resetAnnounced = () => historyStep(reset, "_A_JSON_EDITOR_ANNOUNCE_RESET_");
    const goToHistoryAnnounced = index => historyStep(() => goToHistory(index), "_A_JSON_EDITOR_ANNOUNCE_HISTORY_");

    // ---------- search ----------
    const goToMatch = direction => {
      const MATCH = moveMatch(direction);
      if (MATCH) {
        focusPath(MATCH.tokens);
        announce(translate("_A_JSON_EDITOR_SEARCH_COUNT_", { current: searchIndex.value + 1, count: matches.value.length }));
      }
    };

    watch([searchQuery, () => matches.value.length], () => {
      context.emit("search", { query: searchQuery.value, count: matches.value.length });
      // the matches inside collapsed nodes get visible
      if (searchQuery.value && matches.value.length) {
        expandPointers(matches.value.flatMap(match => match.tokens.map((_, index) => toPointer(match.tokens.slice(0, index)))));
      }
    });

    // ---------- errors ----------
    const errorIndex = ref(-1);
    const goToError = direction => {
      const LIST = validationErrors.value.filter(item => !item.isSyntax);
      if (!LIST.length) {
        return;
      }
      errorIndex.value = (errorIndex.value + direction + LIST.length) % LIST.length;
      focusPath(LIST[errorIndex.value].pointer);
      announce(translate(LIST[errorIndex.value].message, LIST[errorIndex.value].extra));
    };

    // ---------- the value of a node for other components ----------
    const getValue = pointer => getAt(document.value, tokensOf(pointer));

    const methods = {
      collapseAll: collapseAllAnnounced,
      expandAll: expandAllAnnounced,
      expandPath: path => expandPath(Array.isArray(path) ? path : tokensOf(path)),
      expandToLevel,
      focusPath,
      format: () => replaceDocument(document.value),
      get: path => getAt(document.value, Array.isArray(path) ? path : tokensOf(path)),
      getText: () => formatJson(document.value, formatOptionsLocal.value),
      minify: () => minifyJson(document.value),
      redo: redoAnnounced,
      remove: path => remove(Array.isArray(path) ? path : tokensOf(path)),
      reset: resetAnnounced,
      search: query => {
        searchQuery.value = query;
      },
      set: (path, value) => commit(setAt(document.value, Array.isArray(path) ? path : tokensOf(path), value), { label: "_A_JSON_EDITOR_HISTORY_SET_", extra: { path: pathText(Array.isArray(path) ? path : tokensOf(path)) } }),
      setMode,
      undo: undoAnnounced,
      validate,
    };
    context.expose(methods);

    // shortcuts of the whole editor (not in fields: there Ctrl+Z is the undo of the text)
    const onKeydown = $event => {
      const TARGET = $event.target;
      const IS_FIELD = ["INPUT", "TEXTAREA", "SELECT"].includes(TARGET.tagName) || TARGET.isContentEditable;
      const MOD = $event.ctrlKey || $event.metaKey;
      const KEY = $event.key.toLowerCase();
      if (MOD && KEY === "f" && props.searchable) {
        $event.preventDefault();
        document.value !== undefined && globalThis.document.getElementById(`${ htmlIdLocal.value }_search`)?.focus();
        return;
      }
      if (KEY === "f3" || $event.key === "F3") {
        $event.preventDefault();
        goToMatch($event.shiftKey ? -1 : 1);
        return;
      }
      if ($event.key === "F8") {
        $event.preventDefault();
        goToError($event.shiftKey ? -1 : 1);
        return;
      }
      if (IS_FIELD || !MOD) {
        return;
      }
      if (KEY === "z" && !$event.shiftKey) {
        $event.preventDefault();
        undoAnnounced();
      } else if (KEY === "y" || (KEY === "z" && $event.shiftKey)) {
        $event.preventDefault();
        redoAnnounced();
      }
    };

    // blur: validateOn "blur" and formatOn "blur"
    const rootRef = ref(undefined);
    const onFocusout = $event => {
      if (rootRef.value?.contains($event.relatedTarget)) {
        return;
      }
      if (props.validateOn === "blur") {
        validate();
      }
    };

    const API = {
      // state
      activePointer,
      announcement,
      clipboard,
      codeError,
      currentMatch,
      document,
      editState,
      errorCountsInside,
      errorsByPointer,
      expanded,
      filterSet,
      formatOptions: formatOptionsLocal,
      hasVariables,
      history,
      historyIndex,
      htmlIdLocal,
      isReadonlyAll,
      isRegexInvalid,
      isValid,
      lastRemoved,
      matches,
      mode: modeLocal,
      pluginActions,
      pluginToolbar,
      props,
      resolvedDocument,
      rootNameText,
      rows,
      searchIndex,
      searchOptions,
      searchQuery,
      showResolved: showResolvedLocal,
      slots: context.slots,
      typesAllowed,
      validationErrors,
      variablePattern,
      variablesByName,
      variablesList,
      canRedo,
      canReset,
      canUndo,
      // functions
      add: async(tokens, options) => afterOperation(await add(tokens, options)),
      announce,
      canAddInside,
      canAddSibling,
      canChangeType,
      canEditValue,
      canMove,
      canRemove,
      canRename,
      changeType: async(tokens, type) => afterOperation(await changeType(tokens, type)),
      collapseAll: collapseAllAnnounced,
      copyNode,
      cutNode: async tokens => afterOperation(await copyNode(tokens, { cut: true })),
      duplicate: async tokens => afterOperation(await duplicate(tokens)),
      expandAll: expandAllAnnounced,
      findVariables: query => findVariables(query, text => translate(text)),
      focusPath,
      getHighlightParts,
      getHooks,
      getValue,
      goToError,
      goToHistory: goToHistoryAnnounced,
      goToMatch,
      isExpanded,
      isReadonly,
      move: async(tokens, direction) => afterOperation(await move(tokens, direction)),
      moveBefore: async(fromTokens, targetTokens) => afterOperation(await moveBefore(fromTokens, targetTokens)),
      paste: async tokens => afterOperation(await paste(tokens, { isExpanded: isExpanded(toPointer(tokens)) })),
      pathText: tokens => (props.pathFormat === "pointer" ? toPointer(tokens) || "/" : pathText(tokens)),
      redo: redoAnnounced,
      registerTreeFocus,
      remove: async tokens => afterOperation(await remove(tokens)),
      rename,
      replaceDocument,
      reset: resetAnnounced,
      resolveType,
      runAction: async(action, tokens) => afterOperation(await runAction(action, tokens)),
      setActive,
      setMode,
      setValue,
      showMore,
      sortKeys: async(tokens, order) => afterOperation(await sortNodeKeys(tokens, order)),
      startEdit,
      stopEdit,
      toggleNode,
      tokensOf,
      translate,
      undo: undoAnnounced,
      validate,
    };
    provide("aJsonEditor", API);

    return {
      API,
      attributesToExcludeFromRender,
      componentStyleHide,
      errorsId,
      helpTextId,
      htmlIdLocal,
      isErrors,
      labelDescriptionId,
      modeLocal,
      onFocusout,
      onKeydown,
      rootRef,
      translate,
      validationErrors,
    };
  },
  render() {
    if (!this.isRender) {
      return null;
    }
    const LABEL_ID = `${ this.htmlIdLocal }_label`;
    const SUMMARY = this.showErrorSummary && h(AJsonEditorErrorSummary);
    const BODY = {
      tree: () => h(AJsonEditorTree, { labelId: LABEL_ID }),
      code: () => h(AJsonEditorCode, { labelId: LABEL_ID }),
      split: () => h("div", { class: "a_json_editor__split" }, [
        h(AJsonEditorTree, { labelId: LABEL_ID }),
        h(AJsonEditorCode, { labelId: LABEL_ID }),
      ]),
    };

    return h("div", {
      ...this.$attrs,
      style: this.componentStyleHide,
      ...this.attributesToExcludeFromRender,
    }, [
      h("div", {
        class: "a_form_element__parent a_form_element__parent_not_empty",
      }, [
        (this.label || this.labelScreenReader) && h(ALabel, {
          id: this.htmlIdLocal,
          alwaysTranslate: this.alwaysTranslate,
          extra: this.extra,
          hideFor: true,
          isError: this.isErrors,
          label: this.label,
          labelClass: this.labelClass,
          labelScreenReader: this.labelScreenReader,
          required: this.required,
        }),
        h(AFormLabelDescription, {
          id: this.labelDescriptionId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.labelDescription,
          extra: this.extra,
          isLabelFloat: false,
        }),
        h("div", {
          ref: "rootRef",
          class: ["a_json_editor", `a_json_editor_${ this.density }`, `a_json_editor_mode_${ this.modeLocal }`, {
            a_json_editor_disabled: this.disabled,
            a_json_editor_readonly: this.readonly,
          }],
          onKeydown: this.onKeydown,
          onFocusout: this.onFocusout,
        }, [
          this.showToolbar && h(AJsonEditorToolbar),
          this.errorSummaryPosition === "top" && SUMMARY,
          BODY[this.modeLocal](),
          this.errorSummaryPosition === "bottom" && SUMMARY,
          this.showStatusBar && h(AJsonEditorStatusBar),
          h("p", {
            id: `${ this.htmlIdLocal }_keyboard_hint`,
            class: "a_sr_only",
          }, this.translate(this.keyboardHint)),
          h("span", {
            class: "a_sr_only",
            role: "status",
          }, this.API.announcement.value),
        ]),
        h(AFormHelpText, {
          id: this.helpTextId,
          alwaysTranslate: this.alwaysTranslate,
          html: this.helpText,
          extra: this.extra,
        }),
        this.isErrors && h(AErrorsText, {
          id: this.errorsId,
          alwaysTranslate: this.alwaysTranslate,
          errors: this.errors,
          errorsClass: this.errorsClass,
        }),
      ]),
    ]);
  },
};
