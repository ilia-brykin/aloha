import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterListArguments from "./PageFilterListArguments/PageFilterListArguments.vue";
import PageFilterListImportCompositionApi from "./PageFilterListImportCompositionApi/PageFilterListImportCompositionApi.vue";
import PageFilterListImportFunction from "./PageFilterListImportFunction/PageFilterListImportFunction.vue";
import PageFilterListIsHtml from "./PageFilterListIsHtml/PageFilterListIsHtml.vue";
import PageFilterListIsSimpleArray from "./PageFilterListIsSimpleArray/PageFilterListIsSimpleArray.vue";
import PageFilterListIsSimpleArrayTree from "./PageFilterListIsSimpleArrayTree/PageFilterListIsSimpleArrayTree.vue";
import PageFilterListKeyChildren from "./PageFilterListKeyChildren/PageFilterListKeyChildren.vue";
import PageFilterListKeyLabel from "./PageFilterListKeyLabel/PageFilterListKeyLabel.vue";
import PageFilterListKeyLabelCallback from "./PageFilterListKeyLabelCallback/PageFilterListKeyLabelCallback.vue";
import PageFilterListListClass from "./PageFilterListListClass/PageFilterListListClass.vue";
import PageFilterListSeparator from "./PageFilterListSeparator/PageFilterListSeparator.vue";
import PageFilterListTag from "./PageFilterListTag/PageFilterListTag.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterList",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterListArguments,
    PageFilterListImportCompositionApi,
    PageFilterListImportFunction,
    PageFilterListIsHtml,
    PageFilterListIsSimpleArray,
    PageFilterListIsSimpleArrayTree,
    PageFilterListKeyChildren,
    PageFilterListKeyLabel,
    PageFilterListKeyLabelCallback,
    PageFilterListListClass,
    PageFilterListSeparator,
    PageFilterListTag,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    return {
      pageTitle,
    };
  },
};
