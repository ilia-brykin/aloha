import {
  ref,
} from "vue";

import AButton from "../../../../../src/AButton/AButton";
import ALink from "../../../../../src/ALink/ALink";
import AlohaExample from "../../../global/components/AlohaExample/AlohaExample.vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageLinkLoading",
  components: {
    AButton,
    ALink,
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
