import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageSelectStyleBasic from "./PageSelectStyleBasic/PageSelectStyleBasic.vue";
import PageSelectStyleDataExtended from "./PageSelectStyleDataExtended/PageSelectStyleDataExtended.vue";
import PageSelectStyleFilterGroups from "./PageSelectStyleFilterGroups/PageSelectStyleFilterGroups.vue";
import PageSelectStyleReadonly from "./PageSelectStyleReadonly/PageSelectStyleReadonly.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageSelectStyle",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageSelectStyleBasic,
    PageSelectStyleDataExtended,
    PageSelectStyleFilterGroups,
    PageSelectStyleReadonly,
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

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
