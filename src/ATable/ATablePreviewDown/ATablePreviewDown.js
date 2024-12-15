import {
  h,
  onMounted,
} from "vue";

import AButton from "../../AButton/AButton";
import ATranslation from "../../ATranslation/ATranslation";

import FocusAPI from "./compositionAPI/FocusAPI";

import XLg from "aloha-svg/dist/js/bootstrap/XLg";

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
