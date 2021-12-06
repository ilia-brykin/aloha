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
  },
};
