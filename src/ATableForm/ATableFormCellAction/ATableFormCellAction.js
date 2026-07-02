import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import DeleteAPI from "./compositionAPI/DeleteAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import HiddenAPI from "./compositionAPI/HiddenAPI";
import StylesAPI from "./compositionAPI/StylesAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

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
    widths: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props) {
    const {
      isDeleteDisabled,
      isEditDisabled,
    } = DisabledAPI(props);

    const {
      isDeleteHidden,
      isEditHidden,
    } = HiddenAPI(props);

    const {
      idBtnDelete,
      onDeleteClick,
    } = DeleteAPI(props, {
      isActionsDisabled: isDeleteDisabled,
    });

    const {
      columnStyles,
    } = StylesAPI(props);

    const {
      deleteTitle,
      editTitle,
    } = TitleAPI(props);

    return {
      columnStyles,
      deleteTitle,
      editTitle,
      idBtnDelete,
      isDeleteDisabled,
      isDeleteHidden,
      isEditDisabled,
      isEditHidden,
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
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.editCancel,
                ],
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
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.editSave,
                ],
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
              (this.isDeletable || this.isDeletableConfirm) && !this.isDeleteHidden && h(AButton, {
                id: this.idBtnDelete,
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.delete,
                ],
                disabled: this.isDeleteDisabled,
                iconLeft: Trash,
                title: this.deleteTitle,
                textScreenReader: this.deleteTitle,
                onClick: this.onDeleteClick,
              }),
              this.isEditable && !this.isEditHidden && h(AButton, {
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.edit,
                ],
                disabled: this.isEditDisabled,
                iconLeft: PencilFill,
                title: this.editTitle,
                textScreenReader: this.editTitle,
                onClick: () => this.onEditRow({
                  row: this.row,
                  rowIndex: this.rowIndex,
                }),
              }),
            ]),
    ]);
  },
};
