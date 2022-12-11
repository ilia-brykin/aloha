import {
  h,
} from "vue";

import APath from "../svg/APath/APath";
import APolyline from "../svg/APolyline/APolyline";

export default {
  name: "AScaleBowlDefs",
  render() {
    return h("defs", {}, [
      h("g", {
        id: "scale_bowl",
      }, [
        h(APolyline, {
          points: "4,1 12,-19 20,1",
          strokeWidth: 2,
        }),
        h(APath, {
          d: "m0,0 a12.6,12.6 0 1,0 25,0 z",
          fill: "currentColor",
        }),
      ]),
    ]);
  },
};
