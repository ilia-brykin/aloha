import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AAvatar,
  AAvatarGroup,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageAvatarGroup",
  components: {
    AAvatar,
    AAvatarGroup,
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
