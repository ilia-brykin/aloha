export default function JsAPI() {
  const codeJs = `import {
  AButton,
  APopover,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    APopover,
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
