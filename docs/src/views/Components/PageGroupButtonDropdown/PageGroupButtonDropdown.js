import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageGroupButtonDropdownActionsClasses from "./PageGroupButtonDropdownActionsClasses/PageGroupButtonDropdownActionsClasses.vue";
import PageGroupButtonDropdownBasic from "./PageGroupButtonDropdownBasic/PageGroupButtonDropdownBasic.vue";
import PageGroupButtonDropdownDisabled from "./PageGroupButtonDropdownDisabled/PageGroupButtonDropdownDisabled.vue";
import PageGroupButtonDropdownDropdownAttributes from "./PageGroupButtonDropdownDropdownAttributes/PageGroupButtonDropdownDropdownAttributes.vue";
import PageGroupButtonDropdownExtraClasses from "./PageGroupButtonDropdownExtraClasses/PageGroupButtonDropdownExtraClasses.vue";
import PageGroupButtonDropdownHasDividerBeforeDropdown from "./PageGroupButtonDropdownHasDividerBeforeDropdown/PageGroupButtonDropdownHasDividerBeforeDropdown.vue";
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
    PageGroupButtonDropdownActionsClasses,
    PageGroupButtonDropdownBasic,
    PageGroupButtonDropdownDisabled,
    PageGroupButtonDropdownDropdownAttributes,
    PageGroupButtonDropdownExtraClasses,
    PageGroupButtonDropdownHasDividerBeforeDropdown,
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
