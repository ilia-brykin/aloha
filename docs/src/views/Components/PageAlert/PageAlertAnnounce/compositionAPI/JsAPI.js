export default function JsAPI() {
  const codeJs = `import {
  ref,
} from "vue";

import {
  AAlert,
  AButton,
} from "aloha-vue";

export default {
  components: {
    AAlert,
    AButton,
  },
  setup() {
    const isAlertVisible = ref(false);

    const toggleAlerts = () => {
      isAlertVisible.value = !isAlertVisible.value;
    };

    return {
      isAlertVisible,
      toggleAlerts,
    };
  },
};`;

  return {
    codeJs,
  };
}
