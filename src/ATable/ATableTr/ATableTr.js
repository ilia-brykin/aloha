import ATableTd from "../ATableTd/ATableTd";

import {
  h,
} from "vue";

export default {
  name: "ATableTr",
  components: {
    ATableTd,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    modelColumnsMapping: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
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
  render() {
    return h("tr", null, this.columns.map((column, columnIndex) => {
      return h(ATableTd, {
        column,
        columnIndex,
        row: this.row,
        rowIndex: this.rowIndex,
        modelColumnsMapping: this.modelColumnsMapping,
      }, this.$slots);
    }));
  },
};
