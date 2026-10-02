import {
  h,
  onMounted,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import FocusAPI from "./compositionAPI/FocusAPI";

const XLg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>`;


export default {
  name: "ATablePreviewDown",
  props: {
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
  },
  inject: [
    "onTogglePreview",
  ],
  setup() {
    const {
      componentRef,
      setFocusToComponent,
    } = FocusAPI();

    onMounted(() => {
      setFocusToComponent();
    });

    return {
      componentRef,
    };
  },
  render() {
    return h("div", {
      ref: "componentRef",
      class: "a_table__preview_down",
      tabindex: -1,
    }, [
      h(ATranslation, {
        class: "a_sr_only",
        text: "_A_TABLE_PREVIEW_DOWN_ARIA_LABEL_",
      }),
      this.$slots.preview && this.$slots.preview({
        row: this.row,
        rowIndex: this.rowIndex,
      }),
      h(AButton, {
        class: "a_btn a_btn_transparent_dark a_table__preview_down__btn_close",
        iconLeft: XLg,
        iconClass: "a_table__preview_down__btn_close__icon",
        title: "_A_TABLE_PREVIEW_DOWN_CLOSE_",
        textScreenReader: "_A_TABLE_PREVIEW_DOWN_CLOSE_",
        onClick: () => this.onTogglePreview({
          row: this.row,
          rowIndex: this.rowIndex,
        }),
      }),
    ]);
  },
};
