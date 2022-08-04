import {
  h,
} from "vue";

import ColumnStylesAPI from "../compositionAPI/ColumnStylesAPI";

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
    "hasPreview",
    "modelColumnsVisibleMapping",
    "onTogglePreview",
  ],
  setup(props) {
    const {
      columnsStyles,
    } = ColumnStylesAPI(props);

    return {
      columnsStyles,
    };
  },
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
        class: "a_table__td a_table__cell",
        style: this.columnsStyles,
      };
      if (this.hasPreview) {
        ATTRIBUTES.onClick = () => this.onTogglePreview({
          row: this.row,
          rowIndex: this.rowIndex,
        });
      }
      return ATTRIBUTES;
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
