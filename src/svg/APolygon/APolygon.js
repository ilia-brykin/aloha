import {
  h,
} from "vue";

import PointsAPI from "../compositionAPI/PointsAPI";

export default {
  name: "APolygon",
  props: {
    points: {
      type: [Array, String],
      required: true,
      default: [],
    },
    fill: {
      type: String,
      required: false,
      default: undefined,
    },
    fillRule: {
      type: String,
      required: false,
      default: undefined,
      validator: value => ["evenodd", "inherit", "initial", "nonzero", "revert", "unset"].indexOf(value) !== -1,
    },
    stroke: {
      type: String,
      required: false,
      default: undefined,
    },
    strokeWidth: {
      type: [Number, String],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      pointsLocal,
    } = PointsAPI(props);

    return {
      pointsLocal,
    };
  },
  render() {
    return h("polygon", {
      points: this.pointsLocal,
      fill: this.fill,
      fillRule: this.fillRule,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
    });
  },
};
