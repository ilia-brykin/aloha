import {
  computed,
  h,
  inject,
  ref,
} from "vue";

import ADropdown from "../../../ADropdown/ADropdown";
import AIcon from "../../../AIcon/AIcon";
import AJsonEditorEditor from "../AJsonEditorEditor/AJsonEditorEditor";

import ActionsAPI from "./compositionAPI/ActionsAPI";

import {
  IconChevron,
  IconDots,
  IconError,
} from "../utils/icons";
import {
  getAt,
} from "../utils/jsonPointer";
import {
  getRowId,
} from "../utils/ids";
import {
  splitVariables,
} from "../utils/variables";
import {
  isFunction,
} from "lodash-es";

/**
 * A row of the treegrid: key, value, type, actions. The row has the focus (roving tabindex),
 * its name says key, value and type; the errors are in aria-describedby.
 */
export default {
  name: "AJsonEditorRow",
  props: {
    isDragged: {
      type: Boolean,
      required: false,
    },
    isDropTarget: {
      type: Boolean,
      required: false,
    },
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  emits: [
    "dragEnd",
    "dragOver",
    "dragStart",
    "drop",
  ],
  setup(props) {
    const API = inject("aJsonEditor");
    const isHovered = ref(false);

    const rowId = computed(() => getRowId(API.htmlIdLocal.value, props.row.pointer));
    const errorsId = computed(() => `${ rowId.value }_errors`);
    const isActive = computed(() => API.activePointer.value === props.row.pointer);
    const editPart = computed(() => (API.editState.value?.pointer === props.row.pointer ? API.editState.value.part : null));
    const errors = computed(() => API.errorsByPointer.value.get(props.row.pointer) || []);
    const errorsInside = computed(() => (props.row.isExpanded ? 0 : API.errorCountsInside.value.get(props.row.pointer) || 0));
    const isMatch = computed(() => API.currentMatch.value?.pointer === props.row.pointer);

    const type = computed(() => {
      if (props.row.isMore) {
        return {};
      }
      return API.resolveType({ value: props.row.value, pointer: props.row.pointer, tokens: props.row.tokens });
    });

    const keyText = computed(() => {
      if (!props.row.tokens.length) {
        return API.rootNameText.value;
      }
      return `${ props.row.key }`;
    });

    // the value for the view: with "show with values" the resolved value
    const viewValue = computed(() => {
      const RESOLVED = API.resolvedDocument.value;
      return RESOLVED === undefined ? props.row.value : getAt(RESOLVED, props.row.tokens);
    });

    const countText = computed(() => API.translate(
      props.row.type === "array" ? "_A_JSON_EDITOR_COUNT_ITEMS_" : "_A_JSON_EDITOR_COUNT_KEYS_",
      { count: props.row.childCount },
    ));

    const valueText = computed(() => {
      const VALUE = viewValue.value;
      if (props.row.isContainer) {
        return countText.value;
      }
      const FORMATTER = API.props.displayFormatters?.[type.value.name] || API.props.displayFormatters?.[props.row.type];
      if (isFunction(FORMATTER)) {
        return `${ FORMATTER(VALUE, { pointer: props.row.pointer }) }`;
      }
      if (VALUE === null) {
        return "null";
      }
      return `${ VALUE }`;
    });

    // the lines of a multiline string (the view shows the first ones)
    const lines = computed(() => (typeof viewValue.value === "string" ? viewValue.value.split("\n") : []));

    // the name of the row: "name: Anna, String" / "address, Object, 2 keys" / + "3 errors inside"
    const rowLabel = computed(() => {
      if (props.row.isMore) {
        // the next page, not all the rest
        return API.translate("_A_JSON_EDITOR_SHOW_MORE_", { count: Math.min(props.row.rest, API.props.arrayPageSize) });
      }
      const TYPE = API.translate(type.value.label);
      const PARTS = props.row.isContainer ?
        [keyText.value, TYPE, valueText.value] :
        [`${ keyText.value }: ${ valueText.value === "" ? API.translate("_A_JSON_EDITOR_EMPTY_STRING_") : valueText.value.replace(/\n/g, " ") }`, TYPE];
      if (lines.value.length > 1) {
        PARTS.push(API.translate("_A_JSON_EDITOR_LINES_", { count: lines.value.length }));
      }
      if (errorsInside.value) {
        PARTS.push(API.translate("_A_JSON_EDITOR_ERRORS_INSIDE_", { count: errorsInside.value }));
      }
      if (API.isReadonly(props.row.tokens) && !API.isReadonlyAll.value) {
        PARTS.push(API.translate("_A_JSON_EDITOR_READONLY_"));
      }
      return PARTS.join(", ");
    });

    const {
      actions,
    } = ActionsAPI(props, {
      API,
      type,
    });

    // Ctrl / Cmd + click: one more row, Shift + click: a range, a click alone ends the selection
    const onClick = $event => {
      const POINTER = props.row.pointer;
      if ($event?.ctrlKey || $event?.metaKey) {
        API.toggleSelected(POINTER);
      } else if ($event?.shiftKey) {
        API.selectRange(POINTER);
      } else if (API.selected.value.size) {
        API.clearSelection();
        API.selectionAnchor.value = POINTER;
      }
      API.setActive(POINTER);
    };

    const onDblclick = $event => {
      if ($event.target.closest(".a_json_editor__key_text") && API.canRename(props.row.tokens)) {
        API.startEdit(props.row.pointer, "key");
      } else if (!props.row.isContainer && API.canEditValue(props.row.tokens)) {
        API.startEdit(props.row.pointer, props.row.type === "null" ? "type" : "value");
      }
    };

    const onFocus = $event => {
      if ($event.target === $event.currentTarget) {
        API.setActive(props.row.pointer);
      }
    };

    return {
      API,
      actions,
      editPart,
      errors,
      errorsId,
      errorsInside,
      isActive,
      isHovered,
      isMatch,
      keyText,
      lines,
      onClick,
      onDblclick,
      onFocus,
      rowId,
      rowLabel,
      type,
      valueText,
      viewValue,
    };
  },
  render() {
    const ROW = this.row;
    const API = this.API;
    const PROPS = API.props;
    const IS_VIRTUAL = API.rows.value.length > PROPS.virtualThreshold;
    const COMMON = {
      id: this.rowId,
      role: "row",
      tabindex: this.isActive ? 0 : -1,
      "aria-level": ROW.level,
      "aria-rowindex": IS_VIRTUAL ? this.rowIndex : undefined,
      style: {
        "--a_json_editor_level": ROW.level - 1,
        height: IS_VIRTUAL ? `${ PROPS.rowHeight }px` : undefined,
      },
      onFocus: this.onFocus,
      onClick: this.onClick,
    };

    if (ROW.isMore) {
      return h("div", {
        ...COMMON,
        class: ["a_json_editor__row a_json_editor__row_more", { a_json_editor__row_active: this.isActive }],
        onClick: () => API.showMore(ROW.parentPointer),
      }, [
        h("div", { role: "gridcell", class: "a_json_editor__cell a_json_editor__cell_more" }, this.rowLabel),
      ]);
    }

    const highlight = text => API.getHighlightParts(text).map(part => (part.isMatch ? h("mark", { class: "a_json_editor__mark" }, part.text) : part.text));

    const renderKey = () => {
      if (this.editPart === "key") {
        return h(AJsonEditorEditor, { row: ROW, part: "key" });
      }
      return h("span", {
        class: ["a_json_editor__key_text", {
          a_json_editor__key_text_index: ROW.isIndex,
          a_json_editor__key_text_root: !ROW.tokens.length,
        }],
      }, ROW.isIndex && !PROPS.showIndexes ? "" : highlight(this.keyText));
    };

    const renderValue = () => {
      if (this.editPart === "value") {
        return h(AJsonEditorEditor, { row: ROW, part: "value" });
      }
      const VALUE = this.viewValue;
      if (ROW.isContainer) {
        return PROPS.showCounts && h("span", { class: "a_json_editor__count" }, [
          h("span", { "aria-hidden": "true" }, ROW.type === "array" ? "[ " : "{ "),
          this.valueText,
          h("span", { "aria-hidden": "true" }, ROW.type === "array" ? " ]" : " }"),
        ]);
      }
      const SLOT = API.slots[`value-${ this.type.name }`] || API.slots.value;
      if (SLOT) {
        return SLOT({ value: VALUE, path: ROW.pointer, tokens: ROW.tokens, type: this.type.name });
      }
      if (this.type.pluginType?.view) {
        return h(this.type.pluginType.view, { value: VALUE, path: ROW.pointer });
      }
      if (typeof VALUE === "string" && !API.resolvedDocument.value) {
        if (VALUE === "") {
          return h("span", { class: "a_json_editor__value a_json_editor__value_empty" }, "\"\"");
        }
        const MAX = PROPS.stringMaxLength;
        // multiline: the first 3 lines and "+5 lines"
        const MAX_LINES = 3;
        const IS_MORE_LINES = this.lines.length > MAX_LINES;
        let text = IS_MORE_LINES ? this.lines.slice(0, MAX_LINES).join("\n") : VALUE;
        if (MAX && text.length > MAX) {
          text = `${ text.slice(0, MAX) }…`;
        }
        const TEXT = text;
        return h("span", {
          class: ["a_json_editor__value a_json_editor__value_string", {
            a_json_editor__value_multiline: this.lines.length > 1,
          }],
          title: TEXT !== VALUE ? VALUE : undefined,
        }, [...splitVariables(TEXT, API.variablePattern.value).map(part => {
          if (part.variable) {
            const IS_KNOWN = !API.props.variables || API.variablesByName.value.has(part.variable);
            return h("span", {
              class: ["a_json_editor__variable", { a_json_editor__variable_unknown: !IS_KNOWN }],
              title: part.raw,
            }, highlight(part.variable));
          }
          return highlight(part.text);
        }), IS_MORE_LINES && h("span", {
          class: "a_json_editor__more_lines",
        }, ` ${ API.translate("_A_JSON_EDITOR_MORE_LINES_", { count: this.lines.length - MAX_LINES }) }`)]);
      }
      return h("span", {
        class: ["a_json_editor__value", `a_json_editor__value_${ ROW.type }`, {
          a_json_editor__value_resolved: !!API.resolvedDocument.value,
        }],
      }, highlight(this.valueText));
    };

    const renderType = () => {
      if (this.editPart === "type") {
        return h(AJsonEditorEditor, { row: ROW, part: "type" });
      }
      return h("span", {
        class: ["a_json_editor__type", `a_json_editor__type_${ this.type.name }`],
      }, API.translate(this.type.label));
    };

    const ERRORS = this.errors;
    const HAS_ERROR = ERRORS.some(item => item.level === "error");
    const IS_EDITING = !!this.editPart;

    return h("div", {
      ...COMMON,
      class: ["a_json_editor__row", {
        a_json_editor__row_active: this.isActive,
        a_json_editor__row_dragged: this.isDragged,
        a_json_editor__row_drop: this.isDropTarget,
        a_json_editor__row_editing: IS_EDITING,
        a_json_editor__row_error: HAS_ERROR,
        a_json_editor__row_warning: !HAS_ERROR && ERRORS.length > 0,
        a_json_editor__row_match: this.isMatch,
        a_json_editor__row_readonly: API.isReadonly(ROW.tokens),
        a_json_editor__row_selected: API.isSelected(ROW.pointer),
      }],
      "aria-selected": PROPS.selectable && ROW.tokens.length ? `${ API.isSelected(ROW.pointer) }` : undefined,
      "aria-label": this.rowLabel,
      "aria-expanded": ROW.isContainer ? `${ ROW.isExpanded }` : undefined,
      "aria-setsize": ROW.setsize,
      "aria-posinset": ROW.posinset,
      "aria-describedby": ERRORS.length ? this.errorsId : undefined,
      draggable: !IS_EDITING && API.canMove(ROW.tokens) ? "true" : undefined,
      onDblclick: this.onDblclick,
      onMouseenter: () => {
        this.isHovered = true;
      },
      onMouseleave: () => {
        this.isHovered = false;
      },
      onDragstart: $event => this.$emit("dragStart", ROW, $event),
      onDragover: $event => this.$emit("dragOver", ROW, $event),
      onDrop: $event => this.$emit("drop", ROW, $event),
      onDragend: () => this.$emit("dragEnd"),
    }, [
      h("div", {
        role: "gridcell",
        class: "a_json_editor__cell a_json_editor__cell_key",
      }, [
        h("span", {
          class: ["a_json_editor__toggle", {
            a_json_editor__toggle_open: ROW.isExpanded,
            a_json_editor__toggle_hidden: !ROW.isContainer,
          }],
          "aria-hidden": "true",
          onClick: $event => {
            $event.stopPropagation();
            if (ROW.isContainer) {
              API.setActive(ROW.pointer);
              API.toggleNode(ROW.pointer);
            }
          },
        }, [
          h(AIcon, { icon: IconChevron, class: "a_json_editor__toggle__icon" }),
        ]),
        renderKey(),
        !ROW.isContainer && h("span", { class: "a_json_editor__colon", "aria-hidden": "true" }, ":"),
      ]),
      h("div", {
        role: "gridcell",
        class: "a_json_editor__cell a_json_editor__cell_value",
      }, [
        renderValue(),
        ERRORS.length > 0 && h("span", {
          id: this.errorsId,
          class: "a_json_editor__row_errors",
        }, ERRORS.map(item => h("span", {
          class: `a_json_editor__row_error a_json_editor__row_error_${ item.level }`,
        }, API.translate(item.message, item.extra)))),
      ]),
      PROPS.showTypes && h("div", {
        role: "gridcell",
        class: "a_json_editor__cell a_json_editor__cell_type",
      }, [renderType()]),
      h("div", {
        role: "gridcell",
        class: "a_json_editor__cell a_json_editor__cell_actions",
      }, [
        this.errorsInside > 0 && h("span", {
          class: "a_json_editor__errors_inside",
          title: API.translate("_A_JSON_EDITOR_ERRORS_INSIDE_", { count: this.errorsInside }),
          "aria-hidden": "true",
        }, [
          h(AIcon, { icon: IconError, class: "a_json_editor__errors_inside__icon" }),
          `${ this.errorsInside }`,
        ]),
        // the menu only in the active or hovered row: thousands of rows stay light
        (this.isActive || this.isHovered) && this.actions.length > 0 && !API.isReadonlyAll.value && h(ADropdown, {
          class: "a_json_editor__actions",
          actions: this.actions,
          buttonClass: "a_btn a_btn_transparent_secondary a_btn_small a_json_editor__actions_button",
          buttonIconLeft: IconDots,
          buttonTextScreenReader: API.translate("_A_JSON_EDITOR_ACTIONS_", { key: this.keyText }),
          buttonTitle: API.translate("_A_JSON_EDITOR_ACTIONS_", { key: this.keyText }),
          buttonAttributes: { tabindex: "-1" },
          placement: "bottom-end",
          // a menu in body is not visible in the native full screen
          inBody: !API.isFullscreen.value,
          hasCaret: false,
        }),
      ]),
    ]);
  },
};
