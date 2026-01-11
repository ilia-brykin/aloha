import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import AlohaHighlightjs from "../../../../global/components/AlohaHighlightjs/AlohaHighlightjs";
import {
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import TableAPI from "./compositionAPI/TableAPI";

export default {
  name: "PageSpacingTable",
  components: {
    AlohaExample,
    AlohaHighlightjs,
    ATranslation,
  },
  setup() {
    const {
      colsFooter,
      rows,
    } = TableAPI();

    const {
      codeHtml,
    } = HtmlAPI();

    return {
      codeHtml,
      colsFooter,
      rows,
    };
  },
};
