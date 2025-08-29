import {
  h,
} from "vue";

import AttributesAPI from "./compositionAPI/AttributesAPI";
import SelectAPI from "./compositionAPI/SelectAPI";

// @vue/component
export default {
  name: "APanelYearItem",
  props: {
    isDisabled: {
      type: Function,
      required: true,
    },
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
  },
  emits: [
    "selectYear",
  ],
  setup(props, context) {
    const {
      ariaSelected,
      idForList,
      isDisabledLocal,
      isYearActive,
    } = AttributesAPI(props);

    const {
      keypress,
      selectYearLocal,
    } = SelectAPI(props, context, {
      isDisabledLocal,
    });

    return {
      ariaSelected,
      idForList,
      isDisabledLocal,
      isYearActive,
      keypress,
      selectYearLocal,
    };
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
