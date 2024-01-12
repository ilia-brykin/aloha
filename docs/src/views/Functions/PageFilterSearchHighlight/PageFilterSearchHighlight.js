import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterSearchHighlightArguments from "./PageFilterSearchHighlightArguments/PageFilterSearchHighlightArguments.vue";
import PageFilterSearchHighlightSearchClass from "./PageFilterSearchHighlightSearchClass/PageFilterSearchHighlightSearchClass.vue";
import PageFilterSearchHighlightSearchModel from "./PageFilterSearchHighlightSearchModel/PageFilterSearchHighlightSearchModel.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterSearchHighlight",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterSearchHighlightArguments,
    PageFilterSearchHighlightSearchClass,
    PageFilterSearchHighlightSearchModel,
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
