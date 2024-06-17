import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableSimpleExample from "./PageTableSimpleExample/PageTableSimpleExample.vue";
import PageTableSimpleColumnsGroupedExample from "./PageTableSimpleColumnsGroupedExample/PageTableSimpleColumnsGroupedExample.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableSimple",
  components: {
    AlohaPage,
    PageTableSimpleExample,
    PageTableSimpleColumnsGroupedExample,
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
