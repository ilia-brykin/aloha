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
  name: "PageInputTagsSuggestions",
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

    const model = ref([]);
    // groups (key-group); "add all" under the list and Ctrl+Enter
    const skills = [
      { id: "vue", label: "Vue", area: "Frontend" },
      { id: "react", label: "React", area: "Frontend" },
      { id: "svelte", label: "Svelte", area: "Frontend" },
      { id: "node", label: "Node.js", area: "Backend" },
      { id: "python", label: "Python", area: "Backend" },
      { id: "go", label: "Go", area: "Backend" },
    ];

    return {
      codeHtml,
      codeJs,
      model,
      skills,
    };
  },
};
