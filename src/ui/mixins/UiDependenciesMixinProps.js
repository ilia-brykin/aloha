export default {
  props: {
    dependencies: {
      type: [Array, Object],
      required: false,
      default: undefined,
    },
    modelDependencies: {
      type: Object,
      required: false,
      default: undefined,
    },
  },
};
