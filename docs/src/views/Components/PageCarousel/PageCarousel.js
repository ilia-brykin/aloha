import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageCarouselAriaDisabled from "./PageCarouselAriaDisabled/PageCarouselAriaDisabled.vue";
import PageCarouselArrowsTrigger from "./PageCarouselArrowsTrigger/PageCarouselArrowsTrigger.vue";
import PageCarouselBasic from "./PageCarouselBasic/PageCarouselBasic.vue";
import PageCarouselDeleteActiveSlide from "./PageCarouselDeleteActiveSlide/PageCarouselDeleteActiveSlide.vue";
import PageCarouselEmits from "./PageCarouselEmits/PageCarouselEmits.vue";
import PageCarouselIndicatorsAutoLimit from "./PageCarouselIndicatorsAutoLimit/PageCarouselIndicatorsAutoLimit.vue";
import PageCarouselIndicatorsLimit from "./PageCarouselIndicatorsLimit/PageCarouselIndicatorsLimit.vue";
import PageCarouselIndicatorsType from "./PageCarouselIndicatorsType/PageCarouselIndicatorsType.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageCarousel",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageCarouselAriaDisabled,
    PageCarouselArrowsTrigger,
    PageCarouselBasic,
    PageCarouselDeleteActiveSlide,
    PageCarouselEmits,
    PageCarouselIndicatorsAutoLimit,
    PageCarouselIndicatorsLimit,
    PageCarouselIndicatorsType,
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
