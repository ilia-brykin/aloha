import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageDropdownBasic from "./PageDropdownBasic/PageDropdownBasic.vue";
import PageDropdownButtonClass from "./PageDropdownButtonClass/PageDropdownButtonClass.vue";
import PageDropdownButtonIcons from "./PageDropdownButtonIcons/PageDropdownButtonIcons.vue";
import PageDropdownButtonLoading from "./PageDropdownButtonLoading/PageDropdownButtonLoading.vue";
import PageDropdownButtonText from "./PageDropdownButtonText/PageDropdownButtonText.vue";
import PageDropdownCaretIcon from "./PageDropdownCaretIcon/PageDropdownCaretIcon.vue";
import PageDropdownHasCaret from "./PageDropdownHasCaret/PageDropdownHasCaret.vue";
import PageDropdownInBody from "./PageDropdownInBody/PageDropdownInBody.vue";
import PageDropdownTriggers from "./PageDropdownTriggers/PageDropdownTriggers.vue";
import {
  ADropdown,
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
    ADropdown,
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageDropdownBasic,
    PageDropdownButtonClass,
    PageDropdownButtonIcons,
    PageDropdownButtonLoading,
    PageDropdownButtonText,
    PageDropdownCaretIcon,
    PageDropdownHasCaret,
    PageDropdownInBody,
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
        text: "Actions 0",
        type: "button",
        callback: () => {},
        isHidden: true,
      },
      {
        text: "Actions 1",
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
        text: "Actions 2",
        type: "button",
        callback: () => {},
      },
      {
        type: "link",
        text: "Link 1",
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
