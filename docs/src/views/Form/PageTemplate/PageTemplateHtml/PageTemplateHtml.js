import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import ATemplate from "../../../../../../src/ui/ATemplate/ATemplate";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTemplateHtml",
  components: {
    AlohaExample,
    ATemplate,
  },
  setup() {
    const html = "<ul><li>Aloha 1</li><li>Aloha 2</li></ul>";

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      html,
    };
  },
};
