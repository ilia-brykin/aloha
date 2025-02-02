import {
  ATranslation,
} from "aloha-vue";

import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageFieldsetBasic from "./PageFieldsetBasic/PageFieldsetBasic.vue";
import PageFieldsetChange from "./PageFieldsetChange/PageFieldsetChange.vue";
import PageFieldsetCollapse from "./PageFieldsetCollapse/PageFieldsetCollapse.vue";
import PageFieldsetError from "./PageFieldsetError/PageFieldsetError.vue";
import PageFieldsetHasBorder from "./PageFieldsetHasBorder/PageFieldsetHasBorder.vue";
import PageFieldsetHelpText from "./PageFieldsetHelpText/PageFieldsetHelpText.vue";
import PageFieldsetLabelScreenReader from "./PageFieldsetLabelScreenReader/PageFieldsetLabelScreenReader.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageFieldset",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageFieldsetBasic,
    PageFieldsetChange,
    PageFieldsetCollapse,
    PageFieldsetError,
    PageFieldsetHasBorder,
    PageFieldsetHelpText,
    PageFieldsetLabelScreenReader,
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

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
