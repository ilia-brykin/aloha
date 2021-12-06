export default {
  name: "ATableCountProPage",
  props: {
    countsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    emitValue(e) {
      const VALUE = e.target.value;
      this.$emit("update:modelValue", VALUE);
    },
  },
};
