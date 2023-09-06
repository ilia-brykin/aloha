import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import PageTablePreviewRight from "./PageTablePreviewRight/PageTablePreviewRight.vue";
import PageTablePreviewRightPagination from "./PageTablePreviewRightPagination/PageTablePreviewRightPagination.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTablePreview",
  components: {
    AlohaPage,
    PageTablePreviewRight,
    PageTablePreviewRightPagination,
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
