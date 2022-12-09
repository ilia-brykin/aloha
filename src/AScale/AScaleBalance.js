import {
  computed,
  h,
  toRef,
} from "vue";

import ARect from "../svg/ARect/ARect";

export default {
  name: "AScaleBalance",
  props: {
    degree: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const degree = toRef(props, "degree");

    const transformRotate = computed(() => {
      return `rotate(${ degree.value }, -11, 10.5)`;
    });

    const transform = computed(() => {
      return `${ transformRotate.value }`;
    });

    return {
      transform,
    };
  },
  render() {
    return h("g", {
      transform: this.transform,
    }, [
      h(ARect, {
        width: 3,
        height: 6,
        x: -12.5,
        y: 1.5,
        rx: 1.3,
        ry: 1.3,
      }),
      h(ARect, {
        width: 25,
        height: 3,
        x: -39,
        y: 9,
        rx: 1.3,
        ry: 1.3,
      }),
      h(ARect, {
        width: 25,
        height: 3,
        x: -8,
        y: 9,
        rx: 1.3,
        ry: 1.3,
      }),
      h("circle", {
        style: "fill:none;stroke:currentColor;stroke-width:3;",
        cx: -11,
        cy: 10.5,
        r: 3.5,
      }),
    ]);
  },
};
