import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableSimpleColumnsGroupedExample from "./PageTableSimpleColumnsGroupedExample/PageTableSimpleColumnsGroupedExample.vue";
import PageTableSimpleExample from "./PageTableSimpleExample/PageTableSimpleExample.vue";
import PageTableSimpleIsSimpleTableExample from "./PageTableSimpleIsSimpleTableExample/PageTableSimpleIsSimpleTableExample.vue";
import PageTableSimpleMobileSlotsExample from "./PageTableSimpleMobileSlotsExample/PageTableSimpleMobileSlotsExample.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableSimple",
  components: {
    AlohaPage,
    PageTableSimpleColumnsGroupedExample,
    PageTableSimpleExample,
    PageTableSimpleIsSimpleTableExample,
    PageTableSimpleMobileSlotsExample,
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
