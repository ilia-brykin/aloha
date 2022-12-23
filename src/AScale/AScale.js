import {
  h,
} from "vue";

import AScaleBalance from "./AScaleBalance/AScaleBalance";
import AScaleBowl from "./AScaleBowl/AScaleBowl";
import AScaleBowlDefs from "./AScaleBowlDefs/AScaleBowlDefs";
import AScaleStand from "./AScaleStand/AScaleStand";

import ClassAPI from "./compositionAPI/ClassAPI";
import DegreeAPI from "./compositionAPI/DegreeAPI";
import SizesAPI from "./compositionAPI/SizesAPI";

// @vue/component
export default {
  name: "AScale",
  props: {
    balanceCircleRadius: {
      type: Number,
      required: false,
      default: 3.5,
    },
    balanceTopHeight: {
      type: Number,
      required: false,
      default: 6,
    },
    balanceWidth: {
      type: Number,
      required: false,
      default: 60,
    },
    bowlRadius: {
      type: Number,
      required: false,
      default: 12.6,
    },
    bowlThreadHeight: {
      type: Number,
      required: false,
      default: 20,
    },
    bowlThreadPaddingX: {
      type: Number,
      required: false,
      default: 4,
    },
    bowlThreadStrokeWidth: {
      type: Number,
      required: false,
      default: 2,
    },
    bowlThreadWidth: {
      type: Number,
      required: false,
      default: 16,
    },
    bowlWidth: {
      type: Number,
      required: false,
      default: 25,
    },
    classNegative: {
      type: String,
      required: false,
      default: undefined,
    },
    classNeutral: {
      type: String,
      required: false,
      default: undefined,
    },
    classPositive: {
      type: String,
      required: false,
      default: undefined,
    },
    maxDegree: {
      type: Number,
      required: false,
      default: 30,
    },
    pipesWidth: {
      type: Number,
      required: false,
      default: 3,
    },
    standHeight: {
      type: Number,
      required: false,
      default: 46,
    },
    standWidth: {
      type: Number,
      required: false,
      default: 70,
    },
    value: {
      type: Number,
      required: false,
      default: 0,
      validator: value => value >= -100 && value <= 100,
    },
    viewBoxHeight: {
      type: Number,
      required: false,
      default: 80,
    },
    viewBoxWidth: {
      type: Number,
      required: false,
      default: 100,
    },
  },
  setup(props) {
    const {
      degree,
    } = DegreeAPI(props);

    const {
      cssClass,
    } = ClassAPI(props);

    const {
      centerX,
      viewBoxLocal,
      yStandBottom,
      yStandTop,
    } = SizesAPI(props);

    return {
      centerX,
      cssClass,
      degree,
      viewBoxLocal,
      yStandBottom,
      yStandTop,
    };
  },
  render() {
    return h("div", {
      class: this.cssClass,
    }, [
      h("svg", {
        viewBox: this.viewBoxLocal,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
      }, [
        h(AScaleBowlDefs, {
          bowlThreadStrokeWidth: this.bowlThreadStrokeWidth,
          bowlThreadWidth: this.bowlThreadWidth,
          bowlThreadHeight: this.bowlThreadHeight,
          bowlThreadPaddingX: this.bowlThreadPaddingX,
          bowlWidth: this.bowlWidth,
          bowlRadius: this.bowlRadius,
        }),
        h(AScaleBalance, {
          degree: this.degree,
          pipesWidth: this.pipesWidth,
          yStandTop: this.yStandTop,
          centerX: this.centerX,
          balanceWidth: this.balanceWidth,
          balanceCircleRadius: this.balanceCircleRadius,
          balanceTopHeight: this.balanceTopHeight,
        }),
        h(AScaleStand, {
          standWidth: this.standWidth,
          standHeight: this.standHeight,
          pipesWidth: this.pipesWidth,
          centerX: this.centerX,
          yStandBottom: this.yStandBottom,
          yStandTop: this.yStandTop,
        }),
        h(AScaleBowl, {
          direction: "left",
          degree: this.degree,
          balanceWidth: this.balanceWidth,
          balanceCircleRadius: this.balanceCircleRadius,
          yStandTop: this.yStandTop,
          bowlThreadHeight: this.bowlThreadHeight,
          pipesWidth: this.pipesWidth,
          centerX: this.centerX,
          bowlWidth: this.bowlWidth,
        }),
        h(AScaleBowl, {
          direction: "right",
          degree: this.degree,
          balanceWidth: this.balanceWidth,
          balanceCircleRadius: this.balanceCircleRadius,
          yStandTop: this.yStandTop,
          bowlThreadHeight: this.bowlThreadHeight,
          pipesWidth: this.pipesWidth,
          centerX: this.centerX,
          bowlWidth: this.bowlWidth,
        }),
      ]),
    ]);
  },
};
