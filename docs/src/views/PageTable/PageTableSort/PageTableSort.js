import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableSortExample from "./PageTableSortExample/PageTableSortExample.vue";
import PageTableSortStart from "./PageTableSortStart/PageTableSortStart.vue";
import PageTableSortMultiColumn from "./PageTableSortMultiColumn/PageTableSortMultiColumn.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageTableSort",
  components: {
    AlohaPage,
    PageTableSortExample,
    PageTableSortStart,
    PageTableSortMultiColumn,
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
