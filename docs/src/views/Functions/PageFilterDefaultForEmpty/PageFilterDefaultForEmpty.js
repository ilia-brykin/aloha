import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterDefaultForEmptyArguments from "./PageFilterDefaultForEmptyArguments/PageFilterDefaultForEmptyArguments.vue";
import PageFilterDefaultForEmptyEmptyValue from "./PageFilterDefaultForEmptyEmptyValue/PageFilterDefaultForEmptyEmptyValue.vue";
import PageFilterDefaultForEmptyExample from "./PageFilterDefaultForEmptyExample/PageFilterDefaultForEmptyExample.vue";
import PageFilterDefaultForEmptyImportCompositionApi from "./PageFilterDefaultForEmptyImportCompositionApi/PageFilterDefaultForEmptyImportCompositionApi.vue";
import PageFilterDefaultForEmptyImportFunction from "./PageFilterDefaultForEmptyImportFunction/PageFilterDefaultForEmptyImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterDefaultForEmpty",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterDefaultForEmptyArguments,
    PageFilterDefaultForEmptyEmptyValue,
    PageFilterDefaultForEmptyExample,
    PageFilterDefaultForEmptyImportCompositionApi,
    PageFilterDefaultForEmptyImportFunction,
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
