import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageCalendarAgenda from "./PageCalendarAgenda/PageCalendarAgenda.vue";
import PageCalendarAvailability from "./PageCalendarAvailability/PageCalendarAvailability.vue";
import PageCalendarBasic from "./PageCalendarBasic/PageCalendarBasic.vue";
import PageCalendarCreate from "./PageCalendarCreate/PageCalendarCreate.vue";
import PageCalendarDay from "./PageCalendarDay/PageCalendarDay.vue";
import PageCalendarDragDrop from "./PageCalendarDragDrop/PageCalendarDragDrop.vue";
import PageCalendarExport from "./PageCalendarExport/PageCalendarExport.vue";
import PageCalendarImport from "./PageCalendarImport/PageCalendarImport.vue";
import PageCalendarLoading from "./PageCalendarLoading/PageCalendarLoading.vue";
import PageCalendarMaxEvents from "./PageCalendarMaxEvents/PageCalendarMaxEvents.vue";
import PageCalendarMultiDay from "./PageCalendarMultiDay/PageCalendarMultiDay.vue";
import PageCalendarPopover from "./PageCalendarPopover/PageCalendarPopover.vue";
import PageCalendarRecurring from "./PageCalendarRecurring/PageCalendarRecurring.vue";
import PageCalendarSlots from "./PageCalendarSlots/PageCalendarSlots.vue";
import PageCalendarSmall from "./PageCalendarSmall/PageCalendarSmall.vue";
import PageCalendarStatus from "./PageCalendarStatus/PageCalendarStatus.vue";
import PageCalendarWeek from "./PageCalendarWeek/PageCalendarWeek.vue";
import PageCalendarWorkWeek from "./PageCalendarWorkWeek/PageCalendarWorkWeek.vue";
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
    PageCalendarAgenda,
    PageCalendarAvailability,
    PageCalendarBasic,
    PageCalendarCreate,
    PageCalendarDay,
    PageCalendarDragDrop,
    PageCalendarExport,
    PageCalendarImport,
    PageCalendarLoading,
    PageCalendarMaxEvents,
    PageCalendarMultiDay,
    PageCalendarPopover,
    PageCalendarRecurring,
    PageCalendarSlots,
    PageCalendarSmall,
    PageCalendarStatus,
    PageCalendarWeek,
    PageCalendarWorkWeek,
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
