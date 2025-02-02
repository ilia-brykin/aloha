import {
  ref,
} from "vue";

import {
  AButton,
} from "aloha-vue";
import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageButtonSwitch",
  components: {
    AButton,
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
