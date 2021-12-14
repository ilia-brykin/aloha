import Aloha from "./Icons/Aloha";
import ChevronDown from "./Icons/ChevronDown";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";
import ChevronUp from "./Icons/ChevronUp";

export default {
  name: "AIcon",
  props: {
    icon: {
      type: String,
      required: false,
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
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
        ChevronDown,
        ChevronLeft,
        ChevronRight,
        ChevronUp,
      },
    };
  },
  computed: {
    iconSvg() {
      return this.icons[this.icon];
    },

    attributes() {
      if (this.ariLabel) {
        return {
          "aria-label": this.ariLabel,
        };
      }
      return {
        "aria-hidden": true,
      };
    },
  },
};
