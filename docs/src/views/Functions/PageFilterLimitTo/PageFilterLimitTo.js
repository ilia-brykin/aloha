import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterLimitToArguments from "./PageFilterLimitToArguments/PageFilterLimitToArguments.vue";
import PageFilterLimitToImportCompositionApi from "./PageFilterLimitToImportCompositionApi/PageFilterLimitToImportCompositionApi.vue";
import PageFilterLimitToLimit from "./PageFilterLimitToLimit/PageFilterLimitToLimit.vue";
import PageFilterLimitToMaxThreeDots from "./PageFilterLimitToMaxThreeDots/PageFilterLimitToMaxThreeDots.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterLimitTo",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterLimitToArguments,
    PageFilterLimitToImportCompositionApi,
    PageFilterLimitToLimit,
    PageFilterLimitToMaxThreeDots,
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
