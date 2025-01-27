import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageDisclosureBasic from "./PageDisclosureBasic/PageDisclosureBasic.vue";
import PageDisclosureBtnClass from "./PageDisclosureBtnClass/PageDisclosureBtnClass.vue";
import PageDisclosureBtnIcons from "./PageDisclosureBtnIcons/PageDisclosureBtnIcons.vue";
import PageDisclosureBtnTexts from "./PageDisclosureBtnTexts/PageDisclosureBtnTexts.vue";
import PageDisclosureBtnTitle from "./PageDisclosureBtnTitle/PageDisclosureBtnTitle.vue";
import PageDisclosureBtnTitleHtml from "./PageDisclosureBtnTitleHtml/PageDisclosureBtnTitleHtml.vue";
import PageDisclosureDisabled from "./PageDisclosureDisabled/PageDisclosureDisabled.vue";
import PageDisclosureEvents from "./PageDisclosureEvents/PageDisclosureEvents.vue";
import PageDisclosureExposes from "./PageDisclosureExposes/PageDisclosureExposes.vue";
import PageDisclosureHtml from "./PageDisclosureHtml/PageDisclosureHtml.vue";
import PageDisclosureNotLess from "./PageDisclosureNotLess/PageDisclosureNotLess.vue";
import PageDisclosureOpenDefault from "./PageDisclosureOpenDefault/PageDisclosureOpenDefault.vue";
import PageDisclosureSafeHtml from "./PageDisclosureSafeHtml/PageDisclosureSafeHtml.vue";
import PageDisclosureSlots from "./PageDisclosureSlots/PageDisclosureSlots.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageDisclosure",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageDisclosureBasic,
    PageDisclosureBtnClass,
    PageDisclosureBtnIcons,
    PageDisclosureBtnTexts,
    PageDisclosureBtnTitle,
    PageDisclosureBtnTitleHtml,
    PageDisclosureDisabled,
    PageDisclosureEvents,
    PageDisclosureExposes,
    PageDisclosureHtml,
    PageDisclosureNotLess,
    PageDisclosureOpenDefault,
    PageDisclosureSafeHtml,
    PageDisclosureSlots,
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

    const {
      dataExposes,
    } = ExposesAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
