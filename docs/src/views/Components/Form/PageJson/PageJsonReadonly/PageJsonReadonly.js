import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AJson,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonReadonly",
  components: {
    AJson,
    AlohaExample,
  },
  setup() {
    const model1 = ref({
      aloha: 123,
      hola: [1, 2, 3],
      foo: {
        bar: "111",
      },
    });
    const model2 = ref({});
    const model3 = ref(undefined);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      model1,
      model2,
      model3,
    };
  },
};
