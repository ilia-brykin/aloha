import {
  h,
} from "vue";

import AIcon from "../../../AIcon/AIcon";

import StarFill from "aloha-svg/dist/js/bootstrap/StarFill";

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
      default: StarFill,
    },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "big"].includes(value),
    },
  },
  render() {
    const attrs = {
      class: "a_decimal_rate_icon a_rate_icon_decimal",
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
        class: `a_decimal_rate_icon a_rate_icon_${ this.size }`,
      }),
    ]);
  },
};
