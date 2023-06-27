import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableSortDisabled from "./PageTableSortDisabled/PageTableSortDisabled.vue";
import PageTableSortExample from "./PageTableSortExample/PageTableSortExample.vue";
import PageTableSortMultiColumn from "./PageTableSortMultiColumn/PageTableSortMultiColumn.vue";
import PageTableSortMultiColumnFirstNumber from "./PageTableSortMultiColumnFirstNumber/PageTableSortMultiColumnFirstNumber.vue";
import PageTableSortMultiColumnKey from "./PageTableSortMultiColumnKey/PageTableSortMultiColumnKey.vue";
import PageTableSortOutside from "./PageTableSortOutside/PageTableSortOutside.vue";
import PageTableSortSequenceNumberClass from "./PageTableSortSequenceNumberClass/PageTableSortSequenceNumberClass.vue";
import PageTableSortStart from "./PageTableSortStart/PageTableSortStart.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageTableSort",
  components: {
    AlohaPage,
    PageTableSortDisabled,
    PageTableSortExample,
    PageTableSortMultiColumn,
    PageTableSortMultiColumnFirstNumber,
    PageTableSortMultiColumnKey,
    PageTableSortOutside,
    PageTableSortSequenceNumberClass,
    PageTableSortStart,
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
