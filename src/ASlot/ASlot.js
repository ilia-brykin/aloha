export default {
  name: "ASlot",
  inheritAttrs: false,
  render() {
    return this.$slots.default ? this.$slots.default() : null;
  },
};
