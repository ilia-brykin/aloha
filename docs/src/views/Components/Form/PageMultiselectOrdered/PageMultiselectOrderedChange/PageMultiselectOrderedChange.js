import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AMultiselectOrdered,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageMultiselectOrderedChange",
  components: {
    AlohaExample,
    AMultiselectOrdered,
  },
  setup() {
    const data = [
      {
        value: "aloha_1",
        label: "Aloha 1",
      },
      {
        value: "aloha_2",
        label: "Aloha 2",
      },
      {
        value: "aloha_3",
        label: "Aloha 3",
      },
      {
        value: "aloha_4",
        label: "Aloha 4",
      },
    ];
    const model = ref(["aloha_4", "aloha_2"]);

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
      data,
      model,
    };
  },
};
