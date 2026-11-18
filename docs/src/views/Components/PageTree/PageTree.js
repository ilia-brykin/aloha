import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageTreeBasic from "./PageTreeBasic/PageTreeBasic.vue";
import PageTreeCheckStrictly from "./PageTreeCheckStrictly/PageTreeCheckStrictly.vue";
import PageTreeCheckbox from "./PageTreeCheckbox/PageTreeCheckbox.vue";
import PageTreeExpand from "./PageTreeExpand/PageTreeExpand.vue";
import PageTreeJson from "./PageTreeJson/PageTreeJson.vue";
import PageTreeKeys from "./PageTreeKeys/PageTreeKeys.vue";
import PageTreeLazy from "./PageTreeLazy/PageTreeLazy.vue";
import PageTreeSearch from "./PageTreeSearch/PageTreeSearch.vue";
import PageTreeSlot from "./PageTreeSlot/PageTreeSlot.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import MethodsAPI from "./compositionAPI/MethodsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageTree",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageTreeBasic,
    PageTreeCheckbox,
    PageTreeCheckStrictly,
    PageTreeExpand,
    PageTreeJson,
    PageTreeKeys,
    PageTreeLazy,
    PageTreeSearch,
    PageTreeSlot,
  },
  setup() {
    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataMethods,
    } = MethodsAPI();

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
      dataEvents,
      dataMethods,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
