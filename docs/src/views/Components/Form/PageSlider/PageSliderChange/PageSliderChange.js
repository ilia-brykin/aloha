import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASlider,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSliderChange",
  components: {
    ASlider,
    AlohaExample,
  },
  setup() {
    const model = ref(30);

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
