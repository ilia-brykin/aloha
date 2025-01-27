import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageRadioBasic from "./PageRadioBasic/PageRadioBasic.vue";
import PageRadioChange from "./PageRadioChange/PageRadioChange.vue";
import PageRadioCollapse from "./PageRadioCollapse/PageRadioCollapse.vue";
import PageRadioDataExtra from "./PageRadioDataExtra/PageRadioDataExtra.vue";
import PageRadioError from "./PageRadioError/PageRadioError.vue";
import PageRadioGroup from "./PageRadioGroup/PageRadioGroup.vue";
import PageRadioHasBorder from "./PageRadioHasBorder/PageRadioHasBorder.vue";
import PageRadioHelpText from "./PageRadioHelpText/PageRadioHelpText.vue";
import PageRadioInline from "./PageRadioInline/PageRadioInline.vue";
import PageRadioIsButtonGroup from "./PageRadioIsButtonGroup/PageRadioIsButtonGroup.vue";
import PageRadioIsDataSimpleArray from "./PageRadioIsDataSimpleArray/PageRadioIsDataSimpleArray.vue";
import PageRadioIsModelArray from "./PageRadioIsModelArray/PageRadioIsModelArray.vue";
import PageRadioIsWidthAuto from "./PageRadioIsWidthAuto/PageRadioIsWidthAuto.vue";
import PageRadioKeyDisabled from "./PageRadioKeyDisabled/PageRadioKeyDisabled.vue";
import PageRadioKeyLabelCallback from "./PageRadioKeyLabelCallback/PageRadioKeyLabelCallback.vue";
import PageRadioKeyTitle from "./PageRadioKeyTitle/PageRadioKeyTitle.vue";
import PageRadioLabelScreenReader from "./PageRadioLabelScreenReader/PageRadioLabelScreenReader.vue";
import PageRadioSearch from "./PageRadioSearch/PageRadioSearch.vue";
import PageRadioSortOrder from "./PageRadioSortOrder/PageRadioSortOrder.vue";
import PageRadioSortOrderGroup from "./PageRadioSortOrderGroup/PageRadioSortOrderGroup.vue";
import PageRadioTranslateData from "./PageRadioTranslateData/PageRadioTranslateData.vue";
import PageRadioTwoColumns from "./PageRadioTwoColumns/PageRadioTwoColumns.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageRadio",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageRadioBasic,
    PageRadioChange,
    PageRadioCollapse,
    PageRadioDataExtra,
    PageRadioError,
    PageRadioGroup,
    PageRadioHasBorder,
    PageRadioHelpText,
    PageRadioInline,
    PageRadioIsButtonGroup,
    PageRadioIsDataSimpleArray,
    PageRadioIsModelArray,
    PageRadioIsWidthAuto,
    PageRadioKeyDisabled,
    PageRadioKeyLabelCallback,
    PageRadioKeyTitle,
    PageRadioLabelScreenReader,
    PageRadioSearch,
    PageRadioSortOrder,
    PageRadioSortOrderGroup,
    PageRadioTranslateData,
    PageRadioTwoColumns,
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
