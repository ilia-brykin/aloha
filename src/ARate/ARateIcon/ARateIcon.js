import {
  h,
} from "vue";

import AIcon from "../../AIcon/AIcon";
import ADecimalIcon from "./ADecimalIcon/ADecimalIcon";

export default {
  name: "ARateIcon",
  components: {
    AIcon,
    ADecimalIcon,
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
      default: "Star",
    },
    iconFill: {
      type: String,
      default: "StarFill",
    },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "big"].includes(value),
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "mouseenter",
    "mouseleave",
    "click",
    "dblclick",
    "mousemove"
  ],
  setup(props, { emit }) {
    return {
      handleMouseEnter(event) {
        emit("mouseenter", event);
      },
      handleMouseLeave(event) {
        emit("mouseleave", event);
      },
      handleClick(event) {
        emit("click", event);
      },
      handleDblClick(event) {
        emit("dblclick", event);
      },
      handleMouseMove(event) {
        emit("mousemove", event);
      },
    };
  },
  render() {
    return h(
      "span",
      {
        class: `el-rate__item a_rate_icon_${ this.size }`,
        style: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        },
        onClick: this.handleClick,
        onDblclick: this.handleDblClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onMousemove: this.handleMouseMove,
      },
      [
        h("div", { class: "a_rate_icon_align" }, [
          h(AIcon, {
            icon: this.icon,
            class: `a_decimal_rate_icon a_rate_decimal`,
            color: this.color,
          }),
          h(ADecimalIcon, {
            icon: this.iconFill,
            value: this.value,
            color: this.color,
            size: this.size,
          }),
        ]),
      ]
    );
  },
};
