import {
  h,
} from "vue";

import ACircle from "../../svg/ACircle/ACircle";
import ARect from "../../svg/ARect/ARect";

import SizesAPI from "./compositionAPI/SizesAPI";

export default {
  name: "AScaleBalance",
  props: {
    degree: {
      type: Number,
      required: true,
    },
    pipesWidth: {
      type: Number,
      required: true,
    },
    centerX: {
      type: Number,
      required: true,
    },
    yStandTop: {
      type: Number,
      required: true,
    },
    balanceWidth: {
      type: Number,
      required: true,
    },
    balanceCircleRadius: {
      type: Number,
      required: true,
    },
    balanceTopHeight: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {
      transformRotate,
      widthBalancePipe,
      xBalanceLeft,
      xBalanceRight,
      xBalanceTopHeight,
      yBalance,
      yBalanceCenter,
      yBalanceTopHeight,
    } = SizesAPI(props);

    return {
      transformRotate,
      widthBalancePipe,
      xBalanceLeft,
      xBalanceRight,
      xBalanceTopHeight,
      yBalance,
      yBalanceCenter,
      yBalanceTopHeight,
    };
  },
  render() {
    return h("g", {
      transform: this.transformRotate,
    }, [
      h(ARect, {
        width: this.pipesWidth,
        height: this.balanceTopHeight,
        x: this.xBalanceTopHeight,
        y: this.yBalanceTopHeight,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
      h(ARect, {
        width: this.widthBalancePipe,
        height: this.pipesWidth,
        x: this.xBalanceLeft,
        y: this.yBalance,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
      h(ARect, {
        width: this.widthBalancePipe,
        height: this.pipesWidth,
        x: this.xBalanceRight,
        y: this.yBalance,
        rx: 1.3,
        ry: 1.3,
        fill: "currentColor",
      }),
      h(ACircle, {
        cx: this.centerX,
        cy: this.yBalanceCenter,
        r: this.balanceCircleRadius,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: this.pipesWidth,
      }),
    ]);
  },
};
