import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageDatepickerRangeIdWidthDisabled from "./PageDatepickerRangeIdWidthDisabled/PageDatepickerRangeIdWidthDisabled.vue";
import PageDatepickerRangeBasic from "./PageDatepickerRangeBasic/PageDatepickerRangeBasic.vue";
import PageDatepickerRangeOptionsErrorsHtmlId from "./PageDatepickerRangeOptionsErrorsHtmlId/PageDatepickerRangeOptionsErrorsHtmlId.vue";
import PageDatepickerRangeEvents from "./PageDatepickerRangeEvents/PageDatepickerRangeEvents.vue";
import PageDatepickerRangeModelInputIdPrefixIsError from "./PageDatepickerRangeModelInputIdPrefixIsError/PageDatepickerRangeModelInputIdPrefixIsError.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageDatepickerRange",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageDatepickerRangeIdWidthDisabled,
    PageDatepickerRangeBasic,
    PageDatepickerRangeOptionsErrorsHtmlId,
    PageDatepickerRangeEvents,
    PageDatepickerRangeModelInputIdPrefixIsError,
  },
  setup() {
    const {
      dataProps,
    } = PropsAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
    };
  },
};
