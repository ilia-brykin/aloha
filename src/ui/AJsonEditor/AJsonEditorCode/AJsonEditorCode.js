import {
  computed,
  h,
  inject,
  ref,
  watch,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

import {
  IconFormat,
  IconMinify,
} from "../utils/icons";
import {
  formatJson,
  minifyJson,
  parseJson,
} from "../utils/format";
import {
  isEqual,
} from "lodash-es";

/**
 * The text of the JSON: every valid change is a step of the history, an error shows line and column
 * and keeps the last valid document (blockInvalidSave). Format and minify use the options of the props.
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
    const isFocused = ref(false);

    const getText = () => (API.document.value === undefined ? "" : formatJson(API.document.value, API.formatOptions.value));
    const text = ref(getText());

    // a change of the tree, of the history or of the model: the new text (not while typing)
    watch([API.document, API.formatOptions], () => {
      if (!isFocused.value || API.codeError.value === null) {
        const PARSED = parseJson(text.value);
        if (PARSED.error || !isEqual(PARSED.value, API.document.value) || !isFocused.value) {
          text.value = getText();
          API.codeError.value = null;
        }
      }
    });

    const onInput = $event => {
      text.value = $event.target.value;
      const RESULT = parseJson(text.value);
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
      const RESULT = parseJson(text.value);
      if (RESULT.error) {
        API.codeError.value = RESULT.error;
        return;
      }
      text.value = minify ? minifyJson(RESULT.value) : formatJson(RESULT.value, API.formatOptions.value);
      API.announce(API.translate(minify ? "_A_JSON_EDITOR_ANNOUNCE_MINIFIED_" : "_A_JSON_EDITOR_ANNOUNCE_FORMATTED_"));
    };

    const goToError = () => {
      const ERROR = API.codeError.value;
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
      const ERROR = API.codeError.value;
      return ERROR ? API.translate("_A_JSON_EDITOR_ERROR_SYNTAX_", { line: ERROR.line, column: ERROR.column }) : "";
    });

    return {
      API,
      errorText,
      format,
      goToError,
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
    const t = key => API.translate(key);

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
          a_form_control_invalid: !!API.codeError.value,
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
        "aria-invalid": API.codeError.value ? "true" : undefined,
        "aria-describedby": API.codeError.value ? ERROR_ID : undefined,
        onInput: this.onInput,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
      }),
      h("span", { id: `${ ID }_label`, class: "a_sr_only" }, t("_A_JSON_EDITOR_MODE_CODE_")),
      API.codeError.value && h("p", {
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
      ]),
    ]);
  },
};
