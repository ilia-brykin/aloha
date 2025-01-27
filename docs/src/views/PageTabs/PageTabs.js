import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageTabsActiveTabId from "./PageTabsActiveTabId/PageTabsActiveTabId.vue";
import PageTabsBasic from "./PageTabsBasic/PageTabsBasic.vue";
import PageTabsComplex from "./PageTabsComplex/PageTabsComplex.vue";
import PageTabsDisabled from "./PageTabsDisabled/PageTabsDisabled.vue";
import PageTabsDynamicSlots from "./PageTabsDynamicSlots/PageTabsDynamicSlots.vue";
import PageTabsIsBoxed from "./PageTabsIsBoxed/PageTabsIsBoxed.vue";
import PageTabsIsChangeOutside from "./PageTabsIsChangeOutside/PageTabsIsChangeOutside.vue";
import PageTabsIsVertical from "./PageTabsIsVertical/PageTabsIsVertical.vue";
import PageTabsKeyActive from "./PageTabsKeyActive/PageTabsKeyActive.vue";
import PageTabsKeyContent from "./PageTabsKeyContent/PageTabsKeyContent.vue";
import PageTabsKeyDisabled from "./PageTabsKeyDisabled/PageTabsKeyDisabled.vue";
import PageTabsKeyId from "./PageTabsKeyId/PageTabsKeyId.vue";
import PageTabsKeyLabel from "./PageTabsKeyLabel/PageTabsKeyLabel.vue";
import PageTabsKeyTitle from "./PageTabsKeyTitle/PageTabsKeyTitle.vue";
import PageTabsStaticSlots from "./PageTabsStaticSlots/PageTabsStaticSlots.vue";
import PageTabsTitleHtml from "./PageTabsTitleHtml/PageTabsTitleHtml.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageTabs",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageTabsActiveTabId,
    PageTabsBasic,
    PageTabsComplex,
    PageTabsDisabled,
    PageTabsDynamicSlots,
    PageTabsIsBoxed,
    PageTabsIsChangeOutside,
    PageTabsIsVertical,
    PageTabsKeyActive,
    PageTabsKeyContent,
    PageTabsKeyDisabled,
    PageTabsKeyId,
    PageTabsKeyLabel,
    PageTabsKeyTitle,
    PageTabsStaticSlots,
    PageTabsTitleHtml,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

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
