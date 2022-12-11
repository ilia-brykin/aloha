import {
  h,
} from "vue";

import ARect from "../../svg/ARect/ARect";

import SizesAPI from "./compositionAPI/SizesAPI";

export default {
  name: "AScaleStand",
  props: {
    pipesWidth: {
      type: Number,
      required: true,
    },
    standWidth: {
      type: Number,
      required: true,
    },
    standHeight: {
      type: Number,
      required: true,
    },
    yStandBottom: {
      type: Number,
      required: true,
    },
    yStandTop: {
      type: Number,
      required: true,
    },
    centerX: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {
      xBottom,
      xTop,
    } = SizesAPI(props);

    return {
      xBottom,
      xTop,
    };
  },
  render() {
    return h("g", null, [
      h(ARect, {
        width: this.pipesWidth,
        height: this.standHeight,
        x: this.xTop,
        y: this.yStandTop,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
      h(ARect, {
        width: this.standWidth,
        height: this.pipesWidth,
        x: this.xBottom,
        y: this.yStandBottom,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
    ]);
  },
};
