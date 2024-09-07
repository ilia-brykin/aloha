import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageCheckboxBasic from "./PageCheckboxBasic/PageCheckboxBasic.vue";
import PageCheckboxChange from "./PageCheckboxChange/PageCheckboxChange.vue";
import PageCheckboxCollapse from "./PageCheckboxCollapse/PageCheckboxCollapse.vue";
import PageCheckboxDataExtra from "./PageCheckboxDataExtra/PageCheckboxDataExtra.vue";
import PageCheckboxError from "./PageCheckboxError/PageCheckboxError.vue";
import PageCheckboxGroup from "./PageCheckboxGroup/PageCheckboxGroup.vue";
import PageCheckboxHasBorder from "./PageCheckboxHasBorder/PageCheckboxHasBorder.vue";
import PageCheckboxHasControlCheckbox from "./PageCheckboxHasControlCheckbox/PageCheckboxHasControlCheckbox.vue";
import PageCheckboxHelpText from "./PageCheckboxHelpText/PageCheckboxHelpText.vue";
import PageCheckboxInline from "./PageCheckboxInline/PageCheckboxInline.vue";
import PageCheckboxIsButtonGroup from "./PageCheckboxIsButtonGroup/PageCheckboxIsButtonGroup.vue";
import PageCheckboxIsDataSimpleArray from "./PageCheckboxIsDataSimpleArray/PageCheckboxIsDataSimpleArray.vue";
import PageCheckboxIsWidthAuto from "./PageCheckboxIsWidthAuto/PageCheckboxIsWidthAuto.vue";
import PageCheckboxKeyDisabled from "./PageCheckboxKeyDisabled/PageCheckboxKeyDisabled.vue";
import PageCheckboxKeyLabelCallback from "./PageCheckboxKeyLabelCallback/PageCheckboxKeyLabelCallback.vue";
import PageCheckboxKeyTitle from "./PageCheckboxKeyTitle/PageCheckboxKeyTitle.vue";
import PageCheckboxLabelScreenReader from "./PageCheckboxLabelScreenReader/PageCheckboxLabelScreenReader.vue";
import PageCheckboxSearch from "./PageCheckboxSearch/PageCheckboxSearch.vue";
import PageCheckboxSortOrder from "./PageCheckboxSortOrder/PageCheckboxSortOrder.vue";
import PageCheckboxSortOrderGroup from "./PageCheckboxSortOrderGroup/PageCheckboxSortOrderGroup.vue";
import PageCheckboxTranslateData from "./PageCheckboxTranslateData/PageCheckboxTranslateData.vue";
import PageCheckboxTwoColumns from "./PageCheckboxTwoColumns/PageCheckboxTwoColumns.vue";

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
    PageCheckboxBasic,
    PageCheckboxChange,
    PageCheckboxCollapse,
    PageCheckboxDataExtra,
    PageCheckboxError,
    PageCheckboxGroup,
    PageCheckboxHasBorder,
    PageCheckboxHasControlCheckbox,
    PageCheckboxHelpText,
    PageCheckboxInline,
    PageCheckboxIsButtonGroup,
    PageCheckboxIsDataSimpleArray,
    PageCheckboxIsWidthAuto,
    PageCheckboxKeyDisabled,
    PageCheckboxKeyLabelCallback,
    PageCheckboxKeyTitle,
    PageCheckboxLabelScreenReader,
    PageCheckboxSearch,
    PageCheckboxSortOrder,
    PageCheckboxSortOrderGroup,
    PageCheckboxTranslateData,
    PageCheckboxTwoColumns,
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
