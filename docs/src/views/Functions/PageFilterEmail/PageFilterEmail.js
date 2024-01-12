import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterEmailArguments from "./PageFilterEmailArguments/PageFilterEmailArguments.vue";
import PageFilterEmailExample from "./PageFilterEmailExample/PageFilterEmailExample.vue";
import PageFilterEmailLinkClass from "./PageFilterEmailLinkClass/PageFilterEmailLinkClass.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterEmail",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterEmailArguments,
    PageFilterEmailExample,
    PageFilterEmailLinkClass,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
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
