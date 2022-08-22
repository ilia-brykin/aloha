import {
  h,
  inject,
} from "vue";

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
import Search from "./Icons/Search";
import ThList from "./Icons/ThList";
import Trash from "./Icons/Trash";

import {
  assign,
} from "lodash-es";

export default {
  name: "AIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    ariLabel: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup() {
    const ICONS_PLUGIN = inject("icons", {});
    const icons = assign({}, {
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
      Plus,
      Reset,
      Search,
      ThList,
      Trash,
    }, ICONS_PLUGIN);

    return {
      icons,
    };
  },
  computed: {
    iconSvg() {
      return this.icons[this.icon];
    },

    attributesLocal() {
      const ATTRIBUTES = {
        class: "a_icon",
        innerHTML: this.iconSvg,
      };
      if (this.ariLabel) {
        ATTRIBUTES["aria-label"] = this.ariLabel;
      } else {
        ATTRIBUTES.ariaHidden = true;
      }
      return ATTRIBUTES;
    },
  },
  render() {
    return h("i", this.attributesLocal);
  },
};
