import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageModalBasic from "./PageModalBasic/PageModalBasic.vue";
import PageModalBodyHtml from "./PageModalBodyHtml/PageModalBodyHtml.vue";
import PageModalCloseButton from "./PageModalCloseButton/PageModalCloseButton.vue";
import PageModalSaveButton from "./PageModalSaveButton/PageModalSaveButton.vue";
import PageModalSelectorClose from "./PageModalSelectorClose/PageModalSelectorClose.vue";
import PageModalSelectorCloseIds from "./PageModalSelectorCloseIds/PageModalSelectorCloseIds.vue";
import PageModalSize from "./PageModalSize/PageModalSize.vue";
import PageModalSlots from "./PageModalSlots/PageModalSlots.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageModal",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageModalBasic,
    PageModalBodyHtml,
    PageModalCloseButton,
    PageModalSaveButton,
    PageModalSelectorClose,
    PageModalSelectorCloseIds,
    PageModalSize,
    PageModalSlots,
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

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataExposes,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
