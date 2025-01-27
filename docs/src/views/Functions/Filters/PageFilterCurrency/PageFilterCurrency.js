import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterCurrencyDigitGrouping from "./PageFilterCurrencyDigitGrouping/PageFilterCurrencyDigitGrouping.vue";
import PageFilterCurrencyDigits from "./PageFilterCurrencyDigits/PageFilterCurrencyDigits.vue";
import PageFilterCurrencyExample from "./PageFilterCurrencyExample/PageFilterCurrencyExample.vue";
import PageFilterCurrencySuffix from "./PageFilterCurrencySuffix/PageFilterCurrencySuffix.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterCurrencyTest from "../../../../../../src/filters/__tests__/filterCurrency.test.js?raw";

export default {
  name: "PageFilterCurrency",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterCurrencyDigitGrouping,
    PageFilterCurrencyDigits,
    PageFilterCurrencyExample,
    PageFilterCurrencySuffix,
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

    const test = filterCurrencyTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
