import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterPropertyByValueDefaultValue from "./PageFilterPropertyByValueDefaultValue/PageFilterPropertyByValueDefaultValue.vue";
import PageFilterPropertyByValueMapping from "./PageFilterPropertyByValueMapping/PageFilterPropertyByValueMapping.vue";
import PageFilterTest from "../Components/PageFilterTest/PageFilterTest.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterPropertyByValueTest from "../../../../../src/filters/__tests__/filterPropertyByValue.test.js?raw";

export default {
  name: "PageFilterPropertyByValue",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterPropertyByValueDefaultValue,
    PageFilterPropertyByValueMapping,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterPropertyByValueTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
