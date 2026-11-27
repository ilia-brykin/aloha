export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AShowMore,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AShowMore,
  },
  setup() {
    const isOpen = ref(false);
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.";

    return {
      isOpen,
      text,
    };
  },
};`;

  return {
    codeJs,
  };
}
