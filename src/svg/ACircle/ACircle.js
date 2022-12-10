import {
  h,
} from "vue";

import StyleAPI from "./compositionAPI/StyleAPI";

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
      default: "none",
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
    } = StyleAPI(props);

    return {
      styleLocal,
    };
  },
  render() {
    return h("circle", {
      cx: this.cx,
      cy: this.cy,
      r: this.r,
      style: this.styleLocal,
    });
  },
};
