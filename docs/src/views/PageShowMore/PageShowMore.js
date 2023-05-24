import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import AShowMore from "../../../../src/AShowMore/AShowMore";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageShowMoreBasic from "./PageShowMoreBasic/PageShowMoreBasic.vue";
import PageShowMoreBtnClass from "./PageShowMoreBtnClass/PageShowMoreBtnClass.vue";
import PageShowMoreBtnIcons from "./PageShowMoreBtnIcons/PageShowMoreBtnIcons.vue";
import PageShowMoreDisabled from "./PageShowMoreDisabled/PageShowMoreDisabled.vue";
import PageShowMoreEvents from "./PageShowMoreEvents/PageShowMoreEvents.vue";
import PageShowMoreExposes from "./PageShowMoreExposes/PageShowMoreExposes.vue";
import PageShowMoreHeight from "./PageShowMoreHeight/PageShowMoreHeight.vue";
import PageShowMoreHtml from "./PageShowMoreHtml/PageShowMoreHtml.vue";
import PageShowMoreNotLess from "./PageShowMoreNotLess/PageShowMoreNotLess.vue";
import PageShowMoreOpenDefault from "./PageShowMoreOpenDefault/PageShowMoreOpenDefault.vue";
import PageShowMoreSafeHtml from "./PageShowMoreSafeHtml/PageShowMoreSafeHtml.vue";
import PageShowMoreSlots from "./PageShowMoreSlots/PageShowMoreSlots.vue";
import PageShowMoreText from "./PageShowMoreText/PageShowMoreText.vue";
import PageShowMoreTextLength from "./PageShowMoreTextLength/PageShowMoreTextLength.vue";
import PageShowMoreTexts from "./PageShowMoreTexts/PageShowMoreTexts.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageShowMore",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    AShowMore,
    ATranslation,
    PageShowMoreBasic,
    PageShowMoreBtnClass,
    PageShowMoreBtnIcons,
    PageShowMoreDisabled,
    PageShowMoreEvents,
    PageShowMoreExposes,
    PageShowMoreHeight,
    PageShowMoreHtml,
    PageShowMoreNotLess,
    PageShowMoreOpenDefault,
    PageShowMoreSafeHtml,
    PageShowMoreSlots,
    PageShowMoreText,
    PageShowMoreTextLength,
    PageShowMoreTexts,
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
