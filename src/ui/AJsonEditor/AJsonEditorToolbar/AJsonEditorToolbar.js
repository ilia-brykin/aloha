import {
  computed,
  h,
  inject,
  nextTick,
  ref,
  watch,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

import {
  IconCode,
  IconCollapseAll,
  IconExpandAll,
  IconEye,
  IconFullscreen,
  IconFullscreenExit,
  IconHistory,
  IconNext,
  IconPrev,
  IconRedo,
  IconReplace,
  IconReset,
  IconSearch,
  IconSplit,
  IconTree,
  IconUndo,
} from "../utils/icons";
import {
  debounce,
} from "lodash-es";

const MODE_ICONS = { tree: IconTree, code: IconCode, split: IconSplit };

/**
 * The toolbar: history (undo, redo, reset, list of the steps), view (expand / collapse all, mode, values of the variables),
 * search (options, count, previous / next) and the buttons of the plugins. Groups with names, normal tab order.
 */
export default {
  name: "AJsonEditorToolbar",
  setup() {
    const API = inject("aJsonEditor");
    const isHistoryOpen = ref(false);
    const searchText = ref(API.searchQuery.value);

    const setQuery = debounce(value => {
      API.searchQuery.value = value;
    }, API.props.searchDebounce);

    watch(API.searchQuery, value => {
      if (value !== searchText.value) {
        searchText.value = value;
      }
    });

    const onSearchInput = $event => {
      searchText.value = $event.target.value;
      setQuery(searchText.value);
    };

    const onSearchKeydown = $event => {
      if ($event.key === "Enter") {
        $event.preventDefault();
        setQuery.flush();
        API.goToMatch($event.shiftKey ? -1 : 1);
      } else if ($event.key === "Escape" && searchText.value) {
        $event.preventDefault();
        $event.stopPropagation();
        searchText.value = "";
        API.searchQuery.value = "";
      }
    };

    const countText = computed(() => {
      if (!API.searchQuery.value) {
        return "";
      }
      if (API.isRegexInvalid.value) {
        return API.translate("_A_JSON_EDITOR_SEARCH_REGEX_INVALID_");
      }
      if (!API.matches.value.length) {
        return API.translate("_A_JSON_EDITOR_SEARCH_NONE_");
      }
      return API.translate("_A_JSON_EDITOR_SEARCH_COUNT_", { current: API.searchIndex.value + 1, count: API.matches.value.length });
    });

    const formatTime = time => new Date(time).toLocaleTimeString();

    // ---------- replace ----------
    const replaceText = ref("");
    const focusById = name => nextTick(() => globalThis.document.getElementById(`${ API.htmlIdLocal.value }_${ name }`)?.focus());

    const toggleReplace = () => {
      API.isReplaceOpen.value = !API.isReplaceOpen.value;
      if (API.isReplaceOpen.value) {
        focusById("replace");
      }
    };

    const replace = (all = false) => {
      setQuery.flush();
      return API.replaceMatches(replaceText.value, { all });
    };

    const onReplaceKeydown = $event => {
      if ($event.key === "Enter") {
        // Enter: the current match, Ctrl+Enter: all matches
        $event.preventDefault();
        replace($event.ctrlKey || $event.metaKey);
      } else if ($event.key === "Escape") {
        $event.preventDefault();
        $event.stopPropagation();
        API.isReplaceOpen.value = false;
        focusById("replace_toggle");
      }
    };

    return {
      API,
      countText,
      formatTime,
      isHistoryOpen,
      onReplaceKeydown,
      onSearchInput,
      onSearchKeydown,
      replace,
      replaceText,
      searchText,
      toggleReplace,
    };
  },
  render() {
    const API = this.API;
    const PROPS = API.props;
    const ID = API.htmlIdLocal.value;
    const t = (key, extra) => API.translate(key, extra);
    const IS_DISABLED = PROPS.disabled;

    const iconButton = ({ icon, text, onClick, disabled, pressed, expanded, controls, shortcut, className }) => h("button", {
      type: "button",
      class: ["a_btn a_btn_transparent_secondary a_btn_small a_json_editor__tool", className],
      disabled: disabled || IS_DISABLED,
      title: shortcut ? `${ t(text) } (${ shortcut })` : t(text),
      "aria-pressed": pressed === undefined ? undefined : `${ pressed }`,
      "aria-expanded": expanded === undefined ? undefined : `${ expanded }`,
      "aria-controls": controls,
      "aria-keyshortcuts": shortcut ? shortcut.replace(/\+/g, "+").replace("Ctrl", "Control") : undefined,
      onClick,
    }, [
      h(AIcon, { icon, class: "a_json_editor__tool__icon" }),
      h("span", { class: "a_sr_only" }, t(text)),
    ]);

    const group = (label, children) => h("div", {
      class: "a_json_editor__toolbar__group",
      role: "group",
      "aria-label": t(label),
    }, children);

    const IS_EDITABLE = !API.isReadonlyAll.value;
    const HISTORY_ID = `${ ID }_history`;
    const HISTORY = API.history.value;

    const HISTORY_GROUP = IS_EDITABLE && group("_A_JSON_EDITOR_GROUP_HISTORY_", [
      iconButton({ icon: IconUndo, text: "_A_JSON_EDITOR_UNDO_", onClick: API.undo, disabled: !API.canUndo.value, shortcut: "Ctrl+Z" }),
      iconButton({ icon: IconRedo, text: "_A_JSON_EDITOR_REDO_", onClick: API.redo, disabled: !API.canRedo.value, shortcut: "Ctrl+Y" }),
      iconButton({ icon: IconReset, text: "_A_JSON_EDITOR_RESET_", onClick: API.reset, disabled: !API.canReset.value }),
      PROPS.showHistory && iconButton({
        icon: IconHistory,
        text: "_A_JSON_EDITOR_HISTORY_",
        onClick: () => {
          this.isHistoryOpen = !this.isHistoryOpen;
        },
        expanded: this.isHistoryOpen,
        controls: HISTORY_ID,
        className: "a_json_editor__tool_history",
      }),
    ]);

    const VIEW_GROUP = group("_A_JSON_EDITOR_GROUP_VIEW_", [
      API.mode.value !== "code" && iconButton({ icon: IconExpandAll, text: "_A_JSON_EDITOR_EXPAND_ALL_", onClick: API.expandAll }),
      API.mode.value !== "code" && iconButton({ icon: IconCollapseAll, text: "_A_JSON_EDITOR_COLLAPSE_ALL_", onClick: API.collapseAll }),
      ...(PROPS.modes.length > 1
? PROPS.modes.map(mode => iconButton({
  icon: MODE_ICONS[mode],
  text: `_A_JSON_EDITOR_MODE_${ mode.toUpperCase() }_`,
  onClick: () => API.setMode(mode),
  pressed: API.mode.value === mode,
}))
: []),
      API.hasVariables.value && PROPS.variableValues && iconButton({
        icon: IconEye,
        text: "_A_JSON_EDITOR_SHOW_RESOLVED_",
        onClick: () => {
          API.showResolved.value = !API.showResolved.value;
        },
        pressed: API.showResolved.value,
      }),
      PROPS.allowFullscreen && h("button", {
        type: "button",
        class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__tool a_json_editor__tool_fullscreen",
        title: t("_A_JSON_EDITOR_FULLSCREEN_"),
        "aria-pressed": `${ API.isFullscreen.value }`,
        onClick: () => API.setFullscreen(!API.isFullscreen.value),
      }, [
        h(AIcon, { icon: API.isFullscreen.value ? IconFullscreenExit : IconFullscreen, class: "a_json_editor__tool__icon" }),
        h("span", { class: "a_sr_only" }, t("_A_JSON_EDITOR_FULLSCREEN_")),
      ]),
    ]);

    const SEARCH_ID = `${ ID }_search`;
    const COUNT_ID = `${ ID }_search_count`;
    const REPLACE_ID = `${ ID }_replace_group`;
    const OPTIONS = API.searchOptions.value;
    const option = (text, name, value) => h("button", {
      type: "button",
      class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__search_option",
      "aria-pressed": `${ value === undefined ? !!OPTIONS[name] : OPTIONS[name] === value }`,
      onClick: () => {
        API.searchOptions.value = {
          ...OPTIONS,
          [name]: value === undefined ? !OPTIONS[name] : (OPTIONS[name] === value ? "both" : value),
        };
      },
    }, t(text));

    const SEARCH_GROUP = PROPS.searchable && group("_A_JSON_EDITOR_GROUP_SEARCH_", [
      h("span", { class: "a_json_editor__search" }, [
        h(AIcon, { icon: IconSearch, class: "a_json_editor__search__icon" }),
        h("input", {
          id: SEARCH_ID,
          type: "search",
          class: ["a_form_control a_form_control_small a_json_editor__search__input", {
            a_form_control_invalid: API.isRegexInvalid.value,
          }],
          value: this.searchText,
          placeholder: t("_A_JSON_EDITOR_SEARCH_"),
          "aria-label": t("_A_JSON_EDITOR_SEARCH_PLACEHOLDER_"),
          "aria-describedby": COUNT_ID,
          "aria-invalid": API.isRegexInvalid.value ? "true" : undefined,
          "aria-keyshortcuts": "Control+F",
          autocomplete: "off",
          spellcheck: "false",
          onInput: this.onSearchInput,
          onKeydown: this.onSearchKeydown,
        }),
      ]),
      h("span", {
        id: COUNT_ID,
        class: "a_json_editor__search__count",
        role: "status",
      }, this.countText),
      iconButton({ icon: IconPrev, text: "_A_JSON_EDITOR_SEARCH_PREV_", onClick: () => API.goToMatch(-1), disabled: !API.matches.value.length, shortcut: "Shift+F3" }),
      iconButton({ icon: IconNext, text: "_A_JSON_EDITOR_SEARCH_NEXT_", onClick: () => API.goToMatch(1), disabled: !API.matches.value.length, shortcut: "F3" }),
      option("_A_JSON_EDITOR_SEARCH_KEYS_", "searchIn", "keys"),
      option("_A_JSON_EDITOR_SEARCH_VALUES_", "searchIn", "values"),
      option("_A_JSON_EDITOR_SEARCH_CASE_", "caseSensitive"),
      option("_A_JSON_EDITOR_SEARCH_REGEX_", "regex"),
      option("_A_JSON_EDITOR_SEARCH_FILTER_", "filter"),
      API.canReplace.value && h("button", {
        id: `${ ID }_replace_toggle`,
        type: "button",
        class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__tool",
        disabled: IS_DISABLED,
        title: `${ t("_A_JSON_EDITOR_REPLACE_TOGGLE_") } (Ctrl+H)`,
        "aria-expanded": `${ API.isReplaceOpen.value }`,
        "aria-controls": API.isReplaceOpen.value ? REPLACE_ID : undefined,
        "aria-keyshortcuts": "Control+H",
        onClick: this.toggleReplace,
      }, [
        h(AIcon, { icon: IconReplace, class: "a_json_editor__tool__icon" }),
        h("span", { class: "a_sr_only" }, t("_A_JSON_EDITOR_REPLACE_TOGGLE_")),
      ]),
    ]);

    // the matches that can be replaced: only strings and keys
    const HAS_MATCHES = API.matches.value.length > 0;
    const REPLACE_GROUP = PROPS.searchable && API.canReplace.value && API.isReplaceOpen.value && h("div", {
      id: REPLACE_ID,
      class: "a_json_editor__replace",
      role: "group",
      "aria-label": t("_A_JSON_EDITOR_REPLACE_GROUP_"),
    }, [
      h("label", {
        for: `${ ID }_replace`,
        class: "a_json_editor__replace__label",
      }, t("_A_JSON_EDITOR_REPLACE_WITH_")),
      h("input", {
        id: `${ ID }_replace`,
        type: "text",
        class: "a_form_control a_form_control_small a_json_editor__replace__input",
        value: this.replaceText,
        autocomplete: "off",
        spellcheck: "false",
        "aria-describedby": `${ COUNT_ID } ${ ID }_replace_hint`,
        onInput: $event => {
          this.replaceText = $event.target.value;
        },
        onKeydown: this.onReplaceKeydown,
      }),
      h("span", { id: `${ ID }_replace_hint`, class: "a_sr_only" }, t(OPTIONS.regex ? "_A_JSON_EDITOR_REPLACE_HINT_REGEX_" : "_A_JSON_EDITOR_REPLACE_HINT_")),
      h("button", {
        type: "button",
        class: "a_btn a_btn_secondary a_btn_small",
        disabled: !HAS_MATCHES || IS_DISABLED,
        onClick: () => this.replace(false),
      }, t("_A_JSON_EDITOR_REPLACE_")),
      h("button", {
        type: "button",
        class: "a_btn a_btn_secondary a_btn_small",
        disabled: !HAS_MATCHES || IS_DISABLED,
        onClick: () => this.replace(true),
      }, t("_A_JSON_EDITOR_REPLACE_ALL_")),
    ]);

    const PLUGIN_GROUP = API.pluginToolbar.value.length > 0 && group("_A_JSON_EDITOR_GROUP_MORE_", API.pluginToolbar.value.map(item => h("button", {
      type: "button",
      class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__tool",
      disabled: IS_DISABLED,
      onClick: () => item.run({ document: API.document.value, replaceDocument: API.replaceDocument, translate: API.translate }),
    }, [
      item.icon && h(AIcon, { icon: item.icon, class: "a_json_editor__tool__icon" }),
      t(item.label),
    ])));

    return h("div", { class: "a_json_editor__toolbar_wrapper" }, [
      h("div", {
        class: "a_json_editor__toolbar",
      }, [
        API.slots.toolbarPrepend && API.slots.toolbarPrepend(),
        HISTORY_GROUP,
        VIEW_GROUP,
        SEARCH_GROUP,
        PLUGIN_GROUP,
        API.slots.toolbarAppend && API.slots.toolbarAppend(),
      ]),
      REPLACE_GROUP,
      // the list of the steps: a jump to a step is a step back or forward, the current step has aria-current
      this.isHistoryOpen && IS_EDITABLE && h("div", {
        id: HISTORY_ID,
        class: "a_json_editor__history",
      }, [
        h("p", { class: "a_json_editor__history__title", id: `${ HISTORY_ID }_title` }, t("_A_JSON_EDITOR_HISTORY_")),
        h("ol", {
          class: "a_json_editor__history__list",
          "aria-labelledby": `${ HISTORY_ID }_title`,
        }, HISTORY.map((entry, index) => h("li", {
          key: index,
          class: ["a_json_editor__history__item", {
            a_json_editor__history__item_current: index === API.historyIndex.value,
            a_json_editor__history__item_future: index > API.historyIndex.value,
          }],
        }, [
          h("button", {
            type: "button",
            class: "a_json_editor__history__button",
            "aria-current": index === API.historyIndex.value ? "step" : undefined,
            onClick: () => API.goToHistory(index),
          }, [
            h("span", { class: "a_json_editor__history__label" }, t(entry.label, entry.extra)),
            h("span", { class: "a_json_editor__history__time" }, this.formatTime(entry.time)),
          ]),
        ]))),
      ]),
    ]);
  },
};
