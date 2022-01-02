import {
  cloneDeep,
} from "lodash-es";

export default {
  name: "ATableTopPanel",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    modelColumns: {
      type: Array,
      required: true,
    },
  },
  emits: [
    "update:model-columns",
  ],
  methods: {
    changeModelColumns(columnId) {
      const MODEL_COLUMNS = cloneDeep(this.modelColumns);
      const INDEX = MODEL_COLUMNS.indexOf(columnId);
      if (INDEX !== -1) {
        MODEL_COLUMNS.splice(INDEX, 1);
      } else {
        MODEL_COLUMNS.push(columnId);
      }
      this.$emit("update:model-columns", MODEL_COLUMNS);
    },
  },
};
