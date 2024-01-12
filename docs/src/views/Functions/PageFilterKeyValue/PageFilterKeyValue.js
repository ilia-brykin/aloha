import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterKeyValueArguments from "./PageFilterKeyValueArguments/PageFilterKeyValueArguments.vue";
import PageFilterKeyValueExample from "./PageFilterKeyValueExample/PageFilterKeyValueExample.vue";
import PageFilterKeyValueImportCompositionApi from "./PageFilterKeyValueImportCompositionApi/PageFilterKeyValueImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterKeyValue",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterKeyValueArguments,
    PageFilterKeyValueExample,
    PageFilterKeyValueImportCompositionApi,
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
