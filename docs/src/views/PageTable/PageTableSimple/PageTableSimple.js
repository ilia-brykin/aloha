import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableSimpleExample from "./PageTableSimpleExample/PageTableSimpleExample.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableSimple",
  components: {
    AlohaPage,
    PageTableSimpleExample,
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
