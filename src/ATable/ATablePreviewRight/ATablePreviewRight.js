import {
  h,
  onBeforeUnmount,
  onMounted,
  toRef,
} from "vue";

import AButton from "../../AButton/AButton";
import ACloak from "../../ACloak/ACloak";
import AModal from "../../AModal/AModal";
import AResizer from "../../AResizer/AResizer";
import ATranslation from "../../ATranslation/ATranslation";

import ArrowsAPI from "./compositionAPI/ArrowsAPI";
import IdAPI from "./compositionAPI/IdAPI";
import MouseEventsAPI from "./compositionAPI/MouseEventsAPI";
import PreviewRightRewAPI from "../compositionAPI/PreviewRightRewAPI";
import RowAPI from "./compositionAPI/RowAPI";

const ArrowLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>`;
const ArrowRight = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>`;
const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


export default {
  name: "ATablePreviewRight",
  props: {
    countAllRows: {
      type: Number,
      required: true,
    },
    disabledPreviewRowCallback: {
      type: Function,
      required: false,
      default: () => {},
    },
    isLoadingTable: {
      type: Boolean,
      required: false,
    },
    isMobile: {
      type: Boolean,
      required: false,
    },
    limitPagination: {
      type: Number,
      required: false,
      default: undefined,
    },
    offsetPagination: {
      type: Number,
      required: false,
      default: undefined,
    },
    previewStyles: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    usePagination: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    "closePreview",
    "mousedownResizePreviewRight",
    "mousemoveResizePreviewRight",
    "mouseupResizePreviewRight",
    "togglePreviewResize",
    "togglePreview",
    "update:offset",
  ],
  inject: [
    "isLoadingOptions",
  ],
  setup(props, context) {
    const isMobile = toRef(props, "isMobile");

    const {
      previewRef,
    } = PreviewRightRewAPI();

    const {
      idLocal,
    } = IdAPI();

    const {
      mousedown,
      mousemove,
      mouseup,
    } = MouseEventsAPI(context, {
      previewRef,
    });

    const {
      countAllRowsFormatted,
      currentRow,
      nextAvailableRowIndex,
      previousAvailableRowIndex,
      rowNumber,
      rowNumberFormatted,
    } = RowAPI(props);

    const {
      disabledBtnArrowLeft,
      disabledBtnArrowRight,
      toNextRow,
      toPreviousRow,
    } = ArrowsAPI(props, context, {
      nextAvailableRowIndex,
      previousAvailableRowIndex,
      rowNumber,
    });

    onMounted(() => {
      if (!isMobile.value) {
        context.emit("togglePreviewResize", {
          isOpen: true,
          previewRef: previewRef.value,
        });
      }
    });

    onBeforeUnmount(() => {
      if (!isMobile.value) {
        context.emit("togglePreviewResize", {
          isOpen: false,
          previewRef: previewRef.value,
        });
      }
    });

    return {
      countAllRowsFormatted,
      currentRow,
      disabledBtnArrowLeft,
      disabledBtnArrowRight,
      idLocal,
      mousedown,
      mousemove,
      mouseup,
      previewRef,
      rowNumber,
      rowNumberFormatted,
      toNextRow,
      toPreviousRow,
    };
  },
  render() {
    const HEADER = [
      this.isLoadingTable ?
        h(ACloak) :
        h("div", {}, [
          h(ATranslation, {
            class: "a_table__preview_right__header__text",
            tag: "span",
            text: "_A_TABLE_PREVIEW_RIGHT_HEADER_{{rowNumber}}_{{rowNumberFormatted}}_{{countAllRows}}_{{countAllRowsFormatted}}_",
            extra: {
              rowNumber: this.rowNumber,
              rowNumberFormatted: this.rowNumberFormatted,
              countAllRows: this.countAllRows,
              countAllRowsFormatted: this.countAllRowsFormatted,
            },
          }),
          h("div", {
            class: "a_table__preview_right__header__icons",
          }, [
            h(AButton, {
              class: "a_btn a_btn_transparent_dark a_btn_small",
              disabled: this.disabledBtnArrowLeft,
              iconLeft: ArrowLeft,
              title: "_A_TABLE_PREVIEW_RIGHT_PREVIOUS_ROW_",
              textScreenReader: "_A_TABLE_PREVIEW_RIGHT_PREVIOUS_ROW_",
              onClick: this.toPreviousRow,
            }),
            h(AButton, {
              class: "a_btn a_btn_transparent_dark a_btn_small",
              disabled: this.disabledBtnArrowRight,
              iconLeft: ArrowRight,
              title: "_A_TABLE_PREVIEW_RIGHT_NEXT_ROW_",
              textScreenReader: "_A_TABLE_PREVIEW_RIGHT_NEXT_ROW_",
              onClick: this.toNextRow,
            }),
          ]),
        ]),
      !this.isMobile
? h(AButton, {
  class: "a_btn a_btn_transparent_dark a_table__preview_right__btn_close",
  iconLeft: XLg,
  iconClass: "a_table__preview_right__btn_close__icon",
  title: "_A_TABLE_PREVIEW_RIGHT_CLOSE_",
  textScreenReader: "_A_TABLE_PREVIEW_RIGHT_CLOSE_",
  onClick: () => this.$emit("closePreview"),
})
: "",
    ];

    const BODY = [
      this.isLoadingTable
? h(ACloak) :
        this.$slots.preview ?
          this.$slots.preview({
            row: this.currentRow,
            rowIndex: this.rowIndex,
          }) :
          h(ATranslation, {
            text: "_A_TABLE_PREVIEW_RIGHT_HAS_NOT_SLOT_",
          }),
    ];

    if (this.isMobile) {
      return h(AModal, {
        hideFooter: true,
        close: () => this.$emit("closePreview"),
        size: "xxl",
      }, {
        modalHeader: () => HEADER,
        modalBody: () => BODY,
      });
    }

    return h("div", {
      ref: "previewRef",
      id: this.idLocal,
      class: "a_table__preview_right",
      style: this.previewStyles,
      tabindex: -1,
    }, [
      h(AResizer, {
        class: "a_table__preview_right__resizer",
        direction: "x",
        disabled: this.isLoadingOptions,
        onMousedown: this.mousedown,
        onMousemove: this.mousemove,
        onMouseup: this.mouseup,
        onMouseoutDocument: this.mouseup,
      }),
      h(ATranslation, {
        class: "a_sr_only",
        text: "_A_TABLE_PREVIEW_RIGHT_ARIA_LABEL_",
      }),
      h("div", {
        class: "a_table__preview_right__header",
      }, HEADER),
      h("div", {
        class: "a_table__preview_right__body",
      }, BODY),
    ]);
  },
};
