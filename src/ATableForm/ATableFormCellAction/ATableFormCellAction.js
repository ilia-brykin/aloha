import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import DeleteAPI from "./compositionAPI/DeleteAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import StylesAPI from "./compositionAPI/StylesAPI";

import Floppy2Fill from "aloha-svg/dist/js/bootstrap/Floppy2Fill";
import PencilFill from "aloha-svg/dist/js/bootstrap/PencilFill";
import Trash from "aloha-svg/dist/js/bootstrap/Trash";
import XLg from "aloha-svg/dist/js/bootstrap/XLg";


export default {
  name: "ATableFormCellAction",
  props: {
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
    isSaving: {
      type: Boolean,
      required: false,
      default: false,
    },
    onCancelEditRow: {
      type: Function,
      required: true,
    },
    onDeleteRow: {
      type: Function,
      required: true,
    },
    onEditRow: {
      type: Function,
      required: true,
    },
    onSaveEditRow: {
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
    texts: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props) {
    const {
      isActionsDisabled,
    } = DisabledAPI(props);

    const {
      idBtnDelete,
      onDeleteClick,
    } = DeleteAPI(props, {
      isActionsDisabled,
    });

    const {
      columnStyles,
    } = StylesAPI(props);

    return {
      columnStyles,
      idBtnDelete,
      isActionsDisabled,
      onDeleteClick,
    };
  },
  render() {
    const tag = this.isHeader ? "th" : "td";

    return h(tag, {
      class: [
        "a_table_form__cell",
        `a_table_form__cell_${ tag }`,
        "a_table_form__cell_actions",
        {
          a_table_form__cell_actions_sticky: this.isActionsSticky,
        },
      ],
      style: this.columnStyles,
    }, [
      this.isHeader ?
        h("span", {
          class: "a_sr_only",
        }, [
          h(ATranslation, {
            tag: "span",
            text: this.texts.actionsColumn,
          }),
        ]) :
        this.isFooter ?
          null :
          h("div", {
            class: "a_table_form__actions",
            role: "group",
          }, this.isActiveEditMode ?
            [
              h(AButton, {
                class: "a_btn a_btn_transparent_primary a_table_form__action_button",
                disabled: this.isSaving,
                iconLeft: XLg,
                title: this.texts.actionEditCancel,
                textScreenReader: this.texts.actionEditCancel,
                onClick: () => this.onCancelEditRow({
                  row: this.row,
                  rowIndex: this.rowIndex,
                }),
              }),
              h(AButton, {
                class: "a_btn a_btn_transparent_primary a_table_form__action_button",
                disabled: this.isSaving,
                iconLeft: Floppy2Fill,
                title: this.texts.actionEditSave,
                textScreenReader: this.texts.actionEditSave,
                onClick: () => this.onSaveEditRow({
                  row: this.row,
                  rowIndex: this.rowIndex,
                }),
              }),
            ] :
            [
              (this.isDeletable || this.isDeletableConfirm) && h(AButton, {
                id: this.idBtnDelete,
                class: "a_btn a_btn_transparent_danger a_table_form__action_button",
                disabled: this.isActionsDisabled,
                iconLeft: Trash,
                title: this.texts.actionDelete,
                textScreenReader: this.texts.actionDelete,
                onClick: this.onDeleteClick,
              }),
              this.isEditable && h(AButton, {
                class: "a_btn a_btn_transparent_primary a_table_form__action_button",
                disabled: this.isActionsDisabled,
                iconLeft: PencilFill,
                title: this.texts.actionEdit,
                textScreenReader: this.texts.actionEdit,
                onClick: () => this.onEditRow({
                  row: this.row,
                  rowIndex: this.rowIndex,
                }),
              }),
            ]),
    ]);
  },
};
