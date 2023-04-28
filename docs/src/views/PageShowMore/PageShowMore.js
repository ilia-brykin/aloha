import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AShowMore from "../../../../src/AShowMore/AShowMore";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageShowMoreBasic from "./PageShowMoreBasic/PageShowMoreBasic.vue";
import PageShowMoreBtnClass from "./PageShowMoreBtnClass/PageShowMoreBtnClass.vue";
import PageShowMoreBtnIcons from "./PageShowMoreBtnIcons/PageShowMoreBtnIcons.vue";
import PageShowMoreDisabled from "./PageShowMoreDisabled/PageShowMoreDisabled.vue";
import PageShowMoreHtml from "./PageShowMoreHtml/PageShowMoreHtml.vue";
import PageShowMoreNotLess from "./PageShowMoreNotLess/PageShowMoreNotLess.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageShowMore",
  components: {
    AlohaPage,
    AlohaTableProps,
    AShowMore,
    ATranslation,
    PageShowMoreBasic,
    PageShowMoreBtnClass,
    PageShowMoreBtnIcons,
    PageShowMoreDisabled,
    PageShowMoreHtml,
    PageShowMoreNotLess,
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
