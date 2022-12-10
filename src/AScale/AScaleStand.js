import {
  h,
} from "vue";

import ARect from "../svg/ARect/ARect";

export default {
  name: "AScaleStand",
  render() {
    return h("g", null, [
      h(ARect, {
        width: 3,
        height: 46,
        x: 45.2,
        y: 20.88,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
      h(ARect, {
        width: 70,
        height: 3,
        x: 11.6,
        y: 65.88,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
    ]);
  },
};
