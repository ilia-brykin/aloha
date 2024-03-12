import {
  h,
} from "vue";

import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";
import ATableHeaderThAction from "../ATableHeaderThAction/ATableHeaderThAction";

export default {
  name: "ATableGroupedHeader",
  components: {
    ATableHeaderTh,
    ATableHeaderThAction,
  },
  props: {
    areAllRowsSelected: {
      type: Boolean,
      required: true,
    },
    areAllVisibleRowsSelected: {
      type: Boolean,
      required: true,
    },
    areSomeRowsSelected: {
      type: Boolean,
      required: true,
    },
    columnsForRender: {
      type: Array,
      required: true,
    },
    disabledOptions: {
      type: Boolean,
      required: false,
    },
    disabledSort: {
      type: Boolean,
      required: false,
    },
    hasMultipleActions: {
      type: Boolean,
      required: true,
    },
    isRowActionsStickyLocal: {
      type: Boolean,
      required: true,
    },
    isSortingMultiColumn: {
      type: Boolean,
      required: false,
    },
    modelSort: {
      type: Array,
      required: true,
    },
    rowsLocalLength: {
      type: Number,
      required: true,
    },
    showFirstSortingSequenceNumber: {
      type: Boolean,
      required: false,
    },
    sortingSequenceNumberClass: {
      type: [String, Object],
      required: false,
    },
  },
  emits: [
    "setSelectedRowsIndexes",
  ],
  inject: [
    "changeColumnsOrdering",
    "columnsFilteredForRender",
    "isActionColumnVisible",
    "isMobile",
    "isMultipleActionsActive",
  ],
  render() {
    return h("div", {
      ref: "root",
      role: "rowgroup",
      class: "a_table__head",
    }, [
      h("div", {
        class: "a_table__row a_table__head__row",
        role: "row",
      }, [
        this.columnsForRender,
        this.isActionColumnVisible && h(ATableHeaderThAction, {
          disabledOptions: this.disabledOptions,
          isRowActionsStickyLocal: this.isRowActionsStickyLocal,
        }),
      ]),
    ]);
  },
};
