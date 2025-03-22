import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageJsonBasic from "./PageJsonBasic/PageJsonBasic.vue";
import PageJsonChange from "./PageJsonChange/PageJsonChange.vue";
import PageJsonErrors from "./PageJsonErrors/PageJsonErrors.vue";
import PageJsonHelpText from "./PageJsonHelpText/PageJsonHelpText.vue";
import PageJsonLabelScreenReader from "./PageJsonLabelScreenReader/PageJsonLabelScreenReader.vue";
import PageJsonReadonly from "./PageJsonReadonly/PageJsonReadonly.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageJson",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageJsonBasic,
    PageJsonChange,
    PageJsonErrors,
    PageJsonHelpText,
    PageJsonLabelScreenReader,
    PageJsonReadonly,
  },
  setup() {
    const {
      pageTitle,
      pageTitleH1,
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
      pageTitleH1,
    };
  },
};
