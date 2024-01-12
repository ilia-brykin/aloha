import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterJsonArguments from "./PageFilterJsonArguments/PageFilterJsonArguments.vue";
import PageFilterJsonExample from "./PageFilterJsonExample/PageFilterJsonExample.vue";
import PageFilterJsonImportCompositionApi from "./PageFilterJsonImportCompositionApi/PageFilterJsonImportCompositionApi.vue";
import PageFilterJsonReplacer from "./PageFilterJsonReplacer/PageFilterJsonReplacer.vue";
import PageFilterJsonSpace from "./PageFilterJsonSpace/PageFilterJsonSpace.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterJson",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterJsonArguments,
    PageFilterJsonExample,
    PageFilterJsonImportCompositionApi,
    PageFilterJsonReplacer,
    PageFilterJsonSpace,
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
