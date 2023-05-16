import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
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
import PageButtonSlotDefault from "./PageButtonSlotDefault/PageButtonSlotDefault.vue";
import PageButtonTextAfterBefore from "./PageButtonTextAfterBefore/PageButtonTextAfterBefore.vue";
import PageButtonTextObject from "./PageButtonTextObject/PageButtonTextObject.vue";
import PageButtonTitleArray from "./PageButtonTitleArray/PageButtonTitleArray.vue";
import PageButtonTitleHtml from "./PageButtonTitleHtml/PageButtonTitleHtml.vue";
import PageButtonSlotPrepend from "./PageButtonSlotPrepend/PageButtonSlotPrepend.vue";
import PageButtonSlotAppend from "./PageButtonSlotAppend/PageButtonSlotAppend.vue";
import PageButtonSlotTitle from "./PageButtonSlotTitle/PageButtonSlotTitle.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageButton",
  components: {
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
    PageButtonSlotDefault,
    PageButtonTextAfterBefore,
    PageButtonTextObject,
    PageButtonTitleArray,
    PageButtonTitleHtml,
    PageButtonSlotPrepend,
    PageButtonSlotAppend,
    PageButtonSlotTitle,
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
