import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import PageFilterArguments from "../../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterInitialsAvatar from "./PageFilterInitialsAvatar/PageFilterInitialsAvatar.vue";
import PageFilterInitialsExample from "./PageFilterInitialsExample/PageFilterInitialsExample.vue";
import PageFilterInitialsIsUppercase from "./PageFilterInitialsIsUppercase/PageFilterInitialsIsUppercase.vue";
import PageFilterInitialsLimit from "./PageFilterInitialsLimit/PageFilterInitialsLimit.vue";
import PageFilterTest from "../../Components/PageFilterTest/PageFilterTest.vue";
import {
  ATranslation,
} from "aloha-vue";

import ArgumentsAPI from "./compositionAPI/ArgumentsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";

import filterInitialsTest from "../../../../../../src/filters/__tests__/filterInitials.test.js?raw";

export default {
  name: "PageFilterInitials",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterInitialsAvatar,
    PageFilterInitialsExample,
    PageFilterInitialsIsUppercase,
    PageFilterInitialsLimit,
    PageFilterTest,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      argumentsText,
    } = ArgumentsAPI();

    const test = filterInitialsTest;

    return {
      argumentsText,
      pageTitle,
      test,
    };
  },
};
