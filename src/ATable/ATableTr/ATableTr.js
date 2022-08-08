import {
  h,
} from "vue";

import ATableTd from "../ATableTd/ATableTd";
import ATableTdAction from "../ATableTdAction/ATableTdAction";

export default {
  name: "ATableTr",
  components: {
    ATableTd,
    ATableTdAction,
  },
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
    "columnsOrdered",
    "hasPreview",
    "previewRightRowIndex",
    "previewRightRowIndexLast",
    "tableId",
  ],
  computed: {
    rowId() {
      return `${ this.tableId }_${ this.rowIndex }`;
    },

    rowAttributes() {
      const ATTRIBUTES = {
        id: this.rowId,
        class: this.rowClass,
        role: "row",
      };
      if (this.hasPreview) {
        ATTRIBUTES.tabindex = -1;
      }
      return ATTRIBUTES;
    },

    rowClass() {
      return ["a_table__row", {
        a_table__row_focus: this.isPreviewRightForCurrentRowOpen,
        a_table__row_focus_was: this.isPreviewRightForCurrentRowWasOpen,
      }];
    },

    isPreviewRightForCurrentRowOpen() {
      return this.rowIndex === this.previewRightRowIndex;
    },

    isPreviewRightForCurrentRowWasOpen() {
      return !this.isPreviewRightForCurrentRowOpen &&
        this.rowIndex === this.previewRightRowIndexLast;
    },
  },
  render() {
    return h("div", this.rowAttributes, [
      this.columnsOrdered.map((column, columnIndex) => {
        return h(ATableTd, {
          column,
          columnIndex,
          row: this.row,
          rowIndex: this.rowIndex,
        }, this.$slots);
      }),
      h(ATableTdAction, {
        row: this.row,
        rowIndex: this.rowIndex,
      }, this.$slots),
    ]);
  },
};
