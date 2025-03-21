import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterFloatDigitGrouping from "./PageFilterFloatDigitGrouping/PageFilterFloatDigitGrouping.vue";
import PageFilterFloatDigits from "./PageFilterFloatDigits/PageFilterFloatDigits.vue";
import PageFilterFloatExample from "./PageFilterFloatExample/PageFilterFloatExample.vue";
import PageFilterFloatSuffix from "./PageFilterFloatSuffix/PageFilterFloatSuffix.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterFloatTest from "../../../../../../src/filters/__tests__/filterFloat.test.js?raw";

export default {
  name: "PageFilterFloat",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterFloatDigitGrouping,
    PageFilterFloatDigits,
    PageFilterFloatExample,
    PageFilterFloatSuffix,
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

    const test = filterFloatTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
