import {
  h,
  inject,
  withDirectives,
} from "vue";

import ASafeHtml from "../directives/ASafeHtml";

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
import Home from "./Icons/Home";
import Lock from "./Icons/Lock";
import Minus from "./Icons/Minus";
import Ok from "./Icons/Ok";
import OptionHorizontal from "./Icons/OptionHorizontal";
import OptionVertical from "./Icons/OptionVertical";
import Pencil from "./Icons/Pencil";
import Plus from "./Icons/Plus";
import Reset from "./Icons/Reset";
import Search from "./Icons/Search";
import ThList from "./Icons/ThList";
import Trash from "./Icons/Trash";
import _NoImage from "./Icons/_NoImage";
import PinFill from "./Icons/bootstrap-1-9-1/PinFill";

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
    iconTag: {
      type: String,
      required: false,
      default: "i",
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
      Home,
      Lock,
      Minus,
      Ok,
      OptionHorizontal,
      OptionVertical,
      Pencil,
      PinFill,
      Plus,
      Reset,
      Search,
      ThList,
      Trash,
      _NoImage,
    }, ICONS_PLUGIN);

    return {
      icons,
    };
  },
  computed: {
    iconSvg() {
      const ICON_SVG = this.icons[this.icon];
      if (ICON_SVG) {
        return ICON_SVG;
      }
      return this.icons._NoImage;
    },

    iconClass() {
      return `a_icon_${ this.icon || "_NoImage" }`;
    },

    attributesLocal() {
      const ATTRIBUTES = {
        class: ["a_icon", this.iconClass],
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
    return withDirectives(h(this.iconTag, this.attributesLocal, this.$slots.default && this.$slots.default()), [
      [ASafeHtml, this.iconSvg],
    ]);
  },
};
