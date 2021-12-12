export default {
  name: "ATableCountProPage",
  props: {
    countsPerPage: {
      type: Array,
      required: false,
      default: () => ["10", "25", "50", "100"],
    },
    limit: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:limit"],
  methods: {
    emitValue(e) {
      if (this.isLoading) {
        return;
      }
      const VALUE = e.target.value;
      this.$emit("update:limit", +VALUE);
    },
  },
};
