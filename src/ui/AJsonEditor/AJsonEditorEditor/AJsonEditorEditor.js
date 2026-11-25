import {
  computed,
  h,
  inject,
  nextTick,
  onMounted,
  ref,
} from "vue";

import VariablePickerAPI from "./compositionAPI/VariablePickerAPI";

import {
  getRowId,
} from "../utils/ids";
import {
  parseInputValue,
} from "../utils/types";

/**
 * The editing of a cell: the key (rename), the value (by type) or the type (select).
 * Enter saves, Escape cancels, Tab saves; the focus goes back to the row.
 */
export default {
  name: "AJsonEditorEditor",
  props: {
    // "key" | "value" | "type"
    part: {
      type: String,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const API = inject("aJsonEditor");
    const inputRef = ref(undefined);
    const error = ref(null);
    let isDone = false;

    const type = computed(() => API.resolveType({ value: props.row.value, pointer: props.row.pointer, tokens: props.row.tokens }));
    const IS_TEXT = ["string", "variable"].includes(type.value.name) || (props.row.type === "string" && !type.value.pluginType?.editor);

    const initialText = () => {
      if (props.part === "key") {
        return `${ props.row.key }`;
      }
      if (props.part === "type") {
        return props.row.type;
      }
      return props.row.value === null ? "" : `${ props.row.value }`;
    };
    const text = ref(initialText());

    const picker = VariablePickerAPI({ API, inputRef, text });

    const id = computed(() => `${ getRowId(API.htmlIdLocal.value, props.row.pointer) }_edit_${ props.part }`);
    const keyText = computed(() => (props.row.tokens.length ? `${ props.row.key }` : API.rootNameText.value));

    onMounted(() => {
      nextTick(() => {
        inputRef.value?.focus();
        inputRef.value?.select?.();
        // the action "insert variable": the list is open at the end of the text
        if (props.part === "value" && IS_TEXT && API.editState.value?.openVariables) {
          inputRef.value?.setSelectionRange?.(text.value.length, text.value.length);
          picker.openAtCaret();
        }
      });
    });

    const finish = ({ focus = true } = {}) => {
      isDone = true;
      API.stopEdit({ focus });
    };

    const cancel = () => {
      picker.close();
      finish();
    };

    const commit = async() => {
      if (isDone) {
        return;
      }
      const TOKENS = props.row.tokens;
      if (props.part === "key") {
        const RESULT = await API.rename(TOKENS, text.value.trim());
        if (RESULT.error) {
          error.value = API.translate(RESULT.error, RESULT.extra);
          return;
        }
        isDone = true;
        if (RESULT.tokens) {
          API.editState.value = null;
          API.focusPath(RESULT.tokens);
        } else {
          finish();
        }
        return;
      }
      if (props.part === "type") {
        isDone = true;
        API.editState.value = null;
        if (text.value !== props.row.type) {
          await API.changeType(TOKENS, text.value);
        } else {
          API.setActive(props.row.pointer, { focus: true });
        }
        return;
      }
      const JSON_TYPE = props.row.type === "null" ? "string" : props.row.type;
      const PARSED = parseInputValue(text.value, JSON_TYPE);
      if (PARSED.error) {
        error.value = API.translate("_A_JSON_EDITOR_ERROR_NUMBER_");
        return;
      }
      if (PARSED.value !== props.row.value) {
        await API.setValue(TOKENS, PARSED.value);
      }
      finish();
    };

    const onKeydown = $event => {
      // the keys stay in the field, the treegrid does not move
      $event.stopPropagation();
      if (picker.onKeydown($event)) {
        return;
      }
      if ($event.key === "Escape") {
        $event.preventDefault();
        cancel();
      } else if ($event.key === "Enter") {
        $event.preventDefault();
        commit();
      } else if ($event.key === "Tab") {
        $event.preventDefault();
        commit();
      }
    };

    const onInput = $event => {
      text.value = $event.target.value;
      error.value = null;
      picker.update();
    };

    const onBlur = () => {
      picker.close();
      if (!isDone) {
        commit();
      }
    };

    // a plugin editor (e.g. AColorPicker): every change is saved
    const onPluginUpdate = async value => {
      await API.setValue(props.row.tokens, value, { mergeKey: true });
    };

    return {
      API,
      commit,
      error,
      id,
      inputRef,
      IS_TEXT,
      keyText,
      onBlur,
      onInput,
      onKeydown,
      onPluginUpdate,
      picker,
      text,
      type,
    };
  },
  render() {
    const API = this.API;
    const ERROR_ID = `${ this.id }_error`;
    const HINT_ID = `${ API.htmlIdLocal.value }_edit_hint`;
    const DESCRIBEDBY = [HINT_ID, this.error ? ERROR_ID : undefined].filter(Boolean).join(" ");
    const ERROR = this.error && h("span", {
      id: ERROR_ID,
      class: "a_json_editor__edit_error",
      role: "alert",
    }, this.error);
    const HINT = h("span", { id: HINT_ID, class: "a_sr_only" }, API.translate("_A_JSON_EDITOR_EDIT_HINT_"));

    if (this.part === "type") {
      const TYPES = API.typesAllowed.value;
      return h("span", { class: "a_json_editor__edit" }, [
        h("select", {
          ref: "inputRef",
          id: this.id,
          class: "a_form_control a_form_control_small a_json_editor__edit_select",
          value: this.text,
          "aria-label": API.translate("_A_JSON_EDITOR_EDIT_TYPE_", { key: this.keyText }),
          "aria-describedby": HINT_ID,
          onChange: $event => {
            this.text = $event.target.value;
            this.commit();
          },
          onKeydown: this.onKeydown,
          onBlur: this.onBlur,
        }, TYPES.map(type => h("option", { value: type }, API.translate(`_A_JSON_EDITOR_TYPE_${ type.toUpperCase() }_`)))),
        HINT,
      ]);
    }

    if (this.part === "value" && this.type.pluginType?.editor) {
      return h("span", {
        class: "a_json_editor__edit a_json_editor__edit_plugin",
        onKeydown: $event => {
          $event.stopPropagation();
          if ($event.key === "Escape" || ($event.key === "Enter" && $event.target.tagName !== "TEXTAREA")) {
            API.stopEdit();
          }
        },
      }, [
        h(this.type.pluginType.editor, {
          modelValue: this.row.value,
          label: API.translate("_A_JSON_EDITOR_EDIT_VALUE_", { key: this.keyText }),
          "onUpdate:modelValue": this.onPluginUpdate,
        }),
        h("button", {
          type: "button",
          class: "a_btn a_btn_secondary a_btn_small",
          onClick: () => API.stopEdit(),
        }, API.translate("_A_JSON_EDITOR_DONE_")),
      ]);
    }

    if (this.part === "value" && this.row.type === "boolean") {
      return h("span", { class: "a_json_editor__edit" }, [
        h("select", {
          ref: "inputRef",
          id: this.id,
          class: "a_form_control a_form_control_small a_json_editor__edit_select",
          value: this.text,
          "aria-label": API.translate("_A_JSON_EDITOR_EDIT_VALUE_", { key: this.keyText }),
          "aria-describedby": HINT_ID,
          onChange: $event => {
            this.text = $event.target.value;
          },
          onKeydown: this.onKeydown,
          onBlur: this.onBlur,
        }, ["true", "false"].map(value => h("option", { value }, value))),
        HINT,
      ]);
    }

    const LIST_ID = `${ this.id }_variables`;
    const PICKER = this.picker;
    const IS_COMBOBOX = this.part === "value" && this.IS_TEXT && API.hasVariables.value;
    const OPTIONS = PICKER.options.value;
    const IS_LIST = IS_COMBOBOX && PICKER.isOpen.value;

    return h("span", { class: "a_json_editor__edit" }, [
      h("input", {
        ref: "inputRef",
        id: this.id,
        type: "text",
        class: ["a_form_control a_form_control_small a_json_editor__edit_input", {
          a_form_control_invalid: !!this.error,
        }],
        value: this.text,
        inputmode: this.part === "value" && this.row.type === "number" ? "decimal" : undefined,
        spellcheck: "false",
        autocomplete: "off",
        "aria-label": this.part === "key" ?
          API.translate("_A_JSON_EDITOR_EDIT_KEY_", { key: this.keyText }) :
          API.translate("_A_JSON_EDITOR_EDIT_VALUE_", { key: this.keyText }),
        "aria-invalid": this.error ? "true" : undefined,
        "aria-describedby": DESCRIBEDBY,
        role: IS_COMBOBOX ? "combobox" : undefined,
        "aria-autocomplete": IS_COMBOBOX ? "list" : undefined,
        "aria-expanded": IS_COMBOBOX ? `${ IS_LIST && OPTIONS.length > 0 }` : undefined,
        "aria-controls": IS_LIST ? LIST_ID : undefined,
        "aria-activedescendant": IS_LIST && OPTIONS.length ? `${ LIST_ID }_${ PICKER.activeIndex.value }` : undefined,
        onInput: this.onInput,
        onKeydown: this.onKeydown,
        onClick: () => PICKER.update(),
        onBlur: this.onBlur,
      }),
      IS_COMBOBOX && h("button", {
        type: "button",
        class: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__insert_variable",
        tabindex: "-1",
        title: API.translate("_A_JSON_EDITOR_ACTION_INSERT_VARIABLE_"),
        "aria-label": API.translate("_A_JSON_EDITOR_ACTION_INSERT_VARIABLE_"),
        // the field keeps the focus
        onMousedown: $event => $event.preventDefault(),
        onClick: () => {
          PICKER.openAtCaret();
          this.inputRef?.focus();
        },
      }, "{ }"),
      IS_LIST && OPTIONS.length > 0 && h("ul", {
        id: LIST_ID,
        class: "a_json_editor__variables",
        role: "listbox",
        "aria-label": API.translate("_A_JSON_EDITOR_VARIABLES_"),
      }, OPTIONS.map((variable, index) => h("li", {
        id: `${ LIST_ID }_${ index }`,
        key: variable.name,
        class: ["a_json_editor__variables__option", {
          a_json_editor__variables__option_active: index === PICKER.activeIndex.value,
        }],
        role: "option",
        "aria-selected": index === PICKER.activeIndex.value ? "true" : "false",
        onMousedown: $event => $event.preventDefault(),
        onClick: () => PICKER.insert(variable),
      }, [
        h("code", { class: "a_json_editor__variables__name" }, variable.name),
        variable.label && h("span", { class: "a_json_editor__variables__label" }, API.translate(variable.label)),
        variable.type && h("span", { class: "a_json_editor__variables__type" }, API.translate(`_A_JSON_EDITOR_TYPE_${ variable.type.toUpperCase() }_`)),
        variable.example !== undefined && h("span", { class: "a_json_editor__variables__example" }, `${ variable.example }`),
      ]))),
      IS_LIST && !OPTIONS.length && h("span", {
        class: "a_json_editor__variables_empty",
      }, API.translate("_A_JSON_EDITOR_VARIABLES_NONE_")),
      ERROR,
      HINT,
    ]);
  },
};
