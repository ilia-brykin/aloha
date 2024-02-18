import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import PageUtilsMathIsEvenExample from "./PageUtilsMathIsEvenExample/PageUtilsMathIsEvenExample.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import testFunction from "../../../../../../src/utils/__tests__/utilsMath.isEven.test.js?raw";

export default {
  name: "PageUtilsMathIsEven",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportFunction,
    PageFilterTest,
    PageUtilsMathIsEvenExample,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = testFunction;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
