import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterJsonArguments from "./PageFilterJsonArguments/PageFilterJsonArguments.vue";
import PageFilterJsonExample from "./PageFilterJsonExample/PageFilterJsonExample.vue";
import PageFilterJsonImportCompositionApi from "./PageFilterJsonImportCompositionApi/PageFilterJsonImportCompositionApi.vue";
import PageFilterJsonImportFunction from "./PageFilterJsonImportFunction/PageFilterJsonImportFunction.vue";
import PageFilterJsonReplacer from "./PageFilterJsonReplacer/PageFilterJsonReplacer.vue";
import PageFilterJsonSpace from "./PageFilterJsonSpace/PageFilterJsonSpace.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterJson",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterJsonArguments,
    PageFilterJsonExample,
    PageFilterJsonImportCompositionApi,
    PageFilterJsonImportFunction,
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
