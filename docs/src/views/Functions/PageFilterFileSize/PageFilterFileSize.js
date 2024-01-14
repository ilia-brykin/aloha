import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterFileSizeDigits from "./PageFilterFileSizeDigits/PageFilterFileSizeDigits.vue";
import PageFilterFileSizeExample from "./PageFilterFileSizeExample/PageFilterFileSizeExample.vue";
import PageFilterFileSizeSourceUnits from "./PageFilterFileSizeSourceUnits/PageFilterFileSizeSourceUnits.vue";
import PageFilterFileSizeUnits from "./PageFilterFileSizeUnits/PageFilterFileSizeUnits.vue";
import PageFilterFileSizeUnitsEmpty from "./PageFilterFileSizeUnitsEmpty/PageFilterFileSizeUnitsEmpty.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageFilterFileSize",
  components: {
    AlohaPage,
    AlohaTableTranslate,
    ATranslation,
    PageFilterArguments,
    PageFilterFileSizeDigits,
    PageFilterFileSizeExample,
    PageFilterFileSizeSourceUnits,
    PageFilterFileSizeUnits,
    PageFilterFileSizeUnitsEmpty,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    return {
      argumentsText,
      dataTranslate,
      pageTitle,
    };
  },
};
