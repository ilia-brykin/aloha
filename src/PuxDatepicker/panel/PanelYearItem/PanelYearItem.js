// @vue/component
export default {
  name: "PanelYearItem",
  props: {
    prefixForId: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    yearFromValue: {
      type: Number,
      required: false,
      default: undefined,
    },
    yearIndex: {
      type: Number,
      required: true,
    },
    isDisabled: {
      type: Function,
      required: true,
    },
  },
  emits: [
    "selectYear",
  ],
  computed: {
    isDisabledLocal() {
      return this.isDisabled(this.year);
    },

    isYearActive() {
      return this.yearFromValue === this.year;
    },

    idForList() {
      return `${ this.prefixForId }${ this.yearIndex }`;
    },

    ariaSelected() {
      return `${ this.isYearActive }`;
    },
  },
  methods: {
    selectYearLocal(isButtonClick) {
      if (this.isDisabledLocal) {
        return;
      }
      this.$emit("selectYear", { year: this.year, isButtonClick });
    },
  },
};
