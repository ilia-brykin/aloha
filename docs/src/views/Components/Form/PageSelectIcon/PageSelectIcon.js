import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageSelectIconBasic from "./PageSelectIconBasic/PageSelectIconBasic.vue";
import PageSelectIconChange from "./PageSelectIconChange/PageSelectIconChange.vue";
import PageSelectIconHelpText from "./PageSelectIconHelpText/PageSelectIconHelpText.vue";
import PageSelectIconReadonly from "./PageSelectIconReadonly/PageSelectIconReadonly.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageSelectIcon",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageSelectIconBasic,
    PageSelectIconChange,
    PageSelectIconHelpText,
    PageSelectIconReadonly,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
      pageTitle,
    };
  },
};
