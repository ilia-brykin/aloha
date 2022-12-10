import {
  h,
} from "vue";

import PointsAPI from "../compositionAPI/PointsAPI";
import StrokeAPI from "../compositionAPI/StrokeAPI";

export default {
  name: "APolyline",
  props: {
    points: {
      type: [Array, String],
      required: true,
      default: [],
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
    } = StrokeAPI(props);

    const {
      pointsLocal,
    } = PointsAPI(props);

    return {
      pointsLocal,
      styleLocal,
    };
  },
  render() {
    return h("polyline", {
      points: this.pointsLocal,
      style: this.styleLocal,
    });
  },
};
