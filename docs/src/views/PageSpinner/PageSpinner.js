import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageSpinnerAriaLabel from "./PageSpinnerAriaLabel/PageSpinnerAriaLabel.vue";
import PageSpinnerBasic from "./PageSpinnerBasic/PageSpinnerBasic.vue";
import PageSpinnerColors from "./PageSpinnerColors/PageSpinnerColors.vue";
import PageSpinnerSizes from "./PageSpinnerSizes/PageSpinnerSizes.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageSpinner",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageSpinnerAriaLabel,
    PageSpinnerBasic,
    PageSpinnerColors,
    PageSpinnerSizes,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
