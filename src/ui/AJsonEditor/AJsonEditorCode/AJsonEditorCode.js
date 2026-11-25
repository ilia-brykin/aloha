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
  IconFormat,
  IconMinify,
  IconRepair,
} from "../utils/icons";
import {
  formatJson,
  minifyJson,
  parseJson,
} from "../utils/format";
import {
  repairJson,
} from "../utils/repair";
import {
  isEqual,
} from "lodash-es";

/**
 * The text of the JSON: every valid change is a step of the history, an error shows line and column
 * and keeps the last valid document (blockInvalidSave). Format and minify use the options of the props.
 * "Repair" shows the changes of repairJson first, "Apply" makes them one step of the history.
 */
export default {
  name: "AJsonEditorCode",
  props: {
    labelId: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup() {
    const API = inject("aJsonEditor");
    const textareaRef = ref(undefined);
    const repairHeadingRef = ref(undefined);
    const isFocused = ref(false);
    // the result of repairJson before it is applied: { text, value, changes } or { error }
    const repairPreview = ref(null);

    // a model text that is no JSON is shown as it is, so it can be fixed or repaired
    const getText = () => {
      if (API.document.value === undefined) {
        return API.modelParseError.value && typeof API.props.modelValue === "string" ? API.props.modelValue : "";
      }
      return formatJson(API.document.value, API.formatOptions.value);
    };
    const text = ref(getText());
    const error = computed(() => API.codeError.value || API.modelParseError.value);

    // a change of the tree, of the history or of the model: the new text (not while typing)
    watch([API.document, API.formatOptions], () => {
      repairPreview.value = null;
      if (!isFocused.value || API.codeError.value === null) {
        const PARSED = parseJson(text.value, { bigNumbers: API.props.bigNumbers });
        if (PARSED.error || !isEqual(PARSED.value, API.document.value) || !isFocused.value) {
          text.value = getText();
          API.codeError.value = null;
        }
      }
    });

    const onInput = $event => {
      text.value = $event.target.value;
      repairPreview.value = null;
      const RESULT = API.parseText(text.value);
      if (RESULT.error) {
        API.codeError.value = RESULT.error;
        return;
      }
      API.codeError.value = null;
      if (!isEqual(RESULT.value, API.document.value)) {
        API.replaceDocument(RESULT.value, { mergeKey: "code" });
      }
    };

    const format = (minify = false) => {
      const RESULT = API.parseText(text.value);
      if (RESULT.error) {
        API.codeError.value = RESULT.error;
        return;
      }
      text.value = minify ? minifyJson(RESULT.value) : formatJson(RESULT.value, API.formatOptions.value);
      API.announce(API.translate(minify ? "_A_JSON_EDITOR_ANNOUNCE_MINIFIED_" : "_A_JSON_EDITOR_ANNOUNCE_FORMATTED_"));
    };

    const goToError = () => {
      const ERROR = error.value;
      if (ERROR && textareaRef.value) {
        textareaRef.value.focus();
        textareaRef.value.setSelectionRange(ERROR.position, ERROR.position + 1);
      }
    };

    const onFocus = () => {
      isFocused.value = true;
    };

    const onBlur = () => {
      isFocused.value = false;
      if (API.props.formatOn === "blur" && !API.codeError.value) {
        text.value = getText();
      }
    };

    const errorText = computed(() => {
      const ERROR = error.value;
      return ERROR ? API.translate("_A_JSON_EDITOR_ERROR_SYNTAX_", { line: ERROR.line, column: ERROR.column }) : "";
    });

    const openRepair = () => {
      const RESULT = repairJson(text.value);
      repairPreview.value = RESULT;
      API.announce(RESULT.error ?
        API.translate("_A_JSON_EDITOR_REPAIR_FAILED_") :
        API.translate("_A_JSON_EDITOR_REPAIR_PREVIEW_", { count: RESULT.changes.length }));
      nextTick(() => repairHeadingRef.value?.focus());
    };

    const closeRepair = () => {
      repairPreview.value = null;
      textareaRef.value?.focus();
    };

    const applyRepair = () => {
      const RESULT = repairPreview.value;
      if (!RESULT || RESULT.error) {
        return;
      }
      // the repaired text again with bigNumbers, so big numbers are not rounded
      const PARSED = API.parseText(RESULT.text);
      const VALUE = PARSED.error ? RESULT.value : PARSED.value;
      text.value = formatJson(VALUE, API.formatOptions.value);
      API.codeError.value = null;
      API.replaceDocument(VALUE, { label: "_A_JSON_EDITOR_HISTORY_REPAIR_", extra: { count: RESULT.changes.length } });
      repairPreview.value = null;
      API.announce(API.translate("_A_JSON_EDITOR_ANNOUNCE_REPAIRED_", { count: RESULT.changes.length }));
      textareaRef.value?.focus();
    };

    return {
      API,
      applyRepair,
      closeRepair,
      error,
      errorText,
      format,
      goToError,
      openRepair,
      repairHeadingRef,
      repairPreview,
      onBlur,
      onFocus,
      onInput,
      text,
      textareaRef,
    };
  },
  render() {
    const API = this.API;
    const ID = `${ API.htmlIdLocal.value }_code`;
    const ERROR_ID = `${ ID }_error`;
    const IS_READONLY = API.isReadonlyAll.value;
    const t = (key, extra) => API.translate(key, extra);
    const ERROR = this.error;
    const PREVIEW = this.repairPreview;
    const REPAIR_ID = `${ ID }_repair`;

    return h("div", { class: "a_json_editor__code" }, [
      !IS_READONLY && h("div", {
        class: "a_json_editor__code__toolbar",
        role: "group",
        "aria-label": t("_A_JSON_EDITOR_GROUP_TEXT_"),
      }, [
        h("button", {
          type: "button",
          class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__tool",
          onClick: () => this.format(false),
        }, [h(AIcon, { icon: IconFormat, class: "a_json_editor__tool__icon" }), t("_A_JSON_EDITOR_FORMAT_")]),
        h("button", {
          type: "button",
          class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__tool",
          onClick: () => this.format(true),
        }, [h(AIcon, { icon: IconMinify, class: "a_json_editor__tool__icon" }), t("_A_JSON_EDITOR_MINIFY_")]),
      ]),
      h("textarea", {
        ref: "textareaRef",
        id: ID,
        class: ["a_form_control a_json_editor__code__textarea", {
          a_form_control_invalid: !!ERROR,
        }],
        value: this.text,
        readonly: IS_READONLY,
        disabled: API.props.disabled,
        spellcheck: "false",
        autocomplete: "off",
        rows: 14,
        style: { height: API.props.height, maxHeight: API.props.height ? undefined : API.props.maxHeight },
        "aria-labelledby": this.labelId ? `${ this.labelId } ${ ID }_label` : undefined,
        "aria-label": this.labelId ? undefined : t("_A_JSON_EDITOR_MODE_CODE_"),
        "aria-invalid": ERROR ? "true" : undefined,
        "aria-describedby": ERROR ? ERROR_ID : undefined,
        onInput: this.onInput,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
      }),
      h("span", { id: `${ ID }_label`, class: "a_sr_only" }, t("_A_JSON_EDITOR_MODE_CODE_")),
      ERROR && h("p", {
        id: ERROR_ID,
        class: "a_json_editor__code__error",
      }, [
        this.errorText,
        " ",
        h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small",
          onClick: this.goToError,
        }, t("_A_JSON_EDITOR_GO_TO_ERROR_")),
        !IS_READONLY && h("button", {
          type: "button",
          class: "a_btn a_btn_link a_btn_small a_json_editor__repair_button",
          "aria-expanded": `${ !!PREVIEW }`,
          "aria-controls": PREVIEW ? REPAIR_ID : undefined,
          onClick: this.openRepair,
        }, [h(AIcon, { icon: IconRepair, class: "a_json_editor__tool__icon" }), t("_A_JSON_EDITOR_REPAIR_")]),
      ]),
      ERROR && PREVIEW && h("section", {
        id: REPAIR_ID,
        class: "a_json_editor__repair",
        "aria-labelledby": `${ REPAIR_ID }_heading`,
      }, [
        h("h3", {
          ref: "repairHeadingRef",
          id: `${ REPAIR_ID }_heading`,
          class: "a_json_editor__repair__heading",
          tabindex: "-1",
        }, PREVIEW.error ? t("_A_JSON_EDITOR_REPAIR_FAILED_") : t("_A_JSON_EDITOR_REPAIR_PREVIEW_", { count: PREVIEW.changes.length })),
        PREVIEW.changes.length > 0 && h("ul", {
          class: "a_json_editor__repair__list",
        }, PREVIEW.changes.map((change, index) => h("li", {
          key: index,
          class: "a_json_editor__repair__item",
        }, [
          h("span", { class: "a_json_editor__repair__line" }, t("_A_JSON_EDITOR_REPAIR_LINE_", { line: change.line })),
          " ",
          t(change.message),
        ]))),
        !PREVIEW.error && h("pre", {
          class: "a_json_editor__repair__result",
          tabindex: "0",
          "aria-label": t("_A_JSON_EDITOR_REPAIR_RESULT_"),
        }, PREVIEW.text.trim()),
        h("div", { class: "a_json_editor__repair__actions" }, [
          !PREVIEW.error && h("button", {
            type: "button",
            class: "a_btn a_btn_primary a_btn_small",
            onClick: this.applyRepair,
          }, t("_A_JSON_EDITOR_REPAIR_APPLY_")),
          h("button", {
            type: "button",
            class: "a_btn a_btn_secondary a_btn_small",
            onClick: this.closeRepair,
          }, t("_A_JSON_EDITOR_REPAIR_CANCEL_")),
        ]),
      ]),
    ]);
  },
};
