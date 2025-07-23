import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageSliderBasic from "./PageSliderBasic/PageSliderBasic.vue";
import PageSliderChange from "./PageSliderChange/PageSliderChange.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageSlider",
  components: {
    AlohaPage,
    ATranslation,
    PageSliderBasic,
    PageSliderChange,
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
