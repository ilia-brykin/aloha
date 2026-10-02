import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import DeleteAPI from "./compositionAPI/DeleteAPI";
import DisabledAPI from "./compositionAPI/DisabledAPI";
import HiddenAPI from "./compositionAPI/HiddenAPI";
import IdsAPI from "./compositionAPI/IdsAPI";
import StylesAPI from "./compositionAPI/StylesAPI";
import TitleAPI from "./compositionAPI/TitleAPI";

const Floppy2Fill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy2-fill" viewBox="0 0 16 16">
  <path d="M12 2h-2v3h2z"/>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"/>
</svg>`;
const PencilFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>`;
const Trash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>`;
const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


export default {
  name: "ATableFormCellAction",
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
    extra: {
      type: Object,
      required: false,
      default: undefined,
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
    isActionsSticky: {
      type: Boolean,
      required: false,
      default: false,
    },
    isActiveEditMode: {
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
      idBtnCancel,
      idBtnDelete,
      idBtnEdit,
      idBtnSave,
    } = IdsAPI(props);

    const {
      onDeleteClick,
    } = DeleteAPI(props, {
      idBtnDelete,
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
      idBtnCancel,
      idBtnDelete,
      idBtnEdit,
      idBtnSave,
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
                id: this.idBtnSave,
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.editSave,
                ],
                disabled: this.isSaving,
                extra: this.extra,
                iconLeft: Floppy2Fill,
                title: this.texts.actionEditSave,
                textScreenReader: this.texts.actionEditSave,
                onClick: () => this.onSaveEditRow({
                  id: this.id,
                  row: this.row,
                  rowIndex: this.rowIndex,
                }),
              }),
              h(AButton, {
                id: this.idBtnCancel,
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.editCancel,
                ],
                disabled: this.isSaving,
                extra: this.extra,
                iconLeft: XLg,
                title: this.texts.actionEditCancel,
                textScreenReader: this.texts.actionEditCancel,
                onClick: () => this.onCancelEditRow({
                  id: this.id,
                  row: this.row,
                  rowIndex: this.rowIndex,
                  trigger: "cancel",
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
                extra: this.extra,
                iconLeft: Trash,
                title: this.deleteTitle,
                textScreenReader: this.deleteTitle,
                onClick: this.onDeleteClick,
              }),
              this.isEditable && !this.isEditHidden && h(AButton, {
                id: this.idBtnEdit,
                class: [
                  "a_table_form__action_button",
                  this.actionsClasses.edit,
                ],
                disabled: this.isEditDisabled,
                extra: this.extra,
                iconLeft: PencilFill,
                title: this.editTitle,
                textScreenReader: this.editTitle,
                onClick: () => this.onEditRow({
                  id: this.id,
                  row: this.row,
                  rowIndex: this.rowIndex,
                }),
              }),
            ]),
    ]);
  },
};
