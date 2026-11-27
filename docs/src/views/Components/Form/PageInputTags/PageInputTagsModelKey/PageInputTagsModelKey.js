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
  name: "PageInputTagsModelKey",
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

    // the model has the ids, the tags show the labels
    const model = ref(["de", "at"]);
    const countries = [
      { id: "at", label: "Österreich" },
      { id: "ch", label: "Schweiz" },
      { id: "de", label: "Deutschland" },
      { id: "fr", label: "Frankreich" },
      { id: "it", label: "Italien" },
    ];

    return {
      codeHtml,
      codeJs,
      countries,
      model,
    };
  },
};
