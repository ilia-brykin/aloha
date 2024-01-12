import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterPropertyByValueArguments from "./PageFilterPropertyByValueArguments/PageFilterPropertyByValueArguments.vue";
import PageFilterPropertyByValueDefaultValue from "./PageFilterPropertyByValueDefaultValue/PageFilterPropertyByValueDefaultValue.vue";
import PageFilterPropertyByValueImportCompositionApi from "./PageFilterPropertyByValueImportCompositionApi/PageFilterPropertyByValueImportCompositionApi.vue";
import PageFilterPropertyByValueMapping from "./PageFilterPropertyByValueMapping/PageFilterPropertyByValueMapping.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterPropertyByValue",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterPropertyByValueArguments,
    PageFilterPropertyByValueDefaultValue,
    PageFilterPropertyByValueImportCompositionApi,
    PageFilterPropertyByValueMapping,
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
