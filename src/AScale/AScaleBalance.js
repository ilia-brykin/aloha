import {
  computed,
  h,
  toRef,
} from "vue";

import ACircle from "../svg/ACircle/ACircle";
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

    const centerX = 47;
    const centerY = 17.88;

    const transformRotate = computed(() => {
      return `rotate(${ degree.value }, ${ centerX }, ${ centerY })`;
    });

    return {
      centerX,
      centerY,
      transformRotate,
    };
  },
  render() {
    return h("g", {
      transform: this.transformRotate,
    }, [
      h(ARect, {
        width: 3,
        height: 6,
        x: 45.46,
        y: 8.88,
        rx: 1.3,
        ry: 1.3,
      }),
      h(ARect, {
        width: 25,
        height: 3,
        x: 19,
        y: 16.38,
        rx: 1.3,
        ry: 1.3,
      }),
      h(ARect, {
        width: 25,
        height: 3,
        x: 50,
        y: 16.38,
        rx: 1.3,
        ry: 1.3,
      }),
      h(ACircle, {
        cx: this.centerX,
        cy: this.centerY,
        r: 3.5,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 3,
      }),
    ]);
  },
};
