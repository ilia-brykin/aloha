import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageTooltipArrowPadding from "./PageTooltipArrowPadding/PageTooltipArrowPadding.vue";
import PageTooltipArrowPaddingFunction from "./PageTooltipArrowPaddingFunction/PageTooltipArrowPaddingFunction.vue";
import PageTooltipBasic from "./PageTooltipBasic/PageTooltipBasic.vue";
import PageTooltipHideArrow from "./PageTooltipHideArrow/PageTooltipHideArrow.vue";
import PageTooltipMaxWidth from "./PageTooltipMaxWidth/PageTooltipMaxWidth.vue";
import PageTooltipOffsetDistance from "./PageTooltipOffsetDistance/PageTooltipOffsetDistance.vue";
import PageTooltipOffsetSkidding from "./PageTooltipOffsetSkidding/PageTooltipOffsetSkidding.vue";
import PageTooltipTag from "./PageTooltipTag/PageTooltipTag.vue";
import PageTooltipTimeClose from "./PageTooltipTimeClose/PageTooltipTimeClose.vue";
import PageTooltipWidth from "./PageTooltipWidth/PageTooltipWidth.vue";
import {
  ATranslation,
} from "aloha-vue";

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
    PageTooltipTimeClose,
    PageTooltipHideArrow,
    PageTooltipOffsetSkidding,
    PageTooltipOffsetDistance,
    PageTooltipArrowPadding,
    PageTooltipArrowPaddingFunction,
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
