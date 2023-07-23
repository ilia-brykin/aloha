import {
  h,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

export default {
  name: "ADecimalIcon",
  components: {
    AIcon,
  },
  props: {
    value: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
      default: "yellow",
    },
    icon: {
      type: String,
      default: "StarFill",
    },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "big"].includes(value),
    },
  },
  render() {
    const attrs = {
      class: "el-icon el-rate__icon el-rate__decimal",
      style: {
        position: "absolute",
        overflow: "hidden",
        width: `${ this.value }%`,
        color: this.color,
      },
    };
    return h("i", attrs, [
      h(AIcon, {
        icon: this.icon,
        class: `el-icon el-rate__icon--${ this.size }`,
      }),
    ]);
  },
};
