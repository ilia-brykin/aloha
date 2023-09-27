import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageFiltersExample from "./PageFiltersExample/PageFiltersExample.vue";
import PageFiltersDefaultHide from "./PageFiltersDefaultHide/PageFiltersDefaultHide.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageFilters",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageFiltersExample,
    PageFiltersDefaultHide,
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
