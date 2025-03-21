import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import PageUtilsGetTotalNestedCountExample from "./PageUtilsGetTotalNestedCountExample/PageUtilsGetTotalNestedCountExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import testFunction from "../../../../../../src/utils/__tests__/utils.getTotalNestedCount.test.js?raw";

export default {
  name: "PageUtilsGetTotalNestedCount",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportFunction,
    PageFilterTest,
    PageUtilsGetTotalNestedCountExample,
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
