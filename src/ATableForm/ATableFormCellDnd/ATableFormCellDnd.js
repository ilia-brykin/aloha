import {
  computed,
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import IdAPI from "./compositionAPI/IdAPI";

const ChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;
const ChevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>`;
const GripVertical = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
  <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>`;
const LockFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>`;


export default {
  name: "ATableFormCellDnd",
  props: {
    canMoveRowDown: {
      type: Function,
      required: true,
    },
    canMoveRowUp: {
      type: Function,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isCreateMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDragAndDrop: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDndDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDndLocked: {
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
    onDragend: {
      type: Function,
      required: true,
    },
    onDragstart: {
      type: Function,
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
      idBtnDown,
      idBtnUp,
    } = IdAPI(props);

    return {
      columnStyles: computed(() => ({
        maxWidth: `${ props.widths.dndColumn }px`,
        minWidth: `${ props.widths.dndColumn }px`,
        width: `${ props.widths.dndColumn }px`,
      })),
      idBtnDown,
      idBtnUp,
    };
  },
  render() {
    const tag = this.isHeader ? "th" : "td";
    const isHandleDraggable = this.isDragAndDrop && !this.isDndDisabled;

    return h(tag, {
      class: [
        "a_table_form__cell",
        `a_table_form__cell_${ tag }`,
        "a_table_form__cell_reorder",
      ],
      style: this.columnStyles,
    }, [
      this.isHeader ?
        h("span", {
          class: "a_sr_only",
        }, [
          h(ATranslation, {
            tag: "span",
            text: this.texts.reorderColumn,
          }),
        ]) :
        this.isCreateMode ?
          null :
        this.isFooter ?
          null :
          h("div", {
            class: "a_table_form__reorder_actions",
          }, [
            this.canMoveRowUp(this.rowIndex) && h(AButton, {
              id: this.idBtnUp,
              class: "a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",
              disabled: this.isDndDisabled,
              iconLeft: ChevronUp,
              preventKeyboardRepeat: true,
              tabindex: this.isDndDisabled ? -1 : undefined,
              title: this.texts.reorderUp,
              textScreenReader: this.texts.reorderUp,
              onClick: () => this.moveRowUp(this.rowIndex),
            }),
            h("span", {
              ariaHidden: true,
              class: [
                "a_table_form__reorder_handle",
                {
                  a_table_form__reorder_handle_disabled: this.isDndDisabled,
                },
              ],
              draggable: isHandleDraggable,
              onDragend: isHandleDraggable ? this.onDragend : undefined,
              onDragstart: isHandleDraggable ? ($event => this.onDragstart($event, this.rowIndex)) : undefined,
            }, [
              h(AIcon, {
                class: "a_table_form__reorder_icon",
                icon: this.isDndLocked ? LockFill : GripVertical,
              }),
            ]),
            h("span", {
              class: "a_sr_only",
            }, [
              h(ATranslation, {
                tag: "span",
                text: this.isDndDisabled ? this.texts.reorderDisabled : this.texts.reorderHandle,
              }),
            ]),
            this.canMoveRowDown(this.rowIndex) && h(AButton, {
              id: this.idBtnDown,
              class: "a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",
              disabled: this.isDndDisabled,
              iconLeft: ChevronDown,
              preventKeyboardRepeat: true,
              tabindex: this.isDndDisabled ? -1 : undefined,
              title: this.texts.reorderDown,
              textScreenReader: this.texts.reorderDown,
              onClick: () => this.moveRowDown(this.rowIndex),
            }),
          ]),
    ]);
  },
};
