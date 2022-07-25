import Aloha from "./Icons/Aloha";
import ChevronDown from "./Icons/ChevronDown";
import ChevronLeft from "./Icons/ChevronLeft";
import ChevronRight from "./Icons/ChevronRight";
import ChevronUp from "./Icons/ChevronUp";
import Close from "./Icons/Close";
import Cog from "./Icons/Cog";
import Cross from "./Icons/Cross";
import Dnd from "./Icons/Dnd";
import EyeClose from "./Icons/EyeClose";
import EyeOpen from "./Icons/EyeOpen";
import Ok from "./Icons/Ok";

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
        Cog,
        Close,
        Cross,
        Dnd,
        EyeClose,
        EyeOpen,
        Ok,
      },
    };
  },
  computed: {
    iconSvg() {
      return this.icons[this.icon];
    },

    attributesLocal() {
      const ATTRIBUTES = {
        viewBox: "0 0 18 18",
        role: "presentation",
        width: this.width,
        height: this.height,
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
    return h("svg", this.attributesLocal, [
      h("g", {
        fill: this.iconColor,
        innerHTML: this.iconSvg,
      }),
    ]);
  },
};
