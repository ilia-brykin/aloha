import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import AlohaTableTranslate from "../../../global/components/AlohaTableTranslate/AlohaTableTranslate.vue";
import PageBreadcrumbBasic from "./PageBreadcrumbBasic/PageBreadcrumbBasic.vue";
import PageBreadcrumbCollapse from "./PageBreadcrumbCollapse/PageBreadcrumbCollapse.vue";
import PageBreadcrumbIcons from "./PageBreadcrumbIcons/PageBreadcrumbIcons.vue";
import PageBreadcrumbRouter from "./PageBreadcrumbRouter/PageBreadcrumbRouter.vue";
import {
  ATranslation,
} from "aloha-vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";
import TranslateAPI from "./compositionAPI/TranslateAPI";

export default {
  name: "PageBreadcrumb",
  components: {
    AlohaPage,
    AlohaTableProps,
    AlohaTableTranslate,
    ATranslation,
    PageBreadcrumbBasic,
    PageBreadcrumbCollapse,
    PageBreadcrumbIcons,
    PageBreadcrumbRouter,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();
    const {
      dataProps,
      dataPropsItem,
    } = PropsAPI();
    const {
      dataTranslate,
    } = TranslateAPI();

    return {
      dataProps,
      dataPropsItem,
      dataTranslate,
      pageTitle,
    };
  },
};
