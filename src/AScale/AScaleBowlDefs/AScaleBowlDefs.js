import {
  h,
} from "vue";

import APath from "../../svg/APath/APath";
import APolyline from "../../svg/APolyline/APolyline";

import SizesAPI from "./compositionAPI/SizesAPI";

export default {
  name: "AScaleBowlDefs",
  props: {
    bowlThreadStrokeWidth: {
      type: Number,
      required: true,
    },
    bowlThreadWidth: {
      type: Number,
      required: true,
    },
    bowlThreadHeight: {
      type: Number,
      required: true,
    },
    bowlThreadPaddingX: {
      type: Number,
      required: true,
    },
    bowlWidth: {
      type: Number,
      required: true,
    },
    bowlRadius: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {
      bowlD,
      bowlThreadPoints,
    } = SizesAPI(props);

    return {
      bowlD,
      bowlThreadPoints,
    };
  },
  render() {
    return h("defs", {}, [
      h("g", {
        id: "scale_bowl",
      }, [
        h(APolyline, {
          points: this.bowlThreadPoints,
          strokeWidth: this.bowlThreadStrokeWidth,
        }),
        h(APath, {
          d: this.bowlD,
          fill: "currentColor",
        }),
      ]),
    ]);
  },
};
