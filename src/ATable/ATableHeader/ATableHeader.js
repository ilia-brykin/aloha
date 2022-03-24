import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";

export default {
  name: "ATableHeader",
  components: {
    ATableHeaderTh,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    modelSort: {
      type: String,
      required: false,
    },
    modelColumnsMapping: {
      type: Object,
      required: true,
    },
  },
};
