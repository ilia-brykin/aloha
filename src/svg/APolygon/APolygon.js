import {
  h,
} from "vue";

import PointsAPI from "./compositionAPI/PointsAPI";
import StyleAPI from "./compositionAPI/StyleAPI";

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
      default: "none",
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
      default: "currentColor",
    },
    strokeWidth: {
      type: [Number, String],
      required: false,
      default: 1,
    },
    style: {
      type: [String, Object],
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const {
      styleLocal,
    } = StyleAPI(props);

    const {
      pointsLocal,
    } = PointsAPI(props);

    return {
      pointsLocal,
      styleLocal,
    };
  },
  render() {
    return h("polygon", {
      points: this.pointsLocal,
      style: this.styleLocal,
    });
  },
};
