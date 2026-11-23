export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AButton,
  ADrawer,
  ATranslation,
} from "aloha-vue";

export default {
  components: {
    AButton,
    ADrawer,
    ATranslation,
  },
  setup() {
    // undefined: closed, "right" or "left": open at this edge
    const placement = ref(undefined);

    const openDrawer = value => {
      placement.value = value;
    };

    const closeDrawer = () => {
      placement.value = undefined;
    };

    return {
      closeDrawer,
      openDrawer,
      placement,
    };
  },
};`;

  return {
    codeJs,
  };
}
