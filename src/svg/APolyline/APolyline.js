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
    fill: {
      type: String,
      required: false,
      default: "none",
    },
    stroke: {
      type: String,
      required: false,
      default: "currentColor",
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
    return h("polyline", {
      points: this.pointsLocal,
      fill: this.fill,
      stroke: this.stroke,
      "stroke-width": this.strokeWidth,
    });
  },
};
