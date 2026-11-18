import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";

export default {
  name: "PageTextFont",
  components: {
    AlohaExample,
    ATranslation,
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
