import {
  h,
} from "vue";
import {
  get,
} from "lodash-es";

export default {
  name: "ATableTd",
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
  inject: [
    "modelColumnsVisibleMapping",
  ],
  computed: {
    text() {
      return get(this.row, this.column.path);
    },

    path() {
      return this.column.path;
    },

    isSlot() {
      return !!this.column.slot;
    },

    attributesForTd() {
      const ATTRIBUTES = {
        class: "a_table__td a_table__cell"
      };
      if (!this.isVisible) {
        ATTRIBUTES.style = {
          display: "none",
        };
      }
      return ATTRIBUTES;
    },

    isVisible() {
      return this.modelColumnsVisibleMapping[this.column.id];
    },
  },
  render() {
    return h("div", this.attributesForTd, this.isSlot ?
      this.$slots[this.column.slot]({
        column: this.column,
        "column-index": this.columnIndex,
        row: this.row,
        "row-index": this.rowIndex,
      }) :
      [
        h("span", null, [
          this.text,
        ])
      ]);
  },
};
