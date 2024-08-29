import {
  ref,
} from "vue";

import AFieldset from "../../../../../../src/ui/AFieldset/AFieldset";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageFieldsetChange",
  components: {
    AFieldset,
    AlohaExample,
  },
  setup() {
    const children = [
      {
        type: "text",
        label: "Text",
        id: "aloha.text1",
      },
      {
        type: "oneCheckbox",
        label: "Checkbox",
        id: "aloha.checkbox1",
      },
    ];
    const model = ref(undefined);

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
      children,
      codeHtml,
      codeJs,
      model,
    };
  },
};
