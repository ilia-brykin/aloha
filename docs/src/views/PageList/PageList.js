import AlohaPage from "../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../global/components/AlohaTableProps/AlohaTableProps.vue";
import ATranslation from "../../../../src/ATranslation/ATranslation";
import AList from "../../../../src/AList/AList";
import PageListClassGroup from "./PageListClassGroup/PageListClassGroup.vue";
import PageListKeyChildren from "./PageListKeyChildren/PageListKeyChildren.vue";
import PageListKeyLabelCallback from "./PageListKeyLabelCallback/PageListKeyLabelCallback.vue";
import PageListTagLabelTag from "./PageListTagLabelTag/PageListTagLabelTag.vue";
import PageListWithSlot from "./PageListWithSlot/PageListWithSlot.vue";
import PageListWithChildren from "./PageListWithChildren/PageListWithChildren.vue";
import PageListWithoutChildren from "./PageListWithoutChildren/PageListWithoutChildren.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import SlotsAPI from "./compositionAPI/SlotsAPI";

export default {
  name: "PageList",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    AList,
    PageListClassGroup,
    PageListKeyChildren,
    PageListKeyLabelCallback,
    PageListTagLabelTag,
    PageListWithSlot,
    PageListWithChildren,
    PageListWithoutChildren
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
