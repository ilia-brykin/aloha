import {
  h,
} from "vue";

import ValuePercentAPI from "./compositionAPI/ValuePercentAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

export default {
  name: "AProgress",
  props: {
    classProgressBar: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    revers: {
      type: Boolean,
      required: false,
      default: false,
    },
    showValue: {
      type: Boolean,
      required: false,
      default: true,
    },
    value: {
      type: Number,
      required: false,
      default: 0,
    },
    valueTextInteger: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const {
      widthPercent,
    } = WidthAPI(props);

    const {
      valuePercent,
    } = ValuePercentAPI(props, {
      widthPercent,
    });

    return {
      valuePercent,
      widthPercent,
    };
  },
  render() {
    return h("div", {
      class: ["a_progress", {
        a_progress_revers: this.revers,
      }],
    }, [
      h("div", {
        class: ["a_progress__bar", this.classProgressBar],
        role: "progressbar",
        "aria-valuenow": this.value,
        "aria-valuemin": this.min,
        "aria-valuemax": this.max,
        style: {
          width: `${ this.widthPercent }%`,
        },
      }, [
        this.showValue && h("span", {
          class: "a_progress__text",
        }, this.valuePercent),
      ]),
    ]);
  },
};
