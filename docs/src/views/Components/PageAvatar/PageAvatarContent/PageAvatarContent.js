import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AAvatar,
  AIcon,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAvatarContent",
  components: {
    AAvatar,
    AIcon,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
    };
  },
};
