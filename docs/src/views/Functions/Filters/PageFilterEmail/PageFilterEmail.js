import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterEmailExample from "./PageFilterEmailExample/PageFilterEmailExample.vue";
import PageFilterEmailLinkClass from "./PageFilterEmailLinkClass/PageFilterEmailLinkClass.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterEmailTest from "../../../../../../src/filters/__tests__/filterEmail.test.js?raw";

export default {
  name: "PageFilterEmail",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterEmailExample,
    PageFilterEmailLinkClass,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterEmailTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
