/* eslint vue/component-api-style: off */
import {
  h,
} from "vue";

import AKeysCode from "../../../../const/AKeysCode";

// @vue/component
export default {
  name: "APanelYearItem",
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

    keypress($event) {
      if ($event.keyCode === AKeysCode.enter ||
        $event.keyCode === AKeysCode.space) {
        this.selectYearLocal(true);
        $event.stopPropagation();
        $event.preventDefault();
      }
    },
  },
  render() {
    return h("li", {
      id: this.idForList,
      class: ["cell", {
        actived: this.isYearActive,
        disabled: this.isDisabledLocal,
      }],
      role: "option",
      tabindex: -1,
      "aria-selected": this.ariaSelected,
      onClick: this.selectYearLocal,
      onKeypress: this.keypress,
    }, this.year);
  },
};
