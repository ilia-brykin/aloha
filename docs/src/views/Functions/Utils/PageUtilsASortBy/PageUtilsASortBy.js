import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import PageUtilsASortByExample from "./PageUtilsASortByExample/PageUtilsASortByExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import testFunction from "../../../../../../src/utils/__tests__/utils.aSortBy.test.js?raw";

export default {
  name: "PageUtilsASortBy",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportFunction,
    PageFilterTest,
    PageUtilsASortByExample,
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
