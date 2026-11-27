import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageCarouselAriaDisabled from "./PageCarouselAriaDisabled/PageCarouselAriaDisabled.vue";
import PageCarouselArrowsPlacement from "./PageCarouselArrowsPlacement/PageCarouselArrowsPlacement.vue";
import PageCarouselArrowsTrigger from "./PageCarouselArrowsTrigger/PageCarouselArrowsTrigger.vue";
import PageCarouselAutoplay from "./PageCarouselAutoplay/PageCarouselAutoplay.vue";
import PageCarouselBasic from "./PageCarouselBasic/PageCarouselBasic.vue";
import PageCarouselCard from "./PageCarouselCard/PageCarouselCard.vue";
import PageCarouselDeleteActiveSlide from "./PageCarouselDeleteActiveSlide/PageCarouselDeleteActiveSlide.vue";
import PageCarouselEmits from "./PageCarouselEmits/PageCarouselEmits.vue";
import PageCarouselIndicatorsAutoLimit from "./PageCarouselIndicatorsAutoLimit/PageCarouselIndicatorsAutoLimit.vue";
import PageCarouselIndicatorsLimit from "./PageCarouselIndicatorsLimit/PageCarouselIndicatorsLimit.vue";
import PageCarouselIndicatorsType from "./PageCarouselIndicatorsType/PageCarouselIndicatorsType.vue";
import PageCarouselLabels from "./PageCarouselLabels/PageCarouselLabels.vue";
import PageCarouselLoop from "./PageCarouselLoop/PageCarouselLoop.vue";
import PageCarouselModel from "./PageCarouselModel/PageCarouselModel.vue";
import PageCarouselTransition from "./PageCarouselTransition/PageCarouselTransition.vue";
import PageCarouselVertical from "./PageCarouselVertical/PageCarouselVertical.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageCarousel",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageCarouselAriaDisabled,
    PageCarouselArrowsPlacement,
    PageCarouselArrowsTrigger,
    PageCarouselAutoplay,
    PageCarouselBasic,
    PageCarouselCard,
    PageCarouselDeleteActiveSlide,
    PageCarouselEmits,
    PageCarouselIndicatorsAutoLimit,
    PageCarouselIndicatorsLimit,
    PageCarouselIndicatorsType,
    PageCarouselLabels,
    PageCarouselLoop,
    PageCarouselModel,
    PageCarouselTransition,
    PageCarouselVertical,
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

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
