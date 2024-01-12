import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterDefaultForEmptyArguments from "./PageFilterDefaultForEmptyArguments/PageFilterDefaultForEmptyArguments.vue";
import PageFilterDefaultForEmptyEmptyValue from "./PageFilterDefaultForEmptyEmptyValue/PageFilterDefaultForEmptyEmptyValue.vue";
import PageFilterDefaultForEmptyExample from "./PageFilterDefaultForEmptyExample/PageFilterDefaultForEmptyExample.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterDefaultForEmpty",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterDefaultForEmptyArguments,
    PageFilterDefaultForEmptyEmptyValue,
    PageFilterDefaultForEmptyExample,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
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
