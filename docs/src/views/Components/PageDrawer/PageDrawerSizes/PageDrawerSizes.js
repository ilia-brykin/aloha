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
  name: "PageDrawerSizes",
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

    const sizes = ["small", "default", "large", "xl"];
    const size = ref(undefined);

    const openDrawer = value => {
      size.value = value;
    };

    const closeDrawer = () => {
      size.value = undefined;
    };

    return {
      closeDrawer,
      codeHtml,
      codeJs,
      openDrawer,
      size,
      sizes,
    };
  },
};
