import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputBasic from "./PageInputBasic/PageInputBasic.vue";
import PageInputChange from "./PageInputChange/PageInputChange.vue";
import PageInputErrors from "./PageInputErrors/PageInputErrors.vue";
import PageInputHelpText from "./PageInputHelpText/PageInputHelpText.vue";
import PageInputLabelFloat from "./PageInputLabelFloat/PageInputLabelFloat.vue";
import PageInputLabelScreenReader from "./PageInputLabelScreenReader/PageInputLabelScreenReader.vue";
import PageInputPassword from "./PageInputPassword/PageInputPassword.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageInput",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageInputBasic,
    PageInputChange,
    PageInputErrors,
    PageInputHelpText,
    PageInputLabelFloat,
    PageInputLabelScreenReader,
    PageInputPassword,
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
