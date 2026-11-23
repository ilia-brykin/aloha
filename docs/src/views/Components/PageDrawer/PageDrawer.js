import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageDrawerBasic from "./PageDrawerBasic/PageDrawerBasic.vue";
import PageDrawerForm from "./PageDrawerForm/PageDrawerForm.vue";
import PageDrawerSizes from "./PageDrawerSizes/PageDrawerSizes.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "../PageModal/compositionAPI/SlotsAPI";
import TranslateAPI from "../PageModal/compositionAPI/TranslateAPI";

export default {
  name: "PageDrawer",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageDrawerBasic,
    PageDrawerForm,
    PageDrawerSizes,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    // the same slots and translations as AModal
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
