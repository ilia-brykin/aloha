import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputBasic from "./PageInputBasic/PageInputBasic.vue";
import PageInputChange from "./PageInputChange/PageInputChange.vue";
import PageInputErrors from "./PageInputErrors/PageInputErrors.vue";
import PageInputHelpText from "./PageInputHelpText/PageInputHelpText.vue";
import PageInputLabelDescription from "./PageInputLabelDescription/PageInputLabelDescription.vue";
import PageInputLabelFloat from "./PageInputLabelFloat/PageInputLabelFloat.vue";
import PageInputLabelScreenReader from "./PageInputLabelScreenReader/PageInputLabelScreenReader.vue";
import PageInputPassword from "./PageInputPassword/PageInputPassword.vue";
import PageInputReadonly from "./PageInputReadonly/PageInputReadonly.vue";
import PageInputReadonlyPassword from "./PageInputReadonlyPassword/PageInputReadonlyPassword.vue";
import {
  ATranslation,
} from "aloha-vue";

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
    PageInputLabelDescription,
    PageInputLabelFloat,
    PageInputLabelScreenReader,
    PageInputPassword,
    PageInputReadonly,
    PageInputReadonlyPassword,
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
