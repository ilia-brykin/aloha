import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AElement,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageElementComplex",
  components: {
    AElement,
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
