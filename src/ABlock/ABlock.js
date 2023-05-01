import { ref, onUnmounted, h, toRef } from "vue";

export default {
  name: "ABlock",
  props: {
    maxValue: {
      type: Number,
      default: 100
    },
    normalValue: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 10
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "onChange",
  ],
  setup(props, { emit }) {
    const blockRef = ref(null);
    const colorRef = ref("gray");
    const widthRef = ref(0);
    const maxValue = toRef(props, "maxValue");
    const normalValue = toRef(props, "normalValue");
    const height = toRef(props, "height");
    const readonly = toRef(props, "readonly");

    const handleMouseMove = ({ event }) => {
      if (readonly.value) {
        return;
      }
      const rect = blockRef.value.getBoundingClientRect();
      const percent = (event.clientX - rect.left) / rect.width;
      const newValue = Math.round(percent * maxValue.value);
      if (newValue <= normalValue.value) {
        colorRef.value = "green";
      } else {
        colorRef.value = "red";
      }
      widthRef.value = newValue;
    };

    const handleClick = () => {
      if (readonly.value) {
        return;
      }
      emit("onChange", widthRef.value);
    };

    onUnmounted(() => {
      blockRef.value.removeEventListener("mousemove", handleMouseMove);
      blockRef.value.removeEventListener("click", handleClick);
    });

    return () => h("div", {
      ref: blockRef.value,
      style: {
        width: `${ widthRef.value }%`,
        height: `${ height.value }px`,
        backgroundColor: colorRef.value,
        cursor: readonly.value ? "default" : "pointer"
      }
    }, [
      h("span", { style: { display: "inline-block", marginLeft: "5px" } }, `${ widthRef.value }%`)
    ]);
  }
};
