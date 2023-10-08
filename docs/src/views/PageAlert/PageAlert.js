import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageAlertBasic from "./PageAlertBasic/PageAlertBasic.vue";
import PageAlertBtnClose from "./PageAlertBtnClose/PageAlertBtnClose.vue";
import PageAlertClosable from "./PageAlertClosable/PageAlertClosable.vue";
import PageAlertCss from "./PageAlertCss/PageAlertCss.vue";
import PageAlertExposes from "./PageAlertExposes/PageAlertExposes.vue";
import PageAlertHtml from "./PageAlertHtml/PageAlertHtml.vue";
import PageAlertIconsCustom from "./PageAlertIconsCustom/PageAlertIconsCustom.vue";
import PageAlertIconsDefault from "./PageAlertIconsDefault/PageAlertIconsDefault.vue";
import PageAlertRemoveOnClose from "./PageAlertRemoveOnClose/PageAlertRemoveOnClose.vue";
import PageAlertSafeHtml from "./PageAlertSafeHtml/PageAlertSafeHtml.vue";
import PageAlertSlot from "./PageAlertSlot/PageAlertSlot.vue";
import PageAlertText from "./PageAlertText/PageAlertText.vue";
import PageAlertTypes from "./PageAlertTypes/PageAlertTypes.vue";
import ADatepickerRange from "../../../../src/ADatepickerRange/ADatepickerRange";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import { computed, ref } from "vue";

export default {
  name: "PageAlert",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageAlertBasic,
    PageAlertBtnClose,
    PageAlertClosable,
    PageAlertCss,
    PageAlertExposes,
    PageAlertHtml,
    PageAlertIconsCustom,
    PageAlertIconsDefault,
    PageAlertRemoveOnClose,
    PageAlertSafeHtml,
    PageAlertSlot,
    PageAlertText,
    PageAlertTypes,
    ADatepickerRange,
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

    const dateRangeModel = ref({
      date_after: null,
      date_before: null,
    });

    const datepickerOptions = ref({
      value: {
        htmlId: "myDatepicker",
        id: "date",
      }
    });

    const dateRangeText = computed(() => {
      return `Selected Date Range: 
              ${ dateRangeModel.value.date_after } - 
              ${ dateRangeModel.value.date_before }`;
    });

    const updateDateRange = newRange => {
      dateRangeModel.value = newRange.model;
    };

    return {
      dataEvents,
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
      dateRangeModel,
      datepickerOptions,
      dateRangeText,
      updateDateRange
    };
  },
};
