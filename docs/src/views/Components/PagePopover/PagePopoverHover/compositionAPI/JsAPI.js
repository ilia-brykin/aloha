export default function JsAPI() {
  const codeJs = `import {
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
