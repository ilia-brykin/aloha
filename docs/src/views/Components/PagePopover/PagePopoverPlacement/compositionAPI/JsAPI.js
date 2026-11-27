export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  APlacements,
  APopover,
  ASelect,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    APopover,
    ASelect,
    ATranslation,
  },
  setup() {
    const placement = ref("top");
    // "auto…": the side with the most space
    const placements = APlacements.map(id => ({ id }));

    return {
      placement,
      placements,
    };
  },
};`;

  return {
    codeJs,
  };
}
