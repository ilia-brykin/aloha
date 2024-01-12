import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterKeyValueArguments from "./PageFilterKeyValueArguments/PageFilterKeyValueArguments.vue";
import PageFilterKeyValueExample from "./PageFilterKeyValueExample/PageFilterKeyValueExample.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterKeyValue",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterKeyValueArguments,
    PageFilterKeyValueExample,
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
