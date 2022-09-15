import {
  h,
} from "vue";

import ATableTd from "../ATableTd/ATableTd";
import ATableTdAction from "../ATableTdAction/ATableTdAction";
import AOneCheckbox from "../../ui/AOneCheckbox/AOneCheckbox";

export default {
  name: "ATableTr",
  props: {
    row: {
      type: Object,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    selectedRowsIndexes: {
      type: Object,
      required: true,
    },
  },
  emits: [
    "setSelectedRowsIndexes",
  ],
  inject: [
    "columnsOrdered",
    "hasPreview",
    "isActionColumnVisible",
    "isMultipleActionsActive",
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
      return ["a_table__row a_table__row_hover", {
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

    isRowSelected() {
      return !!this.selectedRowsIndexes[this.rowIndex];
    },
  },
  methods: {
    toggleCheckbox() {
      this.$emit("setSelectedRowsIndexes", { rowIndex: this.rowIndex });
    },
  },
  render() {
    return h("div", this.rowAttributes, [
      this.isMultipleActionsActive && h("div", {
        scope: "row",
        class: "a_table__td a_table__cell a_table__cell_checkbox",
        style: `width: 50px; min-width: 50px; max-width: 50px;`,
      }, [
        h(AOneCheckbox, {
          isWidthAuto: true,
          modelValue: this.isRowSelected,
          "onUpdate:modelValue": this.toggleCheckbox,
        }),
      ]),
      this.columnsOrdered.map((column, columnIndex) => {
        return h(ATableTd, {
          column,
          columnIndex,
          row: this.row,
          rowIndex: this.rowIndex,
        }, this.$slots);
      }),
      this.isActionColumnVisible && h(ATableTdAction, {
        row: this.row,
        rowIndex: this.rowIndex,
      }, this.$slots),
    ]);
  },
};
