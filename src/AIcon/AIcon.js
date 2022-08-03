import Aloha from "./Icons/Aloha";
import AngleDown from "./Icons/AngleDown";
import AngleLeft from "./Icons/AngleLeft";
import AngleRight from "./Icons/AngleRight";
import AngleUp from "./Icons/AngleUp";
import ChevronDown from "./Icons/ChevronDown";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";
import ChevronUp from "./Icons/ChevronUp";
import Close from "./Icons/Close";
import Cog from "./Icons/Cog";
import Cross from "./Icons/Cross";
import Dnd from "./Icons/Dnd";
import DoubleAngleDown from "./Icons/DoubleAngleDown";
import DoubleAngleLeft from "./Icons/DoubleAngleLeft";
import DoubleAngleRight from "./Icons/DoubleAngleRight";
import DoubleAngleUp from "./Icons/DoubleAngleUp";
import EyeClose from "./Icons/EyeClose";
import EyeOpen from "./Icons/EyeOpen";
import Lock from "./Icons/Lock";
import Minus from "./Icons/Minus";
import Ok from "./Icons/Ok";
import OptionHorizontal from "./Icons/OptionHorizontal";
import OptionVertical from "./Icons/OptionVertical";
import Plus from "./Icons/Plus";
import Reset from "./Icons/Reset";

import {
  h,
} from "vue";

export default {
  name: "AIcon",
  props: {
    icon: {
      type: String,
      required: false,
    },
    width: {
      type: [Number, String],
      default: 16,
    },
    height: {
      type: [Number, String],
      default: 16,
    },
    iconColor: {
      type: String,
      default: "currentColor",
      required: false,
    },
    ariLabel: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      icons: {
        Aloha,
        AngleDown,
        AngleLeft,
        AngleRight,
        AngleUp,
        ChevronDown,
        ChevronLeft,
        ChevronRight,
        ChevronUp,
        Cog,
        Close,
        Cross,
        Dnd,
        DoubleAngleDown,
        DoubleAngleLeft,
        DoubleAngleRight,
        DoubleAngleUp,
        EyeClose,
        EyeOpen,
        Lock,
        Minus,
        Ok,
        OptionHorizontal,
        OptionVertical,
        Reset,
        Plus,
      },
    };
  },
  computed: {
    iconSvg() {
      return this.icons[this.icon];
    },

    attributesSvgLocal() {
      const ATTRIBUTES = {
        viewBox: "0 0 18 18",
        role: "presentation",
        width: this.width,
        height: this.height,
        class: "a_icon__svg",
      };
      return ATTRIBUTES;
    },

    attributesLocal() {
      const ATTRIBUTES = {
        class: "a_icon",
      };
      if (this.ariLabel) {
        ATTRIBUTES["aria-label"] = this.ariLabel;
      } else {
        ATTRIBUTES["aria-hidden"] = "true";
      }
      return ATTRIBUTES;
    },
  },
  render() {
    return h("i", this.attributesLocal, [
      h("svg", this.attributesSvgLocal, [
        h("g", {
          fill: this.iconColor,
          innerHTML: this.iconSvg,
        }),
      ]),
    ]);
  },
};
