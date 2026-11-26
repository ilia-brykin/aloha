import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PagePaginationPagesBasic from "./PagePaginationPagesBasic/PagePaginationPagesBasic.vue";
import PagePaginationPagesDisabled from "./PagePaginationPagesDisabled/PagePaginationPagesDisabled.vue";
import PagePaginationPagesEdges from "./PagePaginationPagesEdges/PagePaginationPagesEdges.vue";
import PagePaginationPagesHideOnSinglePage from "./PagePaginationPagesHideOnSinglePage/PagePaginationPagesHideOnSinglePage.vue";
import PagePaginationPagesInfinite from "./PagePaginationPagesInfinite/PagePaginationPagesInfinite.vue";
import PagePaginationPagesJumper from "./PagePaginationPagesJumper/PagePaginationPagesJumper.vue";
import PagePaginationPagesMaxPages from "./PagePaginationPagesMaxPages/PagePaginationPagesMaxPages.vue";
import PagePaginationPagesMode from "./PagePaginationPagesMode/PagePaginationPagesMode.vue";
import PagePaginationPagesPage from "./PagePaginationPagesPage/PagePaginationPagesPage.vue";
import PagePaginationPagesSize from "./PagePaginationPagesSize/PagePaginationPagesSize.vue";
import PagePaginationPagesSlots from "./PagePaginationPagesSlots/PagePaginationPagesSlots.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PagePaginationPages",
  components: {
    ATranslation,
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    PagePaginationPagesBasic,
    PagePaginationPagesDisabled,
    PagePaginationPagesEdges,
    PagePaginationPagesJumper,
    PagePaginationPagesPage,
    PagePaginationPagesHideOnSinglePage,
    PagePaginationPagesInfinite,
    PagePaginationPagesSize,
    PagePaginationPagesSlots,
    PagePaginationPagesMaxPages,
    PagePaginationPagesMode,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataEvents,
      dataProps,
      dataSlots,
    } = PropsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
