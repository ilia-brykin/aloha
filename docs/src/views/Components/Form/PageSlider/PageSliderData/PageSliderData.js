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
  name: "PageSliderData",
  components: {
    ASlider,
    AlohaExample,
  },
  setup() {
    const data = [
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 5 },
      { id: 7 },
      { id: 4 },
      { id: 6 },
      { id: 10 },
      { id: 11 },
      { id: 15 },
      { id: 19 },
      { id: 23 },
      { id: 30 },
      { id: 40 },
      { id: 35 },
      { id: 11 },
    ];
    const model1 = ref(undefined);
    const model2 = ref(11);
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
      data,
      model1,
      model2,
      model3,
    };
  },
};
