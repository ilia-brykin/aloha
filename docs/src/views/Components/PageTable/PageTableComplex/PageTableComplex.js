import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageTableComplexExample from "./PageTableComplexExample/PageTableComplexExample.vue";
import PageTableComplexSlotRowActions from "./PageTableComplexSlotRowActions/PageTableComplexSlotRowActions.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageTableComplex",
  components: {
    AlohaPage,
    ATranslation,
    PageTableComplexExample,
    PageTableComplexSlotRowActions,
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
