import {
  h,
} from "vue";

export default {
  name: "APath",
  props: {
    d: {
      type: String,
      required: true,
      default: "",
    },
    fill: {
      type: String,
      required: false,
      default: undefined,
    },
    fillRule: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["evenodd", "inherit", "initial", "nonzero", "revert", "unset"].indexOf(value) !== -1,
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
    return h("path", {
      d: this.d,
      fill: this.fill,
      fillRule: this.fillRule,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
    });
  },
};
