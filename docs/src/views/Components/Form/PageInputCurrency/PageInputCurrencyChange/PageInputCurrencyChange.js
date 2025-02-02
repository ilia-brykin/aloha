import {
  ref,
} from "vue";

import {
  AInputCurrency,
} from "aloha-vue";


import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputCurrencyChange",
  components: {
    AInputCurrency,
    AlohaExample,
  },
  setup() {
    const model = ref(10.02);

    const changeModel = ({ model: _model, id, props }) => {
      model.value = _model;
      console.log(id, props);
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      changeModel,
      codeHtml,
      codeJs,
      model,
    };
  },
};
