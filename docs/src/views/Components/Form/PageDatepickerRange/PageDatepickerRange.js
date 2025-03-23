import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageDatepickerRangeBasic from "./PageDatepickerRangeBasic/PageDatepickerRangeBasic.vue";
import PageDatepickerRangeCustomFirstDay from "./PageDatepickerRangeCustomFirstDay/PageDatepickerRangeCustomFirstDay.vue";
import PageDatepickerRangeDisabledVariants from "./PageDatepickerRangeDisabledVariants/PageDatepickerRangeDisabledVariants.vue";
import PageDatepickerRangeFormatCustomization from "./PageDatepickerRangeFormatCustomization/PageDatepickerRangeFormatCustomization.vue";
import PageDatepickerRangeHelpText from "./PageDatepickerRangeHelpText/PageDatepickerRangeHelpText.vue";
import PageDatepickerRangeReadonly from "./PageDatepickerRangeReadonly/PageDatepickerRangeReadonly.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageDatepickerRange",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageDatepickerRangeBasic,
    PageDatepickerRangeCustomFirstDay,
    PageDatepickerRangeDisabledVariants,
    PageDatepickerRangeFormatCustomization,
    PageDatepickerRangeHelpText,
    PageDatepickerRangeReadonly,
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
