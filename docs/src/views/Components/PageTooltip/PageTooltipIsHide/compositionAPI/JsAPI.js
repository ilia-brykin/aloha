export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AOneCheckbox,
  ATooltip,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AOneCheckbox,
    ATooltip,
    ATranslation,
  },
  setup() {
    const isHide = ref(false);

    return {
      isHide,
    };
  },
};`;

  return {
    codeJs,
  };
}
