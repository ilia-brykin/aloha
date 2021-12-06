import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh.vue";

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
  },
};
