import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";
import ATabs from "../../../../../src/ATabs/ATabs";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTabsIsVertical",
  components: {
    AlohaExample,
    ATabs,
  },
  setup() {
    const data = [
      {
        label: "Tab 1",
        content: "Content 1",
      },
      {
        label: "Tab 2",
        content: "Content 2",
      },
      {
        label: "Tab 3",
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
