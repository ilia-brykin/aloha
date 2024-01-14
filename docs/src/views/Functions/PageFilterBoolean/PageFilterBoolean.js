import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterBooleanExample from "./PageFilterBooleanExample/PageFilterBooleanExample.vue";
import PageFilterBooleanTrueFalseValues from "./PageFilterBooleanTrueFalseValues/PageFilterBooleanTrueFalseValues.vue";
import PageFilterBooleanUseNil from "./PageFilterBooleanUseNil/PageFilterBooleanUseNil.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterBoolean",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterBooleanExample,
    PageFilterBooleanTrueFalseValues,
    PageFilterBooleanUseNil,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    return {
      argumentsText,
      pageTitle,
    };
  },
};
