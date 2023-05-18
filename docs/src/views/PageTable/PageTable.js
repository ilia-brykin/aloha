import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageTableComplex from "./PageTableComplex/PageTableComplex.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTable",
  components: {
    AlohaPage,
    ATranslation,
    PageTableComplex,
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
