import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ABreadcrumb,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageBreadcrumbCollapse",
  components: {
    ABreadcrumb,
    AlohaExample,
  },
  setup() {
    const BASE = import.meta.env.BASE_URL;
    const items = [
      { label: "Home", href: BASE, icon: "House" },
      { label: "Products", href: BASE },
      { label: "Electronics", href: BASE },
      { label: "Computers", href: BASE },
      { label: "Laptops", href: BASE },
      { label: "Aloha Book 14" },
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
