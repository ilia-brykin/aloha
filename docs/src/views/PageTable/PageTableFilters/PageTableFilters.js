import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableFiltersDefaultHide from "./PageTableFiltersDefaultHide/PageTableFiltersDefaultHide.vue";
import PageTableFiltersExample from "./PageTableFiltersExample/PageTableFiltersExample.vue";
import PageTableFiltersInitialModel from "./PageTableFiltersInitialModel/PageTableFiltersInitialModel.vue";
import PageTableFiltersSave from "./PageTableFiltersSave/PageTableFiltersSave.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableFilters",
  components: {
    AlohaPage,
    PageTableFiltersDefaultHide,
    PageTableFiltersExample,
    PageTableFiltersInitialModel,
    PageTableFiltersSave,
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
