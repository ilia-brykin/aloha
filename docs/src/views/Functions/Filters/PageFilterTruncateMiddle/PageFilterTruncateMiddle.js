import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import PageFilterTruncateMiddleExample from "./PageFilterTruncateMiddleExample/PageFilterTruncateMiddleExample.vue";
import PageFilterTruncateMiddleSeparator from "./PageFilterTruncateMiddleSeparator/PageFilterTruncateMiddleSeparator.vue";
import PageFilterTruncateMiddleStartEnd from "./PageFilterTruncateMiddleStartEnd/PageFilterTruncateMiddleStartEnd.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterTruncateMiddleTest from "../../../../../../src/filters/__tests__/filterTruncateMiddle.test.js?raw";

export default {
  name: "PageFilterTruncateMiddle",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterTest,
    PageFilterTruncateMiddleExample,
    PageFilterTruncateMiddleSeparator,
    PageFilterTruncateMiddleStartEnd,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterTruncateMiddleTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
