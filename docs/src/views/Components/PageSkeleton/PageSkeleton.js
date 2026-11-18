import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageSkeletonAnimated from "./PageSkeletonAnimated/PageSkeletonAnimated.vue";
import PageSkeletonBasic from "./PageSkeletonBasic/PageSkeletonBasic.vue";
import PageSkeletonCount from "./PageSkeletonCount/PageSkeletonCount.vue";
import PageSkeletonLoading from "./PageSkeletonLoading/PageSkeletonLoading.vue";
import PageSkeletonRows from "./PageSkeletonRows/PageSkeletonRows.vue";
import PageSkeletonTemplate from "./PageSkeletonTemplate/PageSkeletonTemplate.vue";
import PageSkeletonThrottle from "./PageSkeletonThrottle/PageSkeletonThrottle.vue";
import PageSkeletonVariants from "./PageSkeletonVariants/PageSkeletonVariants.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageSkeleton",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageSkeletonAnimated,
    PageSkeletonBasic,
    PageSkeletonCount,
    PageSkeletonLoading,
    PageSkeletonRows,
    PageSkeletonTemplate,
    PageSkeletonThrottle,
    PageSkeletonVariants,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
      dataPropsItem,
    } = PropsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataProps,
      dataPropsItem,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
