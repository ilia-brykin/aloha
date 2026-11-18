import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputFile,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputFileLinks",
  components: {
    AlohaExample,
    AInputFile,
  },
  setup() {
    const model = ref([
      {
        name: "Contract.pdf",
        size: 245760,
        url: "./assets/Tennis_ball_purple_background.png",
      },
      {
        name: "Invoice 2026-11.pdf",
        size: 81920,
        url: "./assets/Tennis_ball_purple_background.png",
      },
    ]);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model,
    };
  },
};
