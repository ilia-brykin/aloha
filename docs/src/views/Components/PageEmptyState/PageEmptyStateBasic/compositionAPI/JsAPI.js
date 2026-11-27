export default function JsAPI() {
  const codeJs = `import {
  AButton,
  AEmptyState,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AEmptyState,
  },
};`;

  return {
    codeJs,
  };
}
