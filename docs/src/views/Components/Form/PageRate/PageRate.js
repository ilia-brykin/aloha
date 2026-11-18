import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageRateAllowHalf from "./PageRateAllowHalf/PageRateAllowHalf.vue";
import PageRateBasic from "./PageRateBasic/PageRateBasic.vue";
import PageRateClearable from "./PageRateClearable/PageRateClearable.vue";
import PageRateColors from "./PageRateColors/PageRateColors.vue";
import PageRateCss from "./PageRateCss/PageRateCss.vue";
import PageRateDisabled from "./PageRateDisabled/PageRateDisabled.vue";
import PageRateErrors from "./PageRateErrors/PageRateErrors.vue";
import PageRateForm from "./PageRateForm/PageRateForm.vue";
import PageRateHelpText from "./PageRateHelpText/PageRateHelpText.vue";
import PageRateIcons from "./PageRateIcons/PageRateIcons.vue";
import PageRateMax from "./PageRateMax/PageRateMax.vue";
import PageRateScore from "./PageRateScore/PageRateScore.vue";
import PageRateSize from "./PageRateSize/PageRateSize.vue";
import PageRateText from "./PageRateText/PageRateText.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageRate",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageRateBasic,
    PageRateMax,
    PageRateAllowHalf,
    PageRateSize,
    PageRateColors,
    PageRateIcons,
    PageRateText,
    PageRateScore,
    PageRateClearable,
    PageRateDisabled,
    PageRateHelpText,
    PageRateErrors,
    PageRateForm,
    PageRateCss,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
