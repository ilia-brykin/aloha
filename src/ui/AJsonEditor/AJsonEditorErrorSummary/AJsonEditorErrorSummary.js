import {
  computed,
  h,
  inject,
  ref,
} from "vue";

const VISIBLE = 5;

/**
 * The summary of the errors: a list of buttons "users[0].email: …" that move the focus to the node.
 * Not a live region: the count is in the status bar and the row says its errors.
 */
export default {
  name: "AJsonEditorErrorSummary",
  setup() {
    const API = inject("aJsonEditor");
    const isAll = ref(false);

    const items = computed(() => API.validationErrors.value);
    const visibleItems = computed(() => (isAll.value ? items.value : items.value.slice(0, VISIBLE)));

    return {
      API,
      isAll,
      items,
      visibleItems,
    };
  },
  render() {
    if (!this.items.length) {
      return null;
    }
    const API = this.API;
    const t = (key, extra) => API.translate(key, extra);
    const ID = `${ API.htmlIdLocal.value }_error_summary`;
    const ERRORS = this.items.filter(item => item.level === "error").length;
    const WARNINGS = this.items.filter(item => item.level === "warning").length;

    return h("div", {
      id: ID,
      class: ["a_json_editor__summary", { a_json_editor__summary_warning: !ERRORS }],
      tabindex: "-1",
    }, [
      h("p", { id: `${ ID }_title`, class: "a_json_editor__summary__title" }, t("_A_JSON_EDITOR_ERRORS_COUNT_", { errors: ERRORS, warnings: WARNINGS })),
      h("ul", {
        class: "a_json_editor__summary__list",
        "aria-labelledby": `${ ID }_title`,
      }, this.visibleItems.map((item, index) => h("li", {
        key: index,
        class: `a_json_editor__summary__item a_json_editor__summary__item_${ item.level }`,
      }, [
        h("span", { class: "a_sr_only" }, `${ t(`_A_JSON_EDITOR_LEVEL_${ item.level.toUpperCase() }_`) }: `),
        item.isSyntax ?
          h("span", t(item.message, item.extra)) :
          h("button", {
            type: "button",
            class: "a_btn a_btn_link a_btn_small a_json_editor__summary__button",
            onClick: () => API.focusPath(item.pointer),
          }, `${ API.pathText(API.tokensOf(item.pointer)) }: ${ t(item.message, item.extra) }`),
      ]))),
      this.items.length > VISIBLE && h("button", {
        type: "button",
        class: "a_btn a_btn_link a_btn_small",
        "aria-expanded": `${ this.isAll }`,
        onClick: () => {
          this.isAll = !this.isAll;
        },
      }, t(this.isAll ? "_A_JSON_EDITOR_SHOW_LESS_" : "_A_JSON_EDITOR_SHOW_ALL_", { count: this.items.length })),
    ]);
  },
};
