import ATranslation from "../../../../../../src/ATranslation/ATranslation";
import AlohaPage from "../../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageRouterLinkConfigBasic from "./PageRouterLinkConfigBasic/PageRouterLinkConfigBasic.vue";
import PageRouterLinkConfigLabelDescription from "./PageRouterLinkConfigLabelDescription/PageRouterLinkConfigLabelDescription.vue";
import PageRouterLinkConfigReadonly from "./PageRouterLinkConfigReadonly/PageRouterLinkConfigReadonly.vue";

import EventsAPI from "./compositionAPI/EventsAPI";
import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageRouterLinkConfig",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageRouterLinkConfigBasic,
    PageRouterLinkConfigLabelDescription,
    PageRouterLinkConfigReadonly,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    const {
      dataTranslate,
    } = TranslateAPI();

    const {
      dataEvents,
    } = EventsAPI();

    return {
      dataEvents,
      dataProps,
      dataTranslate,
      pageTitle,
    };
  },
};
