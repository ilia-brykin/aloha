import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageProgressBasic from "./PageProgressBasic/PageProgressBasic.vue";
import PageProgressClassCombination from "./PageProgressClassCombination/PageProgressClassCombination.vue";
import PageProgressClassProgressBar from "./PageProgressClassProgressBar/PageProgressClassProgressBar.vue";
import PageProgressClassProgressBarFunction from "./PageProgressClassProgressBarFunction/PageProgressClassProgressBarFunction.vue";
import PageProgressDuration from "./PageProgressDuration/PageProgressDuration.vue";
import PageProgressIndeterminate from "./PageProgressIndeterminate/PageProgressIndeterminate.vue";
import PageProgressMinMax from "./PageProgressMinMax/PageProgressMinMax.vue";
import PageProgressRevers from "./PageProgressRevers/PageProgressRevers.vue";
import PageProgressShowValue from "./PageProgressShowValue/PageProgressShowValue.vue";
import PageProgressSizes from "./PageProgressSizes/PageProgressSizes.vue";
import PageProgressStriped from "./PageProgressStriped/PageProgressStriped.vue";
import PageProgressStripedFlow from "./PageProgressStripedFlow/PageProgressStripedFlow.vue";
import PageProgressValue from "./PageProgressValue/PageProgressValue.vue";
import PageProgressValueTextInteger from "./PageProgressValueTextInteger/PageProgressValueTextInteger.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";

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
    PageProgressRevers,
    PageProgressShowValue,
    PageProgressSizes,
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

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataExposes,
    } = ExposesAPI();

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
