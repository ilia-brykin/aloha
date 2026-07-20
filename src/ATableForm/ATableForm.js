import {
  computed,
  h,
  onBeforeUnmount,
  onMounted,
  toRef,
} from "vue";

import AButton from "../AButton/AButton";
import ARequired from "../ui/ARequired/ARequired";
import ATableFormRow from "./ATableFormRow/ATableFormRow";
import ATranslation from "../ATranslation/ATranslation";

import ClassesAPI from "./compositionAPI/ClassesAPI";
import ColumnsAPI from "./compositionAPI/ColumnsAPI";
import ColumnsGrowAPI from "./compositionAPI/ColumnsGrowAPI";
import DeleteAPI from "./compositionAPI/DeleteAPI";
import DragAndDropAPI from "./compositionAPI/DragAndDropAPI";
import EditAPI from "./compositionAPI/EditAPI";
import IconsAPI from "./compositionAPI/IconsAPI";
import RowsAPI from "./compositionAPI/RowsAPI";
import TextsAPI from "./compositionAPI/TextsAPI";
import WidthsAPI from "./compositionAPI/WidthsAPI";

import ExclamationCircleFill from "aloha-svg/dist/js/bootstrap/ExclamationCircleFill";
import {
  get,
  isFunction,
  uniqueId,
} from "lodash-es";

export default {
  name: "ATableForm",
  props: {
    actionsClasses: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    actionsDisabledCallback: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    actionsHideCallback: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    actionsTitleCallback: {
      type: Object,
      required: false,
      default: () => ({}),
    },
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
    changeModel: {
      type: Function,
      required: false,
      default: undefined,
    },
    errorIcon: {
      type: String,
      required: false,
      default: ExclamationCircleFill,
    },
    extra: {
      type: Object,
      required: false,
      default: undefined,
    },
    focusAfterMove: {
      type: Boolean,
      required: false,
      default: true,
    },
    icons: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    id: {
      type: String,
      required: false,
      default: () => uniqueId("a_table_form_"),
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
    isColumnsGrow: {
      type: Boolean,
      required: false,
      default: false,
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
    prepareEditModel: {
      type: Function,
      required: false,
      default: undefined,
    },
    rowClass: {
      type: [String, Object, Array, Function],
      required: false,
      default: undefined,
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
    widths: {
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
    const actionsDisabledCallback = toRef(props, "actionsDisabledCallback");
    const actionsTitleCallback = toRef(props, "actionsTitleCallback");

    const {
      allColumnsLength,
      columnsVisible,
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
      widthsLocal,
    } = WidthsAPI(props);

    const {
      iconsLocal,
    } = IconsAPI(props);

    const {
      actionsClassesLocal,
    } = ClassesAPI(props);

    const {
      columnsStylesGrow,
      destroyColumnsGrowObserver,
      initColumnsGrowObserver,
    } = ColumnsGrowAPI(props, {
      columnsVisible,
      hasActionsColumn,
      widthsLocal,
    });

    onMounted(() => {
      initColumnsGrowObserver();
    });

    onBeforeUnmount(() => {
      destroyColumnsGrowObserver();
    });

    const {
      activeEditRowKey,
      activeEditModel,
      canAddRow,
      hasActiveEditRow,
      hasRequiredEditableColumns,
      isAddRowActive,
      onAddRow,
      onCancelEditRow,
      onEditRow,
    } = EditAPI(props, {
      columnsVisible,
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

    const isAddDisabled = computed(() => {
      if (hasActiveEditRow.value) {
        return true;
      }

      const addDisabledCallback = get(actionsDisabledCallback.value, "add");

      if (isFunction(addDisabledCallback)) {
        return addDisabledCallback();
      }

      return false;
    });

    const addTitle = computed(() => {
      const addTitleCallback = get(actionsTitleCallback.value, "add");

      if (isFunction(addTitleCallback)) {
        return addTitleCallback();
      }

      return textsLocal.value.actionAddRow;
    });

    return {
      activeEditRowKey,
      activeEditModel,
      allColumnsLength,
      addTitle,
      canAddRow,
      canMoveRowDown,
      canMoveRowUp,
      actionsClassesLocal,
      columnsStylesGrow,
      columnsVisible,
      draggedRowIndex,
      dragOverPosition,
      dragOverRowIndex,
      getRowKey,
      hasActionsColumn,
      hasActiveEditRow,
      hasRequiredEditableColumns,
      hasRows,
      hasRowsFooter,
      iconsLocal,
      isAddDisabled,
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
      widthsLocal,
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
              actionsClasses: this.actionsClasses,
              actionsDisabledCallback: this.actionsDisabledCallback,
              actionsHideCallback: this.actionsHideCallback,
              actionsTitleCallback: this.actionsTitleCallback,
              allColumnsLength: this.allColumnsLength,
              canMoveRowDown: this.canMoveRowDown,
              canMoveRowUp: this.canMoveRowUp,
              cellTag: "th",
              changeModel: this.changeModel,
              columns: this.columnsVisible,
              columnsStylesGrow: this.columnsStylesGrow,
              draggedRowIndex: this.draggedRowIndex,
              extra: this.extra,
              hasActionsColumn: this.hasActionsColumn,
              hasActiveEditRow: false,
              isActionsSticky: this.isActionsSticky,
              isActiveEditMode: false,
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
              widths: this.widthsLocal,
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
                  key: rowKey,
                  id: this.id,
                  actionsClasses: this.actionsClassesLocal,
                  actionsDisabledCallback: this.actionsDisabledCallback,
                  actionsHideCallback: this.actionsHideCallback,
                  actionsTitleCallback: this.actionsTitleCallback,
                  allColumnsLength: this.allColumnsLength,
                  canMoveRowDown: this.canMoveRowDown,
                  canMoveRowUp: this.canMoveRowUp,
                  changeModel: this.changeModel,
                  columns: this.columnsVisible,
                  columnsStylesGrow: this.columnsStylesGrow,
                  draggedRowIndex: this.draggedRowIndex,
                  editModel: this.activeEditRowKey === rowKey ? this.activeEditModel : undefined,
                  errorIcon: this.errorIcon,
                  extra: this.extra,
                  hasActionsColumn: this.hasActionsColumn,
                  hasActiveEditRow: this.hasActiveEditRow,
                  isActionsSticky: this.isActionsSticky,
                  isActiveEditMode: this.activeEditRowKey === rowKey,
                  isCreateMode: false,
                  isDeletable: this.isDeletable,
                  isDeletableConfirm: this.isDeletableConfirm,
                  isDndDisabled: this.hasActiveEditRow,
                  isDragAndDrop: this.isDragAndDrop,
                  isEditable: this.isEditable,
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
                  rowClass: this.rowClass,
                  rowIndex,
                  rows: this.rows,
                  saveRow: this.saveRow,
                  texts: this.textsLocal,
                  widths: this.widthsLocal,
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
                actionsClasses: this.actionsClassesLocal,
                actionsDisabledCallback: this.actionsDisabledCallback,
                actionsHideCallback: this.actionsHideCallback,
                actionsTitleCallback: this.actionsTitleCallback,
                allColumnsLength: this.allColumnsLength,
                canMoveRowDown: this.canMoveRowDown,
                canMoveRowUp: this.canMoveRowUp,
                changeModel: this.changeModel,
                columns: this.columnsVisible,
                columnsStylesGrow: this.columnsStylesGrow,
                draggedRowIndex: this.draggedRowIndex,
                editModel: this.activeEditModel,
                errorIcon: this.errorIcon,
                extra: this.extra,
                hasActionsColumn: this.hasActionsColumn,
                hasActiveEditRow: this.hasActiveEditRow,
                isActionsSticky: this.isActionsSticky,
                isActiveEditMode: true,
                isCreateMode: true,
                isDeletable: false,
                isDeletableConfirm: false,
                isDndDisabled: true,
                isDragAndDrop: this.isDragAndDrop,
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
                rowClass: this.rowClass,
                rowIndex: this.rows.length,
                rows: this.rows,
                saveRow: this.addRow,
                texts: this.textsLocal,
                trClass: "a_table_form__row a_table_form__row_create",
                widths: this.widthsLocal,
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
              actionsClasses: this.actionsClassesLocal,
              actionsDisabledCallback: this.actionsDisabledCallback,
              actionsHideCallback: this.actionsHideCallback,
              actionsTitleCallback: this.actionsTitleCallback,
              allColumnsLength: this.allColumnsLength,
              canMoveRowDown: this.canMoveRowDown,
              canMoveRowUp: this.canMoveRowUp,
              changeModel: this.changeModel,
              columns: this.columnsVisible,
              columnsStylesGrow: this.columnsStylesGrow,
              draggedRowIndex: this.draggedRowIndex,
              extra: this.extra,
              hasActionsColumn: this.hasActionsColumn,
              hasActiveEditRow: this.hasActiveEditRow,
              isActionsSticky: this.isActionsSticky,
              isActiveEditMode: false,
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
              rowClass: this.rowClass,
              rowIndex,
              rows: this.rowsFooter,
              saveRow: this.saveRow,
              texts: this.textsLocal,
              widths: this.widthsLocal,
              trClass: "a_table_form__row a_table_form__row_footer",
            }, this.$slots);
          })),
        ]),
      ]),
      this.canAddRow && h("div", {
        class: "a_mt_3 a_text_right",
      }, [
        h(AButton, {
          class: this.actionsClassesLocal.addRow,
          disabled: this.isAddDisabled,
          extra: this.extra,
          iconLeft: this.iconsLocal.actionAddRow,
          text: this.textsLocal.actionAddRow,
          textScreenReader: this.addTitle,
          title: this.addTitle,
          onClick: this.onAddRow,
        }),
      ]),
    ]);
  },
};
