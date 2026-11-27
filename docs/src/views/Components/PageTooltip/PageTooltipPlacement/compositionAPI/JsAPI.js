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
    const placements = ["top", "right", "bottom", "left", "top-start", "bottom-end"];

    return {
      placements,
    };
  },
};`;

  return {
    codeJs,
  };
}
