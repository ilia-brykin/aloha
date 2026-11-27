import {
  ref,
} from "vue";

import AlohaExample from "../../../../../global/components/AlohaExample/AlohaExample.vue";
import {
  AButton,
  AJsonEditor,
} from "aloha-vue";

import HtmlAPI from "./compositionAPI/HtmlAPI";
import JsAPI from "./compositionAPI/JsAPI";

export default {
  name: "PageJsonEditorReplace",
  components: {
    AButton,
    AJsonEditor,
    AlohaExample,
  },
  setup() {
    const {
      codeHtml,
    } = HtmlAPI();
    const {
      codeJs,
    } = JsAPI();

    const model = ref({
      api: "https://old.example.com/api",
      login: "https://old.example.com/login",
      cdn: {
        images: "https://old.example.com/images",
        fonts: "https://fonts.example.com",
      },
      old_timeout: 30,
    });
    const editorRef = ref(undefined);
    const result = ref(undefined);
    // the same as Ctrl+H: search and "Replace all", one step of the history
    const replaceHost = async() => {
      editorRef.value.search("old.example.com");
      result.value = await editorRef.value.replace("new.example.com");
    };

    return {
      codeHtml,
      codeJs,
      editorRef,
      model,
      replaceHost,
      result,
    };
  },
};
