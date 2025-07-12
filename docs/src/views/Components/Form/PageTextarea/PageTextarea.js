import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageTextareaBasic from "./PageTextareaBasic/PageTextareaBasic.vue";
import PageTextareaChange from "./PageTextareaChange/PageTextareaChange.vue";
import PageTextareaErrors from "./PageTextareaErrors/PageTextareaErrors.vue";
import PageTextareaHelpText from "./PageTextareaHelpText/PageTextareaHelpText.vue";
import PageTextareaIsScalable from "./PageTextareaIsScalable/PageTextareaIsScalable.vue";
import PageTextareaLabelDescription from "./PageTextareaLabelDescription/PageTextareaLabelDescription.vue";
import PageTextareaLabelFloat from "./PageTextareaLabelFloat/PageTextareaLabelFloat.vue";
import PageTextareaLabelScreenReader from "./PageTextareaLabelScreenReader/PageTextareaLabelScreenReader.vue";
import PageTextareaReadonly from "./PageTextareaReadonly/PageTextareaReadonly.vue";
import PageTextareaResize from "./PageTextareaResize/PageTextareaResize.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageTextarea",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageTextareaBasic,
    PageTextareaChange,
    PageTextareaErrors,
    PageTextareaHelpText,
    PageTextareaIsScalable,
    PageTextareaLabelDescription,
    PageTextareaLabelFloat,
    PageTextareaLabelScreenReader,
    PageTextareaReadonly,
    PageTextareaResize,
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
