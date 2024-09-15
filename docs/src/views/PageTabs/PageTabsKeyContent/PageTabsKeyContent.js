import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ATabs from "../../../../../src/ATabs/ATabs";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTabsKeyContent",
  components: {
    AlohaExample,
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "Tab 1",
        aloha: "<strong>Content 1</strong>",
      },
      {
        label: "Tab 2",
        aloha: "<strong>Content 2</strong>",
      },
      {
        label: "Tab 3",
        aloha: "<strong>Content 3</strong>",
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
