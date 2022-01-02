import ATableTd from "../ATableTd/ATableTd.vue";

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
};
