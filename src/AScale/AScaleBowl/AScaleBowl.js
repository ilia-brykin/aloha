import {
  h,
} from "vue";

import SizesAPI from "./compositionAPI/SizesAPI";

export default {
  name: "AScaleBowl",
  props: {
    direction: {
      type: String,
      required: true,
      validator: value => ["left", "right"].indexOf(value) !== -1,
    },
    degree: {
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
    yStandTop: {
      type: Number,
      required: true,
    },
    bowlThreadHeight: {
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
    bowlWidth: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {
      x,
      y,
    } = SizesAPI(props,);

    return {
      x,
      y,
    };
  },
  render() {
    return h("use", {
      x: this.x,
      y: this.y,
      "xlink:href": "#scale_bowl"
    });
  },
};
