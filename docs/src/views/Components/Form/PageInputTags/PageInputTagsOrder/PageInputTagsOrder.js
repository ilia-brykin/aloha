import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AInputTags,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageInputTagsOrder",
  components: {
    AInputTags,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref(["Plan", "Build", "Test", "Release"]);
    // the first step is marked
    const tagClass = ({ index }) => (index === 0 ? "a_text_bold" : undefined);

    return {
      codeHtml,
      codeJs,
      model,
      tagClass,
    };
  },
};
