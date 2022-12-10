import {
  h,
} from "vue";

import PointsAPI from "../compositionAPI/PointsAPI";

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
    return h("polyline", {
      points: this.pointsLocal,
      stroke: this.stroke,
      strokeWidth: this.strokeWidth,
    });
  },
};
