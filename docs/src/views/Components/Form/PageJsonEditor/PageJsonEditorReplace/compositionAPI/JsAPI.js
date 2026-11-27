export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AJsonEditor,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AJsonEditor,
  },
  setup() {
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
      editorRef,
      model,
      replaceHost,
      result,
    };
  },
};`;

  return {
    codeJs,
  };
}
