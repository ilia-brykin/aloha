import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterDateArguments from "./PageFilterDateArguments/PageFilterDateArguments.vue";
import PageFilterDateExample from "./PageFilterDateExample/PageFilterDateExample.vue";
import PageFilterDateFormat from "./PageFilterDateFormat/PageFilterDateFormat.vue";
import PageFilterDateImportCompositionApi from "./PageFilterDateImportCompositionApi/PageFilterDateImportCompositionApi.vue";
import PageFilterDateImportFunction from "./PageFilterDateImportFunction/PageFilterDateImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterDate",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterDateArguments,
    PageFilterDateExample,
    PageFilterDateFormat,
    PageFilterDateImportCompositionApi,
    PageFilterDateImportFunction,
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
