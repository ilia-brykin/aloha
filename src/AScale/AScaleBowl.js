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
    const yDefault = -115.74629;

    const degreeLocal = computed(() => {
      return direction.value === "right" ? degree.value : degree.value + 180;
    });

    const xDefault = computed(() => {
      if (direction.value === "left") {
        return -159.49164 + RADIUS;
      }
      return -105.68051 - RADIUS;
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

    const transformMatrix = computed(() => {
      return `matrix(0.98375235,0,0,0.9773198,${ x.value },${ y.value })`;
    });

    return {
      x,
      transformMatrix,
    };
  },
  render() {
    return h("g", {
      transform: this.transformMatrix,
    }, [
      h("path", {
        style: "fill:none;stroke:currentColor;stroke-width:2.27542;stroke-linecap:round;stroke-linejoin:round",
        d: "m 114.72422,151.43768 8.62356,-21.4794 8.9371,22.10646",
      }),
      h("path", {
        style: "fill:currentColor;stroke:currentColor;stroke-width:8.6;stroke-linecap:round;stroke-linejoin:round",
        d: "m -33.979,48.926 c 0,20.752 -18.73,37.595 -41.808,37.595 -23.078,0 -41.803,-16.843 -41.803,-37.595 0,-20.752 18.725,-37.595 41.803,-37.595 23.078,0 41.808,16.843 41.808,37.595 z m 0,-4 h -83.611",
        "clip-path": "url(#clipPath3453)",
        transform: "matrix(0.26458333,0,0,0.26458333,143.41563,137.55288)",
      }),
    ]);
  },
};
