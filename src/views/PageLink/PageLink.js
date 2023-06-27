import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import PageLinkBasic from "./PageLinkBasic/PageLinkBasic.vue";
import PageLinkClass from "./PageLinkClass/PageLinkClass.vue";
import PageLinkOutline from "./PageLinkOutline/PageLinkOutline.vue";
import PageLinkSizes from "./PageLinkSizes/PageLinkSizes.vue";
import PageLinkGroup from "./PageLinkGroup/PageLinkGroup.vue";
import PageLinkGroupVertical from "./PageLinkGroupVertical/PageLinkGroupVertical.vue";
import PageLinkGroupHorizontalVertical from "./PageLinkGroupHorizontalVertical/PageLinkGroupHorizontalVertical.vue";
import PageLinkGroupSizes from "./PageLinkGroupSizes/PageLinkGroupSizes.vue";
import PageLinkIcons from "./PageLinkIcons/PageLinkIcons.vue";
import PageLinkDisabled from "./PageLinkDisabled/PageLinkDisabled.vue";
import PageLinkLoading from "./PageLinkLoading/PageLinkLoading.vue";
import PageLinkTextAfterBefore from "./PageLinkTextAfterBefore/PageLinkTextAfterBefore.vue";
import PageLinkSafeHtml from "./PageLinkSafeHtml/PageLinkSafeHtml.vue";
import PageLinkHtml from "./PageLinkHtml/PageLinkHtml.vue";
import PageLinkTextObject from "./PageLinkTextObject/PageLinkTextObject.vue";
import PageLinkTitleArray from "./PageLinkTitleArray/PageLinkTitleArray.vue";
import PageLinkTitleHtml from "./PageLinkTitleHtml/PageLinkTitleHtml.vue";
import PageLinkSlotDefault from "./PageLinkSlotDefault/PageLinkSlotDefault.vue";
import PageLinkSlotPrepend from "./PageLinkSlotPrepend/PageLinkSlotPrepend.vue";
import PageLinkSlotAppend from "./PageLinkSlotAppend/PageLinkSlotAppend.vue";
import PageLinkSlotTitle from "./PageLinkSlotTitle/PageLinkSlotTitle.vue";
import PageLinkComplex from "./PageLinkComplex/PageLinkComplex.vue";

import ExposesAPI from "./compositionAPI/ExposesAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageLink",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageLinkBasic,
    PageLinkClass,
    PageLinkGroup,
    PageLinkGroupHorizontalVertical,
    PageLinkGroupVertical,
    PageLinkOutline,
    PageLinkSizes,
    PageLinkGroupSizes,
    PageLinkIcons,
    PageLinkDisabled,
    PageLinkLoading,
    PageLinkTextAfterBefore,
    PageLinkSafeHtml,
    PageLinkHtml,
    PageLinkTextObject,
    PageLinkTitleArray,
    PageLinkTitleHtml,
    PageLinkSlotDefault,
    PageLinkSlotPrepend,
    PageLinkSlotAppend,
    PageLinkSlotTitle,
    PageLinkComplex,
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
      dataExposes,
    } = ExposesAPI();

    return {
      dataExposes,
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
