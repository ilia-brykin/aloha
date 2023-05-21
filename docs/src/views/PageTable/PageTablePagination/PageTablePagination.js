import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageTablePaginationDisabled from "./PageTablePaginationDisabled/PageTablePaginationDisabled.vue";
import PageTablePaginationExample from "./PageTablePaginationExample/PageTablePaginationExample.vue";
import PageTablePaginationLimit from "./PageTablePaginationLimit/PageTablePaginationLimit.vue";
import PageTablePaginationLimitStart from "./PageTablePaginationLimitStart/PageTablePaginationLimitStart.vue";
import PageTablePaginationMaxItems from "./PageTablePaginationMaxItems/PageTablePaginationMaxItems.vue";
import PageTablePaginationOutside from "./PageTablePaginationOutside/PageTablePaginationOutside.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageTablePagination",
  components: {
    AlohaPage,
    AlohaTableTranslate,
    PageTablePaginationDisabled,
    PageTablePaginationExample,
    PageTablePaginationLimit,
    PageTablePaginationLimitStart,
    PageTablePaginationMaxItems,
    PageTablePaginationOutside,
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
