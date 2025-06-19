import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageElementAriaDisabled from "./PageElementAriaDisabled/PageElementAriaDisabled.vue";
import PageElementBasic from "./PageElementBasic/PageElementBasic.vue";
import PageElementBasicClass from "./PageElementBasicClass/PageElementBasicClass.vue";
import PageElementComplex from "./PageElementComplex/PageElementComplex.vue";
import PageElementDisabled from "./PageElementDisabled/PageElementDisabled.vue";
import PageElementGroup from "./PageElementGroup/PageElementGroup.vue";
import PageElementGroupHorizontalVertical from "./PageElementGroupHorizontalVertical/PageElementGroupHorizontalVertical.vue";
import PageElementGroupSizes from "./PageElementGroupSizes/PageElementGroupSizes.vue";
import PageElementGroupVertical from "./PageElementGroupVertical/PageElementGroupVertical.vue";
import PageElementHtml from "./PageElementHtml/PageElementHtml.vue";
import PageElementIcons from "./PageElementIcons/PageElementIcons.vue";
import PageElementLoading from "./PageElementLoading/PageElementLoading.vue";
import PageElementOutline from "./PageElementOutline/PageElementOutline.vue";
import PageElementSafeHtml from "./PageElementSafeHtml/PageElementSafeHtml.vue";
import PageElementSizes from "./PageElementSizes/PageElementSizes.vue";
import PageElementSlotAppend from "./PageElementSlotAppend/PageElementSlotAppend.vue";
import PageElementSlotDefault from "./PageElementSlotDefault/PageElementSlotDefault.vue";
import PageElementSlotPrepend from "./PageElementSlotPrepend/PageElementSlotPrepend.vue";
import PageElementSlotTitle from "./PageElementSlotTitle/PageElementSlotTitle.vue";
import PageElementStop from "./PageElementStop/PageElementStop.vue";
import PageElementSwitch from "./PageElementSwitch/PageElementSwitch.vue";
import PageElementTextAfterBefore from "./PageElementTextAfterBefore/PageElementTextAfterBefore.vue";
import PageElementTextObject from "./PageElementTextObject/PageElementTextObject.vue";
import PageElementTextTag from "./PageElementTextTag/PageElementTextTag.vue";
import PageElementTitleArray from "./PageElementTitleArray/PageElementTitleArray.vue";
import PageElementTitleHtml from "./PageElementTitleHtml/PageElementTitleHtml.vue";
import PageElementTitleHtmlExtra from "./PageElementTitleHtmlExtra/PageElementTitleHtmlExtra.vue";
import PageElementTransparent from "./PageElementTransparent/PageElementTransparent.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageElement",
  components: {
    AlohaHighlightjs,
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageElementAriaDisabled,
    PageElementBasicClass,
    PageElementBasic,
    PageElementComplex,
    PageElementDisabled,
    PageElementGroup,
    PageElementGroupHorizontalVertical,
    PageElementGroupSizes,
    PageElementGroupVertical,
    PageElementHtml,
    PageElementIcons,
    PageElementLoading,
    PageElementOutline,
    PageElementSafeHtml,
    PageElementSizes,
    PageElementSlotAppend,
    PageElementSlotDefault,
    PageElementSlotPrepend,
    PageElementSlotTitle,
    PageElementStop,
    PageElementSwitch,
    PageElementTextAfterBefore,
    PageElementTextObject,
    PageElementTextTag,
    PageElementTitleArray,
    PageElementTitleHtml,
    PageElementTitleHtmlExtra,
    PageElementTransparent,
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

    return {
      dataExposes,
      dataEvents,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
