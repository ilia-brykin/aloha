import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterSearchHighlightAttributes from "./PageFilterSearchHighlightAttributes/PageFilterSearchHighlightAttributes.vue";
import PageFilterSearchHighlightCaseSensitive from "./PageFilterSearchHighlightCaseSensitive/PageFilterSearchHighlightCaseSensitive.vue";
import PageFilterSearchHighlightIsHtml from "./PageFilterSearchHighlightIsHtml/PageFilterSearchHighlightIsHtml.vue";
import PageFilterSearchHighlightSearchClass from "./PageFilterSearchHighlightSearchClass/PageFilterSearchHighlightSearchClass.vue";
import PageFilterSearchHighlightSearchModel from "./PageFilterSearchHighlightSearchModel/PageFilterSearchHighlightSearchModel.vue";
import PageFilterSearchHighlightTag from "./PageFilterSearchHighlightTag/PageFilterSearchHighlightTag.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterSearchHighlightTest from "../../../../../../src/filters/__tests__/filterSearchHighlight.test.js?raw";

export default {
  name: "PageFilterSearchHighlight",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterSearchHighlightAttributes,
    PageFilterSearchHighlightCaseSensitive,
    PageFilterSearchHighlightIsHtml,
    PageFilterSearchHighlightSearchClass,
    PageFilterSearchHighlightSearchModel,
    PageFilterSearchHighlightTag,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterSearchHighlightTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
