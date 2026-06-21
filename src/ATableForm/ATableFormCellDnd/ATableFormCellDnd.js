import {
  computed,
  h,
} from "vue";

import AButton from "../../AButton/AButton";
import AIcon from "../../AIcon/AIcon";
import ATranslation from "../../ATranslation/ATranslation";

import IdAPI from "./compositionAPI/IdAPI";

import ChevronDown from "aloha-svg/dist/js/bootstrap/ChevronDown";
import ChevronUp from "aloha-svg/dist/js/bootstrap/ChevronUp";
import GripVertical from "aloha-svg/dist/js/bootstrap/GripVertical";

const COLUMN_WIDTH = 56;

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
  },
  setup(props) {
    const {
      idBtnDown,
      idBtnUp,
    } = IdAPI(props);

    return {
      columnStyles: computed(() => ({
        maxWidth: `${ COLUMN_WIDTH }px`,
        minWidth: `${ COLUMN_WIDTH }px`,
        width: `${ COLUMN_WIDTH }px`,
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
              tabindex: this.isDndDisabled ? -1 : undefined,
              title: this.texts.reorderUp,
              textScreenReader: this.texts.reorderUp,
              onClick: () => this.moveRowUp(this.rowIndex),
            }),
            h("span", {
              ariaHidden: true,
              class: "a_table_form__reorder_handle",
              draggable: isHandleDraggable,
              onDragend: isHandleDraggable ? this.onDragend : undefined,
              onDragstart: isHandleDraggable ? ($event => this.onDragstart($event, this.rowIndex)) : undefined,
            }, [
              h(AIcon, {
                class: "a_table_form__reorder_icon",
                icon: GripVertical,
              }),
            ]),
            h("span", {
              class: "a_sr_only",
            }, [
              h(ATranslation, {
                tag: "span",
                text: this.texts.reorderHandle,
              }),
            ]),
            this.canMoveRowDown(this.rowIndex) && h(AButton, {
              id: this.idBtnDown,
              class: "a_sr_only_focusable a_btn a_btn_transparent_dark a_table_form__reorder_button",
              disabled: this.isDndDisabled,
              iconLeft: ChevronDown,
              tabindex: this.isDndDisabled ? -1 : undefined,
              title: this.texts.reorderDown,
              textScreenReader: this.texts.reorderDown,
              onClick: () => this.moveRowDown(this.rowIndex),
            }),
          ]),
    ]);
  },
};
