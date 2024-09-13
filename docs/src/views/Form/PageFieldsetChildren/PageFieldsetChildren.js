import AElement from "../../../../../src/AElement/AElement";
import AList from "../../../../../src/AList/AList";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFieldsetChildrenBasic from "./PageFieldsetChildrenBasic/PageFieldsetChildrenBasic.vue";
import PageFieldsetChildrenClassColumn from "./PageFieldsetChildrenClassColumn/PageFieldsetChildrenClassColumn.vue";
import PageFieldsetChildrenClassColumns from "./PageFieldsetChildrenClassColumns/PageFieldsetChildrenClassColumns.vue";
import PageFieldsetChildrenErrorsAll from "./PageFieldsetChildrenErrorsAll/PageFieldsetChildrenErrorsAll.vue";
import PageFieldsetChildrenTree from "./PageFieldsetChildrenTree/PageFieldsetChildrenTree.vue";

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
