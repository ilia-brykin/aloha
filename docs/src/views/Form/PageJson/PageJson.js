import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageJsonBasic from "./PageJsonBasic/PageJsonBasic.vue";
import PageJsonChange from "./PageJsonChange/PageJsonChange.vue";
import PageJsonErrors from "./PageJsonErrors/PageJsonErrors.vue";
import PageJsonHelpText from "./PageJsonHelpText/PageJsonHelpText.vue";
import PageJsonLabelScreenReader from "./PageJsonLabelScreenReader/PageJsonLabelScreenReader.vue";

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
