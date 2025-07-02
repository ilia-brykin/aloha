import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageValidatedJsonModeJson from "./PageValidatedJsonModeJson/PageValidatedJsonModeJson.vue";
import PageValidatedJsonModeList from "./PageValidatedJsonModeList/PageValidatedJsonModeList.vue";
import PageValidatedJsonModeListTyped from "./PageValidatedJsonModeListTyped/PageValidatedJsonModeListTyped.vue";
import PageValidatedJsonModeSingle from "./PageValidatedJsonModeSingle/PageValidatedJsonModeSingle.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageValidatedJson",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageValidatedJsonModeJson,
    PageValidatedJsonModeList,
    PageValidatedJsonModeListTyped,
    PageValidatedJsonModeSingle,
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
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
