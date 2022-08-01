import {
  h,
} from "vue";

import ATranslation from "../../ATranslation/ATranslation";

import { get } from "lodash-es";

export default {
  name: "ATableListItem",
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
  },
  computed: {
    isSlot() {
      return !!this.column.slot;
    },

    text() {
      return get(this.row, this.column.path);
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
            "column-index": this.columnIndex,
            row: this.row,
            "row-index": this.rowIndex,
          }) :
          h("span", null, [
            this.text,
          ])
      ]),
    ];
  },
};
