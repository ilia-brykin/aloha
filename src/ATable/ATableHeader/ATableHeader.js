import ATableHeaderTh from "../ATableHeaderTh/ATableHeaderTh";

import {
  h,
} from "vue";

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
  render() {
    return h("thead", null, [
      h("tr", null, [
        this.columns.map(column => {
          return h(ATableHeaderTh, {
            column: column,
            "is-loading": this.isLoading,
            "model-sort": this.modelSort,
            "model-columns-mapping": this.modelColumnsMapping,
            "onChange-model-sort": this.$attrs["onChange-model-sort"],
          });
        }),
      ]),
    ]);
  },
};
