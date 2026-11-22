import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageModalFormColumns from "./PageModalFormColumns/PageModalFormColumns.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "../Form/PageForm/compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageModalForm",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageModalFormColumns,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    // the same events as AForm
    const {
      dataEvents,
    } = EventsAPI();

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
