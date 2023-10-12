import {
  h,
} from "vue";

import AButton from "../../AButton/AButton";

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
  render() {
    return h("div", {
      class: "a_table__preview_down",
    }, [
      this.$slots.previewDown && this.$slots.previewDown({
        row: this.row,
        rowIndex: this.rowIndex,
      }),
      h(AButton, {
        class: "a_btn a_btn_transparent_dark a_table__preview_down__btn_close",
        iconLeft: "Close",
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
