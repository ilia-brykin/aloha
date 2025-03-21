import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterDateExample from "./PageFilterDateExample/PageFilterDateExample.vue";
import PageFilterDateFormat from "./PageFilterDateFormat/PageFilterDateFormat.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterDateTest from "../../../../../../src/filters/__tests__/filterDate.test.js?raw";

export default {
  name: "PageFilterDate",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterDateExample,
    PageFilterDateFormat,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterDateTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
