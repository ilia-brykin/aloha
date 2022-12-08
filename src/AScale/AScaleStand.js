import {
  h,
} from "vue";

export default {
  name: "AScaleStand",
  render() {
    return h("g", {
      transform: "translate(-11.44233,-114.33344)",
    }, [
      h("rect", {
        style: "fill:currentColor;stroke-width:0;paint-order:markers fill stroke",
        width: "70",
        height: "3",
        x: "-35",
        y: "173.52055",
        rx: "1.3",
        ry: "1.2999998",
      }),
      h("rect", {
        style: "fill:currentColor;stroke-width:0;paint-order:markers fill stroke",
        width: "46.166618",
        height: "3",
        x: "128.40491",
        y: "-1.5",
        rx: "1.3",
        ry: "1.3",
        transform: "rotate(90)",
      }),
    ]);
  },
};
