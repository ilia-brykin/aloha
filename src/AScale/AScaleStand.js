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
        x: -12.8,
        y: 13.5,
        rx: 1.3,
        ry: 1.3,
      }),
      h(ARect, {
        width: 70,
        height: 3,
        x: -46.4,
        y: 58.5,
        rx: 1.3,
        ry: 1.3,
      }),
    ]);
  },
};
