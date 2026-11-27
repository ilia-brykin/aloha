import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageAccordionAlwaysOpen from "./PageAccordionAlwaysOpen/PageAccordionAlwaysOpen.vue";
import PageAccordionBasic from "./PageAccordionBasic/PageAccordionBasic.vue";
import PageAccordionChildren from "./PageAccordionChildren/PageAccordionChildren.vue";
import PageAccordionDisabled from "./PageAccordionDisabled/PageAccordionDisabled.vue";
import PageAccordionOneItemAlwaysOpen from "./PageAccordionOneItemAlwaysOpen/PageAccordionOneItemAlwaysOpen.vue";
import PageAccordionSlots from "./PageAccordionSlots/PageAccordionSlots.vue";
import PageAccordionVModel from "./PageAccordionVModel/PageAccordionVModel.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageAccordion",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageAccordionBasic,
    PageAccordionAlwaysOpen,
    PageAccordionOneItemAlwaysOpen,
    PageAccordionVModel,
    PageAccordionChildren,
    PageAccordionSlots,
    PageAccordionDisabled,
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

    return {
      dataEvents,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
