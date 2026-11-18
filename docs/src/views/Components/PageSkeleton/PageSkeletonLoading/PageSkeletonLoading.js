import {
  ref,
} from "vue";

import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  ASkeleton,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSkeletonLoading",
  components: {
    AButton,
    AlohaExample,
    ASkeleton,
  },
  setup() {
    const loading = ref(true);

    const load = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };

    load();

    const {
      codeHtml,
    } = HtmlAPI();

    const {
      codeJs,
    } = JsAPI();

    return {
      codeHtml,
      codeJs,
      load,
      loading,
    };
  },
};
