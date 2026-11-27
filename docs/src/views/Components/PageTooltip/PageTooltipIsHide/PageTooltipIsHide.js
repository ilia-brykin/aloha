import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AOneCheckbox,
  ATooltip,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageTooltipIsHide",
  components: {
    AlohaExample,
    AButton,
    AOneCheckbox,
    ATooltip,
    ATranslation,
  },
  setup() {
    const isHide = ref(false);

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      isHide,
    };
  },
};
