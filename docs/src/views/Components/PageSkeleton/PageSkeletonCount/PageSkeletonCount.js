import AlohaExample from "../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  ASkeleton,
  ASkeletonItem,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageSkeletonCount",
  components: {
    AlohaExample,
    ASkeleton,
    ASkeletonItem,
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
