import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASelectStyle,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSelectStyleDataExtended",
  components: {
    AlohaExample,
    ASelectStyle,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    const dataExtended = [
      {
        label: "_A_SELECT_STYLES_VALUE_BG_ALOHA_",
        value: "a_bg_aloha",
        group: "background_color",
        groupName: "_A_SELECT_STYLES_GROUP_BACKGROUND_COLOR_",
      },
    ];
    const model1 = ref(undefined);

    return {
      codeHtml,
      codeJs,
      dataExtended,
      model1,
    };
  },
};
