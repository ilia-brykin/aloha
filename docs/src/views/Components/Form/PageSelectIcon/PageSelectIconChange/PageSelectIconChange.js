import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASelectIcon,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectIconChange",
  components: {
    AlohaExample,
    ASelectIcon,
  },
  setup() {
    const model1 = ref(undefined);
    const model2 = ref(undefined);

    const changeModel1 = ({ model: _model, id, props, item, currentModel }) => {
      model1.value = _model;
      console.log(id, props, item, currentModel);
    };
    const changeModel2 = ({ model: _model, id, props, item, currentModel }) => {
      model2.value = _model;
      console.log(id, props, item, currentModel);
    };

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      changeModel1,
      changeModel2,
      codeHtml,
      codeJs,
      model1,
      model2,
    };
  },
};
