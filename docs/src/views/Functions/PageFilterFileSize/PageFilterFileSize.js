import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterFileSizeArguments from "./PageFilterFileSizeArguments/PageFilterFileSizeArguments.vue";
import PageFilterFileSizeDigits from "./PageFilterFileSizeDigits/PageFilterFileSizeDigits.vue";
import PageFilterFileSizeExample from "./PageFilterFileSizeExample/PageFilterFileSizeExample.vue";
import PageFilterFileSizeImportCompositionApi from "./PageFilterFileSizeImportCompositionApi/PageFilterFileSizeImportCompositionApi.vue";
import PageFilterFileSizeSourceUnits from "./PageFilterFileSizeSourceUnits/PageFilterFileSizeSourceUnits.vue";
import PageFilterFileSizeUnits from "./PageFilterFileSizeUnits/PageFilterFileSizeUnits.vue";
import PageFilterFileSizeUnitsEmpty from "./PageFilterFileSizeUnitsEmpty/PageFilterFileSizeUnitsEmpty.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageFilterFileSize",
  components: {
    AlohaPage,
    AlohaTableTranslate,
    ATranslation,
    PageFilterFileSizeArguments,
    PageFilterFileSizeDigits,
    PageFilterFileSizeExample,
    PageFilterFileSizeImportCompositionApi,
    PageFilterFileSizeSourceUnits,
    PageFilterFileSizeUnits,
    PageFilterFileSizeUnitsEmpty,
    PageFilterImportFunction,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataTranslate,
      pageTitle,
    };
  },
};
