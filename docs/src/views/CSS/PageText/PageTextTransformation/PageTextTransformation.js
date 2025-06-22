import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";

export default {
  name: "PageTextTransformation",
  components: {
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    return {
      codeHtml,
    };
  },
};
