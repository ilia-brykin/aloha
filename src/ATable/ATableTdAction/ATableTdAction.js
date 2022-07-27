import {
  h,
} from "vue";

export default {
  name: "ATableTdAction",
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
  computed: {

  },
  render() {
    return h("div", {
      class: "a_table__td a_table__cell a_table__cell_action",
    }, "actions");
  },
};
