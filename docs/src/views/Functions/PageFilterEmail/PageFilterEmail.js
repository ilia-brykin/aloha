import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterEmailArguments from "./PageFilterEmailArguments/PageFilterEmailArguments.vue";
import PageFilterEmailExample from "./PageFilterEmailExample/PageFilterEmailExample.vue";
import PageFilterEmailImportCompositionApi from "./PageFilterEmailImportCompositionApi/PageFilterEmailImportCompositionApi.vue";
import PageFilterEmailImportFunction from "./PageFilterEmailImportFunction/PageFilterEmailImportFunction.vue";
import PageFilterEmailLinkClass from "./PageFilterEmailLinkClass/PageFilterEmailLinkClass.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterEmail",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterEmailArguments,
    PageFilterEmailExample,
    PageFilterEmailImportCompositionApi,
    PageFilterEmailImportFunction,
    PageFilterEmailLinkClass,
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
