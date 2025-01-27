import {
  ref,
} from "vue";

import {
  AGroup,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageGroupBasic",
  components: {
    AGroup,
    AlohaExample,
  },
  setup() {
    const childrenGroup = [
      {
        id: "text1",
        type: "text",
        label: "Input",
        labelClass: "a_column a_column_3 a_column_12_touch a_text_right",
        classColumn: "a_column a_column_5 a_column_12_touch",
      },
    ];
    const model = ref({
      text1: "Aloha",
    });

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      childrenGroup,
      codeHtml,
      codeJs,
      model,
    };
  },
};
