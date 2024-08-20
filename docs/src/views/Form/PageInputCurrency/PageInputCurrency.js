import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageInputCurrencyBasic from "./PageInputCurrencyBasic/PageInputCurrencyBasic.vue";
import PageInputCurrencyChange from "./PageInputCurrencyChange/PageInputCurrencyChange.vue";
import PageInputCurrencyErrors from "./PageInputCurrencyErrors/PageInputCurrencyErrors.vue";
import PageInputCurrencyHelpText from "./PageInputCurrencyHelpText/PageInputCurrencyHelpText.vue";
import PageInputCurrencyLabelFloat from "./PageInputCurrencyLabelFloat/PageInputCurrencyLabelFloat.vue";
import PageInputCurrencySymbol from "./PageInputCurrencySymbol/PageInputCurrencySymbol.vue";
import PageInputCurrencyControlsType from "./PageInputCurrencyControlsType/PageInputCurrencyControlsType.vue";
import PageInputCurrencyDecimalDivider from "./PageInputCurrencyDecimalDivider/PageInputCurrencyDecimalDivider.vue";
import PageInputCurrencyMaxMin from "./PageInputCurrencyMaxMin/PageInputCurrencyMaxMin.vue";
import PageInputCurrencyModelType from "./PageInputCurrencyModelType/PageInputCurrencyModelType.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageInputCurrency",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageInputCurrencyBasic,
    PageInputCurrencyChange,
    PageInputCurrencyErrors,
    PageInputCurrencyHelpText,
    PageInputCurrencyLabelFloat,
    PageInputCurrencySymbol,
    PageInputCurrencyControlsType,
    PageInputCurrencyDecimalDivider,
    PageInputCurrencyMaxMin,
    PageInputCurrencyModelType,
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
