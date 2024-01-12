import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterDateArguments from "./PageFilterDateArguments/PageFilterDateArguments.vue";
import PageFilterDateExample from "./PageFilterDateExample/PageFilterDateExample.vue";
import PageFilterDateFormat from "./PageFilterDateFormat/PageFilterDateFormat.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterDate",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterDateArguments,
    PageFilterDateExample,
    PageFilterDateFormat,
    PageFilterImportCompositionApi,
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
