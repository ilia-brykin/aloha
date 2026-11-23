export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  ADrawer,
} from "aloha-vue";

export default {
  components: {
    ADrawer,
  },
  setup() {
    const isDrawerVisible = ref(false);

    const closeDrawer = () => {
      isDrawerVisible.value = false;
    };

    return {
      closeDrawer,
      isDrawerVisible,
    };
  },
};`;

  return {
    codeJs,
  };
}
