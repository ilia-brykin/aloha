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
  },
  data() {
    return {
      icons: {
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
  },
};
