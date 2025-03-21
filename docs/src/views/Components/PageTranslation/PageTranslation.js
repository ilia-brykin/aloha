import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageTranslationAriaLabel from "./PageTranslationAriaLabel/PageTranslationAriaLabel.vue";
import PageTranslationBasic from "./PageTranslationBasic/PageTranslationBasic.vue";
import PageTranslationExtra from "./PageTranslationExtra/PageTranslationExtra.vue";
import PageTranslationHtml from "./PageTranslationHtml/PageTranslationHtml.vue";
import PageTranslationHtmlAfterBefore from "./PageTranslationHtmlAfterBefore/PageTranslationHtmlAfterBefore.vue";
import PageTranslationPlaceholder from "./PageTranslationPlaceholder/PageTranslationPlaceholder.vue";
import PageTranslationSafeHtml from "./PageTranslationSafeHtml/PageTranslationSafeHtml.vue";
import PageTranslationSlotDefault from "./PageTranslationSlotDefault/PageTranslationSlotDefault.vue";
import PageTranslationTextAfter from "./PageTranslationTextAfter/PageTranslationTextAfter.vue";
import PageTranslationTextAfterBefore from "./PageTranslationTextAfterBefore/PageTranslationTextAfterBefore.vue";
import PageTranslationTextBefore from "./PageTranslationTextBefore/PageTranslationTextBefore.vue";
import PageTranslationTextObject from "./PageTranslationTextObject/PageTranslationTextObject.vue";
import PageTranslationTitle from "./PageTranslationTitle/PageTranslationTitle.vue";
import PageTranslationTitleArray from "./PageTranslationTitleArray/PageTranslationTitleArray.vue";
import PageTranslationTitleObject from "./PageTranslationTitleObject/PageTranslationTitleObject.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageTranslation",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageTranslationAriaLabel,
    PageTranslationBasic,
    PageTranslationExtra,
    PageTranslationHtml,
    PageTranslationHtmlAfterBefore,
    PageTranslationPlaceholder,
    PageTranslationSafeHtml,
    PageTranslationSlotDefault,
    PageTranslationTextAfter,
    PageTranslationTextAfterBefore,
    PageTranslationTextBefore,
    PageTranslationTextObject,
    PageTranslationTitle,
    PageTranslationTitleArray,
    PageTranslationTitleObject,
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
