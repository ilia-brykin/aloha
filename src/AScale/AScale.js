import {
  h,
} from "vue";

import AScaleBalance from "./AScaleBalance";
import AScaleBowl from "./AScaleBowl";
import AScaleBowlDefs from "./AScaleBowlDefs";
import AScaleStand from "./AScaleStand";

import ClassAPI from "./compositionAPI/ClassAPI";
import DegreeAPI from "./compositionAPI/DegreeAPI";

// @vue/component
export default {
  name: "AScale",
  props: {
    value: {
      type: Number,
      required: false,
      default: 0,
      validator: value => value >= -100 && value <= 100,
    },
    classNegative: {
      type: String,
      required: false,
      default: undefined,
    },
    classPositive: {
      type: String,
      required: false,
      default: undefined,
    },
    classNeutral: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      degree,
    } = DegreeAPI(props);

    const {
      cssClass,
    } = ClassAPI(props);

    return {
      cssClass,
      degree,
    };
  },
  render() {
    return h("div", {
      class: this.cssClass,
    }, [
      h("svg", {
        width: "294",
        height: "231",
        viewBox: "0 0 94 74",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
      }, [
        h(AScaleBowlDefs),
        h(AScaleBalance, {
          degree: this.degree,
        }),
        h(AScaleStand),
        h(AScaleBowl, {
          direction: "left",
          degree: this.degree,
        }),
        h(AScaleBowl, {
          direction: "right",
          degree: this.degree,
        }),
      ]),
    ]);
  },
};
