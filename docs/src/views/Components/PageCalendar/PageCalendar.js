import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageCalendarBasic from "./PageCalendarBasic/PageCalendarBasic.vue";
import PageCalendarCreate from "./PageCalendarCreate/PageCalendarCreate.vue";
import PageCalendarMaxEvents from "./PageCalendarMaxEvents/PageCalendarMaxEvents.vue";
import PageCalendarMultiDay from "./PageCalendarMultiDay/PageCalendarMultiDay.vue";
import PageCalendarSlots from "./PageCalendarSlots/PageCalendarSlots.vue";
import PageCalendarWeek from "./PageCalendarWeek/PageCalendarWeek.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageCalendar",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageCalendarBasic,
    PageCalendarCreate,
    PageCalendarMaxEvents,
    PageCalendarMultiDay,
    PageCalendarSlots,
    PageCalendarWeek,
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
      dataSlots,
    } = SlotsAPI();

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
