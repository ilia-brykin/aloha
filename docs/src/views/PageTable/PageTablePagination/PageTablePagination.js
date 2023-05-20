import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTablePaginationExample from "./PageTablePaginationExample/PageTablePaginationExample.vue";
import PageTablePaginationLimit from "./PageTablePaginationLimit/PageTablePaginationLimit.vue";
import PageTablePaginationLimitStart from "./PageTablePaginationLimitStart/PageTablePaginationLimitStart.vue";
import PageTablePaginationMaxItems from "./PageTablePaginationMaxItems/PageTablePaginationMaxItems.vue";
import PageTablePaginationOutside from "./PageTablePaginationOutside/PageTablePaginationOutside.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTablePagination",
  components: {
    AlohaPage,
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

    return {
      pageTitle,
    };
  },

};
