export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  AInput,
  APopover,
} from "aloha-vue";

export default {
  components: {
    AButton,
    AInput,
    APopover,
  },
  setup() {
    const name = ref("Report 2026");
    const saved = ref("");
    // close() of the slot: the popover closes and the focus goes back to the button
    const save = close => {
      saved.value = name.value;
      close();
    };

    return {
      name,
      save,
      saved,
    };
  },
};`;

  return {
    codeJs,
  };
}
