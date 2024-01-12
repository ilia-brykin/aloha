import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterBooleanArguments from "./PageFilterBooleanArguments/PageFilterBooleanArguments.vue";
import PageFilterBooleanExample from "./PageFilterBooleanExample/PageFilterBooleanExample.vue";
import PageFilterBooleanImportCompositionApi from "./PageFilterBooleanImportCompositionApi/PageFilterBooleanImportCompositionApi.vue";
import PageFilterBooleanTrueFalseValues from "./PageFilterBooleanTrueFalseValues/PageFilterBooleanTrueFalseValues.vue";
import PageFilterBooleanUseNil from "./PageFilterBooleanUseNil/PageFilterBooleanUseNil.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterBoolean",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterBooleanArguments,
    PageFilterBooleanExample,
    PageFilterBooleanImportCompositionApi,
    PageFilterBooleanTrueFalseValues,
    PageFilterBooleanUseNil,
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
