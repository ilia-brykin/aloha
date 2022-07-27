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
  ],
  render() {
    return h("div", {
      class: "a_table__row",
    }, [
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
      }),
    ]);
  },
};
