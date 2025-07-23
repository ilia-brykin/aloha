import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageSliderBasic from "./PageSliderBasic/PageSliderBasic.vue";
import PageSliderChange from "./PageSliderChange/PageSliderChange.vue";
import PageSliderErrors from "./PageSliderErrors/PageSliderErrors.vue";
import PageSliderHelpText from "./PageSliderHelpText/PageSliderHelpText.vue";
import PageSliderLabelDescription from "./PageSliderLabelDescription/PageSliderLabelDescription.vue";
import PageSliderRange from "./PageSliderRange/PageSliderRange.vue";
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
    PageSliderErrors,
    PageSliderHelpText,
    PageSliderLabelDescription,
    PageSliderRange,
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
