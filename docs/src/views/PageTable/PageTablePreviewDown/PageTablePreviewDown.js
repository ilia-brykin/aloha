import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTablePreviewDownExample from "./PageTablePreviewDownExample/PageTablePreviewDownExample.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTablePreviewDown",
  components: {
    AlohaPage,
    PageTablePreviewDownExample,
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
