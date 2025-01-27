import {
  ref,
} from "vue";

import {
  AButton,
} from "aloha-vue";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageButtonLoading",
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

    const loading = ref(true);

    const toggleLoading = () => {
      loading.value = !loading.value;
    };

    return {
      codeHtml,
      codeJs,
      loading,
      toggleLoading,
    };
  },
};
