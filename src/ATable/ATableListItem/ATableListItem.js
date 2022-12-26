import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import { get } from "lodash-es";

export default {
  name: "ATableListItem",
  inject: [
    "rowsLocal",
  ],
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
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
    isFooter: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    isSlot() {
      return !!this.slot;
    },

    slot() {
      if (this.isFooter) {
        return this.column.footerSlot;
      }
      return this.column.slot;
    },

    text() {
      if (this.isFooter) {
        return get(this.row, this.column.footerKeyLabel);
      }
      return get(this.row, this.column.keyLabel);
    },
  },
  render() {
    return [
      h(ATranslation, {
        text: this.column.label,
        tag: "dt",
      }),
      h("dd", null, [
        this.isSlot ?
          this.$slots[this.column.slot]({
            column: this.column,
            columnIndex: this.columnIndex,
            row: this.row,
            rowIndex: this.rowIndex,
            rows: this.rowsLocal,
          }) :
          h("span", null, [
            this.text,
          ])
      ]),
    ];
  },
};
