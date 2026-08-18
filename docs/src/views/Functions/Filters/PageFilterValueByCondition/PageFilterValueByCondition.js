import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import PageFilterValueByConditionFunction from "./PageFilterValueByConditionFunction/PageFilterValueByConditionFunction.vue";
import PageFilterValueByConditionMixed from "./PageFilterValueByConditionMixed/PageFilterValueByConditionMixed.vue";
import PageFilterValueByConditionStringExpression from "./PageFilterValueByConditionStringExpression/PageFilterValueByConditionStringExpression.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterValueByConditionTest from "../../../../../../src/filters/__tests__/filterValueByCondition.test.js?raw";

export default {
  name: "PageFilterValueByCondition",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterTest,
    PageFilterValueByConditionFunction,
    PageFilterValueByConditionMixed,
    PageFilterValueByConditionStringExpression,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterValueByConditionTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
