import {
  h,
} from "vue";

export default {
  name: "ACircle",
  props: {
    cx: {
      type: [Number, String],
      required: true,
    },
    cy: {
      type: [Number, String],
      required: true,
    },
    r: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    fill: {
      type: String,
      required: false,
      default: undefined,
    },
    stroke: {
      type: String,
      required: false,
      default: undefined,
    },
    strokeWidth: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
  },
  render() {
    return h("circle", {
      cx: this.cx,
      cy: this.cy,
      r: this.r,
      fill: this.fill,
      stroke: this.stroke,
      "stroke-width": this.strokeWidth,
    });
  },
};
