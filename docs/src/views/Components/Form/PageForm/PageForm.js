import AlohaFormTypes from "../../../../global/components/AlohaFormTypes/AlohaFormTypes.vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageFormBasic from "./PageFormBasic/PageFormBasic.vue";
import PageFormDependencies from "./PageFormDependencies/PageFormDependencies.vue";
import PageFormEventsSlots from "./PageFormEventsSlots/PageFormEventsSlots.vue";
import PageFormValidationReadonly from "./PageFormValidationReadonly/PageFormValidationReadonly.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageForm",
  components: {
    AlohaFormTypes,
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageFormBasic,
    PageFormDependencies,
    PageFormEventsSlots,
    PageFormValidationReadonly,
  },
  setup() {
    const {
      dataEvents,
    } = EventsAPI();
    const {
      pageTitle,
    } = PageTitleAPI();
    const {
      dataProps,
    } = PropsAPI();
    const {
      dataSlots,
    } = SlotsAPI();

    return {
      dataEvents,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
