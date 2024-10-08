import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageOneCheckboxBasic from "./PageOneCheckboxBasic/PageOneCheckboxBasic.vue";
import PageOneCheckboxChange from "./PageOneCheckboxChange/PageOneCheckboxChange.vue";
import PageOneCheckboxErrors from "./PageOneCheckboxErrors/PageOneCheckboxErrors.vue";
import PageOneCheckboxFalseValue from "./PageOneCheckboxFalseValue/PageOneCheckboxFalseValue.vue";
import PageOneCheckboxHelpText from "./PageOneCheckboxHelpText/PageOneCheckboxHelpText.vue";
import PageOneCheckboxIndeterminate from "./PageOneCheckboxIndeterminate/PageOneCheckboxIndeterminate.vue";
import PageOneCheckboxTrueValue from "./PageOneCheckboxTrueValue/PageOneCheckboxTrueValue.vue";
import PageOneCheckboxWidthAuto from "./PageOneCheckboxWidthAuto/PageOneCheckboxWidthAuto.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageOneCheckbox",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageOneCheckboxBasic,
    PageOneCheckboxChange,
    PageOneCheckboxErrors,
    PageOneCheckboxFalseValue,
    PageOneCheckboxHelpText,
    PageOneCheckboxIndeterminate,
    PageOneCheckboxTrueValue,
    PageOneCheckboxWidthAuto,
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
