import AlohaFormTypes from "../../../../global/components/AlohaFormTypes/AlohaFormTypes.vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageFormElementBasic from "./PageFormElementBasic/PageFormElementBasic.vue";
import PageFormElementReadonly from "./PageFormElementReadonly/PageFormElementReadonly.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageFormElement",
  components: {
    AlohaFormTypes,
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageFormElementBasic,
    PageFormElementReadonly,
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
