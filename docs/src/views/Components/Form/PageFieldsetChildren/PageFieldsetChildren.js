import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageFieldsetChildrenBasic from "./PageFieldsetChildrenBasic/PageFieldsetChildrenBasic.vue";
import PageFieldsetChildrenClassColumn from "./PageFieldsetChildrenClassColumn/PageFieldsetChildrenClassColumn.vue";
import PageFieldsetChildrenClassColumns from "./PageFieldsetChildrenClassColumns/PageFieldsetChildrenClassColumns.vue";
import PageFieldsetChildrenErrorsAll from "./PageFieldsetChildrenErrorsAll/PageFieldsetChildrenErrorsAll.vue";
import PageFieldsetChildrenReadonly from "./PageFieldsetChildrenReadonly/PageFieldsetChildrenReadonly.vue";
import PageFieldsetChildrenTree from "./PageFieldsetChildrenTree/PageFieldsetChildrenTree.vue";
import {
  AElement,
  AList,
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TypesAPI from "./compositionAPI/TypesAPI";

export default {
  name: "PageFieldsetChildren",
  components: {
    AElement,
    AList,
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageFieldsetChildrenBasic,
    PageFieldsetChildrenClassColumn,
    PageFieldsetChildrenClassColumns,
    PageFieldsetChildrenErrorsAll,
    PageFieldsetChildrenReadonly,
    PageFieldsetChildrenTree,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      types,
    } = TypesAPI();

    return {
      dataProps,
      pageTitle,
      types,
    };
  },
};
