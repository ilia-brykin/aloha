import {
  h,
  nextTick,
} from "vue";
import {
  AAlert,
  AErrors,
} from "../../index";

import ATableFormCell from "../ATableFormCell/ATableFormCell";
import ATableFormCellAction from "../ATableFormCellAction/ATableFormCellAction";
import ATableFormCellDnd from "../ATableFormCellDnd/ATableFormCellDnd";
import ATableFormTh from "../ATableFormTh/ATableFormTh";

import EditAPI from "./compositionAPI/EditAPI";
import ErrorsAPI from "./compositionAPI/ErrorsAPI";
import FocusAPI from "./compositionAPI/FocusAPI";
import IdAPI from "./compositionAPI/IdAPI";

import {
  cloneDeep,
} from "lodash-es";

export default {
  name: "ATableFormRow",
  props: {
    allColumnsLength: {
      type: Number,
      required: true,
    },
    canMoveRowDown: {
      type: Function,
      required: true,
    },
    canMoveRowUp: {
      type: Function,
      required: true,
    },
    cellTag: {
      type: String,
      required: false,
      default: undefined,
    },
    columns: {
      type: Array,
      required: true,
    },
    columnsStylesGrow: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    draggedRowIndex: {
      type: Number,
      required: false,
      default: undefined,
    },
    editModel: {
      type: Object,
      required: false,
      default: undefined,
    },
    errorIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    hasActionsColumn: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasActiveEditRow: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
    isActiveEditMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    isActionsSticky: {
      type: Boolean,
      required: false,
      default: false,
    },
    isCreateMode: {
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
    isDndDisabled: {
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
    isFooter: {
      type: Boolean,
      required: false,
      default: false,
    },
    isHeader: {
      type: Boolean,
      required: false,
      default: false,
    },
    moveRowDown: {
      type: Function,
      required: true,
    },
    moveRowUp: {
      type: Function,
      required: true,
    },
    onCancelEditRow: {
      type: Function,
      required: true,
    },
    onDeleteRow: {
      type: Function,
      required: true,
    },
    onDragend: {
      type: Function,
      required: true,
    },
    onDragleave: {
      type: Function,
      required: false,
      default: undefined,
    },
    onDragover: {
      type: Function,
      required: false,
      default: undefined,
    },
    onDragstart: {
      type: Function,
      required: true,
    },
    onDrop: {
      type: Function,
      required: false,
      default: undefined,
    },
    onEditRow: {
      type: Function,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    saveRow: {
      type: Function,
      required: true,
    },
    texts: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    trClass: {
      type: [String, Object, Array],
      required: false,
      default: undefined,
    },
    widths: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props) {
    const {
      idTr,
    } = IdAPI(props);

    const {
      focusFirstEditableElement,
    } = FocusAPI({
      idTr,
    });

    const {
      errorsLocal,
      hasErrors,
      optionsListForErrors,
    } = ErrorsAPI(props);

    const {
      cancelEditRow,
      isSaving,
      modelLocal,
      saveEditRow,
      updateModelLocal,
    } = EditAPI(props, {
      errorsLocal,
    });

    return {
      cancelEditRow,
      errorsLocal,
      focusFirstEditableElement,
      hasErrors,
      idTr,
      isSaving,
      modelLocal,
      optionsListForErrors,
      saveEditRow,
      updateModelLocal,
    };
  },
  computed: {
    currentRowData() {
      return this.isActiveEditMode && this.modelLocal ? this.modelLocal : this.row;
    },

    trClassLocal() {
      return [
        this.trClass,
        {
          a_table_form__row_active: !this.isHeader && !this.isFooter && this.isActiveEditMode,
          a_table_form__row_errors: !this.isHeader && !this.isFooter && this.hasErrors,
          a_table_form__row_inactive: !this.isHeader && !this.isFooter && this.hasActiveEditRow && !this.isActiveEditMode,
        },
      ];
    },
  },
  watch: {
    isActiveEditMode: {
      immediate: true,
      handler(isActiveEditMode) {
        if (isActiveEditMode) {
          this.modelLocal = cloneDeep(this.editModel === undefined ? this.row : this.editModel);
          this.errorsLocal = {};
          nextTick(() => {
            this.focusFirstEditableElement();
          });
          return;
        }

        this.errorsLocal = {};
        this.isSaving = false;
      },
    },
  },
  render() {
    const rows = [];

    if (this.isActiveEditMode && this.texts.editInfoText) {
      rows.push(h("tr", {
        class: "a_table_form__row a_table_form__row_info",
        key: `info_${ this.rowIndex }`,
      }, [
        h("td", {
          class: "a_table_form__cell a_table_form__cell_info",
          colspan: this.allColumnsLength,
        }, [
          h(AAlert, {
            alertClass: "a_table_form__info",
            html: this.texts.editInfoText,
            isVisible: true,
            type: "info",
          }),
        ]),
      ]));
    }

    rows.push(h("tr", {
      id: this.idTr,
      "aria-grabbed": !this.isHeader && !this.isFooter ? this.draggedRowIndex === this.rowIndex : undefined,
      class: this.trClassLocal,
      key: `main_${ this.rowIndex }`,
      onDragleave: this.onDragleave && ($event => this.onDragleave($event, this.rowIndex)),
      onDragover: this.onDragover && ($event => this.onDragover($event, this.rowIndex)),
      onDrop: this.onDrop && ($event => this.onDrop($event, this.rowIndex)),
    }, [
      this.isDragAndDrop ?
        h(ATableFormCellDnd, {
          id: this.idTr,
          canMoveRowDown: this.canMoveRowDown,
          canMoveRowUp: this.canMoveRowUp,
          isDndDisabled: this.isDndDisabled,
          isDragAndDrop: this.isDragAndDrop,
          isFooter: this.isFooter,
          isHeader: this.isHeader,
          moveRowDown: this.moveRowDown,
          moveRowUp: this.moveRowUp,
          onDragend: this.onDragend,
          onDragstart: this.onDragstart,
          rowIndex: this.rowIndex,
          texts: this.texts,
          widths: this.widths,
        }) :
        null,
      ...this.columns.map((column, columnIndex) => {
        if (this.isHeader) {
          return h(ATableFormTh, {
            column,
            columnStyle: this.columnsStylesGrow[column.id],
            isEditable: this.isEditable,
          });
        }

        return h(ATableFormCell, {
          id: this.idTr,
          column,
          columnIndex,
          columnStyle: this.columnsStylesGrow[column.id],
          errorIcon: this.errorIcon,
          errors: this.errorsLocal,
          isEditable: this.isEditable,
          isEditMode: this.isActiveEditMode,
          isFooter: this.isFooter,
          onUpdateRowData: this.updateModelLocal,
          row: this.row,
          rowData: this.currentRowData,
          rowIndex: this.rowIndex,
          rows: this.rows,
          tag: this.cellTag,
        }, this.$slots);
      }),
      this.hasActionsColumn ?
        h(ATableFormCellAction, {
          id: this.idTr,
          hasActiveEditRow: this.hasActiveEditRow,
          isActiveEditMode: this.isActiveEditMode,
          isActionsSticky: this.isActionsSticky,
          isDeletable: this.isDeletable,
          isDeletableConfirm: this.isDeletableConfirm,
          isEditable: this.isEditable,
          isFooter: this.isFooter,
          isHeader: this.isHeader,
          isSaving: this.isSaving,
          onCancelEditRow: this.cancelEditRow,
          onDeleteRow: this.onDeleteRow,
          onEditRow: this.onEditRow,
          onSaveEditRow: this.saveEditRow,
          row: this.row,
          rowIndex: this.rowIndex,
          texts: this.texts,
          widths: this.widths,
        }) :
        null,
    ]));

    if (this.isActiveEditMode && this.hasErrors) {
      rows.push(h("tr", {
        class: "a_table_form__row a_table_form__row_errors",
        key: `errors_${ this.rowIndex }`,
      }, [
        h("td", {
          class: "a_table_form__cell a_table_form__cell_errors",
          colspan: this.allColumnsLength,
        }, [
          h(AErrors, {
            autoFocus: true,
            closable: false,
            errors: this.errorsLocal,
            optionsList: this.optionsListForErrors,
            idPrefix: this.idTr,
          }),
        ]),
      ]));
    }

    return rows;
  },
};
