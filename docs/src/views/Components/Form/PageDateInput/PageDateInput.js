import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageDateInputBasic from "./PageDateInputBasic/PageDateInputBasic.vue";
import PageDateInputBooking from "./PageDateInputBooking/PageDateInputBooking.vue";
import PageDateInputEvents from "./PageDateInputEvents/PageDateInputEvents.vue";
import PageDateInputFooter from "./PageDateInputFooter/PageDateInputFooter.vue";
import PageDateInputForm from "./PageDateInputForm/PageDateInputForm.vue";
import PageDateInputInline from "./PageDateInputInline/PageDateInputInline.vue";
import PageDateInputLabelPosition from "./PageDateInputLabelPosition/PageDateInputLabelPosition.vue";
import PageDateInputLimits from "./PageDateInputLimits/PageDateInputLimits.vue";
import PageDateInputModelFormat from "./PageDateInputModelFormat/PageDateInputModelFormat.vue";
import PageDateInputMonth from "./PageDateInputMonth/PageDateInputMonth.vue";
import PageDateInputQuarter from "./PageDateInputQuarter/PageDateInputQuarter.vue";
import PageDateInputRange from "./PageDateInputRange/PageDateInputRange.vue";
import PageDateInputShortcuts from "./PageDateInputShortcuts/PageDateInputShortcuts.vue";
import PageDateInputSlot from "./PageDateInputSlot/PageDateInputSlot.vue";
import PageDateInputTime from "./PageDateInputTime/PageDateInputTime.vue";
import PageDateInputTimeRules from "./PageDateInputTimeRules/PageDateInputTimeRules.vue";
import PageDateInputTyping from "./PageDateInputTyping/PageDateInputTyping.vue";
import PageDateInputWeek from "./PageDateInputWeek/PageDateInputWeek.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageDateInput",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageDateInputBasic,
    PageDateInputLimits,
    PageDateInputTime,
    PageDateInputMonth,
    PageDateInputRange,
    PageDateInputShortcuts,
    PageDateInputSlot,
    PageDateInputTimeRules,
    PageDateInputBooking,
    PageDateInputWeek,
    PageDateInputModelFormat,
    PageDateInputEvents,
    PageDateInputLabelPosition,
    PageDateInputTyping,
    PageDateInputInline,
    PageDateInputQuarter,
    PageDateInputFooter,
    PageDateInputForm,
  },
  setup() {
    const {
      dataEvents,
    } = EventsAPI();

    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataMethods,
      dataProps,
      dataTranslate,
    } = PropsAPI();

    const {
      dataSlots,
    } = SlotsAPI();

    return {
      dataEvents,
      dataMethods,
      dataProps,
      dataSlots,
      dataTranslate,
      pageTitle,
    };
  },
};
