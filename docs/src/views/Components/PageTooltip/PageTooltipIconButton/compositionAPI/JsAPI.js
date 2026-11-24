export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ATooltip,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
    ATranslation,
  },
};`;

  return {
    codeJs,
  };
}
