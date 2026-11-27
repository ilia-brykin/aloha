import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageEmptyStateBasic from "./PageEmptyStateBasic/PageEmptyStateBasic.vue";
import PageEmptyStateSearch from "./PageEmptyStateSearch/PageEmptyStateSearch.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageEmptyState",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageEmptyStateBasic,
    PageEmptyStateSearch,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
      dataSlots,
    } = PropsAPI();

    return {
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
