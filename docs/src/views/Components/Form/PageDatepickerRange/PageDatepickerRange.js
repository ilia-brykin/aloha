import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageDatepickerRangeBasic from "./PageDatepickerRangeBasic/PageDatepickerRangeBasic.vue";
import PageDatepickerRangeCustomFirstDay from "./PageDatepickerRangeCustomFirstDay/PageDatepickerRangeCustomFirstDay.vue";
import PageDatepickerRangeDisabledVariants from "./PageDatepickerRangeDisabledVariants/PageDatepickerRangeDisabledVariants.vue";
import PageDatepickerRangeFormatCustomization from "./PageDatepickerRangeFormatCustomization/PageDatepickerRangeFormatCustomization.vue";
import PageDatepickerRangeHelpText from "./PageDatepickerRangeHelpText/PageDatepickerRangeHelpText.vue";
import {
  ATranslation,
} from "aloha-vue";

import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageDatepickerRange",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageDatepickerRangeBasic,
    PageDatepickerRangeCustomFirstDay,
    PageDatepickerRangeDisabledVariants,
    PageDatepickerRangeFormatCustomization,
    PageDatepickerRangeHelpText,
  },
  setup() {
    const {
      dataProps,
    } = PropsAPI();

    return {
      dataProps,
    };
  },
};
