import {
  h,
} from "vue";

import AButton from "../AButton/AButton";
import ARequired from "../ui/ARequired/ARequired";
import ATableFormRow from "./ATableFormRow/ATableFormRow";
import ATranslation from "../ATranslation/ATranslation";

import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import DeleteAPI from "./compositionAPI/DeleteAPI";
import DragAndDropAPI from "./compositionAPI/DragAndDropAPI";
import EditAPI from "./compositionAPI/EditAPI";
import RowsAPI from "./compositionAPI/RowsAPI";
import TextsAPI from "./compositionAPI/TextsAPI";

import ExclamationCircleFill from "aloha-svg/dist/js/bootstrap/ExclamationCircleFill";
import Plus from "aloha-svg/dist/js/bootstrap/Plus";
import {
  uniqueId,
} from "lodash-es";

export default {
  name: "ATableForm",
  props: {
    addRow: {
      type: Function,
      required: false,
      default: undefined,
    },
    columns: {
      type: Array,
      required: true,
    },
    columnsDefaultValue: {
      type: [String, Number],
      required: false,
      default: "",
    },
    errorIcon: {
      type: String,
      required: false,
      default: ExclamationCircleFill,
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_table_form_"),
    },
    isDeletable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDeletableConfirm: {
      type: Boolean,
      required: false,
      default: false,
    },
    isActionsSticky: {
      type: Boolean,
      required: false,
      default: false,
    },
    isAddable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDragAndDrop: {
      type: Boolean,
      required: false,
      default: false,
    },
    isEditable: {
      type: Boolean,
      required: false,
      default: false,
    },
    keyId: {
      type: String,
      required: false,
      default: undefined,
    },
    label: {
      type: [String, Number],
      required: false,
      default: "",
    },
    labelClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    labelTag: {
      type: String,
      required: false,
      default: "h2",
    },
    rows: {
      type: Array,
      required: false,
      default: () => [],
    },
    rowsFooter: {
      type: Array,
      required: false,
      default: () => [],
    },
    saveRow: {
      type: Function,
      required: false,
      default: () => undefined,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  emits: [
    "deleteRow",
    "moveRow",
    "updateRows",
  ],
  setup(props, context) {
    const {
      allColumnsLength,
      hasActionsColumn,
    } = ColumnsAPI(props);

    const {
      getRowKey,
      hasRows,
      hasRowsFooter,
    } = RowsAPI(props);

    const {
      textsLocal,
    } = TextsAPI(props);

    const {
      activeEditRowKey,
      canAddRow,
      hasActiveEditRow,
      hasRequiredEditableColumns,
      isAddRowActive,
      onAddRow,
      onCancelEditRow,
      onEditRow,
    } = EditAPI(props, {
      getRowKey,
    });

    const {
      canMoveRowDown,
      canMoveRowUp,
      dragOverPosition,
      dragOverRowIndex,
      draggedRowIndex,
      moveRowDown,
      moveRowUp,
      onDragend,
      onDragleave,
      onDragover,
      onDragstart,
      onDrop,
    } = DragAndDropAPI(props, context, {
      isDndDisabled: hasActiveEditRow,
    });

    const {
      onDeleteRow,
    } = DeleteAPI(props, context);

    return {
      activeEditRowKey,
      allColumnsLength,
      canAddRow,
      canMoveRowDown,
      canMoveRowUp,
      draggedRowIndex,
      dragOverPosition,
      dragOverRowIndex,
      getRowKey,
      hasActionsColumn,
      hasActiveEditRow,
      hasRequiredEditableColumns,
      hasRows,
      hasRowsFooter,
      isAddRowActive,
      moveRowDown,
      moveRowUp,
      onAddRow,
      onCancelEditRow,
      onDeleteRow,
      onDragend,
      onDragleave,
      onDragover,
      onDragstart,
      onDrop,
      onEditRow,
      textsLocal,
    };
  },
  render() {
    return h("div", {
      class: "a_table_form",
    }, [
      this.label && h(ATranslation, {
        class: [
          "a_table_form__label",
          this.labelClass,
        ],
        html: this.label,
        tag: this.labelTag,
      }),
      this.hasRequiredEditableColumns && h(ARequired),
      h("div", {
        class: "a_table_form__wrapper",
      }, [
        h("table", {
          id: this.id,
          class: [
            "a_table_form__table",
            {
              a_table_form_drag_active: this.draggedRowIndex !== undefined,
            },
          ],
        }, [
          h("thead", {
            class: "a_table_form__head",
          }, [
            h(ATableFormRow, {
              id: this.id,
              allColumnsLength: this.allColumnsLength,
              canMoveRowDown: this.canMoveRowDown,
              canMoveRowUp: this.canMoveRowUp,
              cellTag: "th",
              columns: this.columns,
              draggedRowIndex: this.draggedRowIndex,
              hasActionsColumn: this.hasActionsColumn,
              hasActiveEditRow: false,
              isActiveEditMode: false,
              isActionsSticky: this.isActionsSticky,
              isDeletable: this.isDeletable,
              isDeletableConfirm: this.isDeletableConfirm,
              isDndDisabled: this.hasActiveEditRow,
              isDragAndDrop: this.isDragAndDrop,
              isEditable: this.isEditable,
              isHeader: true,
              moveRowDown: this.moveRowDown,
              moveRowUp: this.moveRowUp,
              onCancelEditRow: this.onCancelEditRow,
              onDeleteRow: this.onDeleteRow,
              onDragend: this.onDragend,
              onDragstart: this.onDragstart,
              onEditRow: this.onEditRow,
              row: {},
              rowIndex: 0,
              rows: this.rows,
              saveRow: this.saveRow,
              texts: this.textsLocal,
              trClass: "a_table_form__row a_table_form__row_head",
            }, this.$slots),
          ]),
          h("tbody", {
            class: "a_table_form__body",
          }, this.hasRows || this.isAddRowActive ?
            [
              ...this.rows.map((row, rowIndex) => {
                const rowKey = this.getRowKey({
                  row,
                  rowIndex,
                });

                return h(ATableFormRow, {
                  id: this.id,
                  allColumnsLength: this.allColumnsLength,
                  canMoveRowDown: this.canMoveRowDown,
                  canMoveRowUp: this.canMoveRowUp,
                  columns: this.columns,
                  draggedRowIndex: this.draggedRowIndex,
                  errorIcon: this.errorIcon,
                  hasActionsColumn: this.hasActionsColumn,
                  hasActiveEditRow: this.hasActiveEditRow,
                  isActiveEditMode: this.activeEditRowKey === rowKey,
                  isActionsSticky: this.isActionsSticky,
                  isCreateMode: false,
                  isDeletable: this.isDeletable,
                  isDeletableConfirm: this.isDeletableConfirm,
                  isDndDisabled: this.hasActiveEditRow,
                  isDragAndDrop: this.isDragAndDrop,
                  isEditable: this.isEditable,
                  key: rowKey,
                  moveRowDown: this.moveRowDown,
                  moveRowUp: this.moveRowUp,
                  onCancelEditRow: this.onCancelEditRow,
                  onDeleteRow: this.onDeleteRow,
                  onDragend: this.onDragend,
                  onDragleave: this.onDragleave,
                  onDragover: this.onDragover,
                  onDragstart: this.onDragstart,
                  onDrop: this.onDrop,
                  onEditRow: this.onEditRow,
                  row,
                  rowIndex,
                  rows: this.rows,
                  saveRow: this.saveRow,
                  texts: this.textsLocal,
                  trClass: [
                    "a_table_form__row",
                    {
                      a_table_form__row_drag_after: this.dragOverRowIndex === rowIndex &&
                        this.dragOverPosition === "after",
                      a_table_form__row_drag_before: this.dragOverRowIndex === rowIndex &&
                        this.dragOverPosition === "before",
                      a_table_form__row_drag_over: this.dragOverRowIndex === rowIndex,
                      a_table_form__row_dragging: this.draggedRowIndex === rowIndex,
                    },
                  ],
                }, this.$slots);
              }),
              this.isAddRowActive && h(ATableFormRow, {
                id: this.id,
                allColumnsLength: this.allColumnsLength,
                canMoveRowDown: this.canMoveRowDown,
                canMoveRowUp: this.canMoveRowUp,
                columns: this.columns,
                errorIcon: this.errorIcon,
                draggedRowIndex: this.draggedRowIndex,
                hasActionsColumn: this.hasActionsColumn,
                hasActiveEditRow: this.hasActiveEditRow,
                isActiveEditMode: true,
                isActionsSticky: this.isActionsSticky,
                isCreateMode: true,
                isDeletable: false,
                isDeletableConfirm: false,
                isDndDisabled: true,
                isDragAndDrop: false,
                isEditable: this.isEditable,
                key: "body_create",
                moveRowDown: this.moveRowDown,
                moveRowUp: this.moveRowUp,
                onCancelEditRow: this.onCancelEditRow,
                onDeleteRow: this.onDeleteRow,
                onDragend: this.onDragend,
                onDragleave: this.onDragleave,
                onDragover: this.onDragover,
                onDragstart: this.onDragstart,
                onDrop: this.onDrop,
                onEditRow: this.onEditRow,
                row: {},
                rowIndex: this.rows.length,
                rows: this.rows,
                saveRow: this.addRow,
                texts: this.textsLocal,
                trClass: "a_table_form__row a_table_form__row_create",
              }, this.$slots),
            ] :
            [h("tr", {
              class: "a_table_form__row a_table_form__row_empty",
            }, [
              h("td", {
                class: "a_table_form__cell a_table_form__empty",
                colspan: this.allColumnsLength,
              }, [
                h(ATranslation, {
                  tag: "span",
                  text: this.textsLocal.emptyText,
                }),
              ]),
            ])]),
          this.hasRowsFooter && h("tfoot", {
            class: "a_table_form__foot",
          }, this.rowsFooter.map((row, rowIndex) => {
            return h(ATableFormRow, {
              id: this.id,
              allColumnsLength: this.allColumnsLength,
              canMoveRowDown: this.canMoveRowDown,
              canMoveRowUp: this.canMoveRowUp,
              columns: this.columns,
              draggedRowIndex: this.draggedRowIndex,
              hasActionsColumn: this.hasActionsColumn,
              hasActiveEditRow: this.hasActiveEditRow,
              isActiveEditMode: false,
              isActionsSticky: this.isActionsSticky,
              isDeletable: this.isDeletable,
              isDeletableConfirm: this.isDeletableConfirm,
              isDndDisabled: this.hasActiveEditRow,
              isDragAndDrop: this.isDragAndDrop,
              isEditable: this.isEditable,
              isFooter: true,
              key: this.getRowKey({
                isFooter: true,
                row,
                rowIndex,
              }),
              moveRowDown: this.moveRowDown,
              moveRowUp: this.moveRowUp,
              onCancelEditRow: this.onCancelEditRow,
              onDeleteRow: this.onDeleteRow,
              onDragend: this.onDragend,
              onDragstart: this.onDragstart,
              onEditRow: this.onEditRow,
              row,
              rowIndex,
              rows: this.rowsFooter,
              saveRow: this.saveRow,
              texts: this.textsLocal,
              trClass: "a_table_form__row a_table_form__row_footer",
            }, this.$slots);
          })),
        ]),
        this.canAddRow && h("div", {
          class: "a_mt_3 a_text_right",
        }, [
          h(AButton, {
            class: "a_btn a_btn_outline_primary",
            disabled: this.hasActiveEditRow,
            iconLeft: Plus,
            text: this.textsLocal.actionAddRow,
            onClick: this.onAddRow,
          }),
        ]),
      ]),
    ]);
  },
};
