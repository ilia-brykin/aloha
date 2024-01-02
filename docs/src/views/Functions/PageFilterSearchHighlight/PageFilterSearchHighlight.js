import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterSearchHighlightArguments from "./PageFilterSearchHighlightArguments/PageFilterSearchHighlightArguments.vue";
import PageFilterSearchHighlightImportCompositionApi from "./PageFilterSearchHighlightImportCompositionApi/PageFilterSearchHighlightImportCompositionApi.vue";
import PageFilterSearchHighlightImportFunction from "./PageFilterSearchHighlightImportFunction/PageFilterSearchHighlightImportFunction.vue";
import PageFilterSearchHighlightSearchClass from "./PageFilterSearchHighlightSearchClass/PageFilterSearchHighlightSearchClass.vue";
import PageFilterSearchHighlightSearchModel from "./PageFilterSearchHighlightSearchModel/PageFilterSearchHighlightSearchModel.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterSearchHighlight",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterSearchHighlightArguments,
    PageFilterSearchHighlightImportCompositionApi,
    PageFilterSearchHighlightImportFunction,
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
