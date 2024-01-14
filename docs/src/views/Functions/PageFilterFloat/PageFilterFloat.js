import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterFloatDigitGrouping from "./PageFilterFloatDigitGrouping/PageFilterFloatDigitGrouping.vue";
import PageFilterFloatDigits from "./PageFilterFloatDigits/PageFilterFloatDigits.vue";
import PageFilterFloatExample from "./PageFilterFloatExample/PageFilterFloatExample.vue";
import PageFilterFloatSuffix from "./PageFilterFloatSuffix/PageFilterFloatSuffix.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

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
