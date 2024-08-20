import {
  ref,
} from "vue";

import AInput from "../../../../../../src/ui/AInput/AInput";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputChange",
  components: {
    AInput,
    AlohaExample,
  },
  setup() {
    const model = ref("Aloha");

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
