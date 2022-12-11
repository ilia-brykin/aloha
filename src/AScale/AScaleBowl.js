import {
  computed,
  h,
  toRef,
} from "vue";

export default {
  name: "AScaleBowl",
  props: {
    direction: {
      type: String,
      required: true,
      validator: value => ["left", "right"].indexOf(value) !== -1,
    },
    degree: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const direction = toRef(props, "direction");
    const degree = toRef(props, "degree");

    const RADIUS = 26.5;
    const yDefault = 38;

    const degreeLocal = computed(() => {
      return direction.value === "right" ? degree.value : degree.value + 180;
    });

    const xDefault = computed(() => {
      if (direction.value === "left") {
        return 8 + RADIUS;
      }
      return 62 - RADIUS;
    });

    const x = computed(() => {
      if (direction.value === "right") {
        return (RADIUS * Math.cos(degreeLocal.value * Math.PI / 180)) + xDefault.value;
      }
      return (RADIUS * Math.cos(degreeLocal.value * Math.PI / 180)) + xDefault.value;
    });

    const y = computed(() => {
      return (RADIUS * Math.sin(degreeLocal.value * Math.PI / 180)) + yDefault;
    });

    return {
      x,
      y,
    };
  },
  render() {
    return h("use", {
      x: this.x,
      y: this.y,
      "xlink:href": "#scale_bowl"
    });
  },
};
