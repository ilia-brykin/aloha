import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ABreadcrumb,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageBreadcrumbBasic",
  components: {
    ABreadcrumb,
    AlohaExample,
  },
  setup() {
    const items = [
      { label: "Home", href: import.meta.env.BASE_URL },
      { label: "Components" },
      { label: "Breadcrumb" },
    ];
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      items,
    };
  },
};
