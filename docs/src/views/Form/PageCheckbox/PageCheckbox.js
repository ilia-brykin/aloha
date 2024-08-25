import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageCheckboxCollapse from "./PageCheckboxCollapse/PageCheckboxCollapse.vue";
import PageCheckboxDataExtra from "./PageCheckboxDataExtra/PageCheckboxDataExtra.vue";
import PageCheckboxHasControlCheckbox from "./PageCheckboxHasControlCheckbox/PageCheckboxHasControlCheckbox.vue";
import PageCheckboxInline from "./PageCheckboxInline/PageCheckboxInline.vue";
import PageCheckboxIsButtonGroup from "./PageCheckboxIsButtonGroup/PageCheckboxIsButtonGroup.vue";
import PageCheckboxKeyDisabled from "./PageCheckboxKeyDisabled/PageCheckboxKeyDisabled.vue";
import PageCheckboxSearch from "./PageCheckboxSearch/PageCheckboxSearch.vue";
import PageCheckboxTranslateData from "./PageCheckboxTranslateData/PageCheckboxTranslateData.vue";
import PageCheckboxTwoColumns from "./PageCheckboxTwoColumns/PageCheckboxTwoColumns.vue";
import PageCheckboxBasic from "./PageCheckboxBasic/PageCheckboxBasic.vue";
import PageCheckboxGroup from "./PageCheckboxGroup/PageCheckboxGroup.vue";
import PageCheckboxChange from "./PageCheckboxChange/PageCheckboxChange.vue";
import PageCheckboxHelpText from "./PageCheckboxHelpText/PageCheckboxHelpText.vue";
import PageCheckboxError from "./PageCheckboxError/PageCheckboxError.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageCheckbox",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageCheckboxCollapse,
    PageCheckboxDataExtra,
    PageCheckboxHasControlCheckbox,
    PageCheckboxInline,
    PageCheckboxIsButtonGroup,
    PageCheckboxKeyDisabled,
    PageCheckboxSearch,
    PageCheckboxTranslateData,
    PageCheckboxTwoColumns,
    PageCheckboxBasic,
    PageCheckboxGroup,
    PageCheckboxChange,
    PageCheckboxHelpText,
    PageCheckboxError,
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
