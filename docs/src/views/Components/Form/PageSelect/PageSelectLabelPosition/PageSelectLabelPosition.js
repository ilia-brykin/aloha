import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASelect,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectLabelPosition",
  components: {
    AlohaExample,
    ASelect,
  },
  setup() {
    const model = ref("1");
    const labelPositions = ["float", "inset", "top"];
    const data = [
      {
        id: "1",
        label: "Aloha",
      },
      {
        id: "2",
        label: "Hola",
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
      labelPositions,
      model,
    };
  },
};
