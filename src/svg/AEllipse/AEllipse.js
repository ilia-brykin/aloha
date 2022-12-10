import {
  h,
} from "vue";

export default {
  name: "AEllipse",
  props: {
    cx: {
      type: [Number, String],
      required: true,
    },
    cy: {
      type: [Number, String],
      required: true,
    },
    rx: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    ry: {
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
    return h("ellipse", {
      cx: this.cx,
      cy: this.cy,
      rx: this.rx,
      ry: this.ry,
      fill: this.fill,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
    });
  },
};
