import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageLinkBasic from "./PageLinkBasic/PageLinkBasic.vue";
import PageLinkClass from "./PageLinkClass/PageLinkClass.vue";
import PageLinkComplex from "./PageLinkComplex/PageLinkComplex.vue";
import PageLinkDisabled from "./PageLinkDisabled/PageLinkDisabled.vue";
import PageLinkGroup from "./PageLinkGroup/PageLinkGroup.vue";
import PageLinkGroupHorizontalVertical from "./PageLinkGroupHorizontalVertical/PageLinkGroupHorizontalVertical.vue";
import PageLinkGroupSizes from "./PageLinkGroupSizes/PageLinkGroupSizes.vue";
import PageLinkGroupVertical from "./PageLinkGroupVertical/PageLinkGroupVertical.vue";
import PageLinkHtml from "./PageLinkHtml/PageLinkHtml.vue";
import PageLinkIcons from "./PageLinkIcons/PageLinkIcons.vue";
import PageLinkLoading from "./PageLinkLoading/PageLinkLoading.vue";
import PageLinkOutline from "./PageLinkOutline/PageLinkOutline.vue";
import PageLinkSafeHtml from "./PageLinkSafeHtml/PageLinkSafeHtml.vue";
import PageLinkSizes from "./PageLinkSizes/PageLinkSizes.vue";
import PageLinkSlotAppend from "./PageLinkSlotAppend/PageLinkSlotAppend.vue";
import PageLinkSlotDefault from "./PageLinkSlotDefault/PageLinkSlotDefault.vue";
import PageLinkSlotPrepend from "./PageLinkSlotPrepend/PageLinkSlotPrepend.vue";
import PageLinkSlotTitle from "./PageLinkSlotTitle/PageLinkSlotTitle.vue";
import PageLinkTextAfterBefore from "./PageLinkTextAfterBefore/PageLinkTextAfterBefore.vue";
import PageLinkTextObject from "./PageLinkTextObject/PageLinkTextObject.vue";
import PageLinkTextTag from "./PageLinkTextTag/PageLinkTextTag.vue";
import PageLinkTitleArray from "./PageLinkTitleArray/PageLinkTitleArray.vue";
import PageLinkTitleHtml from "./PageLinkTitleHtml/PageLinkTitleHtml.vue";
import PageLinkTransparent from "./PageLinkTransparent/PageLinkTransparent.vue";

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
    PageLinkComplex,
    PageLinkDisabled,
    PageLinkGroup,
    PageLinkGroupHorizontalVertical,
    PageLinkGroupSizes,
    PageLinkGroupVertical,
    PageLinkHtml,
    PageLinkIcons,
    PageLinkLoading,
    PageLinkOutline,
    PageLinkSafeHtml,
    PageLinkSizes,
    PageLinkSlotAppend,
    PageLinkSlotDefault,
    PageLinkSlotPrepend,
    PageLinkSlotTitle,
    PageLinkTextAfterBefore,
    PageLinkTextObject,
    PageLinkTextTag,
    PageLinkTitleArray,
    PageLinkTitleHtml,
    PageLinkTransparent,
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
