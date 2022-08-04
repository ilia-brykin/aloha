import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";

export default {
  name: "ATablePreviewRight",
  props: {
    rows: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    previewHeaderTag: {
      type: String,
      required: true,
    },
  },
  emits: [
    "closePreview",
  ],
  computed: {
    currentRow() {
      return this.rows[this.rowIndex];
    },
  },
  methods: {
    onClosePreview() {
      this.$emit("closePreview");
    },
  },
  render() {
    return h("div", {
      class: "a_table__preview_right",
    }, [
      h(this.previewHeaderTag, {
        class: "a_table__preview_right__header",
      }, [
        this.$slots.tableDetailsLabel ?
          this.$slots.tableDetailsLabel({
            row: this.currentRow,
            rowIndex: this.rowIndex,
          }) :
          h("span", null, "Benutzen sie bitte slot: 'tableDetailsLabel'"),
        h("button", {
          class: "a_btn a_btn_link a_table__preview_right__btn_close",
          type: "button",
          onClick: this.onClosePreview,
        }, [
          h(AIcon, {
            icon: "Close",
            class: "a_table__preview_right__btn_close__icon",
          }),
        ]),
      ]),
      h("div", {
        class: "a_table__preview_right__body",
      }, [
        this.$slots.tableDetailsBody ?
          this.$slots.tableDetailsBody({
            row: this.currentRow,
            rowIndex: this.rowIndex,
          }) :
          h("span", null, "Benutzen sie bitte slot: 'tableDetailsBody'"),
      ]),
    ]);
  },
};
