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
  emits: ["mouseenter", "mouseleave", "click", "dblclick"],
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
    };
  },
  render() {
    return h(
      "span",
      {
        class: `el-rate__item el-rate__icon--${ this.size }`,
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
      },
      [
        h("div", { class: "icon-align" }, [
          h(AIcon, {
            icon: this.icon,
            class: `el-icon el-rate__icon`,
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
