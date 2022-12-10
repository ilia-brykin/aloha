import {
  h,
} from "vue";

export default {
  name: "ALine",
  props: {
    x1: {
      type: [Number, String],
      required: true,
      default: 0,
    },
    x2: {
      type: [Number, String],
      required: true,
      default: 0,
    },
    y1: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    y2: {
      type: [Number, String],
      required: false,
      default: 0,
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
    return h("line", {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
    });
  },
};
