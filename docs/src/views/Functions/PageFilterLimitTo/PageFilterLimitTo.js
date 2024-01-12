import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterLimitToArguments from "./PageFilterLimitToArguments/PageFilterLimitToArguments.vue";
import PageFilterLimitToLimit from "./PageFilterLimitToLimit/PageFilterLimitToLimit.vue";
import PageFilterLimitToMaxThreeDots from "./PageFilterLimitToMaxThreeDots/PageFilterLimitToMaxThreeDots.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterLimitTo",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterLimitToArguments,
    PageFilterLimitToLimit,
    PageFilterLimitToMaxThreeDots,
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
