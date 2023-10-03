import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageModalBasic from "./PageModalBasic/PageModalBasic.vue";
import PageModalBodyHtml from "./PageModalBodyHtml/PageModalBodyHtml.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageModal",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageModalBasic,
    PageModalBodyHtml,
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
      dataExposes,
    } = ExposesAPI();

    const {
      dataEvents,
    } = EventsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataExposes,
      dataEvents,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
