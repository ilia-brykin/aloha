import {
  ATranslation,
} from "aloha-vue";
import AlohaPage from "../../../global/components/AlohaPage/AlohaPage.vue";
import AlohaTableProps from "../../../global/components/AlohaTableProps/AlohaTableProps.vue";
import PageTemplateFieldset from "./PageTemplateFieldset/PageTemplateFieldset.vue";
import PageTemplateHtml from "./PageTemplateHtml/PageTemplateHtml.vue";
import PageTemplateSlot from "./PageTemplateSlot/PageTemplateSlot.vue";

import PageTitleAPI from "./compositionAPI/PageTitleAPI";
import PropsAPI from "./compositionAPI/PropsAPI";

export default {
  name: "PageTemplate",
  components: {
    AlohaPage,
    AlohaTableProps,
    ATranslation,
    PageTemplateFieldset,
    PageTemplateHtml,
    PageTemplateSlot,
  },
  setup() {
    const {
      pageTitle,
    } = PageTitleAPI();

    const {
      dataProps,
    } = PropsAPI();

    return {
      dataProps,
      pageTitle,
    };
  },
};
