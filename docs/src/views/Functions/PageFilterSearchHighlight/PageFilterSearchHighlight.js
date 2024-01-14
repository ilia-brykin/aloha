import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterSearchHighlightSearchClass from "./PageFilterSearchHighlightSearchClass/PageFilterSearchHighlightSearchClass.vue";
import PageFilterSearchHighlightSearchModel from "./PageFilterSearchHighlightSearchModel/PageFilterSearchHighlightSearchModel.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterSearchHighlight",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterSearchHighlightSearchClass,
    PageFilterSearchHighlightSearchModel,
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
