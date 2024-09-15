import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ATabs from "../../../../../src/ATabs/ATabs";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTabsKeyLabel",
  components: {
    AlohaExample,
    ATabs,
  },
  setup() {
    const data = [
      {
        name: "Tab 1",
        content: "Content 1",
      },
      {
        name: "Tab 2",
        content: "Content 2",
      },
      {
        name: "Tab 3",
        content: "Content 3",
      },
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
      data,
    };
  },
};
