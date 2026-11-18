import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageInputOtpBasic from "./PageInputOtpBasic/PageInputOtpBasic.vue";
import PageInputOtpCharType from "./PageInputOtpCharType/PageInputOtpCharType.vue";
import PageInputOtpDisabled from "./PageInputOtpDisabled/PageInputOtpDisabled.vue";
import PageInputOtpErrors from "./PageInputOtpErrors/PageInputOtpErrors.vue";
import PageInputOtpFinish from "./PageInputOtpFinish/PageInputOtpFinish.vue";
import PageInputOtpForm from "./PageInputOtpForm/PageInputOtpForm.vue";
import PageInputOtpHelpText from "./PageInputOtpHelpText/PageInputOtpHelpText.vue";
import PageInputOtpLength from "./PageInputOtpLength/PageInputOtpLength.vue";
import PageInputOtpMask from "./PageInputOtpMask/PageInputOtpMask.vue";
import PageInputOtpSeparator from "./PageInputOtpSeparator/PageInputOtpSeparator.vue";
import PageInputOtpSize from "./PageInputOtpSize/PageInputOtpSize.vue";
import PageInputOtpValidator from "./PageInputOtpValidator/PageInputOtpValidator.vue";
import PageInputOtpVariant from "./PageInputOtpVariant/PageInputOtpVariant.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import MethodsAPI from "./compositionAPI/MethodsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageInputOtp",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageInputOtpBasic,
    PageInputOtpLength,
    PageInputOtpCharType,
    PageInputOtpValidator,
    PageInputOtpVariant,
    PageInputOtpSize,
    PageInputOtpMask,
    PageInputOtpSeparator,
    PageInputOtpFinish,
    PageInputOtpHelpText,
    PageInputOtpErrors,
    PageInputOtpDisabled,
    PageInputOtpForm,
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
      dataMethods,
    } = MethodsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

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
