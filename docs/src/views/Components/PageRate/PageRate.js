import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageRateColor from "./PageRateColor/PageRateColor.vue";
import PageRateHalfIcon from "./PageRateHalfIcon/PageRateHalfIcon.vue";
import PageRateHoveredColor from "./PageRateHoveredColor/PageRateHoveredColor.vue";
import PageRateIcon from "./PageRateIcon/PageRateIcon.vue";
import PageRateIconFill from "./PageRateIconFill/PageRateIconFill.vue";
import PageRateModelValue from "./PageRateModelValue/PageRateModelValue.vue";
import PageRateRating from "./PageRateRating/PageRateRating.vue";
import PageRateReadonly from "./PageRateReadonly/PageRateReadonly.vue";
import PageRateShowScore from "./PageRateShowScore/PageRateShowScore.vue";
import PageRateSize from "./PageRateSize/PageRateSize.vue";
import PageRateTextExtra from "./PageRateTextExtra/PageRateTextExtra.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageRate",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageRateModelValue,
    PageRateReadonly,
    PageRateHalfIcon,
    PageRateSize,
    PageRateColor,
    PageRateHoveredColor,
    PageRateRating,
    PageRateIcon,
    PageRateIconFill,
    PageRateShowScore,
    PageRateTextExtra,
  },
  setup() {
    const {
      dataProps,
    } = PropsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
    };
  },
};
