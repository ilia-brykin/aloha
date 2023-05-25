import { ref, h, toRefs } from "vue";

export default {
  name: "ABlock",
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 50
    },
    normalValue: {
      type: Number,
      default: 100
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#FFD700"
    },
  },
  emits: [
    "update:normalValue",
  ],
  setup(props, { emit }) {
    const { width, height, normalValue, readonly, showValue, color } = toRefs(props);

    const tempNormalValue = ref(normalValue.value);
    let isClicked = false;
    let isHovered = false;

    const handleMouseMove = event => {
      if (readonly.value) {
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      const newValue = ((event.clientX - rect.left) / rect.width) * 100;
      tempNormalValue.value = Math.min(newValue, 100);
      isHovered = true;
      isClicked = false;
    };

    const handleMouseLeave = () => {
      if (readonly.value) {
        return;
      }
      tempNormalValue.value = normalValue.value;
      isHovered = false;
    };

    const handleClick = () => {
      if (readonly.value) {
        return;
      }
      normalValue.value = tempNormalValue.value;
      emit("update:normalValue", normalValue.value);
      isClicked = true;
    };

    return () => h(
      "div",
      {
        style: {
          position: "relative",
          width: `${ width.value }px`,
          height: `${ height.value }px`,
          border: "1px solid black",
          cursor: readonly.value ? "default" : "pointer",
        },
        onMousemove: handleMouseMove,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
      },
      [
        h("div", {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${ tempNormalValue.value }%`,
            backgroundColor: (isHovered && !isClicked) ? "gray" : color.value,
          },
        }),
        showValue.value &&
        h(
          "div",
          {
            style: {
              position: "absolute",
              right: "5px",
              top: "5px",
              fontSize: "0.8em",
            },
          },
          `${ Math.round(tempNormalValue.value) }%`
        )
      ]
    );
  },
};
