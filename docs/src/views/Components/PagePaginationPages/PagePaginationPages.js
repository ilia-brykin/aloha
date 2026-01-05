import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PagePaginationPagesBasic from "./PagePaginationPagesBasic/PagePaginationPagesBasic.vue";
import PagePaginationPagesDisabled from "./PagePaginationPagesDisabled/PagePaginationPagesDisabled.vue";
import PagePaginationPagesMaxPages from "./PagePaginationPagesMaxPages/PagePaginationPagesMaxPages.vue";
import PagePaginationPagesMode from "./PagePaginationPagesMode/PagePaginationPagesMode.vue";
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
    PagePaginationPagesMaxPages,
    PagePaginationPagesMode,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
