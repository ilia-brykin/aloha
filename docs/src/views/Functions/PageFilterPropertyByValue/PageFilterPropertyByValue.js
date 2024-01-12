import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterPropertyByValueArguments from "./PageFilterPropertyByValueArguments/PageFilterPropertyByValueArguments.vue";
import PageFilterPropertyByValueDefaultValue from "./PageFilterPropertyByValueDefaultValue/PageFilterPropertyByValueDefaultValue.vue";
import PageFilterPropertyByValueMapping from "./PageFilterPropertyByValueMapping/PageFilterPropertyByValueMapping.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterPropertyByValue",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterPropertyByValueArguments,
    PageFilterPropertyByValueDefaultValue,
    PageFilterPropertyByValueMapping,
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
