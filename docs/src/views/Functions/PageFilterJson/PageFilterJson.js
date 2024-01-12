import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterJsonArguments from "./PageFilterJsonArguments/PageFilterJsonArguments.vue";
import PageFilterJsonExample from "./PageFilterJsonExample/PageFilterJsonExample.vue";
import PageFilterJsonReplacer from "./PageFilterJsonReplacer/PageFilterJsonReplacer.vue";
import PageFilterJsonSpace from "./PageFilterJsonSpace/PageFilterJsonSpace.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterJson",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterJsonArguments,
    PageFilterJsonExample,
    PageFilterJsonReplacer,
    PageFilterJsonSpace,
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
