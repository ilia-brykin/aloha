import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageProgressBasic from "./PageProgressBasic/PageProgressBasic.vue";
import PageProgressClassCombination from "./PageProgressClassCombination/PageProgressClassCombination.vue";
import PageProgressClassProgressBar from "./PageProgressClassProgressBar/PageProgressClassProgressBar.vue";
import PageProgressClassProgressBarFunction from "./PageProgressClassProgressBarFunction/PageProgressClassProgressBarFunction.vue";
import PageProgressDuration from "./PageProgressDuration/PageProgressDuration.vue";
import PageProgressIndeterminate from "./PageProgressIndeterminate/PageProgressIndeterminate.vue";
import PageProgressMinMax from "./PageProgressMinMax/PageProgressMinMax.vue";
import PageProgressReverse from "./PageProgressReverse/PageProgressReverse.vue";
import PageProgressShowValue from "./PageProgressShowValue/PageProgressShowValue.vue";
import PageProgressSizes from "./PageProgressSizes/PageProgressSizes.vue";
import PageProgressSlotText from "./PageProgressSlotText/PageProgressSlotText.vue";
import PageProgressStriped from "./PageProgressStriped/PageProgressStriped.vue";
import PageProgressStripedFlow from "./PageProgressStripedFlow/PageProgressStripedFlow.vue";
import PageProgressValue from "./PageProgressValue/PageProgressValue.vue";
import PageProgressValueTextInteger from "./PageProgressValueTextInteger/PageProgressValueTextInteger.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageProgress",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageProgressBasic,
    PageProgressClassCombination,
    PageProgressClassProgressBar,
    PageProgressClassProgressBarFunction,
    PageProgressDuration,
    PageProgressIndeterminate,
    PageProgressMinMax,
    PageProgressReverse,
    PageProgressShowValue,
    PageProgressSizes,
    PageProgressSlotText,
    PageProgressStriped,
    PageProgressStripedFlow,
    PageProgressValue,
    PageProgressValueTextInteger,
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

    return {
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
