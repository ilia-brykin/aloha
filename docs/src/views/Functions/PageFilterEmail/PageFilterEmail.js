import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterEmailExample from "./PageFilterEmailExample/PageFilterEmailExample.vue";
import PageFilterEmailLinkClass from "./PageFilterEmailLinkClass/PageFilterEmailLinkClass.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterEmail",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterEmailExample,
    PageFilterEmailLinkClass,
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
