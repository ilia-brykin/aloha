import {
  ref,
} from "vue";

import _NoImage from "../AIcon/Icons/_NoImage";
import Aloha from "../AIcon/Icons/Aloha";
import AlertDanger from "../AIcon/Icons/AlertDanger";
import AlertSuccess from "../AIcon/Icons/AlertSuccess";
import AlertInfo from "../AIcon/Icons/AlertInfo";
import AlertWarning from "../AIcon/Icons/AlertWarning";
import AngleDown from "../AIcon/Icons/AngleDown";
import AngleLeft from "../AIcon/Icons/AngleLeft";
import AngleRight from "../AIcon/Icons/AngleRight";
import AngleUp from "../AIcon/Icons/AngleUp";
import CheckLg from "../AIcon/Icons/CheckLg";
import ChevronDown from "../AIcon/Icons/ChevronDown";
import ChevronLeft from "../AIcon/Icons/ChevronLeft";
import ChevronRight from "../AIcon/Icons/ChevronRight";
import ChevronUp from "../AIcon/Icons/ChevronUp";
import Close from "../AIcon/Icons/Close";
import Cog from "../AIcon/Icons/Cog";
import Cross from "../AIcon/Icons/Cross";
import Dnd from "../AIcon/Icons/Dnd";
import DoubleAngleDown from "../AIcon/Icons/DoubleAngleDown";
import DoubleAngleLeft from "../AIcon/Icons/DoubleAngleLeft";
import DoubleAngleRight from "../AIcon/Icons/DoubleAngleRight";
import DoubleAngleUp from "../AIcon/Icons/DoubleAngleUp";
import EyeClose from "../AIcon/Icons/EyeClose";
import EyeOpen from "../AIcon/Icons/EyeOpen";
import FloppyDisk from "../AIcon/Icons/bootstrap3/FloppyDisk";
import Home from "../AIcon/Icons/Home";
import Lock from "../AIcon/Icons/Lock";
import Minus from "../AIcon/Icons/Minus";
import Ok from "../AIcon/Icons/Ok";
import OptionHorizontal from "../AIcon/Icons/OptionHorizontal";
import OptionVertical from "../AIcon/Icons/OptionVertical";
import Pencil from "../AIcon/Icons/Pencil";
import PinFill from "../AIcon/Icons/bootstrap-1-9-1/PinFill";
import Plus from "../AIcon/Icons/Plus";
import Reset from "../AIcon/Icons/Reset";
import Search from "../AIcon/Icons/Search";
import ThList from "../AIcon/Icons/ThList";
import Trash from "../AIcon/Icons/Trash";

export const iconPluginOptions = ref({
  icons: {
    Aloha,
    AlertDanger,
    AlertSuccess,
    AlertInfo,
    AlertWarning,
    AngleDown,
    AngleLeft,
    AngleRight,
    AngleUp,
    CheckLg,
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
    FloppyDisk,
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
  },
});


export default {
  install: (app, {
    icons = {}
  } = {}) => {
    iconPluginOptions.value.icons = {
      ...iconPluginOptions.value.icons,
      ...icons,
    };
  },
};
