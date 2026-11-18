import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterNumberCompactDigits from "./PageFilterNumberCompactDigits/PageFilterNumberCompactDigits.vue";
import PageFilterNumberCompactExample from "./PageFilterNumberCompactExample/PageFilterNumberCompactExample.vue";
import PageFilterNumberCompactIsTrailingZeros from "./PageFilterNumberCompactIsTrailingZeros/PageFilterNumberCompactIsTrailingZeros.vue";
import PageFilterNumberCompactMinValue from "./PageFilterNumberCompactMinValue/PageFilterNumberCompactMinValue.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

import filterNumberCompactTest from "../../../../../../src/filters/__tests__/filterNumberCompact.test.js?raw";

export default {
  name: "PageFilterNumberCompact",
  components: {
    AlohaPage,
    AlohaTableTranslate,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterNumberCompactDigits,
    PageFilterNumberCompactExample,
    PageFilterNumberCompactIsTrailingZeros,
    PageFilterNumberCompactMinValue,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterNumberCompactTest;

    return {
      argumentsText,
      dataTranslate,
      pageTitle,
      test,
    };
  },
};
