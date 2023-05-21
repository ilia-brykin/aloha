import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableSortExample from "./PageTableSortExample/PageTableSortExample.vue";
import PageTableSortStart from "./PageTableSortStart/PageTableSortStart.vue";
import PageTableSortMultiColumn from "./PageTableSortMultiColumn/PageTableSortMultiColumn.vue";
import PageTableSortDisabled from "./PageTableSortDisabled/PageTableSortDisabled.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageTableSort",
  components: {
    AlohaPage,
    PageTableSortExample,
    PageTableSortStart,
    PageTableSortMultiColumn,
    PageTableSortDisabled,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataTranslate,
      pageTitle,
    };
  },

};
