import {
  ref,
} from "vue";

import _NoImage from "../AIcon/Icons/_NoImage";
import AlertDanger from "../AIcon/Icons/AlertDanger";
import AlertInfo from "../AIcon/Icons/AlertInfo";
import AlertSuccess from "../AIcon/Icons/AlertSuccess";
import AlertWarning from "../AIcon/Icons/AlertWarning";
import Aloha from "../AIcon/Icons/Aloha";
import AngleDown from "../AIcon/Icons/AngleDown";
import AngleLeft from "../AIcon/Icons/AngleLeft";
import AngleRight from "../AIcon/Icons/AngleRight";
import AngleUp from "../AIcon/Icons/AngleUp";
import ArrowLeft from "../AIcon/Icons/bootstrap-1-9-1/ArrowLeft";
import ArrowRight from "../AIcon/Icons/bootstrap-1-9-1/ArrowRight";
import CaretDownFill from "../AIcon/Icons/bootstrap-1-9-1/CaretDownFill";
import CaretUpFill from "../AIcon/Icons/bootstrap-1-9-1/CaretUpFill";
import CheckLg from "../AIcon/Icons/CheckLg";
import ChevronDown from "../AIcon/Icons/ChevronDown";
import ChevronLeft from "../AIcon/Icons/ChevronLeft";
import ChevronRight from "../AIcon/Icons/ChevronRight";
import ChevronRightThin from "../AIcon/Icons/bootstrap-1-9-1/ChevronRight";
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
import Files from "../AIcon/Icons/bootstrap-1-9-1/Files";
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
import ThreeDots from "../AIcon/Icons/bootstrap-1-9-1/ThreeDots";
import Trash from "../AIcon/Icons/Trash";
import UiChecks from "../AIcon/Icons/bootstrap-1-9-1/UiChecks";

export const iconPluginOptions = ref({
  icons: {
    _NoImage,
    AlertDanger,
    AlertInfo,
    AlertSuccess,
    AlertWarning,
    Aloha,
    AngleDown,
    AngleLeft,
    AngleRight,
    AngleUp,
    ArrowLeft,
    ArrowRight,
    CaretDownFill,
    CaretUpFill,
    CheckLg,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Close,
    Cog,
    Cross,
    Dnd,
    DoubleAngleDown,
    DoubleAngleLeft,
    DoubleAngleRight,
    DoubleAngleUp,
    EyeClose,
    EyeOpen,
    Files,
    FloppyDisk,
    Home,
    Lock,
    MenuChevronRight: ChevronRightThin,
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
    ThreeDots,
    Trash,
    UiChecks,
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
