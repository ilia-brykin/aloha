import {
  h,
} from "vue";

import ClassBarAPI from "./compositionAPI/ClassBarAPI";
import DurationAPI from "./compositionAPI/DurationAPI";
import ValuePercentAPI from "./compositionAPI/ValuePercentAPI";
import WidthAPI from "./compositionAPI/WidthAPI";

export default {
  name: "AProgress",
  props: {
    classProgressBar: {
      type: [String, Object, Function],
      required: false,
      default: undefined,
    },
    duration: {
      type: Number,
      required: false,
      default: undefined,
    },
    indeterminate: {
      type: Boolean,
      required: false,
      default: false,
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
    striped: {
      type: Boolean,
      required: false,
      default: false,
    },
    stripedFlow: {
      type: Boolean,
      required: false,
      default: false,
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

    const {
      classProgressBarLocal,
    } = ClassBarAPI(props, {
      widthPercent,
    });

    const {
      durationLocal,
    } = DurationAPI(props);

    return {
      classProgressBarLocal,
      durationLocal,
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
        class: [
          "a_progress__bar",
          {
            a_progress__bar_striped: this.striped,
            a_progress__bar_striped_flow: this.stripedFlow,
            a_progress__bar_indeterminate: this.indeterminate,
          },
          this.classProgressBarLocal,
        ],
        role: "progressbar",
        "aria-valuenow": this.value,
        "aria-valuemin": this.min,
        "aria-valuemax": this.max,
        style: {
          width: `${ this.widthPercent }%`,
          "animation-duration": this.durationLocal,
        },
      }, [
        this.showValue && h("span", {
          class: "a_progress__text",
        }, [
          this.valuePercent,
          this.$slots.progressText && this.$slots.progressText({
            valuePercent: this.valuePercent,
          }),
        ]),
      ]),
    ]);
  },
};
