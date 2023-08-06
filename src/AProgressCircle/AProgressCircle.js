import {
  h,
} from "vue";

import CircleAPI from "./compositionAPI/CircleAPI";
import CircleSizesAPI from "./compositionAPI/CircleSizesAPI";
import SvgAPI from "./compositionAPI/SvgAPI";
import ValuePercentAPI from "../AProgress/compositionAPI/ValuePercentAPI";
import WidthAPI from "../AProgress/compositionAPI/WidthAPI";

export default {
  name: "AProgressCircle",
  props: {
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
    rotate: {
      type: Number,
      required: false,
      default: 0,
      validator: value => value >= 0 && value <= 360,
    },
    showValue: {
      type: Boolean,
      required: false,
      default: true,
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 5,
      validator: value => value > 0,
    },
    value: {
      type: Number,
      required: false,
      default: 0,
    },
    valueTextClass: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
    valueTextInteger: {
      type: Boolean,
      required: false,
      default: false,
    },
    width: {
      type: [Number, String],
      required: false,
      default: 125,
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
      circleStyles,
      cxCy,
      radius,
    } = CircleAPI(props, {
      widthPercent,
    });

    const {
      svgTransform,
      svgViewBox,
    } = SvgAPI(props);

    const {
      sizesLocal,
    } = CircleSizesAPI(props);

    return {
      circleStyles,
      cxCy,
      radius,
      sizesLocal,
      svgTransform,
      svgViewBox,
      valuePercent,
      widthPercent,
    };
  },
  render() {
    let text = undefined;
    if (this.$slots.progressText) {
      text = h("span", {
        class: ["a_progress_circle__text", this.valueTextClass],
      }, [
        this.$slots.progressText && this.$slots.progressText({
          valuePercent: this.valuePercent,
        }),
      ]);
    } else if (this.showValue) {
      text = h("span", {
        class: ["a_progress_circle__text", this.valueTextClass],
      }, this.valuePercent);
    }

    return h("div", {
      class: "a_progress_circle",
      style: this.sizesLocal,
      role: "progressbar",
      "aria-valuenow": this.value,
      "aria-valuemin": this.min,
      "aria-valuemax": this.max,
    }, [
      h("svg", {
        viewBox: this.svgViewBox,
        style: this.svgTransform,
      }, [
        h("circle", {
          class: "a_progress_circle__base",
          cx: this.cxCy,
          cy: this.cxCy,
          r: this.radius,
          "stroke-width": this.strokeWidth,
        }),
        h("circle", {
          class: ["a_progress_circle__scale", {
            a_progress_circle__scale_indeterminate: this.indeterminate,
          }],
          cx: this.cxCy,
          cy: this.cxCy,
          r: this.radius,
          "stroke-width": this.strokeWidth,
          style: this.circleStyles,
        }),
      ]),
      text,
    ]);
  },
};
