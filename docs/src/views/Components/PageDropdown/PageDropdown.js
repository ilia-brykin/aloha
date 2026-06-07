import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageDropdownBasic from "./PageDropdownBasic/PageDropdownBasic.vue";
import PageDropdownButtonClass from "./PageDropdownButtonClass/PageDropdownButtonClass.vue";
import PageDropdownButtonIcons from "./PageDropdownButtonIcons/PageDropdownButtonIcons.vue";
import PageDropdownButtonLoading from "./PageDropdownButtonLoading/PageDropdownButtonLoading.vue";
import PageDropdownButtonText from "./PageDropdownButtonText/PageDropdownButtonText.vue";
import PageDropdownCaretIcon from "./PageDropdownCaretIcon/PageDropdownCaretIcon.vue";
import PageDropdownGroup from "./PageDropdownGroup/PageDropdownGroup.vue";
import PageDropdownGroupHideEmpty from "./PageDropdownGroupHideEmpty/PageDropdownGroupHideEmpty.vue";
import PageDropdownGroupSort from "./PageDropdownGroupSort/PageDropdownGroupSort.vue";
import PageDropdownHasCaret from "./PageDropdownHasCaret/PageDropdownHasCaret.vue";
import PageDropdownInBody from "./PageDropdownInBody/PageDropdownInBody.vue";
import PageDropdownReadonly from "./PageDropdownReadonly/PageDropdownReadonly.vue";
import PageDropdownTriggers from "./PageDropdownTriggers/PageDropdownTriggers.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageDropdown",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageDropdownBasic,
    PageDropdownButtonClass,
    PageDropdownButtonIcons,
    PageDropdownButtonLoading,
    PageDropdownButtonText,
    PageDropdownCaretIcon,
    PageDropdownGroup,
    PageDropdownGroupHideEmpty,
    PageDropdownGroupSort,
    PageDropdownHasCaret,
    PageDropdownInBody,
    PageDropdownReadonly,
    PageDropdownTriggers,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataExposes,
    } = ExposesAPI();


    const dropdownActions = [
      {
        text: "_A_DROPDOWN_ACTION_0_",
        type: "button",
        callback: () => {},
        isHidden: true,
      },
      {
        text: "_A_DROPDOWN_ACTION_1_",
        type: "button",
        callback: () => {},
        disabled: true,
      },
      {
        type: "divider",
      },
      {
        type: "divider",
      },
      {
        text: "_A_DROPDOWN_ACTION_2_",
        type: "button",
        callback: () => {},
      },
      {
        type: "link",
        text: "_A_DROPDOWN_ACTION_LINK_1_",
        href: "#",
      },
      {
        type: "divider",
      },
    ];

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
      dropdownActions,
    };
  },
};
