import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableCssVars from "../../../global/components/AlohaTableCssVars/AlohaTableCssVars.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageNavbarBasic from "./PageNavbarBasic/PageNavbarBasic.vue";
import PageNavbarHover from "./PageNavbarHover/PageNavbarHover.vue";
import PageNavbarOverflow from "./PageNavbarOverflow/PageNavbarOverflow.vue";
import PageNavbarSlotItem from "./PageNavbarSlotItem/PageNavbarSlotItem.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageNavbar",
  components: {
    AlohaPage,
    AlohaTableCssVars,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageNavbarBasic,
    PageNavbarOverflow,
    PageNavbarHover,
    PageNavbarSlotItem,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataEvents,
      dataProps,
      dataSlots,
      dataTranslate,
    } = PropsAPI();

    return {
      dataEvents,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
