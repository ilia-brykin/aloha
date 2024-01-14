import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterCurrencyDigitGrouping from "./PageFilterCurrencyDigitGrouping/PageFilterCurrencyDigitGrouping.vue";
import PageFilterCurrencyDigits from "./PageFilterCurrencyDigits/PageFilterCurrencyDigits.vue";
import PageFilterCurrencyExample from "./PageFilterCurrencyExample/PageFilterCurrencyExample.vue";
import PageFilterCurrencySuffix from "./PageFilterCurrencySuffix/PageFilterCurrencySuffix.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

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
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    return {
      argumentsText,
      pageTitle,
    };
  },
};
