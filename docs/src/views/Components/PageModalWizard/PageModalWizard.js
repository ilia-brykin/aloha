import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageModalWizardBasic from "./PageModalWizardBasic/PageModalWizardBasic.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageModalWizard",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageModalWizardBasic,
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
      dataExposes,
    } = ExposesAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
