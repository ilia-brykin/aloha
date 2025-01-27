import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterListIsHtml from "./PageFilterListIsHtml/PageFilterListIsHtml.vue";
import PageFilterListIsSimpleArray from "./PageFilterListIsSimpleArray/PageFilterListIsSimpleArray.vue";
import PageFilterListIsSimpleArrayTree from "./PageFilterListIsSimpleArrayTree/PageFilterListIsSimpleArrayTree.vue";
import PageFilterListKeyChildren from "./PageFilterListKeyChildren/PageFilterListKeyChildren.vue";
import PageFilterListKeyLabel from "./PageFilterListKeyLabel/PageFilterListKeyLabel.vue";
import PageFilterListKeyLabelCallback from "./PageFilterListKeyLabelCallback/PageFilterListKeyLabelCallback.vue";
import PageFilterListListClass from "./PageFilterListListClass/PageFilterListListClass.vue";
import PageFilterListSeparator from "./PageFilterListSeparator/PageFilterListSeparator.vue";
import PageFilterListSeparatorHtml from "./PageFilterListSeparatorHtml/PageFilterListSeparatorHtml.vue";
import PageFilterListTag from "./PageFilterListTag/PageFilterListTag.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterListTest from "../../../../../../src/filters/__tests__/filterList.test.js?raw";

export default {
  name: "PageFilterList",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterListIsHtml,
    PageFilterListIsSimpleArray,
    PageFilterListIsSimpleArrayTree,
    PageFilterListKeyChildren,
    PageFilterListKeyLabel,
    PageFilterListKeyLabelCallback,
    PageFilterListListClass,
    PageFilterListSeparator,
    PageFilterListSeparatorHtml,
    PageFilterListTag,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterListTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
