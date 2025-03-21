import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageSwitchBasic from "./PageSwitchBasic/PageSwitchBasic.vue";
import PageSwitchChange from "./PageSwitchChange/PageSwitchChange.vue";
import PageSwitchErrors from "./PageSwitchErrors/PageSwitchErrors.vue";
import PageSwitchHelpText from "./PageSwitchHelpText/PageSwitchHelpText.vue";
import PageSwitchLabelScreenReader from "./PageSwitchLabelScreenReader/PageSwitchLabelScreenReader.vue";
import PageSwitchThreeState from "./PageSwitchThreeState/PageSwitchThreeState.vue";
import PageSwitchTitle from "./PageSwitchTitle/PageSwitchTitle.vue";
import PageSwitchTrueFalseLabel from "./PageSwitchTrueFalseLabel/PageSwitchTrueFalseLabel.vue";
import PageSwitchTrueFalseValue from "./PageSwitchTrueFalseValue/PageSwitchTrueFalseValue.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageSwitch",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageSwitchBasic,
    PageSwitchChange,
    PageSwitchErrors,
    PageSwitchHelpText,
    PageSwitchLabelScreenReader,
    PageSwitchThreeState,
    PageSwitchTitle,
    PageSwitchTrueFalseLabel,
    PageSwitchTrueFalseValue,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
