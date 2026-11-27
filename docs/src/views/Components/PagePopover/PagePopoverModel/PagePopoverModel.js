import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  APopover,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PagePopoverModel",
  components: {
    AButton,
    APopover,
    ATranslation,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const isOpen = ref(false);
    // open / close get { trigger }: click, hover, close, escape, outside, focusout, api or model
    const lastEvent = ref(undefined);

    return {
      codeHtml,
      codeJs,
      isOpen,
      lastEvent,
    };
  },
};
