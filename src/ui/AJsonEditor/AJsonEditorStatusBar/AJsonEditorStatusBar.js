import {
  computed,
  h,
  inject,
} from "vue";

import {
  walk,
} from "../utils/jsonPointer";

/**
 * The path of the active node (buttons to its parents), the number of nodes and errors,
 * and after a removal "Removed: name – Undo".
 */
export default {
  name: "AJsonEditorStatusBar",
  setup() {
    const API = inject("aJsonEditor");

    const nodeCount = computed(() => {
      let count = 0;
      if (API.document.value !== undefined) {
        walk(API.document.value, () => {
          count++;
        });
      }
      return count;
    });

    const breadcrumbs = computed(() => {
      const TOKENS = API.tokensOf(API.activePointer.value);
      return [[], ...TOKENS.map((_, index) => TOKENS.slice(0, index + 1))];
    });

    const errorCount = computed(() => API.validationErrors.value.filter(item => item.level === "error").length);
    const warningCount = computed(() => API.validationErrors.value.filter(item => item.level === "warning").length);

    const isRemovedLast = computed(() => API.history.value[API.historyIndex.value]?.label === "_A_JSON_EDITOR_HISTORY_REMOVE_");

    return {
      API,
      breadcrumbs,
      errorCount,
      isRemovedLast,
      nodeCount,
      warningCount,
    };
  },
  render() {
    const API = this.API;
    const t = (key, extra) => API.translate(key, extra);
    const LAST = this.breadcrumbs.length - 1;

    return h("div", { class: "a_json_editor__status" }, [
      API.mode.value !== "code" && h("nav", {
        class: "a_json_editor__breadcrumbs",
        "aria-label": t("_A_JSON_EDITOR_PATH_"),
      }, [
        h("ol", { class: "a_json_editor__breadcrumbs__list" }, this.breadcrumbs.map((tokens, index) => h("li", {
          key: index,
          class: "a_json_editor__breadcrumbs__item",
        }, [
          index === LAST ?
            h("span", { "aria-current": "location" }, tokens.length ? `${ tokens[tokens.length - 1] }` : API.rootNameText.value) :
            h("button", {
              type: "button",
              class: "a_btn a_btn_link a_btn_small a_json_editor__breadcrumbs__button",
              onClick: () => API.focusPath(tokens),
            }, tokens.length ? `${ tokens[tokens.length - 1] }` : API.rootNameText.value),
        ]))),
      ]),
      h("span", { class: "a_json_editor__status__count" }, t("_A_JSON_EDITOR_NODES_", { count: this.nodeCount })),
      API.selected.value.size > 0 && h("span", { class: "a_json_editor__status__selection" }, [
        t("_A_JSON_EDITOR_SELECTED_", { count: API.selected.value.size }),
        " ",
        h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small",
          onClick: API.copySelected,
        }, t("_A_JSON_EDITOR_ACTION_COPY_NODE_")),
        !API.isReadonlyAll.value && h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small",
          onClick: API.removeSelected,
        }, t("_A_JSON_EDITOR_ACTION_REMOVE_")),
        h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small",
          onClick: () => API.clearSelection(),
        }, t("_A_JSON_EDITOR_CLEAR_SELECTION_")),
      ]),
      (this.errorCount > 0 || this.warningCount > 0) && h("button", {
        type: "button",
        class: "a_btn a_btn_link a_btn_small a_json_editor__status__errors",
        "aria-keyshortcuts": "F8",
        onClick: () => API.goToError(1),
      }, t("_A_JSON_EDITOR_ERRORS_COUNT_", { errors: this.errorCount, warnings: this.warningCount })),
      this.isRemovedLast && API.lastRemoved.value && h("span", { class: "a_json_editor__status__removed" }, [
        t("_A_JSON_EDITOR_REMOVED_", { path: API.lastRemoved.value.path }),
        " ",
        h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small",
          onClick: API.undo,
        }, t("_A_JSON_EDITOR_UNDO_")),
      ]),
      API.slots.status && API.slots.status({ document: API.document.value, activePath: API.activePointer.value }),
    ]);
  },
};
