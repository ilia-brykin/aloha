import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageSpinnerAriaLabel from "./PageSpinnerAriaLabel/PageSpinnerAriaLabel.vue";
import PageSpinnerBasic from "./PageSpinnerBasic/PageSpinnerBasic.vue";
import PageSpinnerColors from "./PageSpinnerColors/PageSpinnerColors.vue";
import PageSpinnerSizes from "./PageSpinnerSizes/PageSpinnerSizes.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageSpinner",
  components: {
    AlohaPage,
    AlohaTableProps,
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

    return {
      dataProps,
      pageTitle,
    };
  },
};
