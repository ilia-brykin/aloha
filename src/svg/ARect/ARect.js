import {
  h,
} from "vue";

import FillStrokeAPI from "../compositionAPI/FillStrokeAPI";

export default {
  name: "ARect",
  props: {
    width: {
      type: [Number, String],
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
    x: {
      type: [Number, String],
      required: true,
    },
    y: {
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
      default: "currentColor",
    },
    stroke: {
      type: String,
      required: false,
      default: "currentColor",
    },
    strokeWidth: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    style: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      styleLocal,
    } = FillStrokeAPI(props);

    return {
      styleLocal,
    };
  },
  render() {
    return h("rect", {
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y,
      rx: this.rx,
      ry: this.ry,
      style: this.styleLocal,
    });
  },
};
