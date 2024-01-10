import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterFloatArguments from "./PageFilterFloatArguments/PageFilterFloatArguments.vue";
import PageFilterFloatDigitGrouping from "./PageFilterFloatDigitGrouping/PageFilterFloatDigitGrouping.vue";
import PageFilterFloatDigits from "./PageFilterFloatDigits/PageFilterFloatDigits.vue";
import PageFilterFloatExample from "./PageFilterFloatExample/PageFilterFloatExample.vue";
import PageFilterFloatImportCompositionApi from "./PageFilterFloatImportCompositionApi/PageFilterFloatImportCompositionApi.vue";
import PageFilterFloatImportFunction from "./PageFilterFloatImportFunction/PageFilterFloatImportFunction.vue";
import PageFilterFloatSuffix from "./PageFilterFloatSuffix/PageFilterFloatSuffix.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterFloat",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterFloatArguments,
    PageFilterFloatDigitGrouping,
    PageFilterFloatDigits,
    PageFilterFloatExample,
    PageFilterFloatImportCompositionApi,
    PageFilterFloatImportFunction,
    PageFilterFloatSuffix,
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