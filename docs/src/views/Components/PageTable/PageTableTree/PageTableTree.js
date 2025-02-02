import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableTreeExample from "./PageTableTreeExample/PageTableTreeExample.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableTree",
  components: {
    AlohaPage,
    PageTableTreeExample,
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
