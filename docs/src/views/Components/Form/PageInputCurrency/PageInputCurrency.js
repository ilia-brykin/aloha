import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputCurrencyBasic from "./PageInputCurrencyBasic/PageInputCurrencyBasic.vue";
import PageInputCurrencyChange from "./PageInputCurrencyChange/PageInputCurrencyChange.vue";
import PageInputCurrencyControlsType from "./PageInputCurrencyControlsType/PageInputCurrencyControlsType.vue";
import PageInputCurrencyDecimalDivider from "./PageInputCurrencyDecimalDivider/PageInputCurrencyDecimalDivider.vue";
import PageInputCurrencyDecimalPartLength from "./PageInputCurrencyDecimalPartLength/PageInputCurrencyDecimalPartLength.vue";
import PageInputCurrencyErrors from "./PageInputCurrencyErrors/PageInputCurrencyErrors.vue";
import PageInputCurrencyHelpText from "./PageInputCurrencyHelpText/PageInputCurrencyHelpText.vue";
import PageInputCurrencyLabelFloat from "./PageInputCurrencyLabelFloat/PageInputCurrencyLabelFloat.vue";
import PageInputCurrencyLabelScreenReader from "./PageInputCurrencyLabelScreenReader/PageInputCurrencyLabelScreenReader.vue";
import PageInputCurrencyMaxMin from "./PageInputCurrencyMaxMin/PageInputCurrencyMaxMin.vue";
import PageInputCurrencyModelType from "./PageInputCurrencyModelType/PageInputCurrencyModelType.vue";
import PageInputCurrencyStep from "./PageInputCurrencyStep/PageInputCurrencyStep.vue";
import PageInputCurrencySymbol from "./PageInputCurrencySymbol/PageInputCurrencySymbol.vue";
import PageInputCurrencyThousandDivider from "./PageInputCurrencyThousandDivider/PageInputCurrencyThousandDivider.vue";
import PageInputCurrencyValidationOnChange from "./PageInputCurrencyValidationOnChange/PageInputCurrencyValidationOnChange.vue";
import {
  ATranslation,
} from "aloha-vue";

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
    PageInputCurrencyControlsType,
    PageInputCurrencyDecimalDivider,
    PageInputCurrencyDecimalPartLength,
    PageInputCurrencyErrors,
    PageInputCurrencyHelpText,
    PageInputCurrencyLabelFloat,
    PageInputCurrencyLabelScreenReader,
    PageInputCurrencyMaxMin,
    PageInputCurrencyModelType,
    PageInputCurrencyStep,
    PageInputCurrencySymbol,
    PageInputCurrencyThousandDivider,
    PageInputCurrencyValidationOnChange,
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
