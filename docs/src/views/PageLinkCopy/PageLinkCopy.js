import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageLinkCopyBasic from "./PageLinkCopyBasic/PageLinkCopyBasic.vue";
import PageLinkCopyButtonOptions from "./PageLinkCopyButtonOptions/PageLinkCopyButtonOptions.vue";
import PageLinkCopyClass from "./PageLinkCopyClass/PageLinkCopyClass.vue";
import PageLinkCopyDisabled from "./PageLinkCopyDisabled/PageLinkCopyDisabled.vue";
import PageLinkCopySlotButton from "./PageLinkCopySlotButton/PageLinkCopySlotButton.vue";
import PageLinkCopySlotLink from "./PageLinkCopySlotLink/PageLinkCopySlotLink.vue";
import PageLinkCopyTextCopy from "./PageLinkCopyTextCopy/PageLinkCopyTextCopy.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageLinkCopy",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageLinkCopyBasic,
    PageLinkCopyButtonOptions,
    PageLinkCopyClass,
    PageLinkCopyDisabled,
    PageLinkCopySlotButton,
    PageLinkCopySlotLink,
    PageLinkCopyTextCopy,
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
      dataTranslate,
    } = TranslateAPI();

    return {
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
