import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterLimitToLimit from "./PageFilterLimitToLimit/PageFilterLimitToLimit.vue";
import PageFilterLimitToMaxThreeDots from "./PageFilterLimitToMaxThreeDots/PageFilterLimitToMaxThreeDots.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterLimitToTest from "../../../../../../src/filters/__tests__/filterLimitTo.test.js?raw";

export default {
  name: "PageFilterLimitTo",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterLimitToLimit,
    PageFilterLimitToMaxThreeDots,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterLimitToTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
