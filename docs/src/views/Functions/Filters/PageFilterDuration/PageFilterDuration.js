import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterDurationExample from "./PageFilterDurationExample/PageFilterDurationExample.vue";
import PageFilterDurationFormat from "./PageFilterDurationFormat/PageFilterDurationFormat.vue";
import PageFilterDurationMaxUnits from "./PageFilterDurationMaxUnits/PageFilterDurationMaxUnits.vue";
import PageFilterDurationShowDays from "./PageFilterDurationShowDays/PageFilterDurationShowDays.vue";
import PageFilterDurationSourceUnits from "./PageFilterDurationSourceUnits/PageFilterDurationSourceUnits.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

import filterDurationTest from "../../../../../../src/filters/__tests__/filterDuration.test.js?raw";

export default {
  name: "PageFilterDuration",
  components: {
    AlohaPage,
    AlohaTableTranslate,
    ATranslation,
    PageFilterArguments,
    PageFilterDurationExample,
    PageFilterDurationFormat,
    PageFilterDurationMaxUnits,
    PageFilterDurationShowDays,
    PageFilterDurationSourceUnits,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
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

    const test = filterDurationTest;

    return {
      argumentsText,
      dataTranslate,
      pageTitle,
      test,
    };
  },
};
