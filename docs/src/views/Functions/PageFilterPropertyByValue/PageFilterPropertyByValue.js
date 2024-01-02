import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterPropertyByValueArguments from "./PageFilterPropertyByValueArguments/PageFilterPropertyByValueArguments.vue";
import PageFilterPropertyByValueDefaultValue from "./PageFilterPropertyByValueDefaultValue/PageFilterPropertyByValueDefaultValue.vue";
import PageFilterPropertyByValueImportCompositionApi from "./PageFilterPropertyByValueImportCompositionApi/PageFilterPropertyByValueImportCompositionApi.vue";
import PageFilterPropertyByValueImportFunction from "./PageFilterPropertyByValueImportFunction/PageFilterPropertyByValueImportFunction.vue";
import PageFilterPropertyByValueMapping from "./PageFilterPropertyByValueMapping/PageFilterPropertyByValueMapping.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterPropertyByValue",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterPropertyByValueArguments,
    PageFilterPropertyByValueDefaultValue,
    PageFilterPropertyByValueImportCompositionApi,
    PageFilterPropertyByValueImportFunction,
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
