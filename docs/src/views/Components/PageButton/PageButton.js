import AlohaHighlightjs from "../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageButtonAriaDisabled from "./PageButtonAriaDisabled/PageButtonAriaDisabled.vue";
import PageButtonBasic from "./PageButtonBasic/PageButtonBasic.vue";
import PageButtonComplex from "./PageButtonComplex/PageButtonComplex.vue";
import PageButtonDisabled from "./PageButtonDisabled/PageButtonDisabled.vue";
import PageButtonGroup from "./PageButtonGroup/PageButtonGroup.vue";
import PageButtonGroupHorizontalVertical from "./PageButtonGroupHorizontalVertical/PageButtonGroupHorizontalVertical.vue";
import PageButtonGroupSizes from "./PageButtonGroupSizes/PageButtonGroupSizes.vue";
import PageButtonGroupVertical from "./PageButtonGroupVertical/PageButtonGroupVertical.vue";
import PageButtonHtml from "./PageButtonHtml/PageButtonHtml.vue";
import PageButtonIcons from "./PageButtonIcons/PageButtonIcons.vue";
import PageButtonLoading from "./PageButtonLoading/PageButtonLoading.vue";
import PageButtonOutline from "./PageButtonOutline/PageButtonOutline.vue";
import PageButtonSafeHtml from "./PageButtonSafeHtml/PageButtonSafeHtml.vue";
import PageButtonSizes from "./PageButtonSizes/PageButtonSizes.vue";
import PageButtonSlotAppend from "./PageButtonSlotAppend/PageButtonSlotAppend.vue";
import PageButtonSlotDefault from "./PageButtonSlotDefault/PageButtonSlotDefault.vue";
import PageButtonSlotPrepend from "./PageButtonSlotPrepend/PageButtonSlotPrepend.vue";
import PageButtonSlotTitle from "./PageButtonSlotTitle/PageButtonSlotTitle.vue";
import PageButtonStop from "./PageButtonStop/PageButtonStop.vue";
import PageButtonSwitch from "./PageButtonSwitch/PageButtonSwitch.vue";
import PageButtonTextAfterBefore from "./PageButtonTextAfterBefore/PageButtonTextAfterBefore.vue";
import PageButtonTextObject from "./PageButtonTextObject/PageButtonTextObject.vue";
import PageButtonTextTag from "./PageButtonTextTag/PageButtonTextTag.vue";
import PageButtonTitleArray from "./PageButtonTitleArray/PageButtonTitleArray.vue";
import PageButtonTitleHtml from "./PageButtonTitleHtml/PageButtonTitleHtml.vue";
import PageButtonTitleHtmlExtra from "./PageButtonTitleHtmlExtra/PageButtonTitleHtmlExtra.vue";
import PageButtonTransparent from "./PageButtonTransparent/PageButtonTransparent.vue";
import {
  ATranslation,
} from "aloha-vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageButton",
  components: {
    AlohaHighlightjs,
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageButtonAriaDisabled,
    PageButtonBasic,
    PageButtonComplex,
    PageButtonDisabled,
    PageButtonGroup,
    PageButtonGroupHorizontalVertical,
    PageButtonGroupSizes,
    PageButtonGroupVertical,
    PageButtonHtml,
    PageButtonIcons,
    PageButtonLoading,
    PageButtonOutline,
    PageButtonSafeHtml,
    PageButtonSizes,
    PageButtonSlotAppend,
    PageButtonSlotDefault,
    PageButtonSlotPrepend,
    PageButtonSlotTitle,
    PageButtonStop,
    PageButtonSwitch,
    PageButtonTextAfterBefore,
    PageButtonTextObject,
    PageButtonTextTag,
    PageButtonTitleArray,
    PageButtonTitleHtml,
    PageButtonTitleHtmlExtra,
    PageButtonTransparent,
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
