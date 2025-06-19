import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AElement,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageElementSwitch",
  components: {
    AElement,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const modelSwitch = ref(false);

    const toggleModelSwitch = () => {
      modelSwitch.value = !modelSwitch.value;
    };

    return {
      codeHtml,
      codeJs,
      modelSwitch,
      toggleModelSwitch,
    };
  },
};
