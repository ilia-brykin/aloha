import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASwitch,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSwitchDefault",
  components: {
    AlohaExample,
    ASwitch,
  },
  setup() {
    const model = ref(undefined);

    const changeModel = ({ init }) => {
      console.log("changeModel init", init);
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
