import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterFileSizeArguments from "./PageFilterFileSizeArguments/PageFilterFileSizeArguments.vue";
import PageFilterFileSizeDigits from "./PageFilterFileSizeDigits/PageFilterFileSizeDigits.vue";
import PageFilterFileSizeExample from "./PageFilterFileSizeExample/PageFilterFileSizeExample.vue";
import PageFilterFileSizeImportCompositionApi from "./PageFilterFileSizeImportCompositionApi/PageFilterFileSizeImportCompositionApi.vue";
import PageFilterFileSizeImportFunction from "./PageFilterFileSizeImportFunction/PageFilterFileSizeImportFunction.vue";
import PageFilterFileSizeSourceUnits from "./PageFilterFileSizeSourceUnits/PageFilterFileSizeSourceUnits.vue";
import PageFilterFileSizeUnits from "./PageFilterFileSizeUnits/PageFilterFileSizeUnits.vue";
import PageFilterFileSizeUnitsEmpty from "./PageFilterFileSizeUnitsEmpty/PageFilterFileSizeUnitsEmpty.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterFileSize",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterFileSizeArguments,
    PageFilterFileSizeDigits,
    PageFilterFileSizeExample,
    PageFilterFileSizeImportCompositionApi,
    PageFilterFileSizeImportFunction,
    PageFilterFileSizeSourceUnits,
    PageFilterFileSizeUnits,
    PageFilterFileSizeUnitsEmpty,
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
