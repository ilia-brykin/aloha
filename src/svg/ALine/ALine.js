import {
  h,
} from "vue";

import StrokeAPI from "../compositionAPI/StrokeAPI";

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
      default: "currentColor",
    },
    strokeWidth: {
      type: [Number, String],
      required: false,
      default: 1,
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
    } = StrokeAPI(props);

    return {
      styleLocal,
    };
  },
  render() {
    return h("line", {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2,
      style: this.styleLocal,
    });
  },
};
