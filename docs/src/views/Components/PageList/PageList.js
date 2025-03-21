import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageListBasic from "./PageListBasic/PageListBasic.vue";
import PageListClassGroup from "./PageListClassGroup/PageListClassGroup.vue";
import PageListIsDataSimpleArray from "./PageListIsDataSimpleArray/PageListIsDataSimpleArray.vue";
import PageListIsHtml from "./PageListIsHtml/PageListIsHtml.vue";
import PageListKeyChildren from "./PageListKeyChildren/PageListKeyChildren.vue";
import PageListKeyId from "./PageListKeyId/PageListKeyId.vue";
import PageListKeyLabelCallback from "./PageListKeyLabelCallback/PageListKeyLabelCallback.vue";
import PageListSeparator from "./PageListSeparator/PageListSeparator.vue";
import PageListSeparatorHtml from "./PageListSeparatorHtml/PageListSeparatorHtml.vue";
import PageListTag from "./PageListTag/PageListTag.vue";
import PageListWithSlot from "./PageListWithSlot/PageListWithSlot.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageList",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageListBasic,
    PageListClassGroup,
    PageListIsDataSimpleArray,
    PageListIsHtml,
    PageListKeyChildren,
    PageListKeyId,
    PageListKeyLabelCallback,
    PageListSeparator,
    PageListSeparatorHtml,
    PageListTag,
    PageListWithSlot,
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

    return {
      dataProps,
      dataSlots,
      pageTitle,
    };
  },
};
