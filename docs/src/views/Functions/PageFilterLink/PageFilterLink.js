import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import ATranslation from "../../../../../src/ATranslation/ATranslation";
import PageFilterArguments from "../Components/PageFilterArguments/PageFilterArguments.vue";
import PageFilterImportCompositionApi from "../Components/PageFilterImportCompositionApi/PageFilterImportCompositionApi.vue";
import PageFilterImportFunction from "../Components/PageFilterImportFunction/PageFilterImportFunction.vue";
import PageFilterLinkExample from "./PageFilterLinkExample/PageFilterLinkExample.vue";
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
    PageFilterArguments,
    PageFilterImportCompositionApi,
    PageFilterImportFunction,
    PageFilterLinkExample,
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
