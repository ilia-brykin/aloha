import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import PageUtilsIsArrayOfArraysExample from "./PageUtilsIsArrayOfArraysExample/PageUtilsIsArrayOfArraysExample.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import testFunction from "../../../../../../src/utils/__tests__/utils.isArrayOfArrays.test.js?raw";

export default {
  name: "PageUtilsIsArrayOfArrays",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportFunction,
    PageFilterTest,
    PageUtilsIsArrayOfArraysExample,
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
