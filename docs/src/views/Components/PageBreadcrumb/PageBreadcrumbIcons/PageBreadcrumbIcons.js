import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ABreadcrumb,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageBreadcrumbIcons",
  components: {
    ABreadcrumb,
    AlohaExample,
  },
  setup() {
    const items = [
      { label: "_A_BREADCRUMB_EXAMPLE_HOME_", href: import.meta.env.BASE_URL, icon: "House" },
      { label: "_A_BREADCRUMB_EXAMPLE_ORDERS_", href: import.meta.env.BASE_URL },
      { label: "_A_BREADCRUMB_EXAMPLE_ORDER_" },
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
