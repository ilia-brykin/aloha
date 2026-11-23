import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ADrawer,
  ATranslation,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageDrawerBasic",
  components: {
    AButton,
    ADrawer,
    AlohaExample,
    ATranslation,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    // undefined: closed, "right" or "left": open at this edge
    const placement = ref(undefined);

    const openDrawer = value => {
      placement.value = value;
    };

    const closeDrawer = () => {
      placement.value = undefined;
    };

    return {
      closeDrawer,
      codeHtml,
      codeJs,
      openDrawer,
      placement,
    };
  },
};
