import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageTabsBasic from "./PageTabsBasic/PageTabsBasic.vue";
import PageTabsDisabled from "./PageTabsDisabled/PageTabsDisabled.vue";
import PageTabsKeyDisabled from "./PageTabsKeyDisabled/PageTabsKeyDisabled.vue";
import PageTabsKeyLabel from "./PageTabsKeyLabel/PageTabsKeyLabel.vue";
import PageTabsKeyContent from "./PageTabsKeyContent/PageTabsKeyContent.vue";
import PageTabsKeyTitle from "./PageTabsKeyTitle/PageTabsKeyTitle.vue";
import PageTabsTitleHtml from "./PageTabsTitleHtml/PageTabsTitleHtml.vue";
import PageTabsIsBoxed from "./PageTabsIsBoxed/PageTabsIsBoxed.vue";
import PageTabsIsVertical from "./PageTabsIsVertical/PageTabsIsVertical.vue";
import PageTabsKeyId from "./PageTabsKeyId/PageTabsKeyId.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageTabs",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageTabsBasic,
    PageTabsDisabled,
    PageTabsKeyDisabled,
    PageTabsKeyLabel,
    PageTabsKeyContent,
    PageTabsKeyTitle,
    PageTabsTitleHtml,
    PageTabsIsBoxed,
    PageTabsIsVertical,
    PageTabsKeyId,
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

    return {
      dataEvents,
      dataProps,
      pageTitle,
    };
  },
};
