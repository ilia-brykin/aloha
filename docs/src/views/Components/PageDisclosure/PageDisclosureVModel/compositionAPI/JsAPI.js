export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  ADisclosure,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADisclosure,
  },
  setup() {
    const isOpen = ref(false);
    const textLess = "Lorem ipsum dolor sit amet.";
    const textMore = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.";

    return {
      isOpen,
      textLess,
      textMore,
    };
  },
};`;

  return {
    codeJs,
  };
}
