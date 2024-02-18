import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterJsonExample from "./PageFilterJsonExample/PageFilterJsonExample.vue";
import PageFilterJsonReplacer from "./PageFilterJsonReplacer/PageFilterJsonReplacer.vue";
import PageFilterJsonSpace from "./PageFilterJsonSpace/PageFilterJsonSpace.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterJsonTest from "../../../../../../src/filters/__tests__/filterJson.test.js?raw";

export default {
  name: "PageFilterJson",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterJsonExample,
    PageFilterJsonReplacer,
    PageFilterJsonSpace,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterJsonTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
