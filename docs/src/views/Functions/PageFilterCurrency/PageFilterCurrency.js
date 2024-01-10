import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterCurrencyArguments from "./PageFilterCurrencyArguments/PageFilterCurrencyArguments.vue";
import PageFilterCurrencyDigitGrouping from "./PageFilterCurrencyDigitGrouping/PageFilterCurrencyDigitGrouping.vue";
import PageFilterCurrencyDigits from "./PageFilterCurrencyDigits/PageFilterCurrencyDigits.vue";
import PageFilterCurrencyExample from "./PageFilterCurrencyExample/PageFilterCurrencyExample.vue";
import PageFilterCurrencyImportCompositionApi from "./PageFilterCurrencyImportCompositionApi/PageFilterCurrencyImportCompositionApi.vue";
import PageFilterCurrencyImportFunction from "./PageFilterCurrencyImportFunction/PageFilterCurrencyImportFunction.vue";
import PageFilterCurrencySuffix from "./PageFilterCurrencySuffix/PageFilterCurrencySuffix.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterCurrency",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterCurrencyArguments,
    PageFilterCurrencyDigitGrouping,
    PageFilterCurrencyDigits,
    PageFilterCurrencyExample,
    PageFilterCurrencyImportCompositionApi,
    PageFilterCurrencyImportFunction,
    PageFilterCurrencySuffix,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    return {
      pageTitle,
    };
  },
};