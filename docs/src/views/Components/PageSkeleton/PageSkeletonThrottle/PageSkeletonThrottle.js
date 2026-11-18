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
  name: "PageSkeletonThrottle",
  components: {
    AButton,
    AlohaExample,
    ASkeleton,
  },
  setup() {
    const loading = ref(false);

    const load = ({ duration }) => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, duration);
    };

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
