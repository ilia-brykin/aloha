import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterDefaultForEmptyEmptyValue from "./PageFilterDefaultForEmptyEmptyValue/PageFilterDefaultForEmptyEmptyValue.vue";
import PageFilterDefaultForEmptyExample from "./PageFilterDefaultForEmptyExample/PageFilterDefaultForEmptyExample.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterDefaultForEmptyTest from "../../../../../../src/filters/__tests__/filterDefaultForEmpty.test.js?raw";

export default {
  name: "PageFilterDefaultForEmpty",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterDefaultForEmptyEmptyValue,
    PageFilterDefaultForEmptyExample,
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

    const test = filterDefaultForEmptyTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
