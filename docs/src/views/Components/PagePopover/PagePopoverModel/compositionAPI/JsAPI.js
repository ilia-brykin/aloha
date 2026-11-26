export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
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
  setup() {
    const isOpen = ref(false);
    // open / close get { trigger }: click, hover, close, escape, outside, focusout, api or model
    const lastEvent = ref(undefined);

    return {
      isOpen,
      lastEvent,
    };
  },
};`;

  return {
    codeJs,
  };
}
