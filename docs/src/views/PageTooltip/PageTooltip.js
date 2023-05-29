import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageTooltipBasic from "./PageTooltipBasic/PageTooltipBasic.vue";
import PageTooltipTag from "./PageTooltipTag/PageTooltipTag.vue";
import PageTooltipMaxWidth from "./PageTooltipMaxWidth/PageTooltipMaxWidth.vue";
import PageTooltipWidth from "./PageTooltipWidth/PageTooltipWidth.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageTooltip",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageTooltipBasic,
    PageTooltipTag,
    PageTooltipMaxWidth,
    PageTooltipWidth,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    const {
      dataExposes,
    } = ExposesAPI();

    return {
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
