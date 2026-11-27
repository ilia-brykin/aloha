export default function JsAPI() {
  const codeJs = `import {
  AButton,
  ATooltip,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ATooltip,
  },
  setup() {
    const times = [0, 300, 800];

    return {
      times,
    };
  },
};`;

  return {
    codeJs,
  };
}
