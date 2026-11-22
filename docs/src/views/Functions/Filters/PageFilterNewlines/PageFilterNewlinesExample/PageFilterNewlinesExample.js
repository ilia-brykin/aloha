import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ATranslation,
  filterNewlines,
} from "aloha-vue";

import JsAPI, {
  TEXT_EXAMPLE,
} from "./compositionAPI/JsAPI";

export default {
  name: "PageFilterNewlinesExample",
  components: {
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      codeJs,
    } = JsAPI();

    const text = TEXT_EXAMPLE;
    // escaped by the filter, so v-html is safe here
    const html = filterNewlines(TEXT_EXAMPLE);

    return {
      codeJs,
      html,
      text,
    };
  },
};
