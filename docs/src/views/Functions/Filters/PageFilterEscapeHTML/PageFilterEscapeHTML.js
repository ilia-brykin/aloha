import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterEscapeHTMLExample from "./PageFilterEscapeHTMLExample/PageFilterEscapeHTMLExample.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterKeyValueTest from "../../../../../../src/filters/__tests__/filterEscapeHtml.test.js?raw";

export default {
  name: "PageFilterEscapeHTML",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterEscapeHTMLExample,
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

    const test = filterKeyValueTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
