import {
  h,
} from "vue";

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
    style: {
      type: [String, Object, Array],
      required: false,
      default: "fill:currentColor;",
    },
  },
  render() {
    return h("rect", {
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y,
      rx: this.rx,
      ry: this.ry,
      style: this.style,
    });
  },
};
