import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableFiltersExample from "./PageTableFiltersExample/PageTableFiltersExample.vue";
import PageTableFiltersDefaultHide from "./PageTableFiltersDefaultHide/PageTableFiltersDefaultHide.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableFilters",
  components: {
    AlohaPage,
    PageTableFiltersExample,
    PageTableFiltersDefaultHide,
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
