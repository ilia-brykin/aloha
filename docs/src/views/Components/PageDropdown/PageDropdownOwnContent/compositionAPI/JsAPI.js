export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ADropdown,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADropdown,
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
