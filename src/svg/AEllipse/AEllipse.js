import {
  h,
} from "vue";

import StyleAPI from "../ACircle/compositionAPI/StyleAPI";

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
    return h("ellipse", {
      cx: this.cx,
      cy: this.cy,
      rx: this.rx,
      ry: this.ry,
      style: this.styleLocal,
    }, [
      this.$slots.default && this.$slots.default(),
    ]);
  },
};
