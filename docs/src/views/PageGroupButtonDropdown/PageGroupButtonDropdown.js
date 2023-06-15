import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageGroupButtonDropdownBasic from "./PageGroupButtonDropdownBasic/PageGroupButtonDropdownBasic.vue";
import PageGroupButtonDropdownOnlyDropdown from "./PageGroupButtonDropdownOnlyDropdown/PageGroupButtonDropdownOnlyDropdown.vue";
import PageGroupButtonDropdownIndexFirstDropdownAction from "./PageGroupButtonDropdownIndexFirstDropdownAction/PageGroupButtonDropdownIndexFirstDropdownAction.vue";
import PageGroupButtonDropdownIndexFirstDropdownActionOne from "./PageGroupButtonDropdownIndexFirstDropdownActionOne/PageGroupButtonDropdownIndexFirstDropdownActionOne.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageGroupButtonDropdown",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageGroupButtonDropdownBasic,
    PageGroupButtonDropdownOnlyDropdown,
    PageGroupButtonDropdownIndexFirstDropdownAction,
    PageGroupButtonDropdownIndexFirstDropdownActionOne,
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

    return {
      dataExposes,
      dataEvents,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
