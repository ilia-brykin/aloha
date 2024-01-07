import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterLinkArguments from "./PageFilterLinkArguments/PageFilterLinkArguments.vue";
import PageFilterLinkExample from "./PageFilterLinkExample/PageFilterLinkExample.vue";
import PageFilterLinkImportCompositionApi from "./PageFilterLinkImportCompositionApi/PageFilterLinkImportCompositionApi.vue";
import PageFilterLinkImportFunction from "./PageFilterLinkImportFunction/PageFilterLinkImportFunction.vue";
import PageFilterLinkLinkClass from "./PageFilterLinkLinkClass/PageFilterLinkLinkClass.vue";
import PageFilterLinkLinkText from "./PageFilterLinkLinkText/PageFilterLinkLinkText.vue";
import PageFilterLinkProtocol from "./PageFilterLinkProtocol/PageFilterLinkProtocol.vue";
import PageFilterLinkTarget from "./PageFilterLinkTarget/PageFilterLinkTarget.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";

export default {
  name: "PageFilterLink",
  components: {
    AlohaPage,
    ATranslation,
    PageFilterLinkArguments,
    PageFilterLinkExample,
    PageFilterLinkImportCompositionApi,
    PageFilterLinkImportFunction,
    PageFilterLinkLinkClass,
    PageFilterLinkLinkText,
    PageFilterLinkProtocol,
    PageFilterLinkTarget,
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