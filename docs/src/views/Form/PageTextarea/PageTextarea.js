import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageTextareaBasic from "./PageTextareaBasic/PageTextareaBasic.vue";
import PageTextareaChange from "./PageTextareaChange/PageTextareaChange.vue";
import PageTextareaIsScalable from "./PageTextareaIsScalable/PageTextareaIsScalable.vue";
import PageTextareaResize from "./PageTextareaResize/PageTextareaResize.vue";

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
    PageTextareaIsScalable,
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
